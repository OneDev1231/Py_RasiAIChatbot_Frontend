import React from 'react'
import { SideBar } from './components/SideBar'
import { ChatBoxView } from './components/ChatBoxView'

export const HomePage = () => {
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
