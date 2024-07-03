import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";
import { Message, UserData } from "@/data";

export function ChatList({ messages, selectedUser, sendMessage, isMobile }) {
  const messagesContainerRef = useRef(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col bg-white dark:bg-transparent">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        <AnimatePresence>
          {messages?.map((message, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: "spring",
                  bounce: 0.3,
                  duration: messages.indexOf(message) * 0.05 + 0.2,
                },
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              className={cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                message.name !== selectedUser.name
                  ? "items-end"
                  : "items-start",
              )}
            >
              <div className="flex gap-3 items-center">
                {message.name === selectedUser.name && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      // src={message.avatar}
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                      alt={message.name}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}

                <span
                  className={`${message.name !== selectedUser.name
                      ? "bg-primary bg-opacity-20 dark:bg-primary dark:bg-opacity-30"
                      : "bg-gray-200"
                    } dark:bg-darkbg p-3 rounded-md max-w-xs`}
                >
                  {message.message}
                </span>

                {message.name !== selectedUser.name && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      // src={message.avatar}
                      src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg"
                      alt={message.name}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  );
}
