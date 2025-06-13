import { useCollectCard } from '@/hooks/dashboard.hook';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import PricingTitle from './PricingTitle';

const Card = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from;

  const { form, mutate, isPending } = useCollectCard();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = (data) => {
    // Format values to match API expectations
    const payload = {
      name: data.cardHolderName,
      number: data.cardNumber.replace(/\s/g, ''), // remove spaces
      cvv: data.cvv,
      date: data.expiration_date, // already in MM/YY
    };
    mutate(payload);
  };

  if (from !== 'pricing-analysis') return null;

  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl mx-auto md:min-w-[530px]">
            <div className="form-header flex flex-col gap-2 mb-6 lg:mb-12 items-center">
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

              {/* Card Holder Name */}
              <div className="flex flex-col gap-2">
                <label className="text-label">Card Holder Name</label>
                <Controller
                  name="cardHolderName"
                  control={control}
                  rules={{ required: 'Card Holder Name is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Ex: Saklain Sarowor"
                      className="input-style"
                    />
                  )}
                />
                {errors.cardHolderName && (
                  <p className="text-red-500">
                    {errors.cardHolderName.message}
                  </p>
                )}
              </div>

              {/* Card Number */}
              <div className="flex flex-col gap-2">
                <label className="text-label">Card Number</label>
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
                        let value = e.target.value.replace(/\D/g, '');
                        value = value
                          .replace(/(\d{4})/g, '$1 ')
                          .trim()
                          .slice(0, 19);
                        onChange(value);
                      }}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="input-style"
                    />
                  )}
                />
                {errors.cardNumber && (
                  <p className="text-red-500">{errors.cardNumber.message}</p>
                )}
              </div>

              {/* CVV & Expiration Date */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                {/* CVV */}
                <div className="w-full">
                  <label className="text-label">CVV</label>
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
                        onChange={(e) => {
                          let value = e.target.value
                            .replace(/\D/g, '')
                            .slice(0, 4);
                          onChange(value);
                        }}
                        placeholder="Ex: 133"
                        maxLength={4}
                        className="input-style"
                      />
                    )}
                  />
                  {errors.cvv && (
                    <p className="text-red-500">{errors.cvv.message}</p>
                  )}
                </div>

                {/* Expiration Date */}
                <div className="w-full">
                  <label className="text-label">Expiration Date</label>
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
                        className="input-style"
                      />
                    )}
                  />
                  {errors.expiration_date && (
                    <p className="text-red-500">
                      {errors.expiration_date.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="btn-wrapper mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-2 md:gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px]"
                  disabled={isPending}
                >
                  {isPending ? 'Processing...' : 'Save & Continue'}
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
