import React from 'react'
import { Search } from './Search'
import { users } from '@/data/usersData'
import { Users } from './Users'

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
