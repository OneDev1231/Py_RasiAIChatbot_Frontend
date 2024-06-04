"use client"
import { Input, Button } from '@/components/elements'
import Link from 'next/link'
import React, {useState} from 'react'
import { signin } from '@/services/auth/auth'
import { useRouter } from 'next/navigation';

export default function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const response = await signin(email, password);
            console.log('Signin successful:', response);
            router.push('/dashboard')
        } catch (error) {
            console.error('Error during signin:', error.message);
        }
    };

    return (
        <div className='w-screen h-screen bg-gray-400 flex justify-center items-center'>
        <div className='w-[35%] bg-white p-10 rounded-lg'>
            <p className='text-center text-3xl font-semibold'>Login</p>

            <form>
            <div className='py-4 flex flex-col gap-4'>
                <Input type="email" placeholder='Email' className='w-full' value={email} onChange={handleEmailChange}/>
                <Input type="password" placeholder='Password' className='w-full' value={password} onChange={handlePasswordChange}/>
            </div>

            <div className='mt-2'>
                <Button className='w-full' type='submit' onClick={handleSignin}>
                    Login
                </Button>

                <p className='mt-2 text-sm text-gray-500 text-center'>
                Doesn&apos;t have an account? 
                <Link href='/auth/signup' className='font-semibold text-blue-700'> Signup</Link>
                </p>
            </div>
            </form>
        </div>
        </div>
    )
}
