import React from "react";
import googleBtn from "../../../assets/icons/google-play-btn.svg";
import appleBtn from "../../../assets/icons/app-store-btn.svg";
import heroImg from "../../../assets/images/hero-img.png";

export function HeroSection() {
  return (
    <div className="flex items-center justify-between px-24 py-12 bg-lightPurple">
      <div className="flex flex-col gap-7 w-[45%]">
        <h1 className="text-[3.37rem] font-bold">
          Your Life, Your Legacy, <span className="text-purple">Securely</span>{" "}
          Managed
        </h1>
        <p className="text-2xl">
          Discover Meavitae, your all-in-one digital vault solution for managing
          life's vital aspects with the highest level of security and privacy
        </p>
        <div className="flex gap-4 align-items-center mt-10">
          <button>
            <img src={googleBtn} alt="google play" />
          </button>
          <button>
            <img src={appleBtn} alt="apple store" />
          </button>
        </div>
      </div>
      <div className="w-[45%]">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
}
