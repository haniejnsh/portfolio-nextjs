import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/db/db-connect";
import UserModel from "@/models/UserModel";
import { JWT } from "next-auth/jwt";

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

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        await dbConnect();
        const user = await UserModel.findOne({
          username: credentials.username,
          password: credentials.password,
        });
        if (user) return user;
        throw new Error("Email or Password incorrect");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user } :{ token: JWT; user: User }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
        token._id = user._id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
        if (session.user) {
            session.user.username = token.username;
            session.user.role = token.role;
            session.user._id = token._id;
        }
        return session;
    },
  },
};

const handler= NextAuth(authOptions);

export { handler as GET, handler as POST };

