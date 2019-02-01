import users from '../../models/user';

class UserController {
  static userModel(data, action) {
    switch (action) {
      case 'create': {
        console.log(toString(123));

        data.userId = (users.length + 1).toString();
        users.push(data);
        return data;
      }
      case 'getUser': {
        const dbUser = users.filter(item => item.userId === data);
        return dbUser;
      }
      default: {
        return users;
      }
    }
  }

  static getUser(req, res) {
    const { userId } = req.params;
    const response = UserController.userModel(userId, 'getUser');
    if (!response.length) return res.status(400).json({ success: false, message: 'User not found' });
    return res.status(200).json({ success: true, data: response });
  }

  static getUsers(req, res) {
    const response = users;
    if (!response.length) return res.status(400).json({ success: false, message: 'No users yet' });
    return res.status(200).json({ success: true, data: response });
  }

  static createUser(req, res) {
    const { body } = req;
    const response = UserController.userModel(body, 'create');
    if (response) return res.status(201).json({ success: true, data: response });
    return res.status(400).json({ success: false, message: 'Could not create user' });
  }

  static updateUser(req, res) {
    return res.send('update users');
  }

  static deleteUser(req, res) {
    return res.send('delete users');
  }
}

module.exports = UserController;
