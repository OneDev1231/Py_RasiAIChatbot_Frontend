import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessageGroup: (state, action) => {
      const data = action.payload.map((item, index) => ({
        id: index,
        botcheck: item.botcheck,
        message: item.message,
        createdAt: item.created_at,
      }))
      state.messages = data;
    },
    addMessage: (state, action) => {
        const length = state.messages.length;
        const {info} = action.payload;
        const data = {
            id: length,
            ...info,
        }
        state.messages.push(data);
    }
  }
})

export const { setMessageGroup, addMessage } = messageSlice.actions

export default messageSlice.reducer