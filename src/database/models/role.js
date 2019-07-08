

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {});
  Role.associate = (models) => {
    Role.belongsToMany(models.User, {
      as: 'users',
      through: models.UserRole,
      foreignKey: 'roleId',
    });
  };
  return Role;
};
