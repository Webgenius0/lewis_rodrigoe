import { useContact } from '@/hooks/contact.hook';
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Controller } from 'react-hook-form';
import homeHero from '../../assets/homeHero.png';

const Contact = () => {
  const { form, mutate, isPending } = useContact();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full py-48"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container mx-auto px-4">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-2">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#010b21] p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-white/70">lewisrodrigoe@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#010b21] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-white/70">07753 107506</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#010b21] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Address</h3>
                  <p className="text-white/70">Hemel Hempstead, UK</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-transparent"
              >
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Your Name
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="example@mail.com"
                        prefix={<UserIcon />}
                        className="bg-[#F3F3F4] py-4"
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Email Address
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="example@mail.com"
                        prefix={<MailIcon />}
                        className="bg-[#F3F3F4] py-4"
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Phone
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="example@mail.com"
                        prefix={<PhoneIcon />}
                        className="bg-[#F3F3F4] py-4"
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                {/* Address Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Address
                  </label>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="example@mail.com"
                        prefix={<AddressIcon />}
                        className="bg-[#F3F3F4] py-4"
                      />
                    )}
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>
                {/* Subjects Field */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Subjects
                  </label>
                  <Controller
                    name="subjects"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="example@mail.com"
                        className="!bg-[#F3F3F4] py-4"
                      />
                    )}
                  />
                  {errors.subjects && (
                    <p className="text-red-500">{errors.subjects.message}</p>
                  )}
                </div>
                {/* Message Field */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-white font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                    Message
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        placeholder="Write your message..."
                        rows={4} // You can change this value as needed
                        className="!bg-[#F3F3F4] py-2"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#010b21] text-white font-[Urbanist] font-semibold text-[16px] py-3 rounded-[16px] hover:bg-white hover:text-[#0A0A0A] border border-[#0A0A0A] transition md:col-span-2"
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      d="M3.5 8.16c.29-.74.88-1.32 1.62-1.6C9.62 4.89 14.38 4.89 18.88 6.56c.74.29 1.32.88 1.62 1.6 1 2.48 1.08 5.23.23 7.76-.34 1.02-1.18 1.8-2.22 2.06-3.85.96-7.88.96-11.73 0-1.04-.26-1.88-1.04-2.22-2.06-.85-2.53-.77-5.28.23-7.76Z"
      stroke="#111"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m4 7 3.37 3.37a4 4 0 0 0 4.87.85 4 4 0 0 0 4.87-.85L20 7"
      stroke="#111"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"
    />
  </svg>
);

const AddressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
    />
  </svg>
);

export default Contact;
