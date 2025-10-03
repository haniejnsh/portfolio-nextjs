import { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/db/db-connect";
import UserModel from "@/models/UserModel";
import { JWT } from "next-auth/jwt";

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