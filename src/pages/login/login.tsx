import mark from "../../assets/icons/mark.svg";
import googleIcon from "../../assets/icons/google-icon.svg";
import appleIcon from "../../assets/icons/apple-icon.svg";
import CustomButton from "../../components/common/custom-button";
import LoginForm from "../../components/sections/login-page/login-form";


export function LoginPage() {
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
    <div className="flex gap-3 w-full md:px-20 px-6 py-16 justify-between items-start flex-col md:flex-row ">
      <div className="flex flex-col gap-4 md:w-[45%]">
        <h1 className="header-one font-bold">Login</h1>
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
      <div className="md:w-[45%] mt-10 md:mt-0">
        <LoginForm />
        <div>
          <p className="my-2">
            <a href="/reset-password" className="text-purple">
              Forgot Password
            </a>
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <CustomButton
                text="Login with Google"
                type="secondary"
                imageSrc={googleIcon}
                width="100%"
                centerTextOnly
              />
            </div>
            <div>
              <CustomButton
                text="Login with Apple"
                type="secondary"
                imageSrc={appleIcon}
                width="100%"
                centerTextOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
