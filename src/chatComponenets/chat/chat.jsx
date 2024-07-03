import { ChatList } from "./chat-list";
import React from "react";
import ChatTopbar from "./chat-topbar";

export function Chat({ messages, selectedUser, isMobile }) {
  const [messagesState, setMessages] = React.useState(messages ?? []);

  const sendMessage = (newMessage) => {
    setMessages([...messagesState, newMessage]);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full border-r-[#D1D5DB] border-r-[2.5px] dark:border-r-[#3A3A3D]">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
