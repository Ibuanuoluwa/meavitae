import { useState } from "react";
import CustomInput from "../../common/custom-input";
import CustomButton from "../../common/custom-button";
import rightArrow from "../../../assets/icons/right-arrow.svg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full">
      <div>
        <CustomInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

export default LoginForm;
