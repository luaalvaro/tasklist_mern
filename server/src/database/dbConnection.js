import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env.local' })

const sequelize = new Sequelize(process.env.DATABASE, process.env.ADMIN, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'mysql'
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;