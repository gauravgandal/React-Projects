import { FaRegEdit, FaSave, FaTrash } from 'react-icons/fa';
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updatedTodo, deleteTodo, isCompleted } = useTodo();

    const handleEdit = () => {
        updatedTodo(todo.id, { ...todo, todo: todoMsg });
        setIsEditing(false);
    };

    const handleComplete = () => {
        isCompleted(todo.id);
    };

    return (
        <div
            className={`flex border border-transparent rounded-lg px-3 py-2 gap-x-3 shadow-md transition-transform transform ${
                todo.completed ? "bg-gradient-to-r from-green-300 to-green-500" : "bg-gradient-to-r from-pink-300 to-pink-500"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={handleComplete}
            />
            <input
                type="text"
                className={`border-0 outline-none w-full bg-transparent rounded-lg ${
                    isEditing ? "px-3" : ""
                } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditing}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-white bg-gray-800 hover:bg-gray-900 justify-center items-center transition duration-300"
                onClick={() => {
                    if (todo.completed) return;

                    if (isEditing) {
                        handleEdit();
                    } else {
                        setIsEditing(true);
                    }
                }}
                disabled={todo.completed}
            >
                {isEditing ? <FaSave /> : <FaRegEdit />}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-white bg-red-600 hover:bg-red-700 justify-center items-center transition duration-300"
                onClick={() => deleteTodo(todo.id)}
            >
                <FaTrash />
            </button>
        </div>
    );
}

export default TodoItem;
