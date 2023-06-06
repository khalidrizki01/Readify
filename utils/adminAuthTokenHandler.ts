import jwt from "jsonwebtoken"
import { getSession } from "next-auth/react";

export async function  authenticateAdminToken (req, res, next){    
    try {
        let token;
        let isAdmin = false;

        //get jwt token from session
        const session = await getSession({req});
        
        console.log(session)

        //check if session is undefined
        if(session === undefined || session === null) {
            //use pure jwt token
            token = req.headers['authorization'].split(' ')[1];
            //verify token
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(403).json({error: "Unauthorized Access"});
            }
            req.user = user;
            next();
        });
        } else{
            next();
        }
    } 
    catch (error) {
        //token is invalid
        return res.status(403).json({error: "Unauthorized Access"});
    }
}