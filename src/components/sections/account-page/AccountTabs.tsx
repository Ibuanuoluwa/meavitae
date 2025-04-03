import accountTabData from "../../../data/accountTabData";

interface AccountTabsProps {
  activeTab: string | null;
  toggleTab: (tabId: string) => void;
}

function AccountTabs({ activeTab, toggleTab }: AccountTabsProps) {
  return (
    <div className="flex overflow-x-auto flex-nowrap">
      {accountTabData.map((tab) => (
        <button
          className={`flex  gap-2 px-5  border-b-4 border-b-[#F9F8FA] items-center text-[#8D8D8D] text-sm md:text-lg  py-3  ${
            activeTab === tab.id && "border-b-purple text-purple"
          }`}
          onClick={() => toggleTab(tab.id)}
        >
          <img
            src={activeTab === tab.id ? tab.activeIconSrc : tab.iconSrc}
            alt={tab.id}
          />
          <p className="whitespace-nowrap">{tab.label}</p>
        </button>
      ))}
    </div>
  );
}

export default AccountTabs;
