import React from "react";
import { FolderProps } from "../../../types/folder";
import folderGridImg from "../../../assets/images/account-images/folder-grid.png";
import emptyFolderGridImg from "../../../assets/images/account-images/folder-grid-empty.png";
import folderListImg from "../../../assets/images/account-images/folder-list.png";
import emptyFolderListImg from "../../../assets/images/account-images/folder-list-empty.png";
import { useHistory, useLocation } from "react-router-dom";
import ProfileImage from "./ProfileImage";

interface FolderItemProps {
  activeView: string | null;
  folder: FolderProps;
}

function FolderItem({ activeView, folder }: FolderItemProps) {
  const history = useHistory();
  const location = useLocation();

  const lastModifiedParts = folder.lastModified?.split(" ") || [];
  const lastModifiedDate = lastModifiedParts[0] || "N/A";
  const lastModifiedTime = lastModifiedParts[1] || "N/A";
  const isFolderEmpty = !folder.children || folder.children.length === 0;

  const folderClickHandler = (id: string) => {
    const searchParams = new URLSearchParams(location.search);
    history.push(`/account/folder/${id}?${searchParams.toString()}`);
  };

  return (
    <div
      onClick={() => folderClickHandler(folder.id)}
      className="cursor-pointer"
    >
      {activeView === "grid" ? (
        <div className="w-[217px] h-[173px] relative flex flex-col">
          <div className="absolute w-[217px] h-[173px]">
            <img
              src={isFolderEmpty ? emptyFolderGridImg : folderGridImg}
              alt="folder"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col px-3 py-6 z-10 justify-end gap-6 h-full w-full">
            {folder.shared && folder.shared?.length > 0 && (
              <div className="flex -space-x-3 items-center mt-3">
                {folder.shared.map((item, index) => (
                  <div key={index} className="h-6 w-6 ">
                    <ProfileImage
                      profileImg={item.profileImg}
                      name={item.name}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col text-white gap-1">
              <p className="font-normal text-sm">{`${lastModifiedDate} | ${lastModifiedTime}`}</p>
              <p className="font-medium">{folder.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center py-3 border-b-[1px] border-b-[#E6E6DC]">
          <div className="flex space-x-3 items-center">
            <div className="h-[26px] w-[32px] relative flex items-center justify-center">
              <img
                src={isFolderEmpty ? emptyFolderListImg : folderListImg}
                alt="folder"
                className="absolute h-[26px] w-[32px]"
              />
              <div className="h-4 w-4 z-10 ">
                {folder.shared && folder.shared.length > 0 && (
                  <ProfileImage
                    profileImg={folder.shared[0].profileImg}
                    name={folder.shared[0].name}
                  />
                )}
              </div>
            </div>
            <p className="md:text-base text-sm">{folder.name}</p>
          </div>
          <p className="text-[#888888]  md:text-sm text-xs">
            {lastModifiedDate}
          </p>
        </div>
      )}
    </div>
  );
}

export default FolderItem;
