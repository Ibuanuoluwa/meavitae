import bankIcon from "../assets/icons/feature-menu-icons/bank-icon.svg";
import bagIcon from "../assets/icons/feature-menu-icons/bag-icon.svg";
import msgIcon from "../assets/icons/feature-menu-icons/msg-icon.svg";
import knowledgeIcon from "../assets/icons/feature-menu-icons/knowledge-icon.svg";
import legalIcon from "../assets/icons/feature-menu-icons/legal-icon.svg";
import docIcon from "../assets/icons/feature-menu-icons/doc-icon.svg";
import letterIcon from "../assets/icons/feature-menu-icons/letter-icon.svg";

const featureMenuItems = [
  {
    img: bankIcon,
    title: "Secure Digital Vault",
    description: "Digitise your most important information securely",
    id: "secure-digital",
  },
  {
    img: bagIcon,
    title: "Net Worth Calculator",
    description: "Track assets and liabilities for financial clarity",
    id: "net-worth",
  },
  {
    img: msgIcon,
    title: "Secure Messaging",
    description: "Communicate with other users with the utmost confidentiality",
    id: "secure-msg",
  },
  {
    img: knowledgeIcon,
    title: "Knowledge Base",
    description: "Informative articles for a guided life management journey",
    id: "knowlegde-base",
  },
  {
    img: legalIcon,
    title: "Legal and Financial Advisors",
    description: "Manage matters with expert guidance and support",
    id: "legal-advisors",
  },
  {
    img: docIcon,
    title: "Will & Document Creation",
    description: "Simplify legacy planning and craft vital documents",
    id: "will-creation",
  },
  {
    img: letterIcon,
    title: "AI Letter Writer",
    description: "Generate error-free letters, saving time",
    id: "ai-writer",
  },
];

export default featureMenuItems;
