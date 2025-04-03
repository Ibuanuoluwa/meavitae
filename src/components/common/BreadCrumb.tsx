import { Link, useLocation } from "react-router-dom";
import chevronRightIcon from "../../assets/icons/account-icons/chevron-right-icon.svg";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav aria-label="breadcrumb" className="py-2">
      <ol className="flex items-center space-x-2 text-base md:text-lg   ">
        {items.map((item, index) => {
          const isActive = location.pathname === item.href;

          return (
            <li key={index} className="flex items-center ">
              {isActive ? (
                <span className="text-[#263238] ">{item.label}</span>
              ) : (
                <Link to={item.href} className=" text-[#B8B8B8]">
                  {item.label}
                </Link>
              )}
              {(index + 1 !== items.length || index === 0) && (
                <img
                  src={chevronRightIcon}
                  alt="right-arrow"
                  className="h-4 w-4   md:h-6 md:w-6"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
