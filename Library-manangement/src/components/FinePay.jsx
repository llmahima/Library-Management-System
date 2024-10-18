import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const FinePay = () => {
  const [formData, setFormData] = useState({
    bookName: 'Harry Potter',
    authorName: 'J.K. Rowling',
    serialNo: 'HP12345',
    issueDate: '2024-09-15',
    returnDate: '2024-09-30',
    fineAmount: 50,  // Example fine amount (0 if no fine)
    finePaid: false,
    remarks: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle checkbox and input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const validationErrors = {};

    if (formData.fineAmount > 0 && !formData.finePaid) {
      validationErrors.finePaid = 'Please confirm the fine is paid before proceeding.';
    }

    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Assuming transaction is successful
      alert('Transaction successfully completed!');
      navigate('/');  // Redirect back to home or other page
    }
  };

  return (
    <div className='w-[80%] absolute top-16 left-72 h-screen overflow-x-scroll'>
      <h2 className="text-2xl font-bold text-center mb-6">Pay Fine</h2>
     <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      
      <form onSubmit={handleSubmit}>
        {/* Book Name (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookName">
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={formData.bookName}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
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

        {/* Serial No (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serialNo">
            Serial No.
          </label>
          <input
            type="text"
            id="serialNo"
            name="serialNo"
            value={formData.serialNo}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
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

        {/* Return Date (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
            Return Date
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Fine Amount (auto-populated and non-editable) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fineAmount">
            Fine Amount
          </label>
          <input
            type="number"
            id="fineAmount"
            name="fineAmount"
            value={formData.fineAmount}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Fine Paid (checkbox) */}
        {formData.fineAmount > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="finePaid">
              Fine Paid
            </label>
            <input
              type="checkbox"
              id="finePaid"
              name="finePaid"
              checked={formData.finePaid}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span>I have paid the fine</span>
            {errors.finePaid && <p className="text-red-500 text-sm mt-2">{errors.finePaid}</p>}
          </div>
        )}

        {/* Remarks (optional) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
            Remarks (Optional)
          </label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add any remarks here..."
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

export default FinePay;
