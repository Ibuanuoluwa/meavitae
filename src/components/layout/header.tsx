import logo from "../../assets/icons/logo.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import CustomButton from "../common/custom-button";
import styled from "styled-components";

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-8 text-lg bg-lightPurple">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <UlStyle className="flex gap-2 w-[40%] justify-between">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
      </UlStyle>
      <div className="flex items-center gap-4">
        <CustomButton background={false} text="Contact Us" />
        <button className="flex gap-3 items-center py-4 px-6 rounded-lg text-white bg-purple">
          <span>Login</span>
          <span>
            <img src={rightArrow} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}

const UlStyle = styled.ul`
  li {
    a:hover {
      color: #8686c3;
    }
  }
`;

export default Navbar;
