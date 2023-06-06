import { getToken } from "next-auth/jwt"
import { getSession } from "next-auth/react"
import { authOptions } from "../auth/[...nextauth]"
import applyCorsMiddleware from "../cors"

export default async (req, res) => {
  const session = await getSession({req})

  
  if (session) {
    // Signed in
    res.status(200).json({ name: session.user.name, email: session.user.email })
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}