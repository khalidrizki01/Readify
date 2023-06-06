import {authenticateToken} from '../../../../utils/authTokenHandler'
import applyCorsMiddleware from '../../cors';

function handler(req, res) {
    
    //verify method
    if (req.method !=="GET") {
        return res.status(405).json({error: "Method not allowed"});
    }

    //authenticate token
    authenticateToken(req, res, async () => {
        // fetch user list
        try {
            let jsonUser;
            // TODO : fetch user list from prisma

            // mock data
            jsonUser = await fetch('https://jsonplaceholder.typicode.com/users/'+req.query.id);

            // check if user exists
            if (jsonUser.status === 404) {
                return res.status(404).json({error: "User not found"});
            } else if (jsonUser.status !== 200) {
                return res.status(500).json({error: "Something went wrong"});
            } else {
                // user found

                jsonUser = await jsonUser.json();
                return res.status(200).json({users: jsonUser});
            }

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: "Something went wrong",
                message: err.message
            });
        }
    });
}

export default applyCorsMiddleware(handler);
