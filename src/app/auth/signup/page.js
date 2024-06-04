"use client"
import { Input, Button } from '@/components/elements';
import { signup } from '@/services/auth/auth';
import Link from 'next/link';
import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function SignupPage () {

    const router = useRouter();
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(userName, email, password);
            toast.success('Signup successful');
            router.push('/auth/signin');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
    <div className='w-screen h-screen bg-gray-400 flex justify-center items-center'>
        <div className='w-[35%] bg-white p-10 rounded-lg'>
        <p className='text-center text-3xl font-semibold'>Signup</p>

        <form>
            <div className='py-4 flex flex-col gap-4'>
                <Input type="text" placeholder='Name' className='w-full' value={userName} onChange={handleUsernameChange}/>
                <Input type="email" placeholder='Email' className='w-full' value={email} onChange={handleEmailChange}/>
                <Input type="password" placeholder='Password' className='w-full' value={password} onChange={handlePasswordChange}/>
            </div>

            <div className='mt-2'>
            <Button className='w-full' type='submit' onClick={handleSignup}>
                Signup
            </Button>

            <p className='mt-2 text-sm text-gray-500 text-center'>
                Already have an account? 
                <Link href='/auth/signin' className='font-semibold text-blue-700'> Login</Link>
            </p>
            </div>
        </form>
        </div>
    </div>
    )
}
