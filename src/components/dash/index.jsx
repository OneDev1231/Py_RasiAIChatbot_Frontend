"use client"
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Button, Input } from '@/components/elements'

const workspaces = [
    {
        id: 1,
        name: "SalesAI",
    },
    {
        id: 2,
        name: "Project 2",
    },
    {
        id: 3,
        name: "Project 3",
    },
    {
        id: 4,
        name: "Project 4",
    },
]

export const AddWorkspace = ({onClose}) => {
    return (
      <div className='fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50' >
          <div className='w-[30%] bg-white rounded-md p-5'>
              <p className='text-center text-2xl font-semibold'>Add new Workspace</p>
  
              <div className='py-5 flex flex-col gap-5'>
                  <Input type='text' placeholder='Workspace name' className='w-full' />
  
                  <Button className='w-full' onClick={onClose}>
                      Add Workspace
                  </Button>
              </div>
          </div>
      </div>
    )
}
  

export const LeftBar = () => {
    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
    const [openDropDown, setOpenDropDown] = useState(false);

    return (
        <div>
            <div className='px-3 py-4 bg-gray-600 select-none'>
                <div className='flex justify-center items-center gap-2 cursor-pointer'>
                    <p className='text-white flex items-center gap-2' onClick={() => setOpenDropDown(!openDropDown)}>
                        {selectedWorkspace.name}
                        { openDropDown ? <FaAngleUp /> : <FaAngleDown /> }
                    </p>

                    { openDropDown && <div className='absolute top-12 bg-gray-500 pb-1 rounded-md'>
                        {
                            workspaces.map((item) => {
                                if (item.id === selectedWorkspace.id) return null;
                                return (
                                    <div key={item.id} className='px-5 cursor-pointer hover:bg-gray-300 duration-300 transition-all'
                                        onClick={() => {
                                            setSelectedWorkspace(item)
                                            setOpenDropDown(false);
                                        }}
                                    >
                                        <p className='text-gray-100 hover:text-black duration-300 transition-all'>{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div> }
                </div>
            </div>
        </div>
    )
}

export const RightBar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className='px-3 py-2  select-none shadow-md flex justify-end'>
                <Button onClick={() => setOpenModal(true)}>
                    Add Workspace
                </Button>
            </div>
            { openModal && <AddWorkspace onClose={() => setOpenModal(false)} /> }
        </div>
    )
}
