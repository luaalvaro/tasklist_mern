import Sequelize from 'sequelize';
import sequelize from '../database/dbConnection.js';

const Task =  sequelize.define('Task', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
});

// << IMPORTANT >>
//  Task.sync({ force: true })
// The sync func its used to create a new table, this code must be runned once

export default Task;