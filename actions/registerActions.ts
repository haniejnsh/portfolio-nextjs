"use server"
import dbConnect from "@/db/db-connect";
import UserModel from "@/models/UserModel";
import z from "zod";


export async function registerAction (prevState:unknown , formData:FormData){
    const schema=z.object({
        username: z.string().min(4, "Username must be at least 4 characters"),
        password: z.string().min(5, "Password must be at least 5 characters"),
        name: z.string().min(4, "Full name must be at least 4 characters"),
        email: z.union([z.email("Please enter a valid email"), z.literal("")]).optional(),

    })
    const parsed=schema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
        name: formData.get("name"),
        email: formData.get("email"),
    })
    if (!parsed.success) {
    const errors = z.treeifyError(parsed.error);
    const message =
        errors.properties?.username?.errors[0] ||
        errors.properties?.password?.errors[0] ||
        errors.properties?.name?.errors[0] ||
        errors.properties?.email?.errors[0] ||
        "Invalid form data";

    return { message };
  }
    const data = {
        ...parsed.data,
        role: "user", 
    }

    try{
        await dbConnect()
        const exist=await UserModel.findOne({username: data.username})
        if(exist){return {message: "This username exists. !!"} }
        const newUser= new UserModel(data);
        await newUser.save()
        return {message: "User registration successful :)"}
    }catch(e){
        console.log("e from userAction: ",e)
    }
}