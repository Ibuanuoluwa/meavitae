import profileImgOne from "../assets/images/account-images/profile-img-1.png";
import profileImgTwo from "../assets/images/account-images/profile-img-2.png";

const accountFolders = [
  {
    id: "1",
    name: "Due Diligence Assets",
    type: "folder",
    lastModified: "2024/03/20 14:30",
    shared: [
      {
        name: "jack",
        profileImg: profileImgOne,
      },
      {
        name: "jack",
      },
    ],
    children: [
      {
        id: "2",
        name: "Project Proposal.pdf",
        type: "file",
        size: "2MB",
        lastModified: "2024/03/20 14:30",
      },
      {
        id: "3",
        name: "Design Mockups",
        type: "folder",
        lastModified: "2024/03/20 14:30",
        children: [
          {
            id: "4",
            name: "Mockup1.png",
            type: "file",
            size: "1.2MB",
            lastModified: "2024/03/20 14:30",
          },
          {
            id: "5",
            name: "Mockup2.png",
            type: "file",
            size: "1.5MB",
            lastModified: "2024/03/20 14:30",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Strategic Planning",
    type: "folder",
    lastModified: "2024/03/20 18:30",
    shared: [
      {
        name: "jack",
        profileImg: profileImgOne,
      },
      {
        name: "jack",
      },
    ],
    children: [
      {
        id: "8",
        name: "Vacation Photos",
        type: "folder",
        lastModified: "2024/03/20 14:30",
        children: [
          {
            id: "9",
            name: "Beach.png",
            type: "file",
            size: "3MB",
            lastModified: "2024-02-10 16:20",
          },
          {
            id: "10",
            name: "Mountain.png",
            type: "file",
            size: "2.8MB",
            lastModified: "2024-02-11 10:05",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Mergers & Acquisitions",
    type: "folder",
    lastModified: "2024/03/20 18:30",
    shared: [
      {
        name: "jack",
        profileImg: profileImgOne,
      },
      {
        name: "jack",
      },
    ],
    children: [
      {
        id: "8",
        name: "Vacation Photos",
        type: "folder",
        lastModified: "2024/03/20 14:30",
        children: [
          {
            id: "9",
            name: "Beach.png",
            type: "file",
            size: "3MB",
            lastModified: "2024-02-10 16:20",
          },
          {
            id: "10",
            name: "Mountain.png",
            type: "file",
            size: "2.8MB",
            lastModified: "2024-02-11 10:05",
          },
        ],
      },
    ],
  },
];

export default accountFolders;
