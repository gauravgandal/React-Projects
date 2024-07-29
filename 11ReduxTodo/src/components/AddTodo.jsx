import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState('');
    const [todoAdded, setTodoAdded] = React.useState(false);

    const checkInput = () => {
        if (input.trim() === '') {
            alert('Please enter a todo');
            return false;
        }
        return true;
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (checkInput()) {
            dispatch(addTodo(input));
            setInput('');
            setTodoAdded(true);
        }
    }

    React.useEffect(() => {
        if (todoAdded) {
            alert('Todo added successfully');
            setTodoAdded(false);
        }
        // eslint-disable-next-line
    }, [todoAdded]);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a Todo</h2>
            <form onSubmit={addTodoHandler} className="flex flex-col space-y-4">
                <input
                    type="text"
                    className="bg-gray-200 border border-gray-300 rounded-md p-2 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo;
