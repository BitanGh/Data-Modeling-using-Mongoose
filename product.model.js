import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    image:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    
},{timestamps:true});
export const Product = mongoose.model(Product,productSchema);