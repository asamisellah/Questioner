require('dotenv').config();

const baseDBConfiig = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const config = {
  development: {
    dbURL: process.env.DEV_DATABASE_URL,
    ...baseDBConfiig,
  },
  production: {
    dbURL: process.env.PROD_DATABASE_URL,
    ...baseDBConfiig,
  },
  staging: {
    dbURL: process.env.STAGING_DATABASE_URL,
    ...baseDBConfiig,
  },
  test: {
    dbURL: process.env.TEST_DATABASE_URL,
    ...baseDBConfiig,
  },
};

module.exports = config;
