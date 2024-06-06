import React from 'react'
import { SideBar } from '@/components/sidebar'
import { ChatBoxView } from '@/components/chatbox'
import { Menu } from '@/components/menu'

export default function chatting () {
  return (
    <div className="w-screen h-screen bg-gray-200 dark:bg-black flex">
      <Menu />
      <div className="w-[30%] h-full bg-gray-300 dark:bg-[#111b21] pl-12 border-r dark:border-r-0">
        <SideBar />
      </div>
      <div className="w-[70%] h-full">
        <ChatBoxView />
      </div>
    </div>
  )
}
