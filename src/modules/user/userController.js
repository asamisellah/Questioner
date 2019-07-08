import bcrypt from 'bcrypt';
import { _ } from 'lodash';
import model from '../../database/models';
import Utils from '../../utils';
import { UserError } from '../../exceptions/index';

const { Op } = model.Sequelize;

class UserController {
  static async getUserFromDB(query) {
    const data = await model.User.findAndCountAll(query);
    return data;
  }

  static extractDBData(data) {
    const dataList = data.map(user => user.dataValues);
    return dataList;
  }

  static async getUser(req, res) {
    const { userId } = req.params;
    try {
      const query = {
        where: { id: userId },
        attributes: ['id', 'gender', 'occupation', 'name', 'email'],
      };
      const { rows, count } = await UserController.getUserFromDB(query);
      if (count > 0) {
        const user = UserController.extractDBData(rows);
        return res.status(201).json(Utils.getSuccessResponse(user));
      }
      return res.status(204).json();
    } catch (error) {
      return Utils.getFailureResponse(res);
    }
  }

  static async getUsers(req, res) {
    const {
      gender, occupation, name, email,
    } = req.query;
    let query = { attributes: ['id', 'gender', 'occupation', 'name', 'email'] };
    try {
      // Include for search by gender, occupation
      if (gender || occupation || name || email) {
        query = {
          where: {
            [Op.or]: {
              gender,
              occupation,
              name,
              email,
            },
          },
          attributes: ['id', 'gender', 'occupation', 'name', 'email'],
        };
      }
      const { count, rows } = await UserController.getUserFromDB(query);
      if (count > 0) {
        const users = UserController.extractDBData(rows);
        return res.status(200).json(Utils.getSuccessResponse(users));
      }
      return res.status(204).json();
    } catch (error) {
      return Utils.getFailureResponse(res);
    }
  }

  static async createUser(req, res) {
    const {
      body,
      body: { email, name, password },
    } = req;

    try {
      const query = { where: { [Op.or]: { email, name } } };
      const { count } = await UserController.getUserFromDB(query);
      // Make sure that the user does not already exist
      if (count < 1) {
        // Hash the password before storing it in the database
        const hash = bcrypt.hashSync(password, 10);
        body.password = hash;
        const user = await model.User.create({ ...body });
        return res
          .status(201)
          .json(Utils.getSuccessResponse(`User with id ${user.id} created successfully`));
      }
      throw new UserError('User already exists', 400);
    } catch (error) {
      if (error instanceof UserError) {
        return Utils.getFailureResponse(res, error);
      }
      console.log(error);
      return Utils.getFailureResponse(res);
    }
  }

  static async updateUser(req, res) {
    const {
      params: { userId },
      body,
    } = req;
    const { count, rows } = await UserController.getUserFromDB({
      where: { id: userId },
      attributes: ['name', 'email', 'occupation', 'gender'],
    });
    try {
      // Check if the user exists
      if (count > 0) {
        const user = UserController.extractDBData(rows);
        // Check that there are changes made
        if (!_.isEqual(user[0], body)) {
          const updatedUser = await model.User.update(body, {
            where: { id: userId },
          });
          if (updatedUser.length) {
            return res.status(200).json(Utils.getSuccessResponse('User updated successfully'));
          }
        }
        throw new UserError('No changes identified', 400);
      }
      throw new UserError('User does not exist', 404);
    } catch (error) {
      if (error instanceof UserError) {
        return Utils.getFailureResponse(res, error.message, error.status);
      }
      return Utils.getFailureResponse(res);
    }
  }

  static async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      const result = await model.User.destroy({ where: { id: userId } });
      if (result > 0) {
        return res.status(204).json();
      }
      throw new UserError("Cannot delete a user that doesn't exist", 400);
    } catch (error) {
      if (error instanceof UserError) {
        return Utils.getFailureResponse(res, error.message, error.status);
      }
      return Utils.getFailureResponse(res);
    }
  }
}

// Require endpoint to reset password

export default UserController;
