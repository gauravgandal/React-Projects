import { createContext, useContext } from "react";

// Creating a Context 
export const TodoContext = createContext({

    // This are the variables that are Provided by the Context
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],

    // These are the methods. Just declared 
    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    isCompleted: (id) => { }
})

// This is just the custom hook which is returning the 
// TodoContext component
export const useTodo = () => {
    return useContext(TodoContext)
}

// We are returning the TodoProvider variable. 
export const TodoProvider = TodoContext.Provider
