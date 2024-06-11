import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatbots: [],
    selectedChatbot: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSlice: (state, action) => {
      const data = action.payload.map((item) => ({
        id: item.id,
        name: item.chatbotName,
        phone: item.phone,
        files: item.upsert_filelist,
        customers: item.customerID,
        prompt: item.prompt,
      }))
      state.chatbots = data;
      state.selectedChatbot = data[0];
    },
    addChatbot: (state, action) => {
        const data = {
            id: state.selectedChatbot.id++,
            ...action.payload,
            phone: null,
            customers: [],
        }
        state.chatbots.push(data);
        state.selectedChatbot = data;
    },
    selectChatBot: (state, action) => {
        state.selectedChatbot = action.payload;
    },
    updateChatbot: (state, action) => {
        const {id, newFile} = action.payload;
        state.chatbots.forEach((chatbot) => {
            if (chatbot.id == id) {
                chatbot.files.push(newFile);
                state.selectedChatbot = chatbot
            }
        });
    }
  }
})

export const { addChatbot, selectChatBot, updateChatbot, setSlice } = dashboardSlice.actions

export default dashboardSlice.reducer