import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer, // Ensure this matches the state path used in useSelector
    },
});

export default store;
