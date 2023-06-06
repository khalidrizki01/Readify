import { register, checkUsernameIsExist } from '../../../../prisma/userQueries';
import applyCorsMiddleware from '../../cors';

async function handler(req,res) {
    let password = req.body.password;
    let username = req.body.username;
    let email = req.body.email;

    //verify method
    if(req.method !== "POST") {
        return res.status(405).json({error: "Method not allowed"});
    }
    
    //validate req.body
    if (!username) {
        return res.status(400).json({ error: "Invalid username" })
    }
    if (!password) {
        return res.status(400).json({ error: "Invalid password" })
    }

    //check if user exists
    //TODO fix integration with prisma
    if(await checkUsernameIsExist(username)) {
        return res.status(400).json({error: "User already exists"});
    }

    // register user
    try {
        let jsonUser;
        // TODO : fetch user list from prisma
        jsonUser = await register(username, email, password);
        return res.status(200).json(jsonUser);

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "Something went wrong",
            message: err.message
        });
    }

};

export default applyCorsMiddleware(handler);
