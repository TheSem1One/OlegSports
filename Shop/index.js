import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import { validationResult } from "express-validator";
import UserModel from './models/user.js';
import { use } from 'bcrypt/promises.js';

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.apc7q.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('DB ok '))
    .catch((err) => console.log ('DB error', err));


const app= express();


app.use(express.json())

app.get('/' , (req, res) =>{
    res.send('111 Hello World!');
})

app.post('/auth/login' ,async (req,res) =>{
    try{
        const user = await UserModel.findOne({ email : req.body.email })
        if(!user){
            return res.status(404).json({
                message : 'Невірний логін або пароль',
            });
        }


    const isValidPass =await bcrypt.compare(req.body.password , user._doc.passwordHash);
    if (!isValidPass){
        return res.status(404).json({
            message :'Невірний логін або пароль',
        });
    }

    const token =jwt.sign({
        _id : user._id,
    }, 
    'uzhnu2024',
    {
        expiresIn: '30d'
    });


    const {passwordHash, ...userData}= user._doc;
    res.json({
        ...userData,
        token});

    }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось авторизуватись",
        });
    }
})
app.post('/auth/register' ,registerValidation,async (req,res)=>{
   try{
        const errors  =  validationResult(req);
        if (!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }


        const password =req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password , salt);


        const doc = new UserModel({
        email : req.body.email,
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        passwordHash :hash,
        avatarUrl : req.body.avatarUrl

    });

    const user = await doc.save();
    const token =jwt.sign({
        _id : user._id,
    }, 
    'uzhnu2024',
    {
        expiresIn: '30d'
    });

    const {passwordHash, ...userData}= user._doc;
    res.json({
        ...userData,
        token});
   }
   catch(err){
    console.log (err);
    res.status(500).json({
        message : "can't create a register"
    })}
});

app.get('/profile' , (req,res)=>{
    try{
        
    }
    catch(err){

    }
});

app.listen(4444, (err) => {
    if (err){
        return console.log(err);
    }

    console.log ('Server ok')
});