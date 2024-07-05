"use client";
import React, { useEffect } from "react";
import { ChatBoxView } from "@/components/chatbox";
import withAuth from "@/services/auth/hoc";
import { useSearchParams } from "next/navigation";
import { getTestMessageGroup } from "@/services/messages/get-messageGroup";
import { useMessageDispatch } from "@/lib/hooks/rtk_hooks";
import { setMessageGroup } from "@/lib/features/messageSlice";

const TestChatting = () => {
  const searchParam = useSearchParams();
  const chatbotName = searchParam.get("variable");
  const dispatch = useMessageDispatch();
  // console.log(chatbotName);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTestMessageGroup(chatbotName);
      console.log(response.messages);
      dispatch(setMessageGroup(response.messages));
    };
    fetchData();
  }, [dispatch]);
  return (
    <div className="h-screen bg-gray-200 dark:bg-black flex flex-row justify-start">
      <div className="w-full h-full">
        <ChatBoxView chatbotName={chatbotName} />
      </div>
    </div>
  );
};

export default withAuth(TestChatting);
