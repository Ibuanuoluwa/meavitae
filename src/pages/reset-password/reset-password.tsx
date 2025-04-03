import ResetPasswordForm from "../../components/sections/reset-password-page/reset-password-form";
import ResetPasswordInfo from "../../components/sections/reset-password-page/reset-password-info";

export function ResetPasswordPage() {
  return (
    <div className="flex gap-3 w-full md:px-20 px-6 py-16 justify-between items-start flex-col md:flex-row ">
      <ResetPasswordInfo />
      <div className="md:w-[45%] mt-10 md:mt-0">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
