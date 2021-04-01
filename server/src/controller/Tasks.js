import Task from '../models/Tasks.js';

    // GET ALL TASKS FROM DATABASE
    export const getAllTasks = (req, res) => {
        Task.findAll()
        .then((response) => res.status(200).json({ response }))
        .catch((error) => res.status(500).json({ message: error.message }))
    }

    // CREATE AN NEW TASK FROM DATABASE
    export const createNewTask = async (req, res) => {
        let { name, description = "" } = req.body

        Task.create({
            name,
            description
        })
        .then((response) => res.status(201).json({ message: `Task with name ${name} was created sucessfully` }))
        .catch((error) => res.status(500).json({ error: error.message }))
    }

    // UPDATE TASK FROM DATABASE
    export const updateTask = async (req, res) => {
        const { id } = req.params
        let { name, status, description, updateTask = {} } = req.body
        
        // Check if the request have the params
        if (name) updateTask.name = name
        if (status) updateTask.status = status
        if (description) updateTask.description = description

        Task.update(updateTask, { where: { id: id } })
        .then((response) => res.status(201).json({ message: `Task ${name} has been updated` }))
        .catch((error) => res.status(500).json({ error: error.message }))
    }

    // DELETE TASK FROM DATABASE
    export const deleteTask = (req, res) => {
        const { id } = req.params

        // Check if the request have the params
        if (!id) return res.status(400).json({ message: "The ID must be filled"})

        Task.destroy({ where: { id: id }})
        .then((response) => res.status(201).json({ message: `Task with id: ${id} has been deleted` }))
        .catch((error) => res.status(500).json({ error: error.message }))
    }