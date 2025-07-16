import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import dbConnect from "./db/db-connect";
import UserModel from "./models/UserModel";

const config={
    providers:[
        CredentialsProvider({
            credentials:{
                username:{type: "text"},
                password:{type:"password"},
            },
            async authorize(credentials){
                if(!credentials) return null;
                try{
                    await dbConnect();
                    const user=await UserModel.findOne({
                        username: credentials.username,
                        password: credentials.password
                    });
                    if(user){ return user}
                    return null
                }catch(e){
                    console.log("e from auth: ",e)
                }
            }
        })
    ]
}

export const {
    handler :{GET , POST} ,
    auth ,
    signIn ,
    signOut ,
} =NextAuth(config)