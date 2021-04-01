import express from 'express';
import cors from 'cors';
import tasksRouter from '../server/src/routes/tasks.js';
import secrets from './config.local.js';

const app = express();
const PORT =  secrets.PORT || 3030;

app.use(express.json({ type: "application/json" }));
app.use(cors());

app.use('/tasks/', tasksRouter);

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}/`));
