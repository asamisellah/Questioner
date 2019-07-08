

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    roleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  UserRole.associate = (models) => {
    // associations can be defined here
  };
  return UserRole;
};
