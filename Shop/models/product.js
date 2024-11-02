import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    nameOfProduct: {
        type: String,
        required: true,
    },
    typeOfProduct: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    brandOfProduct: {
        type: String,
        require: true,
    },
    seriesOfProduct: {
        type: String,
        require: true,
    },
    sexOfProduct: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    material: {
        type: String,
        require: true,
    },
    size: {
        type: Number,
        require:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }
},
);
export default mongoose.model('Product', ProductSchema);