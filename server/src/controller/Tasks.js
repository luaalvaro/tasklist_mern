import Task from '../models/Tasks.js';

    // GET ALL TASKS FROM DATABASE
    export const getAllTasks = (req, res) => {
        Task.findAll()
        .then((response) => res.status(200).json({ response }))
        .catch((error) => res.status(404).json({ message: error.message }))
    }

    // CREATE AN NEW TASK FROM DATABASE
    export const createNewTask = async (req, res) => {
        let { title, description = "", color, columnId } = req.body

        Task.create({
            title,
            description,
            color,
            columnId
        })
        .then((response) => res.status(201).json({ message: `Task with title ${title} was created sucessfully` }))
        .catch((error) => res.status(404).json({ error: error.message }))
    }

    // UPDATE TASK FROM DATABASE
    export const updateTask = async (req, res) => {
        const { id } = req.params
        let { title, description, updateTask = {} } = req.body
        
        // Check if the request have the params
        if (title) updateTask.title = title
        if (description) updateTask.description = description

        Task.update(updateTask, { where: { id: id } })
        .then((response) => res.status(201).json({ message: `Task ${id} has been updated` }))
        .catch((error) => res.status(404).json({ error: error.message }))
    }

    // DELETE TASK FROM DATABASE
    export const deleteTask = (req, res) => {
        const { id } = req.params

        // Check if the request have the params
        if (!id) return res.status(400).json({ message: "The ID must be filled"})

        Task.destroy({ where: { id: id }})
        .then((response) => res.status(201).json({ message: `Task with id: ${id} has been deleted` }))
        .catch((error) => res.status(404).json({ error: error.message }))
    }