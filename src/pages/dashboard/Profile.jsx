import { Tabs, Button, Input, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Profile = () => {
  const personalInfoForm = (
    <div className="p-6 bg-white border border-[#E1E6EF] rounded-[16px] shadow-sm">
      {/* Name */}
      <div className="py-5 flex gap-8 border-y border-[#E9EAEB]">
        <label className="block text-[#132235] font-semibold min-w-[280px]">
          Name
        </label>
        <Input
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
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
        />
      </div>
      {/* Email */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
        <label className="block text-[#132235] font-semibold min-w-[280px]">
          Email
        </label>
        <Input
          prefix={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          placeholder="elementary221b@gmail.com"
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
        />
      </div>

      {/* Email */}
 

      {/* Photo Upload */}
      <div className="mb-4">
        <label className="block text-[#132235] font-semibold mb-1">
          Your Photo
        </label>
        <Dragger
          className="!bg-[#FAFAFB]"
          name="file"
          multiple={false}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to upload</p>
          <p className="ant-upload-hint text-xs text-gray-500">
            PNG, JPG, or JPEG (max. 800x400px)
          </p>
        </Dragger>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-[#132235] font-semibold mb-1">
          Gender
        </label>
        <Select
          placeholder="Select Gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
          className="w-full"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-[#132235] font-semibold mb-1">
          Phone Number
        </label>
        <Input addonBefore="+44" defaultValue="743736842" />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <Button className="border-[#E1E6EF]" danger ghost>
          Cancel
        </Button>
        <Button
          type="primary"
          className="[background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)] text-white font-semibold"
        >
          Save
        </Button>
      </div>
    </div>
  );

  const tabItems = [
    {
      key: '1',
      label: 'My Details',
      children: personalInfoForm,
    },
    {
      key: '2',
      label: 'Password',
      children: (
        <div className="p-6 bg-white rounded-[16px] border">
          Password settings coming soon.
        </div>
      ),
    },
    {
      key: '3',
      label: 'Notifications',
      children: (
        <div className="p-6 bg-white rounded-[16px] border">
          Notification preferences here.
        </div>
      ),
    },
  ];

  return (
    <div className="my-profile-container">
      <div className="header flex justify-between items-center mb-4">
        <h2 className="text-[#181D27] text-[30px] font-semibold leading-[38px] font-[Manrope]">
          Settings
        </h2>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={tabItems.map((item) => ({
          ...item,
          children: (
            <div
              style={{
                maxHeight: 'calc(100vh - 200px)',
                overflowY: 'auto',
                paddingRight: '8px',
              }}
            >
              {item.children}
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default Profile;
