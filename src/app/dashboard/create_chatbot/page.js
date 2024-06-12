"use client"

import { Button, Input } from "@/components/elements";
import { Menu } from "@/components/menu";
import { addChatbot } from "@/lib/features/dashboardSlice";
import { useBotDispatch } from "@/lib/hooks/rtk_hooks";
import withAuth from "@/services/auth/hoc";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { add_new_chatbot } from "@/services/chatbot/add-chatbot";

const CreateChatbotPage = () => {
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const [data, setData] = useState({
        name: '',
        prompt: '',
        files: [],
    })
    const inputRef = useRef(null);
    const dispatch = useBotDispatch();
    const router = useRouter();

    const handlePromptChange = (e) => {
        setData({
            ...data,
            prompt: e.target.value
        })
    }
    const handleNameChange = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }
    const handleNext = () => {
        if(!data.name && page == 1) {
            toast.dismiss();
            toast.error('Please enter the bot name!');
            return;
        }

        if(!data.prompt && page == 2) {
            toast.dismiss();
            toast.error('Please enter a purpose!');
            return;
        }
        setData({
            ...data,
            files: []
        })
        setPage(page+1);
    }
    const handleUpsertChange = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
    
        if(!file) return;
    
        console.log(file.name)
        setData((prevData) => ({
            ...prevData,
            files: [...prevData.files, file]
        }));
    }
    const handleReturn = () => {
        if (page != 1) {
            setPage(page-1);
        }
    }
    const handleAddChatbot = async (event) => {
        event.preventDefault();
        if (data.files.length == 0) {
            toast.dismiss();
            toast.error('Please upsert the files \n .docx, .pdf, .json, .csv are available');
            return;
        }
        try {
            const status_code = await add_new_chatbot(data);
            console.log(status_code)
            if (status_code == 200) {
              dispatch(addChatbot({name: data.name, prompt: data.prompt, files: data.files.map(file => file.name)}));
              toast.success("Chatbot is added successfully!")
            }
            else {
              toast.error("Error creating chatbot");
            }
          } catch (error) {
            console.log(error)
            setStatus("Error sending request");
          }
        router.push('/dashboard');
    }
    

    return (
        <div className="h-screen flex flex-row">
            <Menu />
            <div className="p-6 flex justify-center items-center w-full min-h-[91vh]">
                <div className="flex flex-col bg-gray-200 dark:bg-gray-600 py-8 px-10 w-[35%] rounded-md gap-4">
                    <div className="flex items-center justify-between">
                        <FaArrowLeft className="flex-shrink-0" onClick={handleReturn}/>
                        <div className="mx-auto">
                            <p className="text-2xl font-semibold text-center">Create Chatbot</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        { page === 1 && <div className="flex flex-col gap-4">
                            <label className="text-gray-700 dark:text-gray-200">The name of this chatbot</label>
                            <input type='text' className="w-full h-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" placeholder="Type here..." value={data.name} 
                                onChange={handleNameChange}
                            />
                        </div> }
                        { page === 2 && <div className="flex flex-col gap-4">
                            <label className="text-gray-700 dark:text-gray-200">The purpose of this chatbot</label>
                            <textarea id='multiline-input' type='text' className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" placeholder="Type here..." value={data.prompt} 
                                onChange={handlePromptChange}
                            />
                        </div> }
                        { page === 3 && <div className="flex flex-col gap-2 items-center">
                            <div className="flex flex-col justify-center gap-2 min-h-16">
                                {
                                    data.files.length > 0 && data.files.map((item, i) => {
                                        return <p key={i} className="text-center">{item.name}</p>
                                    })
                                }
                            </div>

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
                                    onChange={handleUpsertChange}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>}


                        <div className="flex flex-col justify-start">
                            <div className="flex justify-center mt-2">
                                <div className="flex">
                                    { page === 1 ? <GoDotFill className="text-2xl" /> : <GoDot className="text-2xl" /> }
                                    { page === 2 ? <GoDotFill className="text-2xl" /> : <GoDot className="text-2xl" /> }
                                    { page === 3 ? <GoDotFill className="text-2xl" /> : <GoDot className="text-2xl" /> }
                                </div>     
                            </div>

                            <div className="flex justify-end">
                                { page === 1 && <Button onClick={handleNext}>Next</Button> }
                                { page === 2 && <Button onClick={handleNext}>Next</Button> }
                                { page === 3 && <Button onClick={handleAddChatbot}>Complete</Button> }
                            </div>
                        </div>
                    </div>
                    <input type='file' ref={inputRef} multiple
                        className="hidden" onChange={handleUpsertChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default withAuth(CreateChatbotPage);