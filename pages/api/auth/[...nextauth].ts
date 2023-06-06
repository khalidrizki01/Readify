import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    session: {
      strategy:"jwt",

      maxAge: 60*60, //1 Hrs
    },
    callbacks: {
      async session({token, session}){
        if (token){
          session.user = token.user
        }
        return session
      },
      async jwt({token, user, account, profile, isNewUser}){

        if (account?.provider === "google" || account?.provider === "github"){
          token.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          }
        }
        return token
      }
    },

    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        
      })
    ], 
  }

export default NextAuth(authOptions)