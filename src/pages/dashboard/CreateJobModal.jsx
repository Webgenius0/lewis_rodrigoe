import { Modal, Input, DatePicker, Select, Upload } from "antd";

import PricingTitle from "@/components/auth/PricingTitle";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCreateJob, useGetProperties } from "@/hooks/dashboard.hook";
import { message } from "antd";
const { Option } = Select;

const { TextArea } = Input;
const { Dragger } = Upload;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const CreateJobModal = ({ visible, onClose }) => {
  const { mutate, isPending } = useCreateJob();
  const { properties } = useGetProperties();
  console.log({ properties });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  // for getting form data and error
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  //const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   navigate("/analysis-result");
  // };

  console.log(errors);

  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      <div className="white-input">
        <div className="px-3 sm:px-4 md:px-[30px] lg:px-[40px] py-3 rounded-[48px] bg-[#FFF] w-full  mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Property Information */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-2 sm:py-3  md:py-4  lg:py-6 px-2 md-px-4">
              <PricingTitle titletext="Property Information" />
              {/* Property*/}
              <div className="w-full">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-2">
                  Property<span className="text-red-500">*</span>
                </label>
                <Controller
                  name="property_id"
                  control={control}
                  rules={{
                    required: "Property is required",
                  }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="-- Select property --"
                      allowClear
                      prefix={<></>}
                      className=""
                      onChange={(value) => {
                        field.onChange(value);
                        console.log("Selected property ID:", value);
                      }}
                    >
                      {properties?.map((property) => (
                        <Option key={property.id} value={property.id}>
                          {property.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                />

                {errors.property_id && (
                  <p className="text-red-500"> {errors.property_id.message} </p>
                )}
              </div>
            </div>

            {/* BASIC DETAILS */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-2 sm:py-3  md:py-4  lg:py-6 px-2 md-px-4">
              <PricingTitle titletext="Basic Details" />

              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
                {/* job-title */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Job title is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        prefix={<></>}
                        placeholder="Enter job title"
                        className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                      />
                    )}
                  />

                  {errors.title && (
                    <p className="text-red-500"> {errors.title.message} </p>
                  )}
                </div>

                {/* Job Description* */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Job Description
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="description"
                    control={control}
                    rules={{
                      required: "Job Description  is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        prefix={<></>}
                        placeholder="Enter job description"
                        className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                      />
                    )}
                  />

                  {errors.description && (
                    <p className="text-red-500">
                      {" "}
                      {errors.description.message}{" "}
                    </p>
                  )}
                </div>

                {/* Preferred Visit Date & Time* */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Preferred Visit Date & Time
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="date_time"
                    control={control}
                    rules={{ required: "Date and Time is required" }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        placeholder="YYYY/MM/DD"
                        className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] shadow-sm"
                      />
                    )}
                  />

                  {errors.date_time && (
                    <p className="text-red-500"> {errors.date_time.message} </p>
                  )}
                </div>
              </div>
            </div>

            {/* Boiler Information */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-2 sm:py-3  md:py-4  lg:py-6 px-2 md-px-4">
              <PricingTitle titletext="Boiler Information" />
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                {/* Error Codes Displayed */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Error Codes Displayed
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="error_code"
                    control={control}
                    rules={{ required: "Error Code is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        prefix={<></>}
                        placeholder="Enter error code"
                        className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                      />
                    )}
                  />

                  {errors.error_code && (
                    <p className="text-red-500">
                      {" "}
                      {errors.error_code.message}{" "}
                    </p>
                  )}
                </div>
                {/* Error Code Desplayed Image**/}
                <div className="w-full">
                  <Controller
                    name="error_code_image"
                    control={control}
                    rules={{ required: "Error image is required" }}
                    render={({ field }) => (
                      <Dragger
                        beforeUpload={() => false}
                        maxCount={1}
                        onChange={(info) => {
                          field.onChange(info.fileList[0]); // store file object
                        }}
                      >
                        <p>Click to Upload Error Codes Displayed</p>
                        <small>(Max. File size: 25 MB)</small>
                      </Dragger>
                    )}
                  />

                  {errors.error_code_image && (
                    <p className="text-red-500">
                      {" "}
                      {errors.error_code_image.message}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                water pressure level
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="water_pressure_level"
                control={control}
                rules={{ required: "Water Pressure Level is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    prefix={<></>}
                    placeholder="Enter water pressure level"
                    className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                  />
                )}
              />

              {errors.water_pressure_level && (
                <p className="text-red-500">
                  {" "}
                  {errors.water_pressure_level.message}{" "}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                tools_info
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="tools_info"
                control={control}
                rules={{ required: "Tools Info is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    prefix={<></>}
                    placeholder="Enter tools info"
                    className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                  />
                )}
              />

              {errors.tools_info && (
                <p className="text-red-500"> {errors.tools_info.message} </p>
              )}
            </div>

            {/* Additional Information */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-2 sm:py-3  md:py-4  lg:py-6 px-2 md-px-4">
              <PricingTitle titletext="Additional Information" />
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                {/* Additional Information */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Additional Notes
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="additional_info"
                    control={control}
                    rules={{ required: "Additional Notes is required" }}
                    render={({ field }) => (
                      <TextArea
                        showCount
                        maxLength={100}
                        onChange={onChange}
                        {...field}
                        prefix={<></>}
                        placeholder="Write here..."
                        className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                      />
                    )}
                  />

                  {errors.additional_info && (
                    <p className="text-red-500">
                      {" "}
                      {errors.additional_info.message}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-2 sm:py-3  md:py-4  lg:py-6 px-2 md-px-4">
              <PricingTitle titletext="Attachments" />
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                {/* property Name */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Photos
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="image"
                    control={control}
                    rules={{
                      required: "Photo is required",
                    }}
                    render={({ field }) => (
                      <Dragger
                        {...field}
                        beforeUpload={() => false}
                        maxCount={3}
                      >
                        <div className="p-2 rounded-[50px] bg-[#F0F5FF] w-fit mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.4008 11.2C14.7037 11.2 13.8552 11.2 13.328 10.6728C12.8008 10.1456 12.8008 9.29706 12.8008 7.6C12.8008 5.90294 12.8008 5.05442 13.328 4.52721C13.8552 4 14.7037 4 16.4008 4C18.0978 4 18.9464 4 19.4736 4.52721C20.0008 5.05442 20.0008 5.90294 20.0008 7.6C20.0008 9.29706 20.0008 10.1456 19.4736 10.6728C18.9464 11.2 18.0978 11.2 16.4008 11.2ZM17.0008 6C17.0008 5.66863 16.7322 5.4 16.4008 5.4C16.0694 5.4 15.8008 5.66863 15.8008 6V7H14.8008C14.4694 7 14.2008 7.26863 14.2008 7.6C14.2008 7.93137 14.4694 8.2 14.8008 8.2H15.8008V9.2C15.8008 9.53137 16.0694 9.8 16.4008 9.8C16.7322 9.8 17.0008 9.53137 17.0008 9.2V8.2H18.0008C18.3322 8.2 18.6008 7.93137 18.6008 7.6C18.6008 7.26863 18.3322 7 18.0008 7H17.0008V6Z"
                              fill="#010B21"
                            />
                            <path
                              opacity="0.6"
                              d="M19.9998 12.5583C19.9986 13.7339 19.9897 14.7332 19.9229 15.5531C19.8453 16.5046 19.6865 17.2997 19.3309 17.96C19.1741 18.2512 18.9813 18.512 18.7467 18.7467C18.0808 19.4126 17.2324 19.7142 16.1572 19.8588C15.1068 20 13.7606 20 12.0427 20H11.9573C10.2394 20 8.89317 20 7.84276 19.8588C6.76761 19.7142 5.91922 19.4126 5.25331 18.7467C4.66296 18.1563 4.3581 17.4216 4.19598 16.5101C4.03673 15.6147 4.00759 14.5007 4.00154 13.1174C4 12.7655 4 12.3934 4 12.0007V11.9573C3.99999 10.2394 3.99998 8.89317 4.14121 7.84276C4.28576 6.76761 4.58741 5.91922 5.25331 5.25331C5.91922 4.58741 6.76761 4.28576 7.84276 4.14121C8.77689 4.01562 9.97877 4.00172 11.4416 4.00019C11.7499 3.99987 12 4.24989 12 4.55814C12 4.86639 11.7498 5.11616 11.4415 5.11648C9.95799 5.11805 8.85401 5.13157 7.9915 5.24753C7.04013 5.37544 6.46657 5.61871 6.04264 6.04264C5.61871 6.46657 5.37544 7.04013 5.24753 7.9915C5.11747 8.95893 5.11628 10.2302 5.11628 12C5.11628 12.2161 5.11628 12.4252 5.11653 12.6275L5.86157 11.9756C6.53972 11.3823 7.5618 11.4163 8.19898 12.0535L11.3913 15.2458C11.9028 15.7573 12.7078 15.827 13.2996 15.4111L13.5215 15.2552C14.373 14.6567 15.5251 14.7261 16.2987 15.4223L18.4051 17.3181C18.6171 16.8728 18.743 16.2878 18.8103 15.4625C18.8736 14.6849 18.8823 13.7404 18.8835 12.5583C18.8838 12.2501 19.1336 12 19.4419 12C19.7501 12 20.0001 12.25 19.9998 12.5583Z"
                              fill="#010B21"
                            />
                          </svg>
                        </div>
                        <p className="text-[#010B21] text-center text-15px md:text-[16px] not-italic font-[Manrope] font-medium leading-[132%]">
                          Click to Upload
                          <br />
                          <small className="text-[#607080] text-center text-[12px] not-italic font-normal leading-[164%] font-[Manrope]">
                            {" "}
                            (Max. File size: 25 MB)
                          </small>
                        </p>
                      </Dragger>
                    )}
                  />
                  {errors.image && (
                    <p className="text-red-500"> {errors.image.message} </p>
                  )}
                </div>
                {/* Property Type* */}
                <div className="w-full">
                  <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                    Videos
                  </label>
                  <Controller
                    name="video"
                    control={control}
                    render={({ field }) => (
                      <Dragger
                        {...field}
                        beforeUpload={() => false}
                        maxCount={2}
                      >
                        <div className="p-2 rounded-[50px] bg-[#F0F5FF] w-fit mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.4008 11.2C14.7037 11.2 13.8552 11.2 13.328 10.6728C12.8008 10.1456 12.8008 9.29706 12.8008 7.6C12.8008 5.90294 12.8008 5.05442 13.328 4.52721C13.8552 4 14.7037 4 16.4008 4C18.0978 4 18.9464 4 19.4736 4.52721C20.0008 5.05442 20.0008 5.90294 20.0008 7.6C20.0008 9.29706 20.0008 10.1456 19.4736 10.6728C18.9464 11.2 18.0978 11.2 16.4008 11.2ZM17.0008 6C17.0008 5.66863 16.7322 5.4 16.4008 5.4C16.0694 5.4 15.8008 5.66863 15.8008 6V7H14.8008C14.4694 7 14.2008 7.26863 14.2008 7.6C14.2008 7.93137 14.4694 8.2 14.8008 8.2H15.8008V9.2C15.8008 9.53137 16.0694 9.8 16.4008 9.8C16.7322 9.8 17.0008 9.53137 17.0008 9.2V8.2H18.0008C18.3322 8.2 18.6008 7.93137 18.6008 7.6C18.6008 7.26863 18.3322 7 18.0008 7H17.0008V6Z"
                              fill="#010B21"
                            />
                            <path
                              opacity="0.6"
                              d="M19.9998 12.5583C19.9986 13.7339 19.9897 14.7332 19.9229 15.5531C19.8453 16.5046 19.6865 17.2997 19.3309 17.96C19.1741 18.2512 18.9813 18.512 18.7467 18.7467C18.0808 19.4126 17.2324 19.7142 16.1572 19.8588C15.1068 20 13.7606 20 12.0427 20H11.9573C10.2394 20 8.89317 20 7.84276 19.8588C6.76761 19.7142 5.91922 19.4126 5.25331 18.7467C4.66296 18.1563 4.3581 17.4216 4.19598 16.5101C4.03673 15.6147 4.00759 14.5007 4.00154 13.1174C4 12.7655 4 12.3934 4 12.0007V11.9573C3.99999 10.2394 3.99998 8.89317 4.14121 7.84276C4.28576 6.76761 4.58741 5.91922 5.25331 5.25331C5.91922 4.58741 6.76761 4.28576 7.84276 4.14121C8.77689 4.01562 9.97877 4.00172 11.4416 4.00019C11.7499 3.99987 12 4.24989 12 4.55814C12 4.86639 11.7498 5.11616 11.4415 5.11648C9.95799 5.11805 8.85401 5.13157 7.9915 5.24753C7.04013 5.37544 6.46657 5.61871 6.04264 6.04264C5.61871 6.46657 5.37544 7.04013 5.24753 7.9915C5.11747 8.95893 5.11628 10.2302 5.11628 12C5.11628 12.2161 5.11628 12.4252 5.11653 12.6275L5.86157 11.9756C6.53972 11.3823 7.5618 11.4163 8.19898 12.0535L11.3913 15.2458C11.9028 15.7573 12.7078 15.827 13.2996 15.4111L13.5215 15.2552C14.373 14.6567 15.5251 14.7261 16.2987 15.4223L18.4051 17.3181C18.6171 16.8728 18.743 16.2878 18.8103 15.4625C18.8736 14.6849 18.8823 13.7404 18.8835 12.5583C18.8838 12.2501 19.1336 12 19.4419 12C19.7501 12 20.0001 12.25 19.9998 12.5583Z"
                              fill="#010B21"
                            />
                          </svg>
                        </div>
                        <p className="text-[#010B21] text-center text-15px md:text-[16px] not-italic font-[Manrope] font-medium leading-[132%]">
                          Click to Upload
                          <br />
                          <small className="text-[#607080] text-center text-[12px] not-italic font-normal leading-[164%] font-[Manrope]">
                            {" "}
                            (Max. File size: 25 MB)
                          </small>
                        </p>
                      </Dragger>
                    )}
                  />

                  {errors.video && (
                    <p className="text-red-500"> {errors.video.message} </p>
                  )}
                </div>
              </div>
            </div>
            <div className="btn-wrapper mt-3 sm:mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row gap-2 md:gap-3">
              <button
                type="submit"
                className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px]"
              >
                Post job
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateJobModal;
