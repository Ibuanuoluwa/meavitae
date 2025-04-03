import React from "react";
import { ContactProps } from "../../../../types/chats";

interface ContactListProps {
  contacts: ContactProps[];
  selectedContact: number | null;
  onSelectContact: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  selectedContact,
  onSelectContact,
}) => (
  <div className="overflow-y-auto h-full mt-6">
    {contacts.map((contact) => (
      <div
        key={contact.id}
        className={`flex items-center p-3 border-b border-[#E6E6DC] cursor-pointer hover:bg-gray-50 ${
          selectedContact === contact.id ? "bg-gray-200" : ""
        }`}
        onClick={() => onSelectContact(contact.id)}
      >
        <div
          className={`block w-12 h-12 rounded-full mr-3 relative ${
            contact.type === "vendor" && "border-[3px] border-[#E9B400]"
          }`}
        >
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-full h-full rounded-full"
          />
          {contact.type === "vendor" && (
            <span className="absolute text-white flex items-center justify-center h-6 w-6  bg-[#E9B400] border-2 border-white rounded-full  text-xs font-bold -bottom-1   right-0">
              V
            </span>
          )}
        </div>

        <div className="flex justify-between items-center flex-1">
          <div className="">
            <h3 className="font-semibold text-base">{contact.name}</h3>
            <p className="text-sm text-[#888888]">{`Last Updated ${contact.time}`}</p>
          </div>
          {contact.unread > 0 && (
            <p className="bg-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {contact.unread}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ContactList;
