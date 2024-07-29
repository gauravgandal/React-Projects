// createSlice -> this helps us to ccreate slice of out app's state
// nanoId -> this creates the unique IDs for each item.

import { createSlice } from '@reduxjs/toolkit'; // Import from @reduxjs/toolkit
import { nanoid } from 'nanoid';

// initialState -> this is the starting state of the app. 
const initialState = {
    todos: [{ id: 1, text: "ReactJS" }]

}

// createSlice -> this setups the rules for how to manager our
// to-do list
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // state is current state 
        // action -> Data which is getting passed
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        // to remove, we provide id, then by using filter we remove specific
        // task from list. 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)

        },

        // here, the action contains the id of the to-do we want to change
        // to the new text. 

        // by using map function, we go through todos,
        // we match the ID which we want to update
        // if there is match, we change the text of that to-do to the new text. 
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        }, 
    }
})

// exporting the reducers
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer