import express, { Application,Request,Response,NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.json());
require('./routes')(app)

app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))