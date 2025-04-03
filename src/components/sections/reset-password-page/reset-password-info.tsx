import React from "react";
import mark from "../../../assets/icons/mark.svg";

function ResetPasswordInfo() {
  const loginList = [
    {
      title: "Enhanced Productivity",
      description:
        "Save time and increase efficiency with streamlined life management",
    },
    {
      title: "Secure Access",
      description:
        " Protect your information with our advanced security key system",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:w-[45%]">
      <h1 className="header-one font-bold">Reset PassWord</h1>
      <div className="md:text-xl">
        “MeaVitae has transformed the way I manage my life. It’s like having a
        personal assistant that’s always there, making sure I never miss
        anything important. Truly a game-changer!” –{" "}
        <strong>Sarah T, Beta Tester</strong>
      </div>
      {loginList.map(
        (item: { title: string; description: string }, index: number) => (
          <div className="flex gap-4 items-center md:text-xl" key={index}>
            <p>
              <img src={mark} alt="mark" className="min-w-[30px]" />
            </p>
            <p>
              <span>{item.title}:</span>
              {item.description}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default ResetPasswordInfo;
