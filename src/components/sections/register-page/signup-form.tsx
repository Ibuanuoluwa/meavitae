import React, { useState } from "react";
import CustomInput from "../../common/custom-input";
import CustomButton from "../../common/custom-button";
import rightArrow from "../../../assets/icons/right-arrow.svg";

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [phone, setPhone] = useState("");
  const [postalAddress, setPostalAddress] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full">
      <div>
        <CustomInput
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <CustomInput
            label="Organisation"
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </div>
        <div className="w-full">
          <CustomInput
            label="Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <CustomInput
          label="Postal Address"
          type="text"
          value={postalAddress}
          onChange={(e) => setPostalAddress(e.target.value)}
        />
      </div>
      <div>
        <CustomButton
          text="Create Account"
          type="primary"
          imageSrc={rightArrow}
          isReversed
          width="100%"
          centerTextOnly
        />
      </div>
    </form>
  );
}

export default SignUpForm;
