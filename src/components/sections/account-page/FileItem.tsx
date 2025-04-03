import React from "react";
import { FolderProps } from "../../../types/folder";
import fileGridImg from "../../../assets/images/account-images/file-grid.png";
import fileListImg from "../../../assets/images/account-images/file-list.png";

interface FolderItemProps {
  activeView: string | null;
  file: FolderProps;
}

function FileItem({ activeView, file }: FolderItemProps) {
  const lastModifiedParts = file.lastModified?.split(" ") || [];
  const lastModifiedDate = lastModifiedParts[0] || "N/A";
  const lastModifiedTime = lastModifiedParts[1] || "N/A";

  return (
    <div>
      {activeView === "grid" ? (
        <div className="w-[217px] h-[173px] relative flex flex-col">
          <div className="absolute w-[217px] h-[173px]">
            <img src={fileGridImg} alt="folder" className="w-full h-full" />
          </div>
          <div className="flex flex-col px-3 py-6 z-10 justify-end h-full w-full">
            <div className="flex flex-col text-[#888888] gap-1">
              <p>{`${lastModifiedDate} | ${lastModifiedTime}`}</p>
              <p>{`${file.type} | ${file.size}`}</p>
              <p className="text-[#1C1C1C]">{file.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center py-3 border-b-[1px] border-b-[#E6E6DC]">
          <div className="flex space-x-3 items-center">
            <div className="h-[26px] w-[32px] relative flex items-center justify-center">
              <img
                src={fileListImg}
                alt="file"
                className="absolute h-[26px] w-[32px]"
              />
            </div>
            <p className="md:text-base text-sm">{file.name}</p>
          </div>
          <p className="text-[#888888] md:text-sm text-xs">
            {lastModifiedDate}
          </p>
        </div>
      )}
    </div>
  );
}

export default FileItem;
