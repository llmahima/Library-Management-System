import React, { useState } from 'react';

const MembershipForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipDuration, setMembershipDuration] = useState('6 months');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("All fields are mandatory!");
      return;
    }
    // Process form submission (e.g., send data to an API)
    console.log({ name, email, membershipDuration });
  };

  return (
   <div className='w-[75%] absolute top-16 left-72'>
      <h2 className="text-xl text-center font-bold mb-4">Membership Registration</h2>
      <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="block text-sm font-medium mb-1">Membership Duration</legend>
          <div className="flex flex-col">
            {['6 months', '1 year', '2 years'].map((duration) => (
              <label key={duration} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="membershipDuration"
                  value={duration}
                  checked={membershipDuration === duration}
                  onChange={(e) => setMembershipDuration(e.target.value)}
                  required
                  className="mr-2"
                />
                {duration}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
   </div>
  );
};

export default MembershipForm;
