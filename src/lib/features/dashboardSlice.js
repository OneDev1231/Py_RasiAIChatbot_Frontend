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
        text: item.plaintext,
        customers: item.customerID,
        prompt: item.prompt,
      }))
      state.chatbots = data;
      state.selectedChatbot = data[0];
    },
    addChatbot: (state, action) => {
        const length = state.chatbots.length;
        const lastId = state.chatbots[length-1].id;
        const data = {
            id: lastId + 1,
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
        const {id, newFile, text} = action.payload;
        state.chatbots.forEach((chatbot) => {
            if (chatbot.id == id) {
              if (newFile != null) {
                chatbot.files.push(newFile);
              }
              if (text != null) {
                chatbot.text = text;
              }
                state.selectedChatbot = chatbot;
            }
        });
    },
    deleteUpsertedFile: (state, action) => {
      const {id, deletedFile} = action.payload;
      state.chatbots.forEach((chatbot) => {
        if (chatbot.id == id) {
            chatbot.files.filter(item => item !== deletedFile);
            state.selectedChatbot = chatbot
        }
      });
    }
  }
})

export const { addChatbot, selectChatBot, updateChatbot, setSlice, deleteUpsertedFile } = dashboardSlice.actions

export default dashboardSlice.reducer