import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div className="flex items-center justify-center w-full mt-4">
            {!user ? (
                <div className="text-center">
                    <div className="text-2xl font-bold text-red-500 mb-2">Please Login</div>
                    <p className="text-gray-700">You need to log in to view your profile.</p>
                </div>
            ) : (
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-500 mb-2">Welcome {user.userName}</div>
                    <p className="text-gray-700">You are successfully logged in.</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
