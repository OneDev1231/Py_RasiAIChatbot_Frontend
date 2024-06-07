import { messagesData } from '@/data/messsages';
import { createSlice } from '@reduxjs/toolkit'

let id = 16;
const chatbots = [
    {
        id: 1, 
        text: 'Chatbot 1',
        files: ["test.docx"],
        messages: messagesData
    },
    {
        id: 2, 
        text: 'Chatbot 2',
        files: ["test.pdf", "test.json"],
        messages: messagesData
    },
    {
        id: 3, 
        text: 'Chatbot 2',
        files: ["test.csv", "test.pdf", "test.docx"],
        messages: messagesData
    },
    {
        id: 4, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 5, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 6, 
        text: 'Chatbot 1',
        files: [],
        messages: messagesData
    },
    {
        id: 7, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 8, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 9, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 10, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 11, 
        text: 'Chatbot 1',
        files: [],
        messages: messagesData
    },
    {
        id: 12, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 13, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 14, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 15, 
        text: 'Chatbot 2',
        files: [],
        messages: messagesData
    },
    {
        id: 16, 
        text: 'Chatbot 1',
        files: [],
        messages: messagesData
    },
]

const initialState = {
    chatbots: chatbots || [],
    selectedChatbot: chatbots[0]
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addChatbot: (state, action) => {
        const data = {
            id: id++,
            ...action.payload,
            messages: []
        }
        state.chatbots.push(data);
        state.selectedChatbot = data;
    },
    selectChatBot: (state, action) => {
        state.selectedChatbot = action.payload;
    },
    addChat: (state, action) => {
        const {id, info} = action.payload;
        state.chatbots.forEach((item) => {
            if (item.id === id) {
                item.messages = [info, ...item.messages];
                state.selectedChatbot = item;
            }
        });
    }
  }
})

export const { addChatbot, selectChatBot, addChat } = dashboardSlice.actions

export default dashboardSlice.reducer