import { useState } from "react";
import plusIcon from "../../../assets/icons/faqs/plus.svg";
import minusIcon from "../../../assets/icons/faqs/minus.svg";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection() {
  const FAQData: FAQ[] = [
    {
      question: "What is MeaVitae, and how does it work?",
      answer:
        "MeaVitae is a life management platform that allows you to securely manage your assets, liabilities, contacts, and important documents in one place. It utilises advanced FIDO2 cryptographic hardware for security.",
    },
    {
      question: "How do I get started with MeaVitae?",
      answer:
        "MeaVitae is a life management platform that allows you to securely manage your assets, liabilities, contacts, and important documents in one place. It utilises advanced FIDO2 cryptographic hardware for security..",
    },
    {
      question: "Can I view my Net Worth and Estate Overview on MeaVitae?",
      answer:
        "MeaVitae is a life management platform that allows you to securely manage your assets, liabilities, contacts, and important documents in one place. It utilises advanced FIDO2 cryptographic hardware for security..",
    },
    {
      question: "How do I create a will using MeaVitae?",
      answer:
        "MeaVitae is a life management platform that allows you to securely manage your assets, liabilities, contacts, and important documents in one place. It utilises advanced FIDO2 cryptographic hardware for security..",
    },
    {
      question: "What is the Secure Digital Vault, and how does it work?",
      answer:
        "MeaVitae is a life management platform that allows you to securely manage your assets, liabilities, contacts, and important documents in one place. It utilises advanced FIDO2 cryptographic hardware for security..",
    },
  ];

  const [openFAQs, setOpenFAQs] = useState<boolean[]>(
    new Array(FAQData.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    const updatedFAQs = openFAQs.map((value, i) =>
      i === index ? !value : false
    );
    setOpenFAQs(updatedFAQs);
  };

  return (
    <div className="md:px-20 px-6 py-8 flex flex-col  mt-8 gap-8">
      <h1 className="header-one font-bold text-center">FAQs</h1>
      <p className="md:text-2xl text-lg text-center">
        See how we are helping people manage their lives better
      </p>
      <ul>
        {FAQData.map((FAQ, index) => (
          <li className="mb-5" key={index}>
            <div
              className="flex items-center justify-between md:p-5 p-2 bg-lightGray cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="font-semibold md:text-2xl">{FAQ.question}</p>
              <img
                src={openFAQs[index] ? minusIcon : plusIcon}
                alt={openFAQs[index] ? "minus" : "plus"}
              />
            </div>
            {openFAQs[index] && (
              <div className="md:p-5 p-2 bg-lightGray mt-5 md:text-xl">
                <p>{FAQ.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQSection;
