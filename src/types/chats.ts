export type ContactProps = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  type?: string;
};

export type MessageProps = {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
};

export interface ChatData {
  contacts: ContactProps[];
  messages: Record<number, MessageProps[]>;
}
