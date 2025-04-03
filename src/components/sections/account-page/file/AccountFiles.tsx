import { useEffect, useState } from "react";
import Breadcrumb from "../../../common/BreadCrumb";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import uploadIcon from "../../../../assets/icons/account-icons/upload-icon.svg";
import addFolderIcon from "../../../../assets/icons/account-icons/add-folder-icon.svg";
import userIcon from "../../../../assets/icons/account-icons/user-icon.svg";
import { useQueryParam } from "../../../../utils/getSearchParam";
import AccountViewTabs from "../AccountViewTabs";
import { useUpdateSearchParams } from "../../../../utils/useUpdateSearchParams";
import FolderList from "../FolderList";
import { FolderProps } from "../../../../types/folder";
import ProfileImage from "../ProfileImage";

function AccountFiles({ folder }: { folder: FolderProps }) {
  const viewParam = useQueryParam("view");
  const updateSearchParams = useUpdateSearchParams();
  const [activeView, setActiveView] = useState<string | null>(viewParam);
  const [searchValue, setSearchValue] = useState("");
  const [showSharedUsers, setShowSharedUsers] = useState(false);

  const selectedFolderFiles = folder?.children || [];
  const sharedUsers = folder?.shared || [];

  const breadcrumbItems = [
    { label: "File", href: "/account" },
    { label: folder.name, href: `/account/folder/${folder.id}` },
  ];

  useEffect(() => {
    if (!viewParam) {
      updateSearchParams("view", "grid");
    }
  }, []);

  const toggleView = (view: string) => {
    setActiveView(view);
    updateSearchParams("view", view);
  };

  const toggleShowSharedUsers = () => {
    setShowSharedUsers((prevShowSharedUsers) => !prevShowSharedUsers);
  };

  return (
    <div>
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:items-center justify-between">
        <div className="flex md:gap-4 gap-1 items-center ">
          <div className="border-lightGray border-4 rounded-3xl px-3 py-2 border items-center flex gap-2 text-[#1C1C1C] xl:w-[350px]  lg:w-[300px]">
            <img
              src={searchIcon}
              alt="search"
              className="md:h-6 md:w-6 w-4 h-4"
            />
            <input
              placeholder="search"
              className="w-full outline-none bg-transparent"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <AccountViewTabs activeView={activeView} toggleView={toggleView} />
        </div>
        <div className="flex gap-6 lg:text-base text-sm">
          <button className="flex gap-2 items-center bg-[#F9F8FA] text-purple py-2 px-4 rounded-lg">
            <span>Create New Folder</span>
            <img
              src={addFolderIcon}
              alt="add folder"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </button>
          <button className="flex gap-2 items-center bg-[#F9F8FA] text-purple py-2 px-4 rounded-lg">
            <span>Upload</span>
            <img
              src={uploadIcon}
              alt="add folder"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-2 my-4">
        <img src={userIcon} alt="user" className="" />
        <div className="flex flex-col gap-3 relative">
          <div className="flex gap-2 items-center">
            <span className="cursor-pointer" onClick={toggleShowSharedUsers}>
              Shared With:
            </span>
            <div className="flex -space-x-1 items-center">
              {sharedUsers.map((user) => (
                <div className="w-7 h-7 p-[1px] bg-white">
                  <ProfileImage profileImg={user.profileImg} name={user.name} />
                </div>
              ))}
            </div>
            {showSharedUsers && (
              <div className="absolute py-4 rounded-lg shadow-lg bg-white text-[181D27] min-w-[280px] z-50 top-10">
                <div className="mb-4  px-4">
                  <p className="text-[#888888] mb-2">Shared With</p>
                  <p className="">
                    <span>Created:</span> <span>{folder?.lastModified}</span>
                  </p>
                </div>
                {sharedUsers.map((user) => (
                  <div className="flex items-center gap-3  py-3 px-4 border-t-[1px] border-t-[#E5E7EB] ">
                    <div className="w-7 h-7 p-[1px] bg-white">
                      <ProfileImage
                        profileImg={user.profileImg}
                        name={user.name}
                      />
                    </div>
                    <p>{user.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <FolderList activeView={activeView} folders={selectedFolderFiles} />
    </div>
  );
}

export default AccountFiles;
