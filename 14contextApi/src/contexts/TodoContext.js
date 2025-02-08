import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},//all functionality write in app.js
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
    //In React, useContext is a hook that allows components to consume data from a Context without having to pass it explicitly through props.
}

export const TodoProvider = TodoContext.Provider