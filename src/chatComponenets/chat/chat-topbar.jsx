import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function ChatTopbar({ selectedUser, selectedChatBot, isTest }) {
  console.log(selectedChatBot);
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b-[#D1D5DB] dark:border-b-[#3A3A3D] border-b-[2.5px] bg-white dark:bg-transparent">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          {isTest ? (
            <AvatarImage
              // src={selectedUser.avatar}
              src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg"
              alt={selectedUser.name}
              width={6}
              height={6}
              className="w-10 h-10 "
            />
          ) : (
            <AvatarImage
              // src={selectedUser.avatar}
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt={selectedUser.name}
              width={6}
              height={6}
              className="w-10 h-10 "
            />
          )}
        </Avatar>
        <div className="flex flex-col">
          {isTest ? (
            <span className="font-medium">{selectedChatBot?.name}</span>
          ) : (
            <>
              <span className="font-medium">{selectedUser.name}</span>
              <span className="text-xs">Active 2 mins ago</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
