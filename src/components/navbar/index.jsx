"use client"
import React from 'react';
import { Button } from '../elements';
import { createClient } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const Navbar = () => {
    const pathName = usePathname().slice(1).split('/').shift();

    const router = useRouter();
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    const handleSignout = async () => {
        
        await supabase.auth.signOut();
        Cookies.remove('access_token', { path: '/', domain: '.rasi.ai', secure: true })
        console.log(Cookies.get('access_token'))
        Cookies.remove('refresh_token', { path: '/', domain: '.rasi.ai', secure: true })
        console.log(Cookies.get('refresh_token'))
        router.push('/auth/signin');
    }

    return (
        <nav className='w-full'>
            <div className='px-8 py-3 select-none shadow-sm flex justify-between gap-5 bg-gray-200 dark:bg-gray-900'>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold'>
                        {pathName[0]?.toUpperCase() + pathName.slice(1)}
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>
                        <Button className='bg-red-500' onClick={handleSignout}>
                            Signout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
  )
}
