import mongoose from "mongoose";

const projectSchema=new mongoose.Schema(
    {
        name: { type:String , required:true},
        title: { type:String , required:true},
        introduction: { type:String , required:true},
        technology: { type:[String] , required:true},
        github: { type:String },
        linkedIn: { type:String },
        link: { type:String},
        images:{ type:[String] , required:true},

    },
    {
        timestamps:true
    }
);

const ProjectModel= mongoose.models.Project || mongoose.model("Project" , projectSchema);
 export default ProjectModel