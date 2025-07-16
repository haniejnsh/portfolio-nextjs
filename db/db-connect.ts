import mongoose from "mongoose";

export default async function dbConnect() {
    try{
        await mongoose.connect(process.env.MONGODB_URI!)
    }
    catch(e){
        console.log("e from dbconnect:",e);
    }
    
}