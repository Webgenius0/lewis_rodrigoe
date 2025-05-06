import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import user from '../../assets/testimonial1.jpg';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from 'antd';
const { Option } = Select;

const SignUp = () => {
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
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
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: 'Name is required' }}
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
                            d="M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      placeholder="Robert Lewis"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />

                {errors.name && (
                  <p className="text-red-500"> {errors.name.message} </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Phone Number
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={'us'} // Default country
                      enableSearch={true}
                      inputClass="!pl-12 !py-2 !px-4 !bg-[#F3F3F4] !border !border-transparent !rounded-md !w-full border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#09B5FF] bg-[#F3F3F4] !h-11 "
                      buttonClass="!border-none !bg-transparent !left-3"
                      containerClass="!w-full"
                      onChange={(value, data, event, formattedValue) => {
                        field.onChange(value);
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 ">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Gender
                </label>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Gender is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="-- Select Gender --"
                      allowClear
                      prefix={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      className=""
                    >
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
              </div>

              {/* react phone number input 2 */}

              <Link
                to=""
                className="gradient-text font-[Manrope] text-[14px] not-italic font-medium leading-[22.96px] capitalize"
              >
                Forgot Password
              </Link>

              <Link to="/sign-up-continue">
                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
                >
                  Sign Up
                </button>
              </Link>

              <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-normal leading-[170%] mx-auto">
                Already have an account? {''}
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

export default SignUp;
