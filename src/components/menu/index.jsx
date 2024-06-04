"use client"
import React, { useState, useEffect } from 'react'
import { IoMenu } from "react-icons/io5";
import { RiChatSmile2Line } from "react-icons/ri";
import { IoAnalyticsSharp, IoCartSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export const Menu = () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState('/chatting');
    const router = useRouter();


    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    const handleNavigation = (path) => {
        router.push(path);
        setActive(path);
    }
    return (
        <div className={`fixed ${open ? 'w-48': 'w-12'} h-screen bg-gray-900 z-10 flex flex-col justify-between shadow-2xl transition-all duration-300`}>
            <div className='flex py-6 flex-col gap-2'>
                <div className='pl-3'>
                    <IoMenu className='text-gray-200 text-2xl cursor-pointer'
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/chatting' ? 'bg-gray-700': ''}`}  onClick={() => handleNavigation('/chatting')}>
                        <RiChatSmile2Line  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Chats</p>
                    </div>

                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/analytics' ? 'bg-gray-700': ''}`}  onClick={() => handleNavigation('/analytics')}>
                        <IoAnalyticsSharp  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Analytics</p> 
                    </div>

                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/marketing' ? 'bg-gray-700': ''}`}  onClick={() => handleNavigation('/marketing')}>
                        <IoCartSharp  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Marketing</p>
                    </div>
                </div>
            </div>

            <div className='py-6'>
                <div  className='flex flex-col gap-3'>
                    <div className={`p-1 pl-3 ${active === '/settings' ? 'bg-gray-700': ''}`} onClick={() => handleNavigation('/settings')}>
                        <IoSettingsOutline className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Settings</p> 
                    </div>

                    <div className={`cursor-pointer p-1 pl-3 ${active === '/dashboard' ? 'bg-gray-700': ''}`} onClick={() => handleNavigation('/dashboard')}>
                        <FaRegUserCircle className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Me</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
