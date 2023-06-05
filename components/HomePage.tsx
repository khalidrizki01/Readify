import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

interface Book {
  title: string;
  author: string;
  coverImage: string;
}

const books: Book[] = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage:
      "https://encyclopediaofalabama.org/wp-content/uploads/2023/02/m-2908.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    coverImage:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/2/fefb0c40-7b97-4c81-b8e2-1f3b303fe9fe.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage:
      "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage:
      "https://images.pexels.com/photos/3574732/pexels-photo-3574732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage:
      "https://images.pexels.com/photos/265045/pexels-photo-265045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://images.pexels.com/photos/357330/pexels-photo-357330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    coverImage:
      "https://images.pexels.com/photos/3184617/pexels-photo-3184617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage:
      "https://images.pexels.com/photos/3221377/pexels-photo-3221377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    coverImage:
      "https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Book List</h2>
        <Button variant="outline-secondary" href="/booklist">
          Show All
        </Button>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {books.map((book) => (
          <Link href="/product" key={book.title} className="hover:cursor-pointer">
            <div className="bg-white rounded shadow p-4">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-218 h-337 object-cover"
              />
              <h3 className="text-lg font-semibold my-2">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
