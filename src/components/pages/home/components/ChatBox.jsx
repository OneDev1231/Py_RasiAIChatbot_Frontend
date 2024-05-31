"use client"

import { useState } from "react"

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
