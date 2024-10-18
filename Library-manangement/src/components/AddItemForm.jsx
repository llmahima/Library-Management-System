import React, { useState } from 'react';

const AddItemForm = () => {
  const [type, setType] = useState('book');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!title || !author) {
      setError('All fields are mandatory.');
      return;
    }
    setError('');
    // Handle form submission logic here
    console.log(`Submitted: ${type}, Title: ${title}, Author: ${author}`);
  };

  return (
   <div className='w-[75%] absolute top-16 left-72'>
      <h2 className="text-lg text-center font-semibold mb-4">Add {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Type</label>
          <div className="flex items-center">
            <input
              type="radio"
              value="book"
              checked={type === 'book'}
              onChange={() => setType('book')}
              className="mr-2"
            />
            <label className="mr-4">Book</label>
          
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Item
        </button>
      </form>
    </div>
   </div>
  );
};

export default AddItemForm;
