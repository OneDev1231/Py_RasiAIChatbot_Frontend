"use client"
import React, { useState } from 'react';
import { Button } from '@/components/elements';
import { selectChatBot } from '@/lib/features/dashboardSlice';
import { useBotDispatch, useBotSelector } from '@/lib/hooks/rtk_hooks';


export const LeftBar = () => {
    const {selectedChatbot, chatbots} = useBotSelector(state => state.dashboard);

    const dispatch = useBotDispatch();

    const handleSelect = (item) => {
        if (item.id === selectedChatbot?.id) {
            dispatch(selectChatBot(null));
            return;
        }
        dispatch(selectChatBot(item));
    }
    
    return (
        <div className='overflow-y-auto h-[91vh] border-r'>
            {
                !chatbots.length && <p className='text-lg p-4 text-center text-gray-800 dark:text-gray-200'>Please add a chatbot !</p> 
            }
            {
                chatbots.map((item) => {
                    return (
                        <div key={item.id} className={`flex items-center gap-1 py-4 px-8 border-b-2 cursor-pointer transition-all duration-100 ${selectedChatbot?.id === item.id ? 'bg-blue-500 hover:bg-blue-600': 'hover:bg-gray-400'}`}
                            onClick={() => {
                                handleSelect(item);
                            }}
                        >
                            <p className={`${selectedChatbot?.id === item.id ? 'text-white': ''} text-gray-800 dark:text-gray-200`}>{item.text}</p>
                        </div>
                    )
                })
            }
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
