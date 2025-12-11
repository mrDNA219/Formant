import { connectDB } from '../database/db.js';
const port = 3000;
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
const server = express();


server.use(cors);
server.use(morgan);
server.use(express.json());

server.listen(port, () =>{
    connectDB();
    console.log("MongoDB connection successful");
    console.log(`Server is listening on port: ${port}`);
})
