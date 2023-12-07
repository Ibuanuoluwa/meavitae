import logo from "../../assets/icons/logo.svg";
import instagramIcon from "../../assets/icons/social-media/instagram.svg";
import linkedinIcon from "../../assets/icons/social-media/linkedin.svg";
import twitterIcon from "../../assets/icons/social-media/twitter.svg";
import googleBtn from "../../assets/icons/google-play-btn.svg";
import appleBtn from "../../assets/icons/app-store-btn.svg";

export function Footer() {
  return (
    <div className="md:px-20 md:py-16 px-6 py-8 flex md:flex-row flex-col-reverse md:justify-between mt-16 gap-8 bg-lightGray">
      <div className="md:w-[33%] flex flex-col gap-8">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p className="break-words  text-xl">
          1a The Quadrant Courtyard <br />
          Quadrant Way <br /> Weybridge <br />
          United Kingdom
          <br /> KT13 8DR
        </p>
        <div className="flex gap-6 items-center">
          <div>
            <img src={instagramIcon} alt="instagram" />
          </div>
          <div>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
          <div>
            <img src={twitterIcon} alt="twitter" />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <button className="max-w-[35%] max-h-[45px]">
            <img src={googleBtn} alt="google play" className="w-full h-full" />
          </button>
          <button className="max-w-[35%] max-h-[45px]">
            <img src={appleBtn} alt="apple store" className="w-full h-full" />
          </button>
        </div>
      </div>
      <div className="md:w-[33%]">
        <h1 className="text-2xl">Product Features</h1>
        <ul className="mt-6 flex flex-col gap-4">
          <li>
            <a href="/">Secure Digital Vault</a>
          </li>
          <li>
            <a href="/">Net Worth Calculator</a>
          </li>
          <li>
            <a href="/">Legal and Financial Advisors</a>
          </li>
          <li>
            <a href="/">Will and Document Creation</a>
          </li>
          <li>
            <a href="/">Secure Messaging</a>
          </li>
          <li>
            <a href="/">AI Letter Writer</a>
          </li>
          <li>
            <a href="/">AI Letter Writer</a>
          </li>
          <li>
            <a href="/">Knowledge Base</a>
          </li>
        </ul>
      </div>
      <div className="md:w-[33%]">
        <h1 className="text-2xl">Quick Links</h1>
        <ul className="mt-6 flex flex-col gap-4">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Partners</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Terms of Purchase</a>
          </li>
          <li>
            <a href="/">Cookie Policy</a>
          </li>
          <li>
            <a href="/">Privacy Notice</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
