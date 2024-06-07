"use client"
import React from 'react'
import { LeftBar } from '@/components/dash'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { useBotSelector } from '@/lib/hooks/rtk_hooks';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/elements'

export default function dashboard () {

  const {selectedChatbot} = useBotSelector(state => state.dashboard);
  const router = useRouter();

  return (
    <div className='h-screen flex flex-row justify-stretch'>
      <Menu />
      <div className='h-full w-full flex flex-col justify-start gap-2'>
        <Navbar />
        <div className='flex flex-row justify-stretch'>
          <div className='w-[20%] h-full'>
            <LeftBar />
          </div>
          <div className='w-[80%] h-full shadow-lg flex flex-col justify-between'>
            
            { selectedChatbot ? (
              <>
                <div>
                  <div className='py-7 px-10 flex flex-col gap-5 items-center'>
                    <label className='text-lg text-gray-700 dark:text-gray-200 font-semibold'>Uploaded List</label>
                    <div className='border w-5/6 p-6 flex flex-col gap-2 rounded-lg'>
                      {Array.from(selectedChatbot.files).map(
                        (item, i) => {
                            return <p key={i} className='text-gray-700 dark:text-gray-200'>{item}</p>
                          }
                        )
                      }
                    </div>                    
                  </div>
                </div>
                <div className='flex justify-center'>
                      <Button>Upsert File</Button>
                </div>
                <div className='flex justify-end pb-10 px-10'>
                  <Button onClick={() => router.push('/chatting')}>
                      {selectedChatbot?.messages?.length ? 'Continue chatting': 'Start chatting' }
                  </Button>
                </div>
              </>
            ) : (
                <p className='text-lg p-4 text-center text-gray-500'>Please select a chat bot !</p>
              )
            }    
          </div>
        </div>
      </div>
    </div>
  )
}
