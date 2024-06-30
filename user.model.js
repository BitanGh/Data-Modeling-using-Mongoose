import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique: true,
        required: true,
        lowercase:true,
    },
},{timestamps:true});
export const User = mongoose.model('User',userSchema);