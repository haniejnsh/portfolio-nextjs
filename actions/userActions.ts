"use server"
// import { signIn } from "@/auth";
import dbConnect from "@/db/db-connect";
import UserModel from "@/models/UserModel";
import z from "zod";

// export async function loginAction (formData:FormData){
//     try{
//         const res=await signIn("credentials" , {
//             username:formData.get("username"),
//             password:formData.get("password"),
//             redirect:false,
//         })
//         return res;
//     }catch(e){
//         console.log("e from userAction: ",e)
//     }
// }

export async function registerAction (prevState:any , formData:FormData){
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
    const errors = parsed.error.flatten().fieldErrors;
    const message =
      errors.username?.[0] ||
      errors.password?.[0] ||
      errors.name?.[0] ||
      errors.email?.[0] ||
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