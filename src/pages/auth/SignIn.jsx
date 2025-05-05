import { Controller, useForm } from 'react-hook-form';
import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import user from '../../assets/testimonial1.jpg';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select, Space } from 'antd';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          {/* main form area */}
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] max-w-xl">
            <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
              <img
                src={logo}
                className="w-[38px] h-[38px] [aspect-ratio:1/1]"
              />
              <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1">
                Welcome Back!
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                Please fill in your Email and Password to Sign In.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Controller
                  name="email_address"
                  control={control}
                  rules={{ required: 'Email is required' }}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                />

                {errors.email_address && (
                  <p className="text-red-500">
                    {' '}
                    {errors.email_address.message}{' '}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Controller
                  name="Password"
                  control={control}
                  rules={{ required: 'Password is required' }}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                />
                {errors.Password && (
                  <p className="text-red-500">{errors.Password.message}</p>
                )}
              </div>

              <Link
                to=""
                className="gradient-text font-[Manrope] text-[14px] not-italic font-medium leading-[22.96px] capitalize"
              >
                Forgot Password
              </Link>

              <button
                type="submit"
                className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
              >
                Sign in
              </button>

              <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-normal leading-[170%] mx-auto">
                Don’t have an Account?{' '}
                <Link
                  to=""
                  className="text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] [text-decoration-line:underline] [text-decoration-style:solid] [text-decoration-skip-ink:none] [text-underline-offset:auto] [text-underline-position:from-font]"
                >
                  Sign-Up here!
                </Link>
              </p>
            </form>
          </div>

          {/* dummy user comment area */}

          <div className="max-w-[483px] xl:max-w-[583px] px-[33px] py-[34px] lg:px-[53px] lg:py-[44px] rounded-[40px] bg-[rgba(99,_99,_99,_0.64)] backdrop-filter backdrop-blur-[5px] flex flex-col items-center justify-center gap-5 md:gap-8">
            <p className="text-[#F0F5F6] text-center font-[Urbanist] text-[20px] not-italic font-semibold leading-[34px]">
              I can now track my vitals and sleep patterns daily, and Helix has
              been a game-changer for me it’s helped me build healthier habits!
            </p>
            <div className="flex items-center gap-2">
              <div className="w-[68px] h-[68px] flex-shrink-0 rounded-[68px] border-[6px] border-[solid] border-[#FFF] bg-[lightgray_50%_/_cover_no-repeat] overflow-hidden">
                <img src={user} className="bg-cover h-full w-full " />
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF] font-[Urbanist] text-[16px] not-italic font-semibold leading-[27.2px]">
                  Brooklyn Simmons
                </p>
                <p className="text-[#F0F5F6] font-[Urbanist] text-[14px] not-italic font-normal leading-[23.8px]">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
