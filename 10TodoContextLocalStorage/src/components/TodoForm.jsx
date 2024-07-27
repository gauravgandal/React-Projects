import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useTodo } from '../contexts';

function TodoForm() {

 const [todo, setTodo] = useState("")
 const {addTodo} = useTodo()

 const add = (e) =>{
    e.preventDefault()

    if(!todo) return 

    addTodo({todo, completed: false})
    setTodo("")
 }
  return (
    <form onSubmit= {add} className="flex items-center bg-gradient-to-r from-blue-100 to-blue-300 p-2 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Add a new task..."
        className="w-full border border-transparent rounded-l-lg px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 placeholder-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-r-lg px-4 py-2 flex items-center gap-2 hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaPlus className="text-lg" />
        <span className="hidden md:inline">Add</span>
      </button>
    </form>
  );
}

export default TodoForm;
