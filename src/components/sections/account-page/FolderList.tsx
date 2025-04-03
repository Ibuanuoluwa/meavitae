import React from "react";
import FileItem from "./FileItem";
import FolderItem from "./FolderItem";
import { FolderProps } from "../../../types/folder";

interface FolderListProps {
  activeView: string | null;
  folders: FolderProps[];
}

function FolderList({ activeView, folders }: FolderListProps) {
  return (
    <div
      className={`my-6 flex ${
        activeView === "grid" ? "flex-row gap-4 flex-wrap" : "flex-col"
      }`}
    >
      {folders.map((item) =>
        item.type === "file" ? (
          <FileItem activeView={activeView} file={item} />
        ) : (
          <FolderItem activeView={activeView} folder={item} />
        )
      )}
    </div>
  );
}

export default FolderList;
