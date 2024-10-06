import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.apc7q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('DB ok '))
    .catch((err) => console.log ('DB error', err));


const app= express();


app.use(express.json())

app.get('/' , (req, res) =>{
    res.send('111 Hello World!');
})

app.post('/auth/register' , (req,res)=>{
   
})

app.listen(4444, (err) => {
    if (err){
        return console.log(err);
    }

    console.log ('Server ok')
});