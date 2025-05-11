import { Tabs, Button, Input, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Profile = () => {
  const personalInfoForm = (
    <div className="p-6 bg-white border border-[#E1E6EF] rounded-[16px] shadow-sm">
      {/* Name */}
      <div className="mb-4">
        <label className="block text-[#132235] font-semibold mb-1">Name</label>
        <Input defaultValue="eklemen" />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-[#132235] font-semibold mb-1">
          Email address
        </label>
        <Input defaultValue="eklemantary21st@gmail.com" />
      </div>

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
