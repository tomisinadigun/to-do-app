import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todos",
    initialState: {
        putTodo: [
            "Go Swimming",
        ],
        // descript: "Go to the church",
        // time: "09:30"
    },

    reducers: {
        addTodo(state, action){
            state.putTodo.push(action.payload)
            // state.descript = action.payload
            // state.time = action.payload
        },
    }
})


export const{addTodo} = todoSlice.actions
export default todoSlice.reducer