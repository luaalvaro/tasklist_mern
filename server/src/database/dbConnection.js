import { Sequelize } from 'sequelize';
import secrets from '../../config.local.js';

const sequelize = new Sequelize(secrets.DATABASE, secrets.ADMIN, secrets.PASS, {
    host: secrets.HOST,
    dialect: 'mysql'
});

// const sequelize = new Sequelize('db_tasks_mern', 'admin_tasks', 'l@lC55', {
//     host: 'db-tasks-mern.mysql.uhserver.com',
//     dialect: 'mysql'
// });

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;