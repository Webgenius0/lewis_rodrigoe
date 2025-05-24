import { useResetPassword } from "@/hooks/auth.hook";
import homeHero from "../../assets/homeHero.png";
import logo from "../../assets/logo.png";
import { Input } from "antd";
import { Controller } from 'react-hook-form';
import { Link } from "react-router";

const NewPassword = () => {
  const { form, resetPassword, isResetting } = useResetPassword();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = (data) => {
    resetPassword(data);
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl mx-auto md:min-w-[530px]">
            <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="w-[38px] h-[38px] [aspect-ratio:1/1]"
                />
              </Link>
              <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1 lowercase">
                Create New Password
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] font-normal leading-[27.2px]">
                Please enter your new password
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      prefix={<LockIcon />}
                      placeholder="***********"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Confirm Password
                </label>
                <Controller
                  name="password_confirmation"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      prefix={<LockIcon />}
                      placeholder="***********"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.password_confirmation && (
                  <p className="text-red-500">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isResetting}
                className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
              >
                {isResetting ? 'Saving...' : 'Save & Continue'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      d="M7.1 9.4C10.3 8.48 13.7 8.48 16.9 9.4c.95.27 1.72.97 2.1 1.9 1 2.27 1 4.82 0 7.1-.38.93-1.15 1.63-2.1 1.9-3.2.92-6.6.92-9.8 0-.95-.27-1.72-.97-2.1-1.9-1-2.27-1-4.82 0-7.1.38-.93 1.15-1.63 2.1-1.9Z"
      stroke="#111"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M12 13v4" stroke="#111" strokeWidth="2" strokeLinejoin="round" />
    <path
      d="M9 9V5.32a1.5 1.5 0 0 1 1.26-1.74c1.13-.38 2.35-.38 3.48 0A1.5 1.5 0 0 1 15 5.32V9"
      stroke="#111"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default NewPassword;
