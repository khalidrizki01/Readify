import {authenticateToken} from '../../../utils/authTokenHandler'
import {getAllUsers, getUserById} from '../../../prisma/userQueries'
import applyCorsMiddleware from '../cors';

function handler(req, res) {
    
    //verify method
    if (req.method ==="GET") {
        getUsers(req, res);
    }else {
        return res.status(405).json({error: "Method not allowed"});
    }
}

export default applyCorsMiddleware(handler);

function getUsers (req, res){
    //authenticate token
    authenticateToken(req, res, async () => {
        // fetch user list
        try {
            let jsonUser;
            // TODO : fetch user list from prisma
            jsonUser = await getAllUsers();
            return res.status(200).json(jsonUser);

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: "Something went wrong",
                message: err.message
            });
        }
    });
}