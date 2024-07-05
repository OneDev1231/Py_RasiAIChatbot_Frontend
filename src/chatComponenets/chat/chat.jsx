import { ChatList } from "./chat-list";
import React, { useEffect } from "react";
import ChatTopbar from "./chat-topbar";
import { getTestMessageGroup } from "@/services/messages/get-messageGroup";
import { useMessageDispatch } from "@/lib/hooks/rtk_hooks";
import { setMessageGroup, addMessage } from "@/lib/features/messageSlice";
import toast from "react-hot-toast";
import { sendMessage as sendMessageToBackend } from "@/services/messages/send-message";

export function Chat({
  messages,
  selectedUser,
  isMobile,
  isTest,
  selectedChatBot,
}) {
  const [messagesState, setMessages] = React.useState(messages ?? []);
  const [Typing, setTyping] = React.useState(false);
  const dispatch = useMessageDispatch();

  const sendMessage = async (text) => {
    if (!text) {
      toast.dismiss();
      toast.error("Enter any message!");
      return;
    }
    const msg = {
      botcheck: false,
      message: text.message,
      createdAt: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, msg]);
    dispatch(addMessage({ info: msg }));
    try {
      const data = await sendMessageToBackend(msg, selectedChatBot.name);
      if (data) {
        const reply = {
          botcheck: true,
          message: data.message,
          createdAt: data.createdAt,
        };
        setMessages((prevMessages) => [...prevMessages, reply]);
        setTyping(false);
        dispatch(addMessage({ info: reply }));
      }
    } catch (error) {
      console.log(error);
      setTyping(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTestMessageGroup(selectedChatBot.name);
        console.log(response.messages);
        //sort by id
        dispatch(
          setMessageGroup(response.messages.sort((a, b) => a.id - b.id)),
        );
        if (isTest) setMessages(response.messages);
      } catch (error) {
        console.error(error);
      }
    };
    if (isTest) {
      fetchData();
    }
  }, [dispatch, selectedChatBot.name, isTest]);

  return (
    <div className="flex flex-col justify-between w-full h-full border-r-[#D1D5DB] border-r-[2.5px] dark:border-r-[#3A3A3D]">
      <ChatTopbar
        selectedUser={selectedUser}
        selectedChatBot={selectedChatBot}
        isTest={isTest}
      />

      <ChatList
        isTest={isTest}
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
        Typing={Typing}
        setTyping={setTyping}
      />
    </div>
  );
}
