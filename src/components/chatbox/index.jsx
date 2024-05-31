"use client"

import React, { useState } from 'react'
import { messagesData } from '@/data/messsages'
import { IoMdSend } from "react-icons/io";

const style1 = 'self-start bg-[#202c33] px-3 py-2 rounded-lg max-w-[50%] rounded-tl-none relative'
const style2 = 'self-end bg-[#005c4b] px-3 py-2 rounded-lg max-w-[50%]  rounded-tr-none relative'

export const ChatBox = ({messages}) => {

  return (
    <div className="flex flex-col-reverse gap-4 h-[80vh] px-20 overflow-y-scroll py-6">
      { !messages?.length && 
        <p className="text-gray-300 text-center">Start messaging!</p> 
      }
      { messages?.map(({ me, message, createdAt, id}) => {
        return (
          <div key={id} className={me ? style2: style1}>
            <p className={`text-white`}>{ message }</p>
            <p className="text-[11px] text-zinc-300 text-right">{ new Date(createdAt).toString().slice(0, 16) }</p>
          </div>
        )
      })}
    </div>
  )
}

export const MessageComposer = ({handleChangeText, text, handleSendMessage}) => {
  return (
    <div className="bg-[#202c33] fixed bottom-0 w-full">
      <form onSubmit={handleSendMessage}>
        <div className="px-8 py-3 flex items-center gap-4">
          <div className="w-[66%]">
            <input type="text" placeholder="Type a message" 
              className="px-5 py-3 bg-[#2a3942] rounded-lg w-full outline-none text-white"
              onChange={handleChangeText} value={text}
            />
          </div>
          <div className="text-gray-400 text-3xl cursor-pointer"
            type='submit'
          >
            <IoMdSend />
          </div>
        </div>
      </form>
    </div>
  )
}

let id = 5;

export const ChatBoxView = () => {
    const [data, setData] = useState(messagesData);
    const [text, setText] = useState('');

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        const msg = {
            id,
            me: true,
            message: text,
            createdAt: new Date()
        }
        setData([msg, ...data]);
        setText('');
    }

    return (
        <div className="w-full h-[90vh]">
            <ChatBox messages={data} />
            <MessageComposer handleChangeText={handleChangeText} handleSendMessage={handleSendMessage} 
                text={text}
            />
        </div>
  )
}