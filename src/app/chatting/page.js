import React from 'react'
import { SideBar } from '../../components/pages/home/components/SideBar'
import { ChatBoxView } from '../../components/pages/home/components/ChatBoxView'

export default function chatting () {
  return (
    <div className="w-screen h-screen bg-black flex">
      <div className="w-[30%] h-full bg-[#111b21]">
        <SideBar />
      </div>
      <div className="w-[70%] max-h-screen">
        <ChatBoxView />
      </div>
    </div>
  )
}
