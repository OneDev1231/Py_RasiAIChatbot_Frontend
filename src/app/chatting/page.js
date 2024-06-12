"use client"
import React from 'react'
import { SideBar } from '@/components/sidebar'
import { ChatBoxView } from '@/components/chatbox'
import { Menu } from '@/components/menu'
import withAuth from '@/services/auth/hoc'

const Chatting = () => {
  return (
    <div className="h-screen bg-gray-200 dark:bg-black flex flex-row justify-start">
      <Menu />
      <div className="w-1/4 h-full bg-gray-300 dark:bg-[#111b21] border-r dark:border-r-0">
        <SideBar />
      </div>
      <div className="w-3/4 h-full">
        <ChatBoxView />
      </div>
    </div>
  )
}

export default withAuth(Chatting);