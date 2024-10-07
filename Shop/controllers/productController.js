import { ReturnDocument } from "mongodb";
import productModel from "../models/product.js"; 

export const getAll= async (req,res)=>{
    try{
        const product = await productModel.find();
        res.json(product);
    }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось отримати продукт",
        });
    }
}
export const getOne= async (req,res)=>{
    try{
        const product= await productModel.findOne({_id:req.params.id});
        if(!product){
            return res.status(404).json({
                message:"Такого продукту немає",
            })
        }
        res.json(product);
        
    }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось отримати продукт",
        });
    }
}
export const remove = async (req,res)=>{
    try{
        const product= await productModel.findByIdAndDelete({_id:req.params.id});
        if(!product){
            return res.status(404).json({
                message:"Такого продукту немає",
            })
        }
        res.json({
           success : true,
        });
        
    }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось отримати продукт",
        });
    }
}

export const create = async (req,res) =>{
    try{
        const doc = new productModel({
            nameOfProduct :req.body.nameOfProduct,
            productPrice : req.body.productPrice,
            description : req.body.description,
            tags: req.body.tags,
            productImage :  req.body.productImage,
            user : req.userId, 
        });

        const product = await doc.save();
        res.json(product);
    }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось додати продукт",
        });
    }
};

export const update = async(req,res )=> {
    try {
        const postId= req.params.id;
        await productModel.updateOne({
            _id: postId,
        },
        {
            nameOfProduct : req.body.nameOfProduct,
            productPrice : req.body.productPrice,
            description : req.body.description,
            tags : req.body.tags,
            productImage : req.body.productImage,
            user: req.userId,
        })  
        
        res.json({
            success: true,
        })
     }
    catch(err){
        console.log (err);
        res.status(500).json({
            message : "Не вдалось оновити продукт",
        });
     }
}
