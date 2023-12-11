const plansData = [
  {
    details: {
      name: "standard",
      price: "£180",
      description: "Per year. Includes 1 free key",
      background: false,
    },
    planItems: [
      {
        title: "Protect (5GB)",
        items: [
          "Address Book (Google, Microsoft, Other)",
          "Documents (Word, PDF) 5GB",
          "Secrets (Passwords & Notes)",
        ],
        minHeight: "280px",
      },
      {
        title: "Plan",
        items: [
          "Directory Services",
          "Messaging",
          "Wishes & Letters",
          "AI Letter Writer",
          "Contract Generator",
        ],
        minHeight: "430px",
      },
      {
        title: "Wealth",
        items: ["Asset & Liability Register"],
        minHeight: "170px",
      },
      {
        title: "Service Desk",
        items: ["Email Support"],
        minHeight: "110px",
      },
      {
        title: "Benefits",
        items: [],
        minHeight: "110px",
      },
    ],
  },
  {
    details: {
      name: "Premium",
      price: "£300",
      description: "Per year. Includes 2 free keys",
      background: true,
    },
    planItems: [
      {
        title: "Protect (5GB)",
        items: [
          "Address Book (Google, Microsoft, Other)",
          "Documents (Word, PDF) 5GB",
          "Secrets (Passwords & Notes)",
          "Media (Pictures, Videos) 30GB",
        ],
        minHeight: "280px",
      },
      {
        title: "Plan",
        items: [
          "Directory Services",
          "Messaging",
          "Wishes & Letters",
          "AI Letter Writer",
          "Contract Generator",
          "Will Generator",
          "Knowledge Base",
        ],
        minHeight: "430px",
      },
      {
        title: "Wealth",
        items: ["Asset & Liability Register", "Net Worth Dashboard"],
        minHeight: "170px",
      },
      {
        title: "Service Desk",
        items: ["Priority Email Support"],
        minHeight: "110px",
      },
      {
        title: "Benefits",
        items: ["100 MV Tokens Per Month"],
        minHeight: "110px",
      },
    ],
  },
  {
    details: {
      name: "Concierge",
      price: "£1500",
      description: "Per year. Includes 2 free keys",
      background: false,
    },
    planItems: [
      {
        title: "Protect (5GB)",
        items: [
          "Address Book (Google, Microsoft, Other)",
          "Documents (Word, PDF) 5GB",
          "Secrets (Passwords & Notes)",
          "Media (Pictures, Videos) 3TB",
        ],
        minHeight: "280px",
      },
      {
        title: "Plan",
        items: [
          "Directory Services",
          "Messaging",
          "Wishes & Letters",
          "AI Letter Writer",
          "Contract Generator",
          "Will Generator",
          "Knowledge Base",
        ],
        minHeight: "430px",
      },
      {
        title: "Wealth",
        items: ["Asset & Liability Register", "Net Worth Dashboard"],
        minHeight: "170px",
      },
      {
        title: "Service Desk",
        items: ["Personal Concierge Phone Line & Premium Email Support"],
        minHeight: "110px",
      },
      {
        title: "Benefits",
        items: ["100 MV Tokens Per Month"],
        minHeight: "110px",
      },
    ],
  },
];

export default plansData;
