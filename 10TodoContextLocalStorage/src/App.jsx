import { FaTasks, FaPlusCircle, FaCheckCircle, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useState, useEffect, useRef } from 'react';
import { TodoProvider } from './contexts';

function App() {
  const [todos, setTodos] = useState([]);
  const isInitialMount = useRef(true);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const isCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    if (isInitialMount.current) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        try {
          const todos = JSON.parse(todosString);
          if (Array.isArray(todos)) {
            setTodos(todos);
          }
        } catch (error) {
          console.error('Failed to parse todos from localStorage', error);
        }
      }
      isInitialMount.current = false;
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, isCompleted }}>
      <>
        <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-screen py-12">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-2xl rounded-lg px-6 py-8 text-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent opacity-20"></div>
            <h1 className="text-4xl font-extrabold text-center mb-8 mt-2 flex items-center justify-center gap-4 relative z-10">
              <FaTasks className="text-green-400 text-6xl" />
              <span className="text-blue-800">Track My Tasks</span>
            </h1>
            <div className="mb-8 text-center">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-4 relative z-10">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
            <footer className="mt-12 text-center text-gray-600">

              <div className="mt-4 flex justify-center gap-4">
                <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">
                  <FaPlusCircle /> Add New Task
                </a>
                <a href="#" className="text-green-400 hover:underline flex items-center gap-2">
                  <FaCheckCircle /> Completed Tasks
                </a>
                <a href="#" className="text-orange-400 hover:underline flex items-center gap-2">
                  <FaRegEdit /> Edit Tasks
                </a>
                <a href="#" className="text-red-400 hover:underline flex items-center gap-2">
                  <FaTrashAlt /> Delete Tasks
                </a>
              </div>
              <p className="text-lg">
                Created with <span className="text-red-500">❤️</span> by <strong>Gaurav</strong>
              </p>
            </footer>
          </div>
        </div>
      </>
    </TodoProvider>
  );
}

export default App;
