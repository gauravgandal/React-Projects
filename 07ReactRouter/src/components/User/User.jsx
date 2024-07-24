import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">User Profile</h1>
                <p className="text-lg text-gray-600 mb-6">Welcome to the profile of user ID:</p>
                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-700">{userId}</h2>
                </div>
            </div>
        </div>
    );
}

export default User;
