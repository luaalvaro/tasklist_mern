import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ type: "application/json" }));
app.use(cors());

app.use('/tasks/', require('./src/routes/tasks'));

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}/`));
