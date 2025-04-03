import React from "react";
import { MessageProps } from "../../../../types/chats";

const Message: React.FC<MessageProps> = ({ text, sender, time }) => {
  const isMe = sender === "me";

  return (
    <div className={`flex mb-4 ${isMe ? "justify-end" : "justify-start"}`}>
      <div className="max-w-xs md:max-w-md p-3 text-sm">
        <p
          className={`lg:max-w-lg rounded-lg p-3 ${
            isMe
              ? "bg-[#FFE5D1] rounded-tr-none"
              : "bg-[#E6F4E6] rounded-tl-none"
          }`}
        >
          {text}
        </p>
        <p className="text-xs text-[#888888] mt-2 text-end">{time}</p>
      </div>
    </div>
  );
};

export default Message;
