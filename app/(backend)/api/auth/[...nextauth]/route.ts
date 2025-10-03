import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username: string;
      role: string;
      _id: string;
    };
  }

  interface User {
    username: string;
    role: string;
    _id: string;
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    role: string;
    _id: string;
  }
}



const handler= NextAuth(authOptions);

export { handler as GET, handler as POST };

