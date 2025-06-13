import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { useSignUp } from '@/hooks/auth.hook';
import { UserOutlined } from '@ant-design/icons';
import { Input, Select, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import uploadPlus from '../../assets/uploadPlus.png';
const { Option } = Select;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isImage) {
    message.error('Only JPG/PNG files allowed!');
  }
  const isSmall = file.size / 1024 / 1024 < 2;
  if (!isSmall) {
    message.error('Image must be smaller than 2MB!');
  }
  return isImage && isSmall;
};

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackageId = location.state?.package_id;
  const authData = location?.state?.authData;

  const { form, mutate, isPending } = useSignUp();
  // for getting form data and error
  const {
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    watch,
  } = form;

  const onSubmit = (data) => {
    if (selectedPackageId) {
      mutate(data);
    } else {
      navigate('/pricing', { state: { authData: data } });
    }
  };

  // for image upload
  const [imageUrl, setImageUrl] = useState(null);
  const [step, setStep] = useState(1);

  const handleChange = (info) => {
    const file = info.file.originFileObj;
    if (!file) return;

    if (info.file.status === 'uploading') {
      return;
    }

    if (info.file.status === 'done' || file) {
      getBase64(file, (url) => {
        setImageUrl(url);
      });

      form.setValue('avatar', file);
    }
  };

  const goToNextStep = async () => {
    const valid = await trigger(['first_name', 'last_name', 'phone', 'gender']);
    if (valid) {
      setStep(2);
    }
  };

  const watchFields = watch(['first_name', 'last_name', 'phone', 'gender']);
  const isDisabled = watchFields.some((val) => !val);

  useEffect(() => {
    if (selectedPackageId) {
      form.setValue('package_id', selectedPackageId);
    }
    if (authData) {
      form.reset(authData);
    }
  }, [selectedPackageId, authData]);

  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center auth-section"
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
                Create your account
              </h2>
              <p className="text-[#3B3B3B] text-center font-[Urbanist] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px]">
                Please fill in your Email and Password to Sign up.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-6"
            >
              {step === 1 && (
                <>
                  {' '}
                  {/* Avatar Upload Section */}
                  <div
                    className="imgUploadClass"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 24,
                    }}
                  >
                    <ImgCrop rotate>
                      <Upload
                        name="avatar"
                        listType="picture-circle"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: 100,
                            height: 100,
                          }}
                        >
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt="avatar"
                              style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: '#f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <UserOutlined
                                style={{ fontSize: 32, color: '#999' }}
                              />
                            </div>
                          )}

                          {/* Custom Icon Button */}
                          <div
                            style={{
                              position: 'absolute',
                              bottom: -2,
                              right: -2,
                              backgroundColor: 'inherit',
                              borderRadius: '50%',
                              padding: 6,
                              cursor: 'pointer',
                            }}
                          >
                            <span>
                              <img src={uploadPlus} />
                            </span>
                          </div>
                        </div>
                      </Upload>
                    </ImgCrop>
                  </div>
                  {/* Name */}
                  <div className="flex gap-5 justify-between">
                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        First Name
                      </label>
                      <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: 'Name is required' }}
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

                      {errors.first_name && (
                        <p className="text-red-500">
                          {' '}
                          {errors.first_name.message}{' '}
                        </p>
                      )}
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-2">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Last Name
                      </label>
                      <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: 'Last Name is required' }}
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

                      {errors.last_name && (
                        <p className="text-red-500">
                          {' '}
                          {errors.last_name.message}{' '}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Phone Number
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: 'Phone number is required' }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          country="gb"
                          onlyCountries={['gb']}
                          disableCountryCode={false}
                          disableDropdown={true}
                          enableSearch={false}
                          inputClass="!pl-12 !py-2 !px-4 !bg-[#F3F3F4] !border !border-transparent !rounded-md !w-full border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#09B5FF] bg-[#F3F3F4] !h-11 "
                          buttonClass="!border-none !bg-transparent !left-3"
                          containerClass="!w-full"
                          value={field.value}
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
                  {/* Gender */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Gender
                    </label>
                    <Controller
                      name="gender"
                      control={control}
                      rules={{ required: 'Gender is required' }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="-- Select Gender --"
                          allowClear
                          value={field.value}
                          onChange={field.onChange}
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
                          <Option value="femail">Female</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      )}
                    />
                    {errors.gender && (
                      <p className="text-red-500">{errors.gender.message}</p>
                    )}
                  </div>
                  {/* react phone number input 2 */}
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={isDisabled}
                    className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
                  >
                    Continue
                  </button>
                  <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-normal leading-[170%] mx-auto">
                    Already have an account? {''}
                    <Link
                      to="/sign-in"
                      className="text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] [text-decoration-line:underline] [text-decoration-style:solid] [text-decoration-skip-ink:none] [text-underline-offset:auto] [text-underline-position:from-font]"
                    >
                      Sign-in here!
                    </Link>
                  </p>
                </>
              )}
              {step === 2 && (
                <>
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Email Address
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: 'Email is required' }}
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

                    {errors.email && (
                      <p className="text-red-500"> {errors.email.message} </p>
                    )}
                  </div>
                  {/* Password */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Password
                    </label>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: 'Password is required' }}
                      render={({ field }) => (
                        <Input.Password
                          {...field}
                          placeholder="***********"
                          prefix={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.10202 9.39942L6.50233 9.57076C5.5547 9.84151 4.78575 10.5356 4.41972 11.4507C3.50834 13.7291 3.50834 16.2709 4.41972 18.5493C4.78575 19.4644 5.5547 20.1585 6.50233 20.4292L7.10202 20.6006C10.3033 21.5152 13.6967 21.5152 16.898 20.6006L17.4977 20.4292C18.4453 20.1585 19.2143 19.4644 19.5803 18.5493C20.4917 16.2709 20.4917 13.7291 19.5803 11.4507C19.2143 10.5356 18.4453 9.84151 17.4977 9.57076L16.898 9.39942C13.6967 8.48477 10.3033 8.48477 7.10202 9.39942Z"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 13L12 17"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9V5.32456C9 4.53354 9.50616 3.83128 10.2566 3.58114V3.58114C11.3883 3.20392 12.6117 3.20392 13.7434 3.58114V3.58114C14.4938 3.83128 15 4.53354 15 5.32456V9"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          }
                          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                  {/* Confirm Password */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Confirm Password
                    </label>
                    <Controller
                      name="password_confirmation"
                      control={control}
                      rules={{ required: 'Password is required' }}
                      render={({ field }) => (
                        <Input.Password
                          {...field}
                          placeholder="***********"
                          prefix={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.10202 9.39942L6.50233 9.57076C5.5547 9.84151 4.78575 10.5356 4.41972 11.4507C3.50834 13.7291 3.50834 16.2709 4.41972 18.5493C4.78575 19.4644 5.5547 20.1585 6.50233 20.4292L7.10202 20.6006C10.3033 21.5152 13.6967 21.5152 16.898 20.6006L17.4977 20.4292C18.4453 20.1585 19.2143 19.4644 19.5803 18.5493C20.4917 16.2709 20.4917 13.7291 19.5803 11.4507C19.2143 10.5356 18.4453 9.84151 17.4977 9.57076L16.898 9.39942C13.6967 8.48477 10.3033 8.48477 7.10202 9.39942Z"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 13L12 17"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9V5.32456C9 4.53354 9.50616 3.83128 10.2566 3.58114V3.58114C11.3883 3.20392 12.6117 3.20392 13.7434 3.58114V3.58114C14.4938 3.83128 15 4.53354 15 5.32456V9"
                                stroke="#111214"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          }
                          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                        />
                      )}
                    />
                    {errors.password_confirmation && (
                      <p className="text-red-500">
                        {errors.password_confirmation.message}
                      </p>
                    )}
                  </div>
                  {/* Package ID */}
                  {/* <div className="flex flex-col gap-2">
                    <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                      Package Id
                    </label>
                    <Controller
                      name="package_id"
                      control={control}
                      rules={{ required: 'Package Id is required' }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          disabled={!!selectedPackageId}
                          placeholder="Enter Package Id"
                          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4]"
                        />
                      )}
                    />

                    {errors.package_id && (
                      <p className="text-red-500">
                        {' '}
                        {errors.package_id.message}{' '}
                      </p>
                    )}
                  </div> */}

                  {/* Action Buttons */}
                  <div className="flex justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
                    >
                      ← Previous
                    </button>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#0A0A0A] py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-[16px] hover:bg-[#F0F5F6] hover:text-[#0A0A0A] border border-[#0A0A0A] transition text-[#F0F5F6] font-[Urbanist] text-[16px] not-italic font-medium leading-[25.6px] mt-6 md:mt-8 lg:mt-10"
                    >
                      {isPending ? 'Signing Up' : 'Sign Up'}
                    </button>
                  </div>

                  <p className="text-[#3B3B3B] font-[Urbanist] text-[16px] not-italic font-normal leading-[170%] mx-auto">
                    Already have an account? {''}
                    <Link
                      to="/sign-in"
                      className="text-[#0A0A0A] font-[Urbanist] text-[16px] not-italic font-semibold leading-[170%] [text-decoration-line:underline] [text-decoration-style:solid] [text-decoration-skip-ink:none] [text-underline-offset:auto] [text-underline-position:from-font]"
                    >
                      Sign-in here!
                    </Link>
                  </p>
                </>
              )}
            </form>
          </div>

          {/* dummy user comment area */}

          {/* <AuthComment /> */}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
