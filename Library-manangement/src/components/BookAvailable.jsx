import React from 'react'

function BookAvailable() {
     const books = [
          { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', available: true },
          { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', available: true },
          { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: false },
          { id: 4, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', available: true },
          { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', available: false }
        ];
  return (
    <>
     <div className="absolute top-16 left-80 w-[75%] ">
      <h1 className="text-2xl font-bold text-center mb-6">Available Books</h1>
      
      <div className="flex flex-wrap gap-6">
        {books.map((book) => (
          <div key={book.id} className={`p-6 border rounded-lg shadow-lg ${book.available ? 'bg-green-100' : 'bg-red-100'}`}>
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Genre: {book.genre}</p>
            <p className={`mt-2 font-bold ${book.available ? 'text-green-600' : 'text-red-600'}`}>
              {book.available ? 'Available' : 'Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default BookAvailable