import React from "react";

export const chatTypeData = [
  {
    name: "Meavitae",
    unread: 3,
    id: "1",
  },
  {
    name: "Data Owl",
    unread: 0,
    id: "2",
  },
  {
    name: "JamesCo",
    unread: 3,
    id: "3",
  },
];

interface ChatTypeProps {
  activeChatType: string;
  toggleChatType: (id: string) => void;
}

function ChatType({ activeChatType, toggleChatType }: ChatTypeProps) {
  return (
    <div className="py-3 flex gap-4  flex-nowrap overflow-x-auto ">
      {chatTypeData.map((item) => (
        <button
          key={item.id}
          className={`bg-[#F9F8FA]  text-[#1C1C1C] relative md:p-3 p-2 text-sm md:text-base rounded-md md:m-w-[135px] w-fit  ${
            activeChatType === item.id && "bg-purple text-white"
          }`}
          onClick={() => toggleChatType(item.id)}
        >
          <span className="whitespace-nowrap">{item.name}</span>
          {item.unread > 0 && (
            <span className="absolute  -top-1  h-2 w-2 right-0 rounded-full bg-[#C40000]" />
          )}
        </button>
      ))}
    </div>
  );
}

export default ChatType;
