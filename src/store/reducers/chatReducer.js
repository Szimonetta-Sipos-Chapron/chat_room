import { createReducer } from "@reduxjs/toolkit";

import { addMessage } from '../actions/chatActions'

const initialState = [
    {
        author: 'Moi',
        message: 'Coucou !',
    },
    {
        author: 'Toi',
        message: 'Hello',
    },
    {
        author: 'Toi',
        message: 'Comment ça va ?',
    },
    {
        author: 'Moi',
        message: '...ça va et toi ?',
    },
];

const chatReducer = createReducer(initialState, (builder) => {

    builder.addCase(addMessage, (state, action) => {
        const message = { ...action.payload, date: Date.now() }
        state.push(message)
    })
})

export default chatReducer;