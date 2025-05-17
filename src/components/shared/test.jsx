import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import homeHero from "../../assets/homeHero.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { DatePicker, Input, Select } from "antd";
const { Option } = Select;
import PricingTitle from "./PricingTitle";
import { useGetService } from "@/hooks/service.hook";
import Servicebtn from "./Servicebtn";
import Plumbing from "@/assets/Plumbing";
import Electrinic from "@/assets/electrinic";
import Drainage from "@/assets/Drainage";
import Heating from "@/assets/Heating";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PricingAnalysing = () => {
  const { service, isLoading } = useGetService();

  console.log({ service });
  // for getting form data and error
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/sign-up-continue");
  };

  console.log(errors);

  const serviceIconMap = {
    plumbing: <Plumbing />,
    clectrical: <Electrinic />,
    drainage: <Drainage />,
    heating: <Heating />,
  };
  return (
    <>
      <section
        className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center  py-[60px]">
            {/* main form area */}
            <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl md:min-w-[530px] mx-auto">
              <div className="form-header flex flex-col gap-2  mb-6 lg:mb-12 items-center">
                <img
                  src={logo}
                  className="w-[38px] h-[38px] [aspect-ratio:1/1]"
                />
                <h2 className="text-[#0A0A0A] text-center font-[Urbanist] text-[24px] md:text-[30px] lg:text-[36px] not-italic font-semibold leading-[30.4px] md:leading-[50.4px] tracking-[-1px] mb-1">
                  Pricing Analysis
                </h2>
                <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                  Our Standard Service Plan is designed for homeowners who want
                  a reliable and cost-effective solution without compromising on
                  quality.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 md:gap-6"
              >
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 md:py-6 px-2 md-px-4">
                  <PricingTitle titletext="Services" />
                  <div className="grid grid-cols-3 gap-2">
                    {service?.map((item) => {
                      const icon = serviceIconMap[item.slug] || null;
                      return (
                        <Servicebtn
                          key={item.id}
                          icon={icon}
                          label={item.name}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* location information */}
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 md:py-6 px-2 md-px-4">
                  <PricingTitle titletext="Location Information" />

                  <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
                    {/* Street Address* */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Street Address<span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="street"
                        control={control}
                        rules={{ required: "Street Address is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter street address"
                            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                          />
                        )}
                      />

                      {errors.street && (
                        <p className="text-red-500">
                          {" "}
                          {errors.street.message}{" "}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                      {/* Apartment / Suite / Unit* */}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                          Apartment / Suite / Unit
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="apartment"
                          control={control}
                          rules={{
                            required: "Apartment / Suite / Unit is required",
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter apartment..."
                              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                            />
                          )}
                        />

                        {errors.apartment && (
                          <p className="text-red-500">
                            {" "}
                            {errors.apartment.message}{" "}
                          </p>
                        )}
                      </div>

                      {/* State / Province / Region* */}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                          State / Province / Region
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="state"
                          control={control}
                          rules={{ required: "State / Province / Region" }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter state..."
                              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                            />
                          )}
                        />

                        {errors.state && (
                          <p className="text-red-500">
                            {" "}
                            {errors.state.message}{" "}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                      {/* City**/}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                          City<span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="city"
                          control={control}
                          rules={{
                            required: "city is required",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              placeholder="-- Select city --"
                              allowClear
                              prefix={<></>}
                              className=""
                            >
                              <Option value="male">City 1</Option>
                              <Option value="female">City 2</Option>
                              <Option value="other">City 3</Option>
                            </Select>
                          )}
                        />

                        {errors.city && (
                          <p className="text-red-500">
                            {" "}
                            {errors.city.message}{" "}
                          </p>
                        )}
                      </div>

                      {/* Postal / ZIP Code* */}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                          Postal / ZIP Code
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="postal"
                          control={control}
                          rules={{ required: "Postal / ZIP Code is required" }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter postal.."
                              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                            />
                          )}
                        />

                        {errors.postal && (
                          <p className="text-red-500">
                            {" "}
                            {errors.postal.message}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Country**/}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                        Country<span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="country"
                        control={control}
                        rules={{
                          required: "country is required",
                        }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="-- Select city --"
                            allowClear
                            prefix={<></>}
                            className=""
                          >
                            <Option value="male">Country 1</Option>
                            <Option value="female">Country 2</Option>
                            <Option value="other">Country 3</Option>
                          </Select>
                        )}
                      />

                      {errors.country && (
                        <p className="text-red-500">
                          {" "}
                          {errors.country.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Boiler Information */}
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 md:py-6 px-2 md-px-4">
                  <PricingTitle titletext="Boiler Information" />
                  <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                    {/* Boiler Type**/}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                        Boiler Type<span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="boilerType"
                        control={control}
                        rules={{
                          required: "Boiler Type is required",
                        }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="-- Select boiler type --"
                            allowClear
                            prefix={<></>}
                            className=""
                          >
                            <Option value="male">Type 1</Option>
                            <Option value="female">Type 2</Option>
                            <Option value="other">Type 3</Option>
                          </Select>
                        )}
                      />

                      {errors.boilerType && (
                        <p className="text-red-500">
                          {" "}
                          {errors.boilerType.message}{" "}
                        </p>
                      )}
                    </div>

                    {/* Brand & Model* */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Brand & Model
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="model"
                        control={control}
                        rules={{ required: "Brand & Model* is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter brand & model"
                            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                          />
                        )}
                      />

                      {errors.model && (
                        <p className="text-red-500"> {errors.model.message} </p>
                      )}
                    </div>
                    {/* Number of Boilers**/}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                        Number of Boilers<span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="boilersNumber"
                        control={control}
                        rules={{
                          required: "Number of Boilers is required",
                        }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="-- Select boiler number --"
                            allowClear
                            prefix={<></>}
                            className=""
                          >
                            <Option value="male">Option 1</Option>
                            <Option value="female">Option 2</Option>
                            <Option value="other">Option 3</Option>
                          </Select>
                        )}
                      />

                      {errors.boilersNumber && (
                        <p className="text-red-500">
                          {" "}
                          {errors.boilersNumber.message}{" "}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                      {/* Age of Boiler**/}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                          Age of Boiler
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="boilerAge"
                          control={control}
                          rules={{ required: "Age of Boiler is required" }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter boiler age"
                              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                            />
                          )}
                        />

                        {errors.boilerAge && (
                          <p className="text-red-500">
                            {" "}
                            {errors.boilerAge.message}{" "}
                          </p>
                        )}
                      </div>

                      {/* Last Serviced Date* */}
                      <div className="w-full">
                        <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                          Last Serviced Date*
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          name="lastServiceDate"
                          control={control}
                          rules={{ required: "Last Serviced Date is required" }}
                          render={({ field }) => (
                            <DatePicker
                              onChange={onChange}
                              {...field}
                              placeholder="DD/MM/YYYY"
                              allowClear
                              prefix={<></>}
                              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                            />
                          )}
                        />

                        {errors.lastServiceDate && (
                          <p className="text-red-500">
                            {" "}
                            {errors.lastServiceDate.message}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Boiler Location* */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Boiler Location
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="boilerLocation"
                        control={control}
                        rules={{ required: "Boiler Location* is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter boiler location"
                            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] "
                          />
                        )}
                      />

                      {errors.boilerLocation && (
                        <p className="text-red-500">
                          {" "}
                          {errors.boilerLocation.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 md:py-6 px-2 md-px-4">
                  <PricingTitle titletext="Property Information" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Name
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
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
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country={"us"} // Default country
                        enableSearch={true}
                        inputClass="!pl-12 !py-2 !px-4 !bg-[#F3F3F4] !border !border-transparent !rounded-md !w-full border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#09B5FF] bg-[#F3F3F4] !h-11 "
                        buttonClass="!border-none !bg-transparent !left-3"
                        containerClass="!w-full"
                        onChange={(value) => {
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
                    rules={{ required: "Gender is required" }}
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

                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
                >
                  Continue
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingAnalysing;
