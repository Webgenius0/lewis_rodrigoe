import { useNavigate } from 'react-router-dom';
import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { Controller, useForm } from 'react-hook-form';

const VerifyOtp = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
        const otp = `${data.otp0}${data.otp1}${data.otp2}${data.otp3}`;
        console.log('OTP:', otp);
        navigate('/new-password');
  };

  console.log(errors);

  const navigate = useNavigate();

  // for otp



  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center py-[60px]">
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
                Enter your OTP
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              <div className="flex justify-center gap-2 md:gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <Controller
                    key={index}
                    name={`otp${index}`}
                    control={control}
                    rules={{ required: 'Required' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        maxLength={1}
                        className="w-[54px] md:w-[64px] lg:w-[84px] py-3 md:py-4 lg:py-[19px] text-center text-[#132235] font-[Satoshi] text-[17px] md:text-[20px] lg:text-[24px] not-italic font-medium leading-[31.68px] tracking-[-0.48px] rounded-[16px]  border border-[#D3DDE7] bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#09B5FF]"
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/, '');
                          field.onChange(value);

                          if (value && index < 3) {
                            const next = document.querySelector(
                              `input[name=otp${index + 1}]`
                            );
                            next?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (
                            e.key === 'Backspace' &&
                            !e.target.value &&
                            index > 0
                          ) {
                            const prev = document.querySelector(
                              `input[name=otp${index - 1}]`
                            );
                            prev?.focus();
                          }
                        }}
                        onPaste={(e) => {
                          const paste = e.clipboardData
                            .getData('text')
                            .slice(0, 4);
                          paste.split('').forEach((char, i) => {
                            const input = document.querySelector(
                              `input[name=otp${i}]`
                            );
                            if (input) {
                              input.value = char;
                              const event = new Event('input', {
                                bubbles: true,
                              });
                              input.dispatchEvent(event);
                            }
                          });
                          e.preventDefault();
                        }}
                      />
                    )}
                  />
                ))}
              </div>

              {Object.keys(errors).some((key) => key.startsWith('otp')) && (
                <p className="text-red-500 mt-2 text-center">
                  All fields are required
                </p>
              )}

              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col gap-2.5">
                <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                  Haven't got the confirmation code yet?{' '}
                  <button className="text-[#010B21] text-center font-[Manrope] text-[14px] not-italic font-medium leading-[132%]">
                    Resend
                  </button>
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] "
                >
                  Verify Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
