interface SharedUserProps {
  name: string;
  profileImg?: string;
}

export interface FolderProps {
  id: string;
  name: string;
  type: string;
  lastModified: string;
  size?: string;
  shared?: SharedUserProps[];
  children?: FolderProps[];
};
