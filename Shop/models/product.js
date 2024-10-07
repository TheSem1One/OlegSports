import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    nameOfProduct: {
        type: String,
        required : true,
    },
    productPrice :{
        type: Number,
        required :true,
    },
    description: {
        type: String,
        required : true,
    },
    tags: {
        type: Array,
        default:[],
    },
    productImage: {
    type : String ,
    required : true,
    }, 
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true ,
    }
},
{
    Timestamp : true,
}
);
export default mongoose.model('Product', ProductSchema);