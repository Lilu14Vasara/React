import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

//Reducers take the current state and an action as input and return a new state.

export const todoSlice = createSlice({
    name: 'todo',//properti name
    initialState,//initialstate
    reducers: {
        addTodo: (state, action) => {//fix format for reducer
            const todo = {//todo ke liye object bnana hai
                id: nanoid(), //unique id 
                text: action.payload//for differn different text value
            }//payload: (Optional) Data sent along with the action to be used by the reducer.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
//slice is a collection of logic that manages the state for a specific part of your application
export default todoSlice.reducer