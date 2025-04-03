import contactOneImg from "../assets/images/account-images/contact-img-1.png";
import contactTwoImg from "../assets/images/account-images/contact-img-2.png";
import contactThreeImg from "../assets/images/account-images/contact-img-3.png";
import contactFourImg from "../assets/images/account-images/contact-img-4.png";

const contactsData = [
  {
    id: 1,
    name: "Charlotte Morgan",
    avatar: contactOneImg,
    lastMessage: "Hey, how are you doing?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Carter Family",
    avatar: contactTwoImg,
    lastMessage: "Meeting at 3 PM",
    time: "9:45 AM",
    unread: 0,
  },
  {
    id: 3,
    name: "Aston Veer",
    avatar: contactThreeImg,
    lastMessage: "Please send me the files",
    time: "Yesterday",
    unread: 5,
    type: "vendor",
  },
  {
    id: 4,
    name: "Benjamin Lopez",
    avatar: contactFourImg,
    lastMessage: "Thanks for your help!",
    time: "Yesterday",
    unread: 0,
  },
];

export default contactsData;
