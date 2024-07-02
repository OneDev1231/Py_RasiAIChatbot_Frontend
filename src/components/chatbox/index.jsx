"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { useMessageDispatch, useMessageSelector } from "@/lib/hooks/rtk_hooks";
import { addMessage } from "@/lib/features/messageSlice";
import toast from "react-hot-toast";
import { sendMessage } from "@/services/messages/send-message";

const style1 =
  "self-start bg-[#202c33] px-3 py-2 rounded-lg max-w-[50%] rounded-tl-none relative";
const style2 =
  "self-end bg-[#005c4b] px-3 py-2 rounded-lg max-w-[50%]  rounded-tr-none relative";

const formatMessage = (message) => {
  if (!message) return "";

  // Replace newline characters with <br> tags
  let formattedMessage = message.replace(/\n/g, "<br>");

  // Replace **bold** markers with <b> tags
  formattedMessage = formattedMessage.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

  // Replace *italic* markers with <i> tags
  formattedMessage = formattedMessage.replace(/\*(.+?)\*/g, "<i>$1</i>");

  // Replace #### headers with <h4> tags
  formattedMessage = formattedMessage.replace(/#### (.+?)<br>/g, "<h4>$1</h4>");

  // Replace ### headers with <h3> tags
  formattedMessage = formattedMessage.replace(/### (.+?)<br>/g, "<h3>$1</h3>");

  // Replace ## headers with <h2> tags
  formattedMessage = formattedMessage.replace(/## (.+?)<br>/g, "<h2>$1</h2>");

  // Replace # headers with <h1> tags
  formattedMessage = formattedMessage.replace(/# (.+?)<br>/g, "<h1>$1</h1>");

  // Replace `inline code` markers with <code> tags
  formattedMessage = formattedMessage.replace(/`(.+?)`/g, "<code>$1</code>");

  // Replace triple backticks ```code block``` markers with <pre><code> tags
  formattedMessage = formattedMessage.replace(
    /```(.+?)```/gs,
    "<pre><code>$1</code></pre>",
  );
  return formattedMessage;
};

const MessageComponent = ({ message }) => {
  return (
    <div
      className="text-white"
      // Use dangerouslySetInnerHTML to render the formatted message
      dangerouslySetInnerHTML={{ __html: formatMessage(message) }}
    />
  );
};

export const RightHeader = ({ chatbotName }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 dark:bg-[#202c33] px-7 py-3 border-l border-transparent">
      <div className="flex items-center gap-4 cursor-pointer">
        <p className="text-xl">{chatbotName}</p>
      </div>
      <div className="cursor-pointer">
        <SlOptionsVertical />
      </div>
    </div>
  );
};

export const ChatBox = () => {
  // const selectedChatbot = useBotSelector(state => state.dashboard.selectedChatbot);
  const group_messages = useMessageSelector((state) => state.message.messages);
  return (
    <div className="flex flex-col-reverse gap-4 px-20 overflow-y-auto py-6">
      {!group_messages?.length && (
        <p className="text-center">Start messaging!</p>
      )}
      {group_messages
        ?.slice()
        .reverse()
        .map((item) => {
          return (
            <div key={item?.id} className={!item?.botcheck ? style2 : style1}>
              {/* <p className={`text-white`}>{ item?.message }</p> */}
              <MessageComponent message={item?.message} />
              <p className="text-[11px] text-zinc-300 text-right">
                {new Date(item?.createdAt).toString().slice(0, 16)}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export const MessageComposer = ({
  handleChangeText,
  text,
  handleSendMessage,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Maximum height is 30% of the viewport height
      const maxHeight = window.innerHeight * 0.3;
      // Reset height - important to shrink on delete
      textareaRef.current.style.height = "auto";
      // Calculate the new height based on scroll height
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      // Set the new height
      textareaRef.current.style.height = `${newHeight}px`;

      // Add overflow if content exceeds maxHeight
      if (textareaRef.current.scrollHeight > maxHeight) {
        textareaRef.current.style.overflow = "auto";
      } else {
        textareaRef.current.style.overflow = "hidden";
      }
    }
  }, [text]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };
  return (
    <div className="bg-gray-200 dark:bg-[#202c33] w-full">
      <form onSubmit={handleSendMessage}>
        <div className="px-6 py-3 flex flex-row justify-between items-center gap-4">
          <GrAttachment className="text-gray-500 dark:text-gray-300 text-2xl cursor-pointer" />
          <textarea
            placeholder="Type a message"
            className="px-5 py-3 rounded-lg w-full outline-none resize-none overflow-hidden"
            onChange={handleChangeText}
            value={text}
            onKeyDown={handleKeyDown}
            rows={1}
            ref={textareaRef}
          />
          <div
            className=" text-3xl cursor-pointer"
            type="submit"
            onClick={handleSendMessage}
          >
            <IoMdSend />
          </div>
        </div>
      </form>
    </div>
  );
};

export const ChatBoxView = ({ chatbotName }) => {
  // const selectedChatbot = useBotSelector(state => state.dashboard.selectedChatbot);
  const [text, setText] = useState("");

  const dispatch = useMessageDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text) {
      toast.dismiss();
      toast.error("Enter any message!");
      return;
    }
    const msg = {
      botcheck: false,
      message: text,
      createdAt: new Date().toISOString(),
    };
    setText("");
    dispatch(addMessage({ info: msg }));
    try {
      const data = await sendMessage(msg, chatbotName);
      console.log(data);
      if (data !== null) {
        const reply = {
          botcheck: true,
          message: data.message,
          createdAt: data.createdAt,
        };
        dispatch(addMessage({ info: reply }));
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
    // dispatch(addChat({id: selectedChatbot?.id, info: msg}))
    setText("");
  };

  return (
    <div
      className="relative h-full flex flex-col justify-between"
      id="rightbar"
    >
      <RightHeader chatbotName={chatbotName} />
      <div className="flex flex-1 flex-col justify-end w-full h-full bg-gray-300 dark:bg-black overflow-hidden">
        <ChatBox />
        <MessageComposer
          handleChangeText={handleChangeText}
          handleSendMessage={handleSendMessage}
          text={text}
        />
      </div>
    </div>
  );
};
