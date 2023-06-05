import React from 'react';

type BookRowProps = {
    title: string;
    cover: string;
    details: string;
    onRead: () => void;
    onEdit: () => void;
    onDelete: () => void;
};

const BookRow: React.FC<BookRowProps> = ({ title, cover, details, onRead, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-4 gap-4 items-center p-4 border-b-2">
            <img src={cover} alt={title} className="w-20 h-20 object-cover"/>
            <h2 className="text-lg">{title}</h2>
            <p>{details}</p>
            <div className="space-x-2">
                <button onClick={onRead} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read</button>
                <button onClick={onEdit} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
        </div>
    );
};

export default BookRow;
