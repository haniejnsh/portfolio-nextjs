import mongoose from "mongoose";

const noteSchema=new mongoose.Schema(
    {
        title: { type:String , required:true},
        content: {type:String , required:true},
        author: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        }

    },
    {
        timestamps:true
    }
);

const noteModel=mongoose.models.Note || mongoose.model("Note" , noteSchema);

export default noteModel