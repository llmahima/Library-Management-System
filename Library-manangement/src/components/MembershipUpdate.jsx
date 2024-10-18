import React, { useState } from 'react';

const MembershipUpdate = () => {
    const [membershipNumber, setMembershipNumber] = useState('');
    const [action, setAction] = useState('extend');
    const [extensionDuration, setExtensionDuration] = useState('6 months');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log({ membershipNumber, action, extensionDuration });
    };

    return (
        <div className='w-[75%] absolute top-16 left-72'> 
               <h2 className="text-2xl text-center font-bold mb-8">Update Membership</h2>
          <div className="flex flex-col items-center ">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >

                <div className="mb-4">
                    <label className="block text-gray-700">Membership Number</label>
                    <input
                        type="text"
                        required
                        value={membershipNumber}
                        onChange={(e) => setMembershipNumber(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Action</label>
                    <select
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    >
                        <option value="extend">Extend Membership</option>
                        <option value="cancel">Cancel Membership</option>
                    </select>
                </div>

                {action === 'extend' && (
                    <div className="mb-4">
                        <label className="block text-gray-700">Extension Duration</label>
                        <select
                            value={extensionDuration}
                            onChange={(e) => setExtensionDuration(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        >
                            <option value="6 months">6 months</option>
                            <option value="12 months">12 months</option>
                            <option value="24 months">24 months</option>
                        </select>
                    </div>
                )}

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};

export default MembershipUpdate;
