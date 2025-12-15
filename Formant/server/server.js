import { connectDB } from '../database/db.js';
import indexRouter from './routes/index.js';
const port = 3000;
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
const server = express();


server.use(cors());
server.use(morgan('combined'));
server.use(express.json());
server.use('/api', indexRouter);

server.listen(port, () =>{
    connectDB();
    console.log("MongoDB connection successful");
    console.log(`Server is listening on port: ${port}`);
})
