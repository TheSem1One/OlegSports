import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { registerValidation,loginValidation, productCreateValidation} from './validation.js';
import { use } from 'bcrypt/promises.js';
import checkAuth from './utils/checkAuth.js'; 
import{userController ,productController} from './controllers/index.js';
import handleValidErrors from './utils/handleValidErrors.js';

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.apc7q.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('DB ok '))
    .catch((err) => console.log ('DB error', err));


const app= express();

const storage = multer.diskStorage({
    destination : (_, __, cb) =>{
        cb(null, 'uploads');
    },
    filename : (_, file, cb) =>{
        cb(null, file.originalname);
    } 
});

const uploads = multer({storage});

app.use(express.json())
app.use('/uploads', express.static('uploads'));


app.post('/auth/login' ,loginValidation,handleValidErrors,userController.login)
app.post('/auth/register' ,registerValidation,handleValidErrors,userController.register)
app.get('/profile' ,checkAuth ,userController.profile);

app.post('/uploads',checkAuth, uploads.single('image'), (req,res)=>{
    res.json({
        url:`/uploads/${req.file.originalname}`,
    });
});

app.get('/products',productController.getAll);
app.get('/products/:id',productController.getOne);
app.post('/products', checkAuth,productCreateValidation,handleValidErrors,productController.create);
app.delete('/products/:id', checkAuth,productController.remove);
app.patch('/products/:id', checkAuth,productCreateValidation,handleValidErrors, productController.update);

app.listen(4444, (err) => {
    if (err){
        return console.log(err);
    }

    console.log ('Server ok')
});