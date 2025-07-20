"use server"

import { signIn } from "@/utils/auth";

export async function loginAction (formData:FormData){
    console.log("ressssss froooooom login action11111111111111111111111111111111: ")
    try{
        const res=await signIn("credentials" , {
            username:formData.get("username"),
            password:formData.get("password"),
            redirect: false,
        })
        console.log("ressssss froooooom login action: ",res)
        return res;
    }catch(e){
        console.log("e from userAction: ",e)
    }
}