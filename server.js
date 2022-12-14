import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import morgan from 'morgan';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
// require('colors');

dotenv.config()

//connect mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err.message)
})
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

//routes
app.use('/api/products/', productRouter)

//create port
const PORT = process.env.PORT ||5000

//listen
app.listen(PORT, ()=> {
    console.log(`serve at running on the port: http://localhost:${PORT}`)
})