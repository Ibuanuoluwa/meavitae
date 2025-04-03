import React from "react";
import mark from "../../assets/icons/mark.svg";
import SignUpForm from "../../components/sections/register-page/signup-form";

export function RegisterPage() {
  const registerList = [
    {
      title: "Complete Organisation",
      description:
        "Keep all your documents, appointments, and tasks in one secure location",
    },
    {
      title: "Peace of Mind",
      description: "Never worry about losing important information again",
    },
    {
      title: "Stress-Free Living",
      description:
        "Reduce anxiety and stress by having everything organised and easily accessible",
    },
  ];
  return (
    <div className="flex gap-3 w-full md:px-20 px-6 py-16 justify-between items-start flex-col md:flex-row ">
      <div className="flex flex-col gap-4 md:w-[45%]">
        <h1 className="header-one font-bold">Register</h1>
        <div className="md:text-xl">
          Be among the first to experience the ultimate in life organisation –
          Join Our Exclusive Testing Programme Today!
        </div>
        {registerList.map(
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
      <div className="md:w-[45%] mt-10 md:mt-0 w-full">
        <SignUpForm />
        <div className="flex gap-1 my-2">
          <span>Already a Member?</span>
          <span>
            <a href="/login" className="text-purple">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
