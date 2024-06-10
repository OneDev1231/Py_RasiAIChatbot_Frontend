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

const CreateChatbotPage = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({
        text: '',
        files: []
    })
    const inputRef = useRef(null);
    const dispatch = useBotDispatch();
    const router = useRouter();

    const handleTextChange = (e) => {
        setData({
            ...data,
            text: e.target.value
        })
    }

    const handleNext = () => {
        if(!data.text) {
            toast.dismiss();
            toast.error('Please enter a purpose!');
            return;
        }
        setData({
            ...data,
            files: []
        })
        setPage(2);
    }

    const handleOpenFiles = () => {
        inputRef.current?.click();
    }

    const handleUpsertChange = (e) => {
        setData({
            ...data,
            files: e.target.files
        })
    }

    const handleAddChatbot = () => {
        if (!data.files.length) {
            toast.dismiss();
            toast.error('Please upsert atlease 1 file!');
            return;
        }
        dispatch(addChatbot(data));
        router.push('/dashboard');
    }
    const handleReturn = () => {
        setPage(1);
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
                            <label className="text-gray-700 dark:text-gray-200">The purpose of this chatbot</label>
                            <textarea id='multiline-input' type='text' className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700" placeholder="Type here..." value={data.text} 
                                onChange={handleTextChange}
                            />
                        </div> }

                        { page === 2 && <div className="flex flex-col gap-2">
                            <div className="flex flex-col justify-center gap-2 min-h-16">
                                {
                                    data.files.length > 0 && Array.from(data.files).map((item, i) => {
                                        return <p key={i} className="text-center">{item.name}</p>
                                    })
                                }
                            </div>

                            <div className="flex justify-center">
                                <Button onClick={handleOpenFiles}>Upsert file</Button>
                            </div>
                        </div>}

                        <div className="flex flex-col justify-start">
                            <div className="flex justify-center mt-2">
                                <div className="flex">
                                    { page === 1 ? <GoDotFill className="text-2xl" /> : <GoDot className="text-2xl" /> }
                                    { page ===2 ? <GoDotFill className="text-2xl" /> : <GoDot className="text-2xl" /> }
                                </div>
                            </div>

                            <div className="flex justify-end">
                                { page === 1 && <Button onClick={handleNext}>Next</Button> }
                                { page === 2 && <Button onClick={handleAddChatbot}>Complete</Button> }
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