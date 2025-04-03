import { useState } from "react";
import { useQueryParam } from "../../utils/getSearchParam";
import { useUpdateSearchParams } from "../../utils/useUpdateSearchParams";
import AccountTabs from "../../components/sections/account-page/AccountTabs";
import { useParams } from "react-router-dom";
import accountFolders from "../../data/accountFolders";
import AccountFiles from "../../components/sections/account-page/file/AccountFiles";
import { FolderProps } from "../../types/folder";

function AccountFilesPage() {
  const tabParam = useQueryParam("tab");
  const updateSearchParams = useUpdateSearchParams();
  const [activeTab, setActiveTab] = useState<string | null>(tabParam);
  const { folderId } = useParams<{ folderId: string }>();

  const selectedFolder = accountFolders.find(
    (folder) => folder.id === folderId
  ) as FolderProps;

  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
    updateSearchParams("tab", tabId);
  };
  return (
    <div className="flex flex-col gap-5 lg:px-20 md:py-12 px-6 py-10">
      <div>
        <AccountTabs activeTab={activeTab} toggleTab={toggleTab} />
      </div>
      <div>
        <AccountFiles folder={selectedFolder} />
      </div>
    </div>
  );
}

export default AccountFilesPage;
