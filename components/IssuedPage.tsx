import React from 'react';
import Link from 'next/link';

const IssuedPage: React.FC = () => {
  // Dummy data for issued books
  const issuedBooks = [
    { id: 1, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bumi', returnDate: '09/09/2023' },
    { id: 2, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bintang', returnDate: '09/09/2023' },
    { id: 3, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bulan', returnDate: '09/09/2023' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 border border-gray-300 p-2">Issued Book</div>
      <div className="col-span-1 border border-gray-300 p-2">Book</div>
      <div className="col-span-1 border border-gray-300 p-2">Title</div>
      <div className="col-span-1 border border-gray-300 p-2">Return Date</div>

      {issuedBooks.map((book) => (
        <React.Fragment key={book.id}>
          <div className="col-span-1 flex items-center justify-center border border-gray-300 p-2">
            
              <button className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1H3V5zm2 2v9a2 2 0 002 2h6a2 2 0 002-2V7h2a1 1 0 110 2H5a1 1 0 010-2h2zm7 3a1 1 0 011 1v5a1 1 0 11-2 0V11a1 1 0 011-1zm-4 0a1 1 0 011 1v5a1 1 0 11-2 0V11a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
           
          </div>
          <div className="col-span-1 border border-gray-300 p-2">
            <Link href="/readbook">
              <img src={book.cover} alt="Book Cover" className="w-20 h-20 object-cover" />
            </Link>
          </div>
          <div className="col-span-1 border border-gray-300 p-2">{book.title}</div>
          <div className="col-span-1 border border-gray-300 p-2">{book.returnDate}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default IssuedPage;