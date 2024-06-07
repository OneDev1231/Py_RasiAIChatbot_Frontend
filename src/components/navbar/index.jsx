"use client"
import React from 'react';
import { Button } from '../elements';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { FaPlus } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const pathName = usePathname().slice(1).split('/').shift();

    const router = useRouter();

    const handleSignout = async (e) => {
        e.preventDefault();
        response = await signout();
        if (response) {
            router.push('/auth/signin');
        }
        else {
            toast.error("Signout failed!")
        }
    }

    return (
        <nav className='w-full z-20'>
            <div className='px-8 py-3 select-none shadow-sm flex justify-between gap-5 bg-gray-200 dark:bg-gray-900'>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold'>
                        {pathName[0]?.toUpperCase() + pathName.slice(1)}
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <Button className='bg-red-500' onClick={() => router.push('/auth/signin')}>
                            Signout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
  )
}
