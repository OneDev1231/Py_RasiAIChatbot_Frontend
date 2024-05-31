"use client"
import React from 'react'
import { IoMdSend } from "react-icons/io";

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
