import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
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
    coverImage: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
];
const BookList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Book List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute top-0 left-0 h-full flex items-center ml-2 text-gray-500">
            <FiSearch />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        {filteredBooks.map((book, index) => (
          <Link href="/product" key={index} className="hover:cursor-pointer">
            <div className="bg-white rounded shadow p-4">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
