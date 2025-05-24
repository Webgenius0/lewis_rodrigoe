import { Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import homeHero from "../../assets/homeHero.png";
import { DatePicker, Input, Select } from "antd";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router";
const { Option } = Select;
import PricingTitle from "./PricingTitle";
import {
  useCreateProperty,
  useGetBoilermodel,
  useGetBoilertype,
  useGetCitys,
  useGetCountrys,
  useGetPropertytype,
  useGetService,
  useGetStates,
  useGetZip,
} from "@/hooks/service.hook";
import Plumbing from "@/assets/Plumbing";
import Electrinic from "@/assets/electrinic";
import Drainage from "@/assets/Drainage";
import Heating from "@/assets/Heating";
import Servicebtn from "../shared/Servicebtn";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PricingAnalysing = () => {
  const { service, isLoading } = useGetService();
  const { country } = useGetCountrys();
  console.log({ country });
  // const { control, watch } = useForm();

  const { form, mutate, isPending } = useCreateProperty();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = form;
  const selectedCountryId = watch("country_id");
  console.log({ selectedCountryId });

  const selectedStateId = watch("state_id");
  console.log({ selectedStateId });
  const selectedCityId = watch("city_id");
  console.log({ selectedCityId });

  const { state } = useGetStates(selectedCountryId);
  const { city } = useGetCitys(selectedStateId);
  const { zip } = useGetZip(selectedCityId);
  console.log({ zip });

  const { boilertype } = useGetBoilertype();
  console.log({ boilertype });

  const { boilermodel } = useGetBoilermodel();
  console.log({ boilermodel });

  const { propertytype } = useGetPropertytype();
  console.log({ propertytype });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    const payload = {
      ...data,
      latitude: data.latitude ? Number(data.latitude) : null,
      longitude: data.longitude ? Number(data.longitude) : null,
      last_service_date: data.last_service_date
        ? new Date(data.last_service_date).toISOString()
        : null,
      purchase_year: data.purchase_year
        ? new Date(data.purchase_year).toISOString()
        : null,
      // service_id: data.service_id,
      service_id: Number(data.service_id),
    };
    console.log({ payload });
    mutate(payload);
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
            <div className="px-7 md:px-[40px] py-[40px] rounded-[48px] bg-[#FFF] w-full sm:max-w-xl md:min-w-[530px] mx-auto white-input">
              <div className="form-header flex flex-col gap-2 items-center">
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
                  <Controller
                    name="service_id"
                    control={control}
                    rules={{ required: "Please select at least one service" }}
                    render={({ field }) => {
                      const selectedServices = field.value || [];

                      const toggleService = (service) => {
                        const isSelected = selectedServices === service.id;
                        const newValue = isSelected ? null : service.id;

                        field.onChange(newValue);
                        console.log("Selected Service ID:", newValue);
                      };

                      return (
                        <div className="grid grid-cols-3 gap-2">
                          {service?.map((item) => {
                            const icon = serviceIconMap[item.slug] || null;
                            const isSelected = selectedServices === item.id;

                            return (
                              <Servicebtn
                                key={item.id}
                                icon={icon}
                                label={item.name}
                                isSelected={isSelected}
                                onClick={() => toggleService(item)}
                              />
                            );
                          })}
                        </div>
                      );
                    }}
                  />
                  {errors.service_id && (
                    <p className="text-red-500">{errors.service_id.message}</p>
                  )}
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
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
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
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
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
                          name="state_id"
                          control={control}
                          rules={{
                            required: "State / Province / Region is required",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              value={field.value ?? undefined}
                              placeholder={
                                watch("country_id")
                                  ? "-- Select state --"
                                  : "Select country first"
                              }
                              disabled={!watch("country_id")}
                              allowClear
                            >
                              {state?.map((item) => (
                                <Option key={item.id} value={item.id}>
                                  {item.name}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />

                        {errors.state_id && (
                          <p className="text-red-500">
                            {" "}
                            {errors.state_id.message}{" "}
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
                          name="city_id"
                          control={control}
                          rules={{
                            required: "City is required",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              placeholder={
                                watch("state_id")
                                  ? "-- Select city --"
                                  : "Select state first"
                              }
                              disabled={!watch("state_id")}
                              allowClear
                              onChange={(value) => {
                                field.onChange(value);
                                console.log("Selected city ID:", value);
                              }}
                              className=""
                            >
                              {city?.map((city) => (
                                <Option key={city.id} value={city.id}>
                                  {city.name}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />

                        {errors.city_id && (
                          <p className="text-red-500">
                            {errors.city_id.message}
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
                          name="zip_id"
                          control={control}
                          rules={{
                            required: "Zipid is required",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              placeholder={
                                watch("city_id")
                                  ? "-- Select zip --"
                                  : "Select city first"
                              }
                              disabled={!watch("city_id")}
                              allowClear
                            >
                              {zip?.map((item) => (
                                <Option key={item.id} value={item.id}>
                                  {item.number}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />

                        {errors.zip_id && (
                          <p className="text-red-500">
                            {" "}
                            {errors.zip_id.message}{" "}
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
                        name="country_id"
                        control={control}
                        rules={{ required: "Country is required" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="-- Select country --"
                            allowClear
                            onChange={(value) => field.onChange(value)}
                          >
                            {country?.map((item) => (
                              <Option key={item.id} value={item.id}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        )}
                      />
                      {errors.country_id && (
                        <p className="text-red-500">
                          {errors.country_id.message}
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
                        name="boiler_type_id"
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
                            onChange={(value) => {
                              field.onChange(value);
                              console.log("Selected boiler typed ID:", value);
                            }}
                          >
                            {boilertype?.map((item) => {
                              return (
                                <Option key={item.id} value={item.id}>
                                  {item.name}
                                </Option>
                              );
                            })}
                          </Select>
                        )}
                      />

                      {errors.boiler_type_id && (
                        <p className="text-red-500">
                          {" "}
                          {errors.boiler_type_id.message}{" "}
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
                        name="boiler_model_id"
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
                            onChange={(value) => {
                              field.onChange(value);
                              console.log("Selected boiler model ID:", value);
                            }}
                          >
                            {boilermodel?.map((item) => {
                              return (
                                <Option key={item.id} value={item.id}>
                                  {item.name}
                                </Option>
                              );
                            })}
                          </Select>
                        )}
                      />

                      {errors.boiler_model_id && (
                        <p className="text-red-500">
                          {" "}
                          {errors.boiler_model_id.message}{" "}
                        </p>
                      )}
                    </div>
                    {/* Number of Boilers**/}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                        Number of Boilers<span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="quantity"
                        control={control}
                        rules={{
                          required: "Number of Boilers is required",
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter boiler number"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.quantity && (
                        <p className="text-red-500">
                          {" "}
                          {errors.quantity.message}{" "}
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
                          name="purchase_year"
                          control={control}
                          rules={{ required: "Age of Boiler is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="date"
                              placeholder="YYYY/MM/DD"
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] shadow-sm"
                            />
                          )}
                        />

                        {errors.purchase_year && (
                          <p className="text-red-500">
                            {" "}
                            {errors.purchase_year.message}{" "}
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
                          name="last_service_date"
                          control={control}
                          rules={{ required: "Last Serviced Date is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="date"
                              placeholder="YYYY/MM/DD"
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] shadow-sm"
                            />
                          )}
                        />
                        {errors.last_service_date && (
                          <p className="text-red-500">
                            {errors.last_service_date.message}
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
                        name="location"
                        control={control}
                        rules={{ required: "Boiler Location* is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter boiler location"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.location && (
                        <p className="text-red-500">
                          {" "}
                          {errors.location.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 md:py-6 px-2 md-px-4">
                  <PricingTitle titletext="Property Information" />
                  <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                    {/* property Name */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Property Name
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="label"
                        control={control}
                        rules={{ required: "Property Name is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter property name"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.label && (
                        <p className="text-red-500"> {errors.label.message} </p>
                      )}
                    </div>
                    {/* Property Type* */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Property Type
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="property_type_id"
                        control={control}
                        rules={{
                          required: "Property Type is required",
                        }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="-- Select boiler type --"
                            allowClear
                            prefix={<></>}
                            className=""
                            onChange={(value) => {
                              field.onChange(value);
                              console.log("Selected property typed ID:", value);
                            }}
                          >
                            {propertytype?.map((item) => {
                              return (
                                <Option key={item.id} value={item.id}>
                                  {item.name}
                                </Option>
                              );
                            })}
                          </Select>
                        )}
                      />

                      {errors.propertytype && (
                        <p className="text-red-500">
                          {" "}
                          {errors.propertytype.message}{" "}
                        </p>
                      )}
                    </div>
                    {/* Accessibility Info */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Accessibility Info
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="accessability_info"
                        control={control}
                        rules={{ required: "Accessibility Info is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter property name"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.accessability_info && (
                        <p className="text-red-500">
                          {" "}
                          {errors.accessability_info.message}{" "}
                        </p>
                      )}
                    </div>
                    {/* price */}
                     <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Property Name
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="price"
                        control={control}
                        rules={{ required: "price is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter price"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.price && (
                        <p className="text-red-500"> {errors.price.message} </p>
                      )}
                    </div>
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
    </>
  );
};

export default PricingAnalysing;
