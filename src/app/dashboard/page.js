"use client"
import React, { useEffect, useRef, useState } from 'react'
import { LeftBar } from '@/components/dash'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { useBotDispatch, useBotSelector } from '@/lib/hooks/rtk_hooks';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/elements'
import { FaPlus, FaTrash } from 'react-icons/fa'
import withAuth from '@/services/auth/hoc'
import { existing_chatbot_upsert_file, existing_chatbot_upsert_text } from '@/services/chatbot/upsert'
import { deleteUpsertedFile, selectChatBot, setSlice, updateChatbot } from '@/lib/features/dashboardSlice'
import { getChatbots } from '@/services/chatbot/get-chatbots'
import toast from 'react-hot-toast'

const Dashboard = () => {

  const {selectedChatbot} = useBotSelector(state => state.dashboard);
  const dispatch = useBotDispatch();
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChatbots();
      dispatch(setSlice(response));
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (selectChatBot) {
      setText(selectedChatbot?.text);
      setPrompt(selectedChatbot?.prompt);
    }
  }, [selectedChatbot]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if(!file) return;

    console.log(file.name)
    // setUploading(true);
    setStatus("Uploading...");
    try {
      const response = await existing_chatbot_upsert_file(selectedChatbot.name, file);
      console.log(response)
      if (response == 200) {
        console.log(file.name)
        dispatch(updateChatbot({id: selectedChatbot?.id, newFile: file.name, text: null}));
        setStatus("File uploaded successfully!");
      }
      else {
        setStatus("Error uploading file");
      }
    } catch (error) {
      console.log(error)
      setStatus("Error uploading file!");
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleTextUpsert = async () => {
    try {
      const response = await existing_chatbot_upsert_text(selectedChatbot.name, text);
      console.log(response)
      if (response == 200) {
        dispatch(updateChatbot({id: selectedChatbot?.id, text: text}));
        setStatus("Text upserted successfully!");
      }
      else {
        setStatus("Error upserting file");
      }
    } catch (error) {
      console.log(error)
      setStatus("Request error");
    }
  };
  const handleDeleteUploadedFile = async (item) => {
    console.log(item);
    try {
      const response = await existing_chatbot_upsert_file(selectedChatbot.name, file);
      console.log(response)
      if (response == 200) {
        dispatch(deleteUpsertedFile({id: selectChatBot?.id, deletedFile: item}));
        toast.success("File deleted successfully!");
      }
      else {
        toast.error("Didn't delted properly.");
      }
    } catch (error) {
      console.log(error)
      toast.error("Request error!");
    }    
    

  };

  const handleTestChattingClick =  () => {
    const chatbotName = selectedChatbot.name;
    router.push(`/test_chatting/?variable=${chatbotName}`);
  }
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
                <div className='border mx-10 my-7 flex flex-col gap-2 justify-between'>
                  <div className='flex justify-center'>
                    <label className='pt-3 text-lg text-gray-700 dark:text-gray-200 font-semibold items-center'>Prompts</label>
                  </div>
                  <div className='w-full px-6 pb-3'>
                    <textarea id='multiline-input' type='text' className="flex overflow-y-auto w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" placeholder={prompt} value={prompt} /> {/*onChange={handlePromptChange} />} */}
                  </div>
                  {/* <div className='flex justify-end pb-3 px-6'>
                    <Button>Change</Button>
                  </div> */}
                </div>

                <div className='border mx-10 my-7 flex flex-col gap-2 justify-between'>
                  <div className='flex justify-center'>
                    <label className='pt-3 text-lg text-gray-700 dark:text-gray-200 font-semibold items-center'>Embedded Plain Text</label>
                  </div>
                  <div className='w-full px-6'>
                    <textarea id='multiline-input' type='text' className="flex overflow-y-auto w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" placeholder="Please write the plain text to embed" value={text} onChange={handleTextChange}/>
                  </div>
                  <div className='flex justify-end pb-3 px-6'>
                    <Button onClick={handleTextUpsert}>Upsert</Button>
                  </div>
                </div>

                <div>
                  <div className='border my-7 mx-10 flex flex-col gap-5 items-center'>
                    <label className='pt-3 text-lg text-gray-700 dark:text-gray-200 font-semibold'>Uploaded File List</label>
                    <div className='w-full px-6 flex flex-col gap-2 rounded-lg'>
                      {
                        selectedChatbot.files == null ? (
                          <div>
                            There is no file upserted.
                          </div>
                        ) : (
                          Array.from(selectedChatbot.files).map(
                            (item, i) => {
                                return (
                                  <div key={i} className='flex flex-row justify-between items-center border rounded-lg px-2'>
                                    <p className='text-gray-700 dark:text-gray-200'>{item}</p>
                                    <FaTrash onClick={() => handleDeleteUploadedFile(item)} className='cursor-pointer' />
                                  </div>
                                )
                              }
                            )
                        )
                      }
                      <div className='flex justify-end'>
                      {/* <Button onClick={handleFileChange}>Upsert File</Button> */}
                        <div className='flex flex-col items-center gap-3'>
                          <label 
                              className='bg-blue-500 text-white px-5 py-2 rounded-md cursor-pointer'
                              htmlFor="file-upload"
                          >
                              Upsert File
                          </label>
                          <input
                              id="file-upload"
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              style={{ display: 'none' }}
                          />
                          <div>{status}</div>
                      </div>
                      </div>
                    </div>                    
                  </div>
                </div>
                
                <div className='flex justify-end gap-2 pb-10 px-10'>
                  <Button onClick={handleTestChattingClick}>
                      Test chatting
                  </Button>
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

export default withAuth(Dashboard);
