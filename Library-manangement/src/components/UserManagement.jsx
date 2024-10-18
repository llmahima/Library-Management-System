import React, { useState } from 'react';

const UserManagement = () => {
    const [isNewUser, setIsNewUser] = useState(true);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError('Name is required');
        } else {
            setError('');
            // Submit form logic here
            console.log({ isNewUser, name });
        }
    };

    return (
        <div className='w-[75%] absolute top-16 left-72'>
            <h2 className="text-2xl text-center font-bold mb-4">User Management</h2>
          <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">
                        Select User Type:
                    </label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="newUser"
                            name="userType"
                            checked={isNewUser}
                            onChange={() => setIsNewUser(true)}
                            className="mr-2"
                        />
                        <label htmlFor="newUser" className="mr-4">New User</label>
                        
                        <input
                            type="radio"
                            id="existingUser"
                            name="userType"
                            checked={!isNewUser}
                            onChange={() => setIsNewUser(false)}
                            className="mr-2"
                        />
                        <label htmlFor="existingUser">Existing User</label>
                    </div>
                </div>
                
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`border rounded w-full p-2 ${
                            error ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};

export default UserManagement;
