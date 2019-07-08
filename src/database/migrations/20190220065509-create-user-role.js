module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserRoles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'CASCADE',
      },
    },
    roleId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
        onDelete: 'CASCADE',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserRoles'),
};
