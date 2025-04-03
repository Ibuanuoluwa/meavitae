import listIcon from "../../../assets/icons/account-icons/list-icon.svg";
import listActiveIcon from "../../../assets/icons/account-icons/list-active-icon.svg";
import gridIcon from "../../../assets/icons/account-icons/grid-icon.svg";
import gridActiveIcon from "../../../assets/icons/account-icons/grid-active-icon.svg";
interface AccountViewTabsProps {
  activeView: string | null;
  toggleView: (view: string) => void;
}

const views = [
  { id: "list", icon: listIcon, activeIcon: listActiveIcon },
  { id: "grid", icon: gridIcon, activeIcon: gridActiveIcon },
];

function AccountViewTabs({ activeView, toggleView }: AccountViewTabsProps) {
  return (
    <div className="flex bg-[#F9F8FA] rounded-full p-1 gap-2 border-2 border-[#E6E6DC]">
      {views.map((item) => {
        const isActive = item.id === activeView;

        return (
          <button
            className={` p-1.5  rounded-full ${
              isActive ? "bg-[#8686C3]" : "bg-transparent"
            }`}
            onClick={() => toggleView(item.id)}
          >
            <img
              src={isActive ? item.activeIcon : item.icon}
              alt={item.id}
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </button>
        );
      })}
    </div>
  );
}

export default AccountViewTabs;
