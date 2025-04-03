import chatIcon from "../assets/icons/account-icons/chat-icon.svg";
import chatActiveIcon from "../assets/icons/account-icons/chat-active-icon.svg";
import fileIcon from "../assets/icons/account-icons/file-icon.svg";
import fileActiveIcon from "../assets/icons/account-icons/file-active-icon.svg";
import folderKeyIcon from "../assets/icons/account-icons/folder-key-icon.svg";
import folderKeyActiveIcon from "../assets/icons/account-icons/folder-key-active-icon.svg";
import cardIcon from "../assets/icons/account-icons/card-icon.svg";

const accountTabData = [
  {
    label: "Chat",
    id: "chat",
    iconSrc: chatIcon,
    activeIconSrc: chatActiveIcon,
  },
  {
    label: "File",
    id: "folder",
    iconSrc: fileIcon,
    activeIconSrc: fileActiveIcon,
  },
  {
    label: "Security Key",
    id: "security-key",
    iconSrc: folderKeyIcon,
    activeIconSrc: folderKeyActiveIcon,
  },
  {
    label: "Subscriptions",
    id: "subscriptions",
    iconSrc: cardIcon,
    activeIconSrc: cardIcon,
  },
];

export default accountTabData;
