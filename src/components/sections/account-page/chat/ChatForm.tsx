import React from "react";
import sendIcon from "../../../../assets/icons/account-icons/send-icon.svg";

import attachmentIcon from "../../../../assets/icons/account-icons/attachment-icon.svg";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatForm: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center p-2 my-2">
      <button type="button" className="p-2">
        <img src={attachmentIcon} alt="attachment" className="w-5 h-5" />
      </button>
      <div className="w-full bg-[#F9F8FA] flex gap-2 items-center py-1 pl-4 pr-2 rounded-3xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type a message"
          className="w-full h-full bg-transparent outline-none"
        />
        <button type="submit" className="p-2 bg-purple rounded-full">
          <img src={sendIcon} alt="send" className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
