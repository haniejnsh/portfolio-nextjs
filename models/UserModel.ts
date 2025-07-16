import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username: { type:String ,required:true},
    password: { type:String ,required:true},
    role: { type:String , enum:["user","admin"] , required:true , default:"user" },
    name: { type:String ,required:true},
    email: { type:String ,required:false},
},
{
    timestamps:true,
})
 const UserModel= mongoose.models.User || mongoose.model("User" , userSchema);
 export default UserModel