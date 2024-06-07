"use client"
import React, { useState, useEffect } from 'react'
import { IoMenu } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";
import { IoAnalyticsSharp, IoCartSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const Menu = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    console.log({theme})

    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    const handleNavigation = (path) => {
        setActive(path);
        router.push(path);
    }
    return (
        <div className={`${open ? 'w-48': 'w-12'}  h-screen bg-gray-700 dark:bg-gray-900 z-10 flex flex-col justify-between shadow-2xl transition-all duration-300`}>
            <div className='flex py-6 flex-col gap-2'>
                <div className='pl-3'>
                    <IoMenu className='text-gray-200 text-2xl cursor-pointer'
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/dashboard' ? 'bg-gray-400 dark:bg-gray-700': ''}`}  onClick={() => handleNavigation('/dashboard')}>
                        <RiDashboardLine  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Dashboard</p>
                    </div>

                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/analytics' ? 'bg-gray-400 dark:bg-gray-700': ''}`}  onClick={() => handleNavigation('/analytics')}>
                        <IoAnalyticsSharp  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Analytics</p> 
                    </div>

                    <div className={`p-1 cursor-pointer pl-3 flex ${active === '/marketing' ? 'bg-gray-400 dark:bg-gray-700': ''}`}  onClick={() => handleNavigation('/marketing')}>
                        <IoCartSharp  className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>Marketing</p>
                    </div>
                </div>
            </div>

            <div className='py-6'>
                <div  className='flex flex-col gap-3'>
                    <div className='p-1 pl-3' onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
                        {theme == 'dark' ? <MdLightMode className='text-2xl cursor-pointer inline-block' /> : <MdDarkMode className='text-white text-2xl cursor-pointer inline-block' />}
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>
                            {theme == 'dark' ? 'Light Mode': 'Dark Mode'}
                        </p> 
                    </div>
                    {/* <div className={`p-1 pl-3 ${active === '/settings' ? 'bg-gray-400 dark:bg-gray-700': ''}`} onClick={() => handleNavigation('/settings')}>
                        <IoSettingsOutline className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>D</p> 
                    </div> */}

                    <div className={`cursor-pointer p-1 pl-3 ${active === '/about' ? 'bg-gray-400 dark:bg-gray-700': ''}`} onClick={() => handleNavigation('/about')}>
                        <FaRegUserCircle className='text-gray-200 text-2xl cursor-pointer inline-block'/>
                        <p className={`text-gray-200 cursor-pointer inline-block ml-2 ${open ? 'visible': 'hidden'}`}>About me</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
