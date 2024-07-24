import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }

    return (
        <div className="flex items-center justify-center w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?t=st=1722012947~exp=1722013547~hmac=d42eddcad9df0c3446cc0f54c40ea0d7cdff3097313d481b5f57f5eaf69690b2)`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            UserName
                        </label>
                        <input
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="text"
                            required
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                        </div>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                        />
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"></a>
                    <div className="mt-4 flex items-center w-full text-center">
                        <a href="#" className="text-xs text-gray-500 capitalize text-center w-full">
                            Don&apos;t have any account yet?
                            <span className="text-blue-700"> Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
