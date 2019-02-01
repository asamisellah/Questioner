// Checks if all fields are provided, both the key and value
const userValidator = (req, res, next) => {
  const { body } = req;
  try {
    if (body) {
      for (const item in body) {
        if (body[item]) {
          return next();
        }
        throw Error(`${item} Required`);
      }
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = userValidator;
