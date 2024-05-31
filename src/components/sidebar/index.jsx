import { IoSearchOutline } from "react-icons/io5";
import React from 'react'
import { users } from '@/data/usersData'
import { Users } from "@/components/user";

export const Search = () => {
  return (
    <div className="bg-[#202c33] flex items-center gap-10 px-4 py-2 rounded-xl mx-5">
        <div className="text-xl text-white">
            <IoSearchOutline />
        </div>
        <div>
            <input type='text' placeholder="Search or start new chat" 
                className="bg-[#202c33] outline-none text-white"
            />
        </div>
    </div>
  )
}


export const SideBar = () => {
  return (
    <div className="py-2 fixed w-[30%]" id="leftbar">
        <Search />
        <div className="mt-5">
            <p className="text-white px-5">
                Friends
            </p>
            <Users usersData={users} />
        </div>
    </div>
  )
}
