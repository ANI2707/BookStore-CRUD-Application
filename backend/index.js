import express from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express();

//Middle ware for parsing request body
app.use(express.json());

//MiddleWare for handling CORS Policy
//Option 1 : Allow All Origins with Default of cors(*)
app.use(cors());

//Option 2 : Allow Custom Origins
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// );

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("Welcome to mern stack book website")
});

app.use('/books',booksRoute);





mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })


