// Chat.tsx
import React, { useState } from "react";
import contactsData from "../../../../data/contacts";
import messagesData from "../../../../data/messages";

import ContactList from "./ContactList";
import ChatArea from "./ChatArea";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import { ContactProps, MessageProps } from "../../../../types/chats";
import ChatType, { chatTypeData } from "./ChatType";

function Chat() {
  const [contacts, setContacts] = useState<ContactProps[]>(contactsData);
  const [messages, setMessages] = useState(
    messagesData as Record<number, MessageProps[]>
  );

  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChatType, setActiveChatType] = useState(chatTypeData[1].id);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "" || !selectedContact) return;

    const newMsg: MessageProps = {
      id: messages[selectedContact].length + 1,
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages({
      ...messages,
      [selectedContact]: [...messages[selectedContact], newMsg],
    });

    setContacts(
      contacts.map((contact) =>
        contact.id === selectedContact
          ? { ...contact, lastMessage: newMessage, time: "Just now", unread: 0 }
          : contact
      )
    );

    setNewMessage("");
  };

  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
    setContacts(contacts.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedContactData = contacts.find(
    (contact) => contact.id === selectedContact
  );

  const toggleChatType = (id: string) => {
    setActiveChatType(id);
  };

  return (
    <div>
      <ChatType
        activeChatType={activeChatType}
        toggleChatType={toggleChatType}
      />
      <div className="flex bg-gray-100 overflow-y-auto bg-lightGray p-1 rounded-lg text-[#1C1C1C] h-full">
        <div
          className={`${
            selectedContact ? "hidden md:block" : "block"
          } w-full md:w-1/3 lg:w-1/4 bg-white p-2 rounded-lg`}
        >
          <div className="bg-lightGray rounded-3xl px-3 py-2 item-center flex gap-2 text-[#1C1C1C] w-full">
            <img src={searchIcon} alt="search" className="w-5 h-5" />
            <input
              placeholder="Search chats..."
              className="w-full outline-none bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ContactList
            contacts={filteredContacts}
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
          />
        </div>

        {selectedContact ? (
          <ChatArea
            contact={selectedContactData!}
            messages={messages[selectedContact] || []}
            newMessage={newMessage}
            onBack={() => setSelectedContact(null)}
            onMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <p className="text-[#888888] mt-2">
              Select a chat to start messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
