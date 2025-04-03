import React, { useEffect, useState } from "react";
import AccountTabs from "../../components/sections/account-page/AccountTabs";
import accountTabData from "../../data/accountTabData";
import { useQueryParam } from "../../utils/getSearchParam";
import AccountFolder from "../../components/sections/account-page/folder/AccountFolder";
import { useUpdateSearchParams } from "../../utils/useUpdateSearchParams";
import Chat from "../../components/sections/account-page/chat";

function AccountPage() {
  const tabParam = useQueryParam("tab");
  const updateSearchParams = useUpdateSearchParams();
  const [activeTab, setActiveTab] = useState<string | null>(tabParam);

  useEffect(() => {
    if (!tabParam) {
      updateSearchParams("tab", accountTabData[0].id);
    }
  }, []);

  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
    updateSearchParams("tab", tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "chat":
        return <Chat />;
      case "folder":
        return <AccountFolder />;
      case "security-key":
        return <div>security key</div>;
      case "subscriptions":
        return <div>subscription</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-5 lg:px-20 md:py-12 px-6 py-10">
      <div>
        <AccountTabs activeTab={activeTab} toggleTab={toggleTab} />
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
}

export default AccountPage;
