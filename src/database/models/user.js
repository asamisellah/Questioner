module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      occupation: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );
  User.associate = (models) => {
    User.belongsToMany(models.Role, {
      as: 'roles',
      through: models.UserRole,
      foreignKey: 'userId',
    });
  };
  return User;
};
