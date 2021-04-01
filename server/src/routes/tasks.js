import express from 'express';
import { getAllTasks, createNewTask, updateTask, deleteTask } from '../controller/Tasks.js'

const router = express.Router();


    // Get all tasks from database
    router.get('/', getAllTasks);

    // Create a new task
    router.post('/', createNewTask)

    // Update task
    router.put('/update/:id', updateTask)

    // Delete task
    router.delete('/delete/:id', deleteTask)

export default router;