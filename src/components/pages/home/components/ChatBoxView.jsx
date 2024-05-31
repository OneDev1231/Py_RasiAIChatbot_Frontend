"use client"
import React, { useState } from 'react'
import { ChatBox } from './ChatBox'
import { MessageComposer } from './MessageComposer'
import { messagesData } from '@/data/messsages'

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
