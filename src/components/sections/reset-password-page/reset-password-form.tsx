import { useState } from "react";
import CustomInput from "../../common/custom-input";
import CustomButton from "../../common/custom-button";
import rightArrow from "../../../assets/icons/right-arrow.svg";

function ResetPasswordForm() {
  const [code, setCode] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full">
      <div>
        <CustomInput
          label="Code from Email"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          label="Old Password"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div>
        <CustomButton
          text="Login"
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

export default ResetPasswordForm;
