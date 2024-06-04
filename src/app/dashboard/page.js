import React from 'react'
import { LeftBar, RightBar } from '@/components/dash'

export default function dashboard () {
  return (
    <div className='w-screen h-screen flex'>
        <div className='w-[20%] h-screen'>
            <LeftBar />
        </div>
        <div className='w-[80%] h-screen shadow-lg'>
            <RightBar />
        </div>
    </div>
  )
}
