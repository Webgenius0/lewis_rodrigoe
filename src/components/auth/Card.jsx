import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import PricingTitle from './PricingTitle';

const Card = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              <PricingTitle titletext="Property Information" />
              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Card Holder Name
                </label>
                <Controller
                  name="cardHolderName"
                  control={control}
                  rules={{
                    required: 'Card Holder Name is required',
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      prefix={<></>}
                      placeholder="Ex: Saklain Sarowor"
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />

                {errors.cardHolderName && (
                  <p className="text-red-500">
                    {' '}
                    {errors.cardHolderName.message}{' '}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Card Number
                </label>
                <Controller
                  name="cardNumber"
                  control={control}
                  rules={{
                    required: 'Card Number is required',
                    pattern: {
                      value: /^\d{4} \d{4} \d{4} \d{4}$/,
                      message: 'Invalid card number format',
                    },
                  }}
                  render={({ field: { onChange, ...field } }) => (
                    <Input
                      {...field}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
                        value = value
                          .replace(/(\d{4})/g, '$1 ')
                          .trim()
                          .slice(0, 19); // Max 16 digits with 3 spaces
                        onChange(value);
                      }}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      prefix={<></>}
                      className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                    />
                  )}
                />

                {errors.cardNumber && (
                  <p className="text-red-500"> {errors.cardNumber.message} </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                {/*CVV*/}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    CVV
                  </label>
                  <Controller
                    name="cvv"
                    control={control}
                    rules={{
                      required: 'CVV is required',
                      pattern: {
                        value: /^\d{3,4}$/,
                        message: 'CVV must be 3 or 4 digits',
                      },
                    }}
                    render={({ field: { onChange, ...field } }) => (
                      <Input
                        {...field}
                        prefix={<></>}
                        onChange={(e) => {
                          let value = e.target.value
                            .replace(/\D/g, '')
                            .slice(0, 4);
                          onChange(value);
                        }}
                        placeholder="Ex: 133"
                        maxLength={4}
                        className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                      />
                    )}
                  />

                  {errors.cvv && (
                    <p className="text-red-500"> {errors.cvv.message} </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Expiration Date
                  </label>
                  <Controller
                    name="expiration_date"
                    control={control}
                    rules={{
                      required: 'Expiration Date is required',
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: 'Format must be MM/YY',
                      },
                    }}
                    render={({ field: { onChange, ...field } }) => (
                      <Input
                        {...field}
                        onChange={(e) => {
                          let value = e.target.value
                            .replace(/\D/g, '')
                            .slice(0, 4);
                          if (value.length >= 3)
                            value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
                          onChange(value);
                        }}
                        placeholder="MM/YY"
                        maxLength={5}
                        prefix={<></>}
                        className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                      />
                    )}
                  />

                  {errors.expiration_date && (
                    <p className="text-red-500">
                      {' '}
                      {errors.expiration_date.message}{' '}
                    </p>
                  )}
                </div>
              </div>

              <div className="btn-wrapper mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-2 md:gap-3">
                <button
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="w-full bg-[#EAEAEA] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#ee3a3a] hover:text-[#F0F5F6] border border-[#EAEAEA] transition text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] "
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px]"
                >
                  Save & Analysis
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
