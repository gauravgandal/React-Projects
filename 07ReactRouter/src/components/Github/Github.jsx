import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GITHUB_TOKEN = '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'; // Replace with your token

function Github() {
    const [data, setData] = useState([]);
    const [repos, setRepos] = useState([]);
    const [userInput, setUserInput] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch GitHub user data
        fetch('https://api.github.com/users/gauravgandal', {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);

                // Fetch user's repositories
                return fetch(data.repos_url, {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`
                    }
                });
            })
            .then((res) => res.json())
            .then((data) => {
                // Sort repositories by updated date in descending order and slice the first 5
                const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setRepos(sortedRepos.slice(0, 5));
            })
            .catch(err => console.log("Error Fetching Data", err));
    }, []);

    const handleNavigate = () => {
        if (userInput) {
            navigate(`/user/${userInput}`);
        }
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-12">
                <img
                    src={data.avatar_url}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.name}</h1>
                <p className="text-gray-600">{data.bio}</p>
            </div>

            {/* Input Field and Button */}
            <div className="mb-8 flex flex-col items-center">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg mb-4"
                    placeholder="Enter any random string"
                />
                <button
                    onClick={handleNavigate}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Go to User
                </button>
            </div>

            {/* Repositories Section */}
            <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    My Repositories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.length > 0 ? (
                        repos.map((repo) => (
                            <div key={repo.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{repo.name}</h3>
                                <p className="text-gray-600 mb-4">
                                    {repo.description || "No description available"}
                                </p>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-700 hover:text-green-500 font-medium"
                                >
                                    View Repository
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No repositories available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Github;
