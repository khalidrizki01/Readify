

import {authenticateToken} from '../../../utils/authTokenHandler'
import {booksData} from '../../../lib/books'
import {createBook, getAllBooks, getBookById, checkBookExists, Book, PartialBook, deleteBook, updateBook} from '../../../prisma/bookQueries'
import applyCorsMiddleware from '../cors'
import exp from 'constants'


const BOOK_JSON_STRUCTURE = { 
    book_title: '',
    authors: [],
    year_published: 0,
    language_code: '',
    ISBN:"",
    image_url: '',
    average_rating: 0,
    rating_count: 0,
}


function handler(req, res){
    //verify method
    if(req.method === "GET") {
        getBooksHandler(req,res)
    }else if (req.method === "POST") {
        postBooksHandler(req,res);
    }else if (req.method === "PUT") {
        editBooksHandler(req,res);
    }else if (req.method === "DELETE") {
        deleteBooksHandler(req,res);
    }else {
        return res.status(405).json({error: "Method not allowed"});
    }
}

export default applyCorsMiddleware(handler);

function deleteBooksHandler(req,res){
    //authenticate token
    authenticateToken(req, res, async () => {
        // get the delete book id
        const bookId = req.query.id[0];

        // delete book
        try {
            // TODO : delete book from prisma
            await deleteBook(bookId);
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: "Something went wrong",
                message: err.message
            });
        }

        // return success
        return res.status(200).json({message: "Book deleted successfully"});
    });
}
            


function editBooksHandler(req,res){
    let editBooks : PartialBook ={};
    

    //authenticate token
    authenticateToken(req, res, async () => {
        // check body
        if (req.body.hasOwnProperty("book_title")) {
            editBooks.book_title=req.body.book_title;
        }
        if (req.body.hasOwnProperty("ISBN")) {
            editBooks.ISBN=req.body.ISBN;
        }
        if (req.body.hasOwnProperty("authors")) {
            editBooks.authors=req.body.authors;
        }
        if (req.body.hasOwnProperty("language_code")) {
            editBooks.language_code=req.body.language_code;
        }
        if (req.body.hasOwnProperty("year_published")) {
            editBooks.year_published=req.body.year_published;
        }
        if (req.body.hasOwnProperty("image_url")) {
            editBooks.image_url=req.body.image_url;
        }
        if (req.body.hasOwnProperty("average_rating")) {
            editBooks.average_rating=req.body.average_rating;
        }
        if (req.body.hasOwnProperty("rating_count")) {
            editBooks.rating_count=req.body.rating_count;
        }

        // get the edit book id
        const bookId = req.query.id||'';

        //TODO edit book in database
        try {
            const editBook = await updateBook(bookId, editBooks);
            res.status(200).json({
                message: "Book updated successfully", 
                book: editBook
            });
        } catch (error) {
            res.status(500).json({
                error: "Something went wrong",
                message : error.message
        });
        }
    });
}

function getBooksHandler(req,res) {
    //authenticate token
    authenticateToken(req, res, async () => {
        //fetch books
        try {
            //TODO fix integration with prisma
            const books = await getAllBooks() ;
            
            //mock data
            res.status(200).json(books);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Something went wrong"});
        }
    });
}

function postBooksHandler(req,res){
    //authenticate token
    authenticateToken(req, res, async () => {
        
        //TODO validate req.body
        if (!req.body.hasOwnProperty("book_title")) {
            return res.status(400).json({ error: "Invalid book title" })
        } 
        if (!req.body.hasOwnProperty("ISBN") ){  
            return res.status(400).json({ error: "Invalid book ISBN" })
        }
        if (!req.body.hasOwnProperty("authors")) {
            return res.status(400).json({ error: "Invalid book authors" })
        }
        if (!req.body.hasOwnProperty("year_published")) {
            return res.status(400).json({ error: "Invalid book publication year" })
        }
        if (!req.body.hasOwnProperty("language_code")) {
            return res.status(400).json({ error: "Invalid book language code" })
        }
        if (!req.body.hasOwnProperty("image_url")) {
            return res.status(400).json({ error: "Invalid book image url" })
        }
        if (!req.body.hasOwnProperty("average_rating")) {
            return res.status(400).json({ error: "Invalid book average rating" })
        }
        
        let bookObj:Book = {
            ...BOOK_JSON_STRUCTURE,
        }
        
        //TODO add book to database
        bookObj.book_title = req.body.book_title;
        bookObj.authors = req.body.authors;
        bookObj.year_published = JSON.parse(req.body.year_published);
        bookObj.language_code = req.body.language_code;
        bookObj.image_url = req.body.image_url;
        bookObj.average_rating = JSON.parse(req.body.average_rating);
        
        
        try {
            let createdBook = await createBook(bookObj)
            //TODO check if book already exists
            // bookObj.book_id pls change to book_id from prisma
            if (await checkBookExists(createdBook.book_title)) {
                await deleteBook(createdBook.id);
                return res.status(400).json({ error: "Book already exists" })
            }
            //return
            res.status(202).json({statusMessage: "Data Inputed"});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Something went wrong"});
        }
    });
}