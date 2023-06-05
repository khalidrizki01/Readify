import React, { useState } from 'react';


type AddBookProps = {
  onAdd: (title: string, author: string, details: string, cover: string) => void;
};

const AddBook: React.FC<AddBookProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [details, setDetails] = useState('');
  const [cover, setCover] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        setCover(reader.result as string);
      };
    }
  };

  const handleAddBook = () => {
    onAdd(title, author, details, cover);
    setTitle('');
    setAuthor('');
    setDetails('');
    setCover('');
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-md mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Add Book</h1>
      <div className="w-72">
        <label htmlFor="title" className="text-lg font-semibold">Title:</label>
        <input
          id="title"
          type="text"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-72 mt-4">
        <label htmlFor="author" className="text-lg font-semibold">Author:</label>
        <input
          id="author"
          type="text"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="w-72 mt-4">
        <label htmlFor="details" className="text-lg font-semibold">Details:</label>
        <textarea
          id="details"
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className="w-72 mt-4">
        <label htmlFor="cover" className="text-lg font-semibold">Book Cover:</label>
        <input
          id="cover"
          type="file"
          className="w-full mt-1"
          onChange={handleFileChange}
        />
      </div>
      {cover && (
        <div className="w-72 mt-4">
          <img src={cover} alt="Book Cover" className="w-full h-48 object-cover" />
        </div>
      )}
      <button
        onClick={handleAddBook}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
