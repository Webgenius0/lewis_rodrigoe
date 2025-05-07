
import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const ForgotPassword = () => {
     const {
        handleSubmit,
        formState: { errors },
        control,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        navigate('/verify-otp');
      };
    
      console.log(errors);

      const navigate = useNavigate();
  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          {/* main form area */}
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl mx-auto md:min-w-[530px]">
            <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
              <img
                src={logo}
                className="w-[38px] h-[38px] [aspect-ratio:1/1]"
              />
              <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1">
                Forgot Password
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                Enter your email address. We will send an OTP code for
                verification in the next step.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Email Address
                </label>
                <Controller
                  name="email_address"
                  control={control}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  }}
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
                    {' '}
                    {errors.email_address.message}{' '}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword