import React from "react";
import { ContactProps } from "../../../../types/chats";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import backIcon from "../../../../assets/icons/account-icons/back-icon.svg";

interface ChatHeaderProps {
  contact: ContactProps;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contact, onBack }) => {
  return (
    <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <button className="mr-4" onClick={onBack}>
          <img src={backIcon} alt="back" className="w-5 h-5" />
        </button>
        <img
          src={contact.avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex-1 text-sm">
          <h1 className="font-semibold">{contact.name}</h1>
          <p className="text-xs text-purple">View Contact</p>
        </div>
      </div>
      <button>
        <img src={searchIcon} alt="search" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
