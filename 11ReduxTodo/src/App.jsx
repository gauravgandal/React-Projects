import { Provider } from 'react-redux';
import store from './store/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 min-h-screen py-12 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
              Redux Toolkit Todo App
            </h1>
          </div>
          <div className="p-8">
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
