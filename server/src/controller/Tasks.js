import Task from '../models/Tasks.js';

    // Get all tasks from data base;
    export const getAllTasks = (req, res) => {
        Task.findAll()
        .then((response) => res.status(200).json({ response }))
        .catch((error) => res.status(500).json({ message: error.message }))
    }