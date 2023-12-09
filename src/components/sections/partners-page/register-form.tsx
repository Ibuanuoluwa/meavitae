import React from "react";
import styled from "styled-components";

export function RegisterForm() {
  const FormWrapper = styled.div`
    form {
      input {
        border-radius: 8px;
        background: #f9f9f9;
        padding: 15px 20px;
      }
      textarea {
        border-radius: 8px;
        background: #f9f9f9;
        padding: 15px 20px;
      }
    }
  `;
  return (
    <FormWrapper className="md:px-20 md:py-12 px-6 py-10  md:my-20 my-10">
      <h1 className="header-one font-bold ">Register Interest</h1>
      <form className="flex flex-col gap-6 my-10">
        <div className="flex flex md:flex-row md:justify-between flex-col gap-4">
          <div className="md:w-[50%]">
            <input type="text" placeholder="Full Name" className="w-full" />
          </div>
          <div className="md:w-[50%]">
            <input type="text" placeholder="Email Address" className="w-full" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between gap-4">
          <div className="md:w-[50%]">
            <input type="text" placeholder="Organization" className="w-full" />
          </div>
          <div className="md:w-[50%]">
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full"
            />
          </div>
        </div>
        <div>
          <textarea placeholder="message" className="w-full md:min-h-[130px]" />
        </div>
      </form>
    </FormWrapper>
  );
}
