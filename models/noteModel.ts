import mongoose from "mongoose";

const noteSchema=new mongoose.Schema(
    {
        title:{ type:String , required:true},
        content: {type:String , required:true}
    },
    {
        timestamps:true
    }
);

const noteModel=mongoose.models.note || mongoose.model("note" , noteSchema);

export default noteModel