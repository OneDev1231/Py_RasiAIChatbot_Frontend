import React from 'react'
import { SideBar } from '@/components/sidebar'
import { ChatBoxView } from '@/components/chatbox'
import { Menu } from '@/components/menu'

export default function chatting () {
  return (
    <div className="w-screen h-screen bg-black flex">
      <Menu />
      <div className="w-[30%] h-full bg-[#111b21] pl-12">
        <SideBar />
      </div>
      <div className="w-[70%] max-h-screen">
        <ChatBoxView />
      </div>
    </div>
  )
}
