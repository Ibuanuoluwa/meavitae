import { ContactProps, MessageProps } from "../../../../types/chats";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import ChatForm from "./ChatForm";

interface ChatAreaProps {
  contact: ContactProps;
  messages: MessageProps[];
  newMessage: string;
  onBack: () => void;
  onMessageChange: (value: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  contact,
  messages,
  newMessage,
  onBack,
  onMessageChange,
  onSendMessage,
}) => {
  return (
    <div className="flex flex-col flex-1 md:ml-1 min-h-full my-auto">
      <ChatHeader contact={contact} onBack={onBack} />

      <div className="flex-1 p-4 overflow-y-auto bg-white mt-1">
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}

        <ChatForm
          value={newMessage}
          onChange={onMessageChange}
          onSubmit={onSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatArea;
