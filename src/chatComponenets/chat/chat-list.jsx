import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";
import { Message, UserData } from "@/data";
import "./typing.css";

export function ChatList({
  messages,
  selectedUser,
  sendMessage,
  isMobile,
  isTest,
  Typing,
  setTyping,
}) {
  const messagesContainerRef = useRef(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatMessage = (message) => {
    if (!message) return "";

    // Replace newline characters with <br> tags
    let formattedMessage = message.replace(/\n/g, "<br>");

    // Replace **bold** markers with <b> tags
    formattedMessage = formattedMessage.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

    // Replace *italic* markers with <i> tags
    formattedMessage = formattedMessage.replace(/\*(.+?)\*/g, "<i>$1</i>");

    // Replace #### headers with <h4> tags
    formattedMessage = formattedMessage.replace(
      /#### (.+?)<br>/g,
      "<h4>$1</h4>",
    );

    // Replace ### headers with <h3> tags
    formattedMessage = formattedMessage.replace(
      /### (.+?)<br>/g,
      "<h3>$1</h3>",
    );

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
                isTest
                  ? message.botcheck
                    ? "items-start"
                    : "items-end"
                  : message.name === selectedUser.name
                    ? "items-end"
                    : "items-start",
              )}
            >
              {isTest ? (
                <div className="flex gap-3 items-center">
                  {message.botcheck && (
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

                  <span
                    className={`${message.botcheck
                        ? "bg-primary bg-opacity-20 dark:bg-primary dark:bg-opacity-30"
                        : "bg-gray-200"
                      } dark:bg-darkbg p-3 rounded-md max-w-xs`}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(message.message),
                    }}
                  ></span>
                  {!message.botcheck && (
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
                </div>
              ) : (
                <div className="flex gap-3 items-center">
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

                  <span
                    className={`${message.name !== selectedUser.name
                        ? "bg-primary bg-opacity-20 dark:bg-primary dark:bg-opacity-30"
                        : "bg-gray-200"
                      } dark:bg-darkbg p-3 rounded-md max-w-xs`}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(message.message),
                    }}
                  ></span>

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
                </div>
              )}
            </motion.div>
          ))}
          {isTest && Typing && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 10 * 0.05 + 0.2,
                },
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              className={cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap items-start",
              )}
            >
              <div className="flex gap-3 items-center">
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    // src={message.avatar}
                    src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg"
                    alt="bot"
                    width={6}
                    height={6}
                  />
                </Avatar>

                <div class="ticontainer">
                  <div class="tiblock">
                    <div class="tidot"></div>
                    <div class="tidot"></div>
                    <div class="tidot"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ChatBottombar
        sendMessage={sendMessage}
        isMobile={isMobile}
        setTyping={setTyping}
        isTest={isTest}
      />
    </div>
  );
}
