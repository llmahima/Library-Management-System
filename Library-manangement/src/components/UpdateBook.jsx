import React, { useState } from 'react'

function UpdateBook() {
     const [selectedOption, setSelectedOption] = useState('book');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setErrorMessage('All fields are mandatory.');
    } else {
      setErrorMessage('');
      // Process the form data
      console.log({ selectedOption, title, author });
    }
  };
  return (
    <div className='w-[75%] absolute top-16 left-72'>
      <h2 className="text-xl text-center font-semibold mb-4">Select Movie or Book</h2>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Type:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="book">Book</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author/Director:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateBook