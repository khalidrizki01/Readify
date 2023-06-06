import prisma from './index'

interface Book {
  book_title: string;
  ISBN: string;
  authors: string[];
  language_code: string;
  average_rating: number;
  rating_count: number;
  year_published: number;
  image_url: string;
}

interface PartialBook extends Partial<Book> {}

async function createBook(bookData: Book) {
  return prisma.book.create({
    data: {
      book_id:Math.floor(Math.random() * 100) + 1,
      ...bookData},
  })
}
  
async function getAllBooks(){
  return prisma.book.findMany();
}
  
async function getBookById(id: string) {
  return prisma.book.findUnique({ where: { id } });
} 

async function getBooksByTitle(keyword: string) {
  return prisma.book.findMany({
    where: {
      book_title: {
        contains: keyword,
        mode: 'insensitive'
      }
    }
  });
}

async function updateBook(bookId: string, bookData: PartialBook): Promise<Book | null> {
  return prisma.book.update({
    where: { id: bookId },
    data: bookData,
  });
}
  
async function deleteBook(id: string) {
  // Delete the book using Prisma's delete method
  return prisma.book.delete({
    where: {
      id: id,
    },
  });
}
  
export {
  createBook, 
  getAllBooks, 
  getBookById, 
  getBooksByTitle, 
  updateBook, 
  deleteBook
}