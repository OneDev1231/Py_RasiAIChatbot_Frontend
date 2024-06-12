import { IoSearchOutline } from "react-icons/io5";
import React from 'react'
import { users } from '@/data/usersData'
import { Users } from "@/components/user";

export const Search = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#202c33] flex items-center gap-4 px-4 py-2 rounded-xl mx-5">
        <div className="text-xl">
            <IoSearchOutline className="text-black dark:text-white" />
        </div>
        <div>
            <input type='text' placeholder="Search" 
                className="bg-transparent outline-none"
            />
        </div>
    </div>
  )
}

export const LeftHeader = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 dark:bg-[#202c33] px-7 py-3">
      <div className="flex items-center gap-4 cursor-pointer relative py-2">
        <p className="text-xl font-semibold">Chats</p>
      </div>
      <div className="flex gap-6 items-center">
       
      </div>
    </div>
  )
}

export const SideBar = () => {
  return (
    <div>
      <LeftHeader />
      <div className="py-2" id="leftbar">
        <Search />
        <div className="mt-5">
            <p className="px-5">
                Customers
            </p>
            <Users usersData={users} />
        </div>
      </div>
    </div>
  )
}
