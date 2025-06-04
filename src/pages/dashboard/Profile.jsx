import { Tabs, Button, Input, Select, Upload } from "antd";
import { useState } from "react";
const { Dragger } = Upload;
const { Option } = Select;
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import NotificationSettings from "./NotificationSettings";
import { useGetUserdata, useUpdateUser } from "@/hooks/dashboard.hook";
import { useEffect } from "react";
import { useUpdatePassword } from "@/hooks/auth.hook";

const Profile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const handleImageChange = (info) => {
    const file = info.file.originFileObj;
    if (file) {
      setAvatarFile(file); // actual file to send
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result); // for preview only
      };
      reader.readAsDataURL(file);
    }
  };
  const { userdata } = useGetUserdata();
  const { form, updateUser } = useUpdateUser();

  console.log({ userdata });
  const fullName = userdata?.user?.first_name + " " + userdata?.user?.last_name;
  console.log("Full Name:", fullName);

  //state

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // update state when userdata is loaded
  useEffect(() => {
    if (userdata?.user) {
      setFirstName(userdata.user.first_name || "");
      setLastName(userdata.user.last_name || "");
      setEmail(userdata.user.email || "");
      setSelectedGender(userdata.user.profile?.gender || "");
      setPhone(userdata.user.profile?.phone || "");
      setImageUrl(userdata.user.avatar || null);
    }
  }, [userdata]);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("gender", selectedGender);
    formData.append("phone", phone);
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    updateUser(formData); // ensure your hook handles FormData
    setIsEditing(false);
  };
  const { updatePassword, isUpdating } = useUpdatePassword();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onUpdatePassword = () => {
    const formData = {
      old_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    updatePassword(formData);
  };

  // My Details
  const personalInfoForm = (
    <div className=" bg-white ">
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB] items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[#181D27] font-[Manrope] text-[17px] md:text-[18px] not-italic font-semibold leading-[28px]">
            Personal info
          </p>
          <p className="text-[#535862] font-[Manrope] text-[14px] not-italic font-normal leading-[20px]">
            Update your photo and personal details here.
          </p>
        </div>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          className="[background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)] text-[#FFF] font-[Inter] text-[14px] not-italic font-semibold leading-[20px] "
        >
          Edit
        </Button>
      </div>
      {/* Name */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
        <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={fullName}
          readOnly={!isEditing}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
        />
      </div>
      {/* Email */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
        <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!isEditing}
          placeholder={email}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
        />
      </div>

      {/* Photo Upload */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
        <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
          Your Photo
        </label>
        <div className="flex flex-row-reverse items-center gap-3 max-w-[509px] w-full">
          <Dragger
            className="profile !bg-[#FFF] w-full "
            name="file"
            multiple={false}
            showUploadList={false}
            onChange={handleImageChange}
            accept="image/*"
          >
            <div className="p-2 rounded-[50px] bg-[#F0F5FF] w-fit mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1171_7558)">
                  <path
                    d="M13.3326 13.3332L9.99923 9.9999M9.99923 9.9999L6.6659 13.3332M9.99923 9.9999V17.4999M16.9909 15.3249C17.8037 14.8818 18.4458 14.1806 18.8158 13.3321C19.1858 12.4835 19.2627 11.5359 19.0344 10.6388C18.8061 9.7417 18.2855 8.94616 17.5548 8.37778C16.8241 7.80939 15.925 7.50052 14.9992 7.4999H13.9492C13.697 6.52427 13.2269 5.61852 12.5742 4.85073C11.9215 4.08295 11.1033 3.47311 10.181 3.06708C9.2587 2.66104 8.25636 2.46937 7.24933 2.50647C6.2423 2.54358 5.25679 2.80849 4.36688 3.28129C3.47697 3.7541 2.70583 4.42249 2.11142 5.23622C1.51701 6.04996 1.11481 6.98785 0.935051 7.9794C0.755293 8.97095 0.802655 9.99035 1.07358 10.961C1.3445 11.9316 1.83194 12.8281 2.49923 13.5832"
                    stroke="#535862"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1171_7558">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-[#00245F] font-[Inter] text-[14px] not-italic font-semibold leading-[20px]">
              Click to Upload
              <small className="text-[#535862] text-[14px] not-italic font-normal leading-[20px]">
                {" "}
                (Max. File size: 25 MB)
              </small>
            </p>
          </Dragger>
          {imageUrl && (
            <img
              src={imageUrl || userdata?.user?.avatar}
              alt="Preview"
              className="w-[64px] h-[56px] object-cover  border border-[#E1E6EF]  rounded-[50%] bg-[lightgray_50%] bg-cover bg-no-repeat"
            />
          )}
        </div>
      </div>

      {/* Gender */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
        <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
          Gender
        </label>
        <Select
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
          className="max-w-[509px] w-full"
          value={selectedGender}
          onChange={(value) => setSelectedGender(value)}
          disabled={!isEditing}
        >
          <Option value="male">Male</Option>
          <Option value="femail">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </div>

      {/* Phone Number */}
      <div className="py-5 flex gap-8 border-b border-[#E9EAEB] pb-4 sm:pb-10 md:pb-16">
        <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
          Phone Number
        </label>
        <PhoneInput
          value={phone}
          onChange={(value) => setPhone(value)}
          inputProps={{
            readOnly: !isEditing,
          }}
          country="gb"
          onlyCountries={["gb"]}
          disableCountryCode={false}
          disableDropdown={true}
          enableSearch={false}
          inputClass="!pl-12 !py-2 !px-4 !bg-[#F3F3F4] !border !border-transparent !rounded-md !w-full border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#09B5FF] bg-[#F3F3F4] !h-11 max-w-[509px] w-full"
          buttonClass="!border-none !bg-transparent !left-3"
          containerClass="!w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-3 mb:pt-4">
        {isEditing ? (
          <Button
            onClick={handleSave}
            type="primary"
            className="bg-blue-500 text-white"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            className="gradient-button text-white"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );

  // Password
  const password = (
    <div className=" bg-white h-full">
      <div className="border-b border-[#E9EAEB] flex flex-col justify-between h-full">
        <div className="py-5 flex gap-8 border-b border-[#E9EAEB] items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[#181D27] font-[Manrope] text-[17px] md:text-[18px] not-italic font-semibold leading-[28px]">
              Password
            </p>
            <p className="text-[#535862] font-[Manrope] text-[14px] not-italic font-normal leading-[20px]">
              Please enter your current password to change your password.
            </p>
          </div>
        </div>
        {/* Current password */}
        <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
          <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
            Current password<span className="text-red-500">*</span>
          </label>
          <Input.Password
            prefix={<LockIcon />}
            placeholder="***********"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
          />
        </div>

        {/* New password */}
        <div className="py-5 flex gap-8 border-b border-[#E9EAEB]">
          <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
            New password<span className="text-red-500">*</span>
          </label>
          <Input.Password
            prefix={<LockIcon />}
            placeholder="***********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
          />
        </div>
        {/* Confirm new password* */}
        <div className="py-5 flex gap-8">
          <label className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] min-w-[280px]">
            Confirm new password<span className="text-red-500">*</span>
          </label>
          <Input.Password
            prefix={<LockIcon />}
            placeholder="***********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#F3F3F4] max-w-[509px]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-3 mb:pt-4">
        <Button className="rounded-[8px] border-[1px] border-[solid] border-[#D5D7DA] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(10,_13,_18,_0.05)] text-[#414651] font-[Inter] text-[14px] not-italic font-semibold leading-[20px]">
          Cancel
        </Button>

        <Button
          onClick={onUpdatePassword}
          type="submit"
          className="[background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)] text-[#FFF] font-[Inter] text-[14px] not-italic font-semibold leading-[20px] "
        >
          Save
        </Button>
      </div>
    </div>
  );

  const tabItems = [
    {
      key: "1",
      label: "My Details",
      children: personalInfoForm,
    },
    {
      key: "2",
      label: "Password",
      children: password,
    },
    // {
    //   key: "3",
    //   label: "Notifications",
    //   children: <NotificationSettings />,
    // },
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
                maxHeight: "calc(100vh - 200px)",
                overflowY: "auto",
                paddingRight: "8px",
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

export default Profile;
