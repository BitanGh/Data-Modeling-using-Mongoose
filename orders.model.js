import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
    productid:{
        type:String,
    },
    quantity:{
        type: Number,
        required: true,
    },
})
const orderSchema = new mongoose.Schema({
    price:{
        required: true,
        type: Number
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems:{
        type: [itemSchema],
    },
    address:{
        type: String,
        required: true,
    },
    status:{
        enum: ["DELIVERED","PENDING","CANCELED"],
        default: "PENDING",
    }
},{timestamps:true});
export const Order = mongoose.model(Order,orderSchema);