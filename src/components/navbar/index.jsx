"use client"
import React from 'react';
import { Button } from '../elements';
import { createClient } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const Navbar = () => {
    const pathName = usePathname().slice(1).split('/').shift();

    const router = useRouter();
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    const handleSignout = async () => {
        
        console.log(await supabase.auth.signOut());
        try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/signout`,
              {},
              { withCredentials: true }  // Ensure cookies are sent with the request
            );
      
            if (response.status !== 200) {
              throw new Error('Signout failed');
            }
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
            router.push('/auth/signin');
          } catch (error) {
            console.error('Failed to sign out', error);
            toast.error('Failed to sign out')
          }
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
