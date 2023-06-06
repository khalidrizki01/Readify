
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import applyCorsMiddleware from '../cors';

import { login } from '../../../prisma/userQueries';



async function handler( req, res ) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { email, password } = req.body;

  try {

    const user = await login(email, password);

    //create JWT Token 
    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});

    //return token
    return res.status(200).json({token: token, user: {
      username: user.username,
      id: user.id,
      email: user.email
    }});

  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Something went wrong"});
  }
}

export default applyCorsMiddleware(handler);

