"use server";

import { authOptions } from "@/app/(backend)/api/auth/authOptions";
import dbConnect from "@/db/db-connect";
import noteModel from "@/models/noteModel";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export async function createNote( prevState: unknown , formData:FormData) {

  const session =await getServerSession(authOptions)
  console.log("sesstin .... >   ", session)
  if(!session || !session.user._id){
    redirect("/authentication/login")
  }

  const schema=z.object({
    title:z.string().min(4, "Title must be at least 4 characters").max(22, "Title must be at most 22 characters"),
    content:z.string().min(10, "Content must be at least 10 characters")
  });
  const parse=schema.safeParse({
    title: formData.get("title"),
    content:formData.get("content")
  });

  if(!parse.success){
    const errors = z.treeifyError(parse.error);
      const message =
        errors.properties?.title?.errors[0] ||
        errors.properties?.content?.errors[0] ||
        "Invalid form data";
   
    return { message };
  }
  const data={
    ...parse.data,
    author: session.user._id,
  }
  
  try{
    await dbConnect();
    const note=new noteModel(data);
    await note.save();
    revalidatePath("/notes")
    return {
      message:"Created successfully :)"
    }  
  } catch(e){
    console.log("e from note action" , e)
  }
}


export async function editNote(prevState: unknown, formData: FormData) {

  const session =await getServerSession(authOptions)
  if(!session || !session.user._id){
    redirect("/authentication/login")
  }

  const schema = z.object({
    _id: z.string().min(1),
    title:z.string().min(4, "Title must be at least 4 characters").max(22, "Title must be at most 22 characters"),
    content:z.string().min(10, "Content must be at least 10 characters")
  });

  const parse = schema.safeParse({
    _id: formData.get("_id"),
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!parse.success) {
    const errors = z.treeifyError(parse.error);
      const message =
        errors.properties?.title?.errors[0] ||
        errors.properties?.content?.errors[0] ||
        "Invalid form data";
   
    return { message };
  }

  try {
    await dbConnect();

    await noteModel.findByIdAndUpdate(parse.data._id, {
      title: parse.data.title,
      content: parse.data.content,
    });

    revalidatePath("/notes");

    return {
      message: "Updated successfully :)",
    };
  } catch (e) {
    console.log("Error from updateNote action:", e);
    return { message: "Something went wrong!" };
  }
}


export async function  deleteNote(prevState: unknown , formData:FormData){

   const session =await getServerSession(authOptions)
  if(!session || !session.user._id){
    redirect("/authentication/login")
  }

  const schema = z.object({
    _id: z.string().min(1),
  });

  const parse = schema.safeParse({
    _id: formData.get("_id"),
  });

  if (!parse.success) {
    return {
      message: "note is not valid!!",
    };
  }
  try{
    await dbConnect();
    await noteModel.findOneAndDelete({_id: parse.data._id});
    // revalidatePath("/notes")
    return { message : "Deleted successfully :)"}
  }catch(e){
    return { message : e}
  }
}



