"use server";

import dbConnect from "@/db/db-connect";
import noteModel from "@/models/noteModel";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function createNote( prevState:any , formData:FormData) {

  const schema=z.object({
    title:z.string().min(4),
    content:z.string().min(10)
  });
  const parse=schema.safeParse({
    title: formData.get("title"),
    content:formData.get("content")
  });

  if(!parse.success){
    return {
      message:"form data is not valid!!"
    }
  }
  const data=parse.data;

  try{
    await dbConnect();
    const note=new noteModel(data);
    await note.save();
    revalidatePath("/notes")
    return {
      message:"Note created successfully :)"
    }  
  } catch(e){
    console.log("e from note action" , e)
  }
}
