import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setNewText(currentText);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo({
      id: editId,
      text: newText
    }));
    setEditId(null);
    setNewText('');
  };

  return (
    <div className="container mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">Your Todos</h1>
      <ul className="space-y-6">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {editId === todo.id ? (
              <form onSubmit={handleUpdate} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 rounded-md p-3 text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 w-full"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-5 rounded-lg font-medium hover:from-green-500 hover:to-green-700 transition duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditId(null)}
                  className="bg-gradient-to-r from-gray-400 to-gray-600 text-white py-2 px-5 rounded-lg font-medium hover:from-gray-500 hover:to-gray-700 transition duration-300"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                <span
                  className={`text-gray-800 text-base sm:text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}
                >
                  {todo.text}
                </span>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-3 sm:mt-0">
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-5 rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 text-white py-2 px-5 rounded-lg font-medium hover:from-red-500 hover:to-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
