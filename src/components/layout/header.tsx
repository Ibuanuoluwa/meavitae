import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import CustomButton from "../common/custom-button";
import styled from "styled-components";
import menu from "../../assets/icons/menu.svg";
import FeatureMenu from "../common/feature-menu";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between lg:px-20 px-6 md:py-3 py-2 lg:text-lg  sticky top-0 z-50 ${
        window.location.pathname === "/" ? "bg-lightPurple" : "bg-white"
      }`}
    >
      <div className="h-[50px] w-[100px] md:w-[150px] md:h-[50px]">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <button
        className="md:hidden .block"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={menu} alt="menu" />
      </button>
      <NavElements
        className={`md:flex lg:w-[65%] xl:w-[70%] justify-between items-center  ${
          showMenu && "active"
        } `}
      >
        <ul className="flex md:flex-row flex-col lg:gap-10 md:gap-3 xl:justify-between xl:w-[60%]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <div className="feature">
              <a href="/features">Features</a>
              <div className="feature-menu">
                <FeatureMenu />
              </div>
            </div>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <CustomButton background={false} text="Contact Us" />
          <button className="flex gap-3 items-center py-2 px-4 lg:py-3 lg:px-5 rounded-md md:rounded-lg lg:text-lg text-white bg-purple">
            <span>Login</span>
            <span>
              <img src={rightArrow} alt="arrow" />
            </span>
          </button>
        </div>
      </NavElements>
    </nav>
  );
}

const NavElements = styled.div`
  ul {
    li {
      a:hover {
        color: #8686c3;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 65px;
    height: calc(100vh - 65px);
    transition: all 0.3s ease-in;
    visibility: hidden;
    background-color: #efedff;
    width: 0px;
    padding: 30px;

    &.active {
      visibility: visible;
      width: 100%;
    }
  }

  .feature {
    .feature-menu {
      display: block;
      right: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      .feature-menu {
        visibility: visible;
      }
    }
  }

  @media (max-width: 768px) {
    .feature {
      .feature-menu {
        display: none;
      }
    }
  }
`;

export default Navbar;
