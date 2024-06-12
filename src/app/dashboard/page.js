"use client"
import React, { useEffect, useState } from 'react'
import { LeftBar } from '@/components/dash'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { useBotDispatch, useBotSelector } from '@/lib/hooks/rtk_hooks';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/elements'
import { FaPlus } from 'react-icons/fa'
import withAuth from '@/services/auth/hoc'
import { existing_chatbot_upsert_file } from '@/services/chatbot/upsert'
import { setSlice, updateChatbot } from '@/lib/features/dashboardSlice'
import { getChatbots } from '@/services/chatbot/get-chatbots'

const dashboard = () => {

  const {selectedChatbot} = useBotSelector(state => state.dashboard);
  const dispatch = useBotDispatch();
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getChatbots();
      dispatch(setSlice(response));
    }
    fetchData();
  }, [dispatch]);

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if(!file) return;

    console.log(file.name)
    // setUploading(true);
    setStatus("Uploading...");
    try {
      const response = await existing_chatbot_upsert_file(selectedChatbot.name, file);
      console.log(response)
      if (response == 200) {
        dispatch(updateChatbot({id: selectedChatbot?.id, newFile: file.name}));
        setStatus("File uploaded successfully!");
      }
      else {
        setStatus("Error uploading file");
      }
    } catch (error) {
      console.log(error)
      setStatus("Error uploading file!");
    }    
  };

  return (
    <div className='h-screen flex flex-row'>
      <Menu />
      <div className='flex-1 flex flex-col gap-2'>
        <Navbar />
        <div className='flex-1 flex flex-row overflow-hidden'>
          <div className='w-1/5 flex flex-col justify-start items-stretch gap-2 px-2 overflow-y-auto'>
            <Button className='flex items-center justify-center gap-2 border-b-2 cursor-pointer transition-all duration-100'
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
                <div className='flex flex-col justify-center items-center gap-3'>
                      {/* <Button onClick={handleFileChange}>Upsert File</Button> */}
                      <div>
                        <label 
                            className='bg-blue-500 text-white px-5 py-2 rounded-md cursor-pointer'
                            htmlFor="file-upload"
                        >
                            Upsert File
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                      </div>
                      <div>{status}</div>
                </div>
                <div className='flex justify-end pb-10 px-10'>
                  <Button onClick={() => router.push('/chatting')}>
                      {selectedChatbot?.messages?.length ? 'Continue chatting': 'Start chatting' }
                  </Button>
                </div>
              </>
            ) : (
                <p className='text-lg p-4 text-center text-gray-500'>Please select a chatbot</p>
              )
            }    
          </div>
        </div>
      </div>
    </div>
  )
};

export default withAuth(dashboard);
