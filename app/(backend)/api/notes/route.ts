import { NextResponse } from "next/server";
import noteModel from "@/models/noteModel";
import dbConnect from "@/db/db-connect";

export async function GET(req: Request) {
  
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 4);
    const author = searchParams.get("author") || "all";
    
    if(author==="all"){
      const totalNotes = await noteModel.countDocuments();
      const totalPages = Math.ceil(totalNotes / limit);

      const allNotes = await noteModel.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("author", "-password -__v");

      const parsedAllNotes = JSON.parse(JSON.stringify(allNotes));

      return NextResponse.json({
        notes: parsedAllNotes,
        totalPages,
      });
    }
    else{
      const totalAuthorNotes = await noteModel.countDocuments({ author: author });
      const totalAuthorPages = Math.ceil(totalAuthorNotes / limit);
      const authorNotes=await noteModel.find({author: author})
        .sort({ createdAt: -1 })
        .skip((page - 1) * (limit))
        .limit(limit)
        .populate("author", "-password -__v")
      const parsedAllNotes = JSON.parse(JSON.stringify(authorNotes));

      return NextResponse.json({
        notes: parsedAllNotes,
        totalPages:totalAuthorPages,
      });
    }

    
  
  
}

