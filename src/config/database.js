import Sequelize from 'sequelize';

require('dotenv').config();

// Connecting to the database
const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;
