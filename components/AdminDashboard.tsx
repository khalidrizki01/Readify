import React from 'react';
import BookRow from './BookRow';

const books = [
    { title: 'Book 1', cover: 'https://dummyimage.com/300x400/000/fff', details: 'Detail of Book 1' },
    { title: 'Book 2', cover: 'https://dummyimage.com/300x400/000/fff', details: 'Detail of Book 2' },
    // tambahkan buku lainnya...
];

const AdminDashboard: React.FC = () => {
    return (
        <div className="p-4">
            {books.map((book, index) => (
                <BookRow
                    key={index}
                    title={book.title}
                    cover={book.cover}
                    details={book.details}
                    onRead={() => console.log(`Read book: ${book.title}`)}
                    onEdit={() => console.log(`Edit book: ${book.title}`)}
                    onDelete={() => console.log(`Delete book: ${book.title}`)}
                />
            ))}
        </div>
    );
};

export default AdminDashboard;
