import { createReducer, createSlice } from "@reduxjs/toolkit"
// import { updateStatus } from "./actions"

const initialState = {
    name:'User',
}

const userReducer = createSlice({
    name:'person',
    initialState,
    reducers:{
        updateName: (state,action)=>{
            state.name = action.payload
        },
    }
})

export const { updateName } = userReducer.actions
export default userReducer.reducer
