import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to the Pay Fine page

const ReturnBook = () => {
  const [formData, setFormData] = useState({
    bookName: '',
    authorName: 'J.K. Rowling',  // Hardcoded as an example
    serialNo: '',
    issueDate: '2024-09-15',  // Example hardcoded date
    returnDate: '2024-09-30'   // Example hardcoded return date
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Navigation to another page

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation before submission
  const validateForm = () => {
    const validationErrors = {};

    if (!formData.bookName) validationErrors.bookName = 'Book name is required';
    if (!formData.serialNo) validationErrors.serialNo = 'Serial number is required';
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Reset errors
      setErrors({});
      // Redirect to Pay Fine page (you can add logic for checking fine as needed)
      navigate('/pay-fine');
    }
  };

  return (
   <div className=' w-[75%]  absolute top-16 left-72'>
      <h2 className="text-2xl font-bold text-center mb-6">Return Book</h2>
     <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      
      <form onSubmit={handleSubmit}>
        {/* Book Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookName">
            Name of Book <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={formData.bookName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.bookName && <p className="text-red-500 text-sm">{errors.bookName}</p>}
        </div>

        {/* Author Name (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Serial No (required) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serialNo">
            Serial No. <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="serialNo"
            name="serialNo"
            value={formData.serialNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.serialNo && <p className="text-red-500 text-sm">{errors.serialNo}</p>}
        </div>

        {/* Issue Date (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issueDate">
            Issue Date
          </label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            value={formData.issueDate}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Return Date (auto-populated but editable) */}
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
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Confirm
        </button>
      </form>

      {/* Error Handling */}
      {Object.keys(errors).length > 0 && (
        <div className="mt-4 text-red-500">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
   </div>
  );
};

export default ReturnBook;
