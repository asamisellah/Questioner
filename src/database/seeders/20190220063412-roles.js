

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Roles', [
    {
      id: 10001,
      role: 'Admin',
      description: 'Can perform all tasks and view analytics and invoice data',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 20001,
      role: 'User',
      description: 'Can perform car hire tasks',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Roles', null, {}),
};
