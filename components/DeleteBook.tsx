import React from 'react';

type DeleteBookProps = {
  cover: string;
  onDelete: () => void;
};

const DeleteBook: React.FC<DeleteBookProps> = ({ cover, onDelete }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-md mx-auto my-8">
      <img src={cover} alt="Book Cover" className="w-48 h-48 object-cover" />
      <h1 className="text-xl font-semibold mt-4">Are you sure you want to delete this item?</h1>
      <div className="mt-4 space-x-4">
        <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Yes
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
