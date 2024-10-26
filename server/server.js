import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(()=>console.log("Connected to MongoDB"))
.catch((error)=>console.log("MongoDB connection error: ",error));

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome");
});

app.get("/api/message",(req,res) => {
    res.json({message:"Hello, I am backend"});
});

app.get("/api/info",(req,res) => {
    res.json({message:"User name is Nik"});
});

//controller for form submit
app.post("/api/submit",async(req,res) => {
    try{
        const {name,email,age} = req.body;
        const newUser = new User({name,email,age});
        await newUser.save();
        res.status(200).json({message:"User data saved successfully",user:newUser});
    }
    catch(error){
        res.status(500).json({message:"Internal server error",error});
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})