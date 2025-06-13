import { Controller } from "react-hook-form";
import homeHero from "../../assets/homeHero.png";
import logo from "../../assets/logo.png";
import { Input } from "antd";
import { Link } from "react-router";
import { useSignIn } from "@/hooks/auth.hook";
import { AuthComment } from "@/components/auth/AuthComment";

const SignIn = () => {
  const { form, mutate, isPending } = useSignIn();
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
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${homeHero})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-[60px]">
          {/* main form area */}
          <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl md:min-w-[530px]">
            <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="w-[38px] h-[38px] [aspect-ratio:1/1]"
                />
              </Link>
              <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1">
                Welcome Back!
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px]">
                Please fill in your Email and Password to Sign In.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111214] font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
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
                      className="bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111214] font-[Manrope] font-bold text-[15px] md:text-[16px] mb-1">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="***********"
                      prefix={<LockIcon />}
                      className="bg-[#F3F3F4]"
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Link
                to="/forgot-password"
                className="gradient-text font-[Manrope] text-[14px] font-medium"
              >
                Forgot Password
              </Link>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#0A0A0A] text-white py-3 rounded-[16px] hover:bg-white hover:text-[#0A0A0A] border border-[#0A0A0A] transition"
              >
                {isPending ? "Signing In..." : "Sign In"}
              </button>

              <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] text-center">
                Don’t have an Account?{" "}
                <Link
                  to="/sign-up"
                  className="text-[#0A0A0A] font-semibold underline"
                >
                  Sign-Up here!
                </Link>
              </p>
            </form>
          </div>

          {/* Dummy comment area */}
          {/* <AuthComment /> */}
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

export default SignIn;
