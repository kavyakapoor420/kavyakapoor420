import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true},
     // patient or doctor
    role: { type: String, default: 'patient' },
})


const UserModel=mongoose.model("UserModel",userSchema)

export default UserModel;