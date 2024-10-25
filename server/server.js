import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})