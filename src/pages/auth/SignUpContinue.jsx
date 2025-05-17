import { Controller, useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";

import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { Input } from 'antd';
import { Link } from "react-router";
import { AuthComment } from "@/components/auth/AuthComment";


const SignUpContinue = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const password = data?.password;
    const confirm_password = data?.confirm_password;

    if (password !== confirm_password) {
      setError("confirm_password", {
        message: "🚫ERROR: Passwords Don’t Match!",
      });
    }
  };

  console.log(errors);

  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          {/* main form area */}
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF]  w-full sm:max-w-xl md:min-w-[530px]">
            <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="w-[38px] h-[38px] [aspect-ratio:1/1]"
                />
              </Link>
              <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1">
                Create your account
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                Please fill in your Email and Password to Sign up.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              {/* Email input */}
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Email Address
                </label>
                <Controller
                  name="email_address"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      prefix={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3.53691 8.15773C3.8319 7.42025 4.4238 6.84107 5.16752 6.56218L5.31227 6.5079C9.62415 4.89094 14.3758 4.89094 18.6877 6.5079L18.8325 6.56218C19.5762 6.84107 20.1681 7.42025 20.4631 8.15773V8.15773C21.4555 10.6386 21.5363 13.391 20.6914 15.9259L20.5451 16.3648C20.2056 17.3832 19.3693 18.1577 18.3278 18.4181L17.8567 18.5358C14.0114 19.4972 9.9886 19.4972 6.14333 18.5358L5.67223 18.4181C4.63071 18.1577 3.79441 17.3832 3.45492 16.3648L3.30863 15.9259C2.46366 13.391 2.54454 10.6386 3.53691 8.15773V8.15773Z"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 7L7.36762 10.3676C7.78142 10.7814 8.29989 11.075 8.86762 11.2169V11.2169C10.9242 11.7311 13.0758 11.7311 15.1324 11.2169V11.2169C15.7001 11.075 16.2186 10.7814 16.6324 10.3676L20 7"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      placeholder="elementary221b@gmail.co|"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />

                {errors.email_address && (
                  <p className="text-red-500">
                    {" "}
                    {errors.email_address.message}{" "}
                  </p>
                )}
              </div>
              {/* password input */}
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="***********"
                      prefix={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7.10202 9.39942L6.50233 9.57076C5.5547 9.84151 4.78575 10.5356 4.41972 11.4507C3.50834 13.7291 3.50834 16.2709 4.41972 18.5493C4.78575 19.4644 5.5547 20.1585 6.50233 20.4292L7.10202 20.6006C10.3033 21.5152 13.6967 21.5152 16.898 20.6006L17.4977 20.4292C18.4453 20.1585 19.2143 19.4644 19.5803 18.5493C20.4917 16.2709 20.4917 13.7291 19.5803 11.4507C19.2143 10.5356 18.4453 9.84151 17.4977 9.57076L16.898 9.39942C13.6967 8.48477 10.3033 8.48477 7.10202 9.39942Z"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 13L12 17"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9V5.32456C9 4.53354 9.50616 3.83128 10.2566 3.58114V3.58114C11.3883 3.20392 12.6117 3.20392 13.7434 3.58114V3.58114C14.4938 3.83128 15 4.53354 15 5.32456V9"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {/* Confirm password input */}
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Confirm Password
                </label>
                <Controller
                  name="confirm_password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="***********"
                      prefix={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7.10202 9.39942L6.50233 9.57076C5.5547 9.84151 4.78575 10.5356 4.41972 11.4507C3.50834 13.7291 3.50834 16.2709 4.41972 18.5493C4.78575 19.4644 5.5547 20.1585 6.50233 20.4292L7.10202 20.6006C10.3033 21.5152 13.6967 21.5152 16.898 20.6006L17.4977 20.4292C18.4453 20.1585 19.2143 19.4644 19.5803 18.5493C20.4917 16.2709 20.4917 13.7291 19.5803 11.4507C19.2143 10.5356 18.4453 9.84151 17.4977 9.57076L16.898 9.39942C13.6967 8.48477 10.3033 8.48477 7.10202 9.39942Z"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 13L12 17"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9V5.32456C9 4.53354 9.50616 3.83128 10.2566 3.58114V3.58114C11.3883 3.20392 12.6117 3.20392 13.7434 3.58114V3.58114C14.4938 3.83128 15 4.53354 15 5.32456V9"
                            stroke="#111214"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.confirm_password && (
                  <p className="text-red-500">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
              >
                Sign Up
              </button>

              <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-normal leading-[170%] mx-auto">
                Already have an account? {""}
                <Link
                  to="/sign-in"
                  className="text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] [text-decoration-line:underline] [text-decoration-style:solid] [text-decoration-skip-ink:none] [text-underline-offset:auto] [text-underline-position:from-font]"
                >
                   Sign-in here!
                </Link>
              </p>
            </form>
          </div>

          {/* dummy user comment area */}
          <AuthComment />
        </div>
      </div>
    </section>
  );
};

export default SignUpContinue;
