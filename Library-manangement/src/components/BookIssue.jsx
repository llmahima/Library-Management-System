import React, { useState } from 'react';

const BookIssue = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    student: '',
    book: '',
    issueDate: '',
    returnDate: ''
  });

  // Hardcoded student and book data
  const students = ['John Doe', 'Jane Smith', 'Michael Johnson'];
  const books = ['The Great Gatsby', '1984', 'Moby Dick', 'To Kill a Mockingbird'];

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you can send the form data to the backend
    alert('Book issued successfully!');
  };

  return (
    <div className=" w-[75%]  absolute top-16 left-72">
      <h2 className="text-2xl font-bold text-center mb-4">Issue a Book</h2>
      
          <div className='max-w-lg mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg'>
                    <form onSubmit={handleSubmit}>
               {/* Student Selection */}
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="student">
                    Select Student
                    </label>
                    <select
                    id="student"
                    name="student"
                    value={formData.student}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    >
                    <option value="">-- Select a student --</option>
                    {students.map((student, index) => (
                    <option key={index} value={student}>{student}</option>
                    ))}
                    </select>
               </div>

               {/* Book Selection */}
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="book">
                    Select Book
                    </label>
                    <select
                    id="book"
                    name="book"
                    value={formData.book}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    >
                    <option value="">-- Select a book --</option>
                    {books.map((book, index) => (
                    <option key={index} value={book}>{book}</option>
                    ))}
                    </select>
               </div>

               {/* Issue Date */}
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issueDate">
                    Issue Date
                    </label>
                    <input
                    type="date"
                    id="issueDate"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
               </div>

               {/* Return Date */}
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
                    Return Date
                    </label>
                    <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
               </div>

               {/* Submit Button */}
               <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
               >
                    Issue Book
               </button>
               </form>
          </div>
    </div>
  );
};

export default BookIssue;
