import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Select } from 'antd';
import { AuthComment } from '../../components/auth/AuthComment';
const { Option } = Select;
import { useState } from 'react';
import { Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import uploadPlus from '../../assets/uploadPlus.png';

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
  // for getting form data and error
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/sign-up-continue');
  };

  console.log(errors);

  // for image upload
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done' || info.file.originFileObj) {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
                      style={{ position: 'relative', width: 100, height: 100 }}
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

              <div className="flex flex-col gap-2">
                <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                  Name
                </label>
                <Controller
                  name="name"
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
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={'us'} // Default country
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
                  rules={{ required: 'Gender is required' }}
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

              {/* react phone number input 2 */}

              <button
                type="submit"
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
            </form>
          </div>

          {/* dummy user comment area */}

          <AuthComment />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
