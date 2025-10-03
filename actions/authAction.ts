"use server"

import { signIn } from "@/utils/auth";

export async function loginAction (formData:FormData){
    try{
        const res=await signIn("credentials" , {
            username:formData.get("username"),
            password:formData.get("password"),
            redirect: false,
        })
        return res;
    }catch(e){
        console.log("e from userAction: ",e)
    }
}