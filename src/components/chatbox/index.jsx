"use client"

import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { useBotDispatch, useBotSelector } from '@/lib/hooks/rtk_hooks';
import { addChat } from '@/lib/features/dashboardSlice';

const style1 = 'self-start bg-[#202c33] px-3 py-2 rounded-lg max-w-[50%] rounded-tl-none relative'
const style2 = 'self-end bg-[#005c4b] px-3 py-2 rounded-lg max-w-[50%]  rounded-tr-none relative'


export const RightHeader = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 dark:bg-[#202c33] px-7 py-3 border-l border-transparent">
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <img src="https://imgtr.ee/images/2024/06/06/ec689bac4544ec8bb86b50c23484b1c2.png" alt="logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl">{ "userName" }</p>
      </div>
      <div className="cursor-pointer">
        <SlOptionsVertical />
      </div>
    </div>
  )
}

export const ChatBox = () => {
  const selectedChatbot = useBotSelector(state => state.dashboard.selectedChatbot);

  return (
    <div className="flex flex-col-reverse gap-4 px-20 overflow-y-auto py-6">
      { !selectedChatbot?.messages?.length && 
        <p className="text-center">Start messaging!</p> 
      }
      { selectedChatbot?.messages?.map((item) => {
        return (
          <div key={item?.id} className={item?.me ? style2: style1}>
            <p className={`text-white`}>{ item?.message }</p>
            <p className="text-[11px] text-zinc-300 text-right">{ new Date(item?.createdAt).toString().slice(0, 16) }</p>
          </div>
        )
      })}
    </div>
  )
}

export const MessageComposer = ({handleChangeText, text, handleSendMessage}) => {
  return (
    <div className="bg-gray-200 dark:bg-[#202c33] w-full">
      <form onSubmit={handleSendMessage}>
        <div className="px-6 py-3 flex flex-row justify-between items-center gap-4">
          <GrAttachment className='text-gray-500 dark:text-gray-300 text-2xl cursor-pointer' />
          <input type="text" placeholder="Type a message" 
            className="px-5 py-3 rounded-lg w-full outline-none"
            onChange={handleChangeText} value={text}
          />
          <div className=" text-3xl cursor-pointer"
            type='submit' onClick={handleSendMessage}
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
  const selectedChatbot = useBotSelector(state => state.dashboard.selectedChatbot);
  const [text, setText] = useState('');

  const dispatch = useBotDispatch();

  const handleChangeText = (e) => {
      setText(e.target.value);
  }

  const handleSendMessage = (e) => {
      e.preventDefault();
      if (!text) {
          toast.dismiss();
          toast.error('Enter any message!');
          return;
      }
      const msg = {
          id,
          me: true,
          message: text,
          createdAt: new Date()
      }
      id++;
      // dispatch(addChat({id: selectedChatbot?.id, info: msg}))
      setText('');
  }

    return (
      <div className="relative h-full flex flex-col justify-between" id="rightbar">
        <RightHeader />
        <div className="flex flex-col justify-end w-full h-full bg-gray-300 dark:bg-black">
          <ChatBox />
          <MessageComposer handleChangeText={handleChangeText} handleSendMessage={handleSendMessage} 
              text={text}
          />
        </div>
      </div>
  )
}