import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input, Select, message } from "antd";
import { Link, useNavigate } from "react-router";

const { Option } = Select;

// Validation schema
const schema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone number is required"),
    gender: z.enum(["male", "female"], {
      required_error: "Gender is required",
    }),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    message.success("Account created successfully!");
    navigate("/dashboard");
  };

  const goToNextStep = async () => {
    const valid = await trigger(["first_name", "last_name", "phone", "gender"]);
    if (valid) {
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {step === 1 ? "Personal Information" : "Set Login Credentials"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              {/* First Name */}
              <div>
                <label>First Name</label>
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="First Name" />
                  )}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label>Last Name</label>
                <Controller
                  name="last_name"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Last Name" />
                  )}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label>Phone</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={field.onChange}
                      inputStyle={{ width: "100%" }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label>Gender</label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Select Gender"
                      style={{ width: "100%" }}
                    >
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={goToNextStep}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* Email */}
              <div>
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="you@example.com" />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label>Password</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password {...field} placeholder="Password" />
                  )}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label>Confirm Password</label>
                <Controller
                  name="confirm_password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password {...field} placeholder="Confirm Password" />
                  )}
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>

              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-blue-500 underline">
                  Sign in here
                </Link>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
