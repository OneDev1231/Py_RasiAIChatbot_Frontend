"use client"
import React from 'react'
import { LeftBar } from '@/components/dash'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { useBotSelector } from '@/lib/hooks/rtk_hooks';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/elements'
import { FaPlus } from 'react-icons/fa'
import withAuth from '@/services/auth/hoc'

const dashboard = () => {

  const {selectedChatbot} = useBotSelector(state => state.dashboard);
  const router = useRouter();

  return (
    <div className='h-screen flex flex-row'>
      <Menu />
      <div className='flex-1 flex flex-col gap-2'>
        <Navbar />
        <div className='flex-1 flex flex-row overflow-hidden'>
          <div className='w-1/5 flex flex-col justify-start items-stretch gap-2 px-2 overflow-y-auto'>
            <Button className='flex items-center gap-2 py-4 px-4 border-b-2 cursor-pointer transition-all duration-100'
                onClick={() => router.push('/dashboard/create_chatbot')}
            >
              <FaPlus />
              Add Chatbot
            </Button>
            <LeftBar />
          </div>
          <div className='w-4/5 shadow-lg flex flex-col justify-between overflow-y-auto'>
            
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
};

export default withAuth(dashboard);
