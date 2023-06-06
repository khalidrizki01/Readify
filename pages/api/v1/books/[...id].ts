import {authenticateToken} from '../../../../utils/authTokenHandler'
import {booksData} from '../../../../lib/books'
import {getBookById} from '../../../../prisma/bookQueries'
import applyCorsMiddleware from '../../cors'

function handler(req, res) {
    
    //verify method
    if (req.method !=="GET") {
        return res.status(405).json({error: "Method not allowed"});
    }

    //authenticate token
    authenticateToken(req, res, async () => {
        // fetch user list
        try {
            let jsonBooks;
            // TODO : fetch book list from prisma
            jsonBooks = await getBookById(req.query.id[0]);

            // // mock data
            // jsonBooks = booksData.find(book => book.book_id === req.query.id[0]);

            // check if book exists
            if (jsonBooks === undefined || jsonBooks === null) {
                return res.status(404).json({error: "Book not found"});

            // } else if (jsonBooks.status !== 200) {
            //     return res.status(500).json({error: "Something went wrong"});

            } else {
                // book found

                jsonBooks = await JSON.parse(JSON.stringify(jsonBooks));
                return res.status(200).json(jsonBooks);
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
