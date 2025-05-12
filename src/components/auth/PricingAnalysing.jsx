import { Controller, useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';

import homeHero from '../../assets/homeHero.png';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { DatePicker, Input, Select } from 'antd';
const { Option } = Select;
import PricingTitle from './PricingTitle';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PricingAnalysing = () => {
  // for getting form data and error
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/analysis-result');
  };

  console.log(errors);

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
                  <div className="grid grid-cols-3 gap-2">
                    {/* Plumbing */}
                    <button className="flex flex-col items-start gap-2 justify-between p-3 rounded-[24px] bg-[#F3F3F4] min-h-[94px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.6486 5.88247L19.0133 2.24718C18.5743 1.8082 17.9789 1.56158 17.358 1.56158C16.7372 1.56158 16.1418 1.8082 15.7027 2.24718C15.529 2.42292 15.4316 2.66007 15.4316 2.90718C15.4316 3.15429 15.529 3.39144 15.7027 3.56718L18.0886 5.95306C18.3564 6.22144 18.5068 6.5851 18.5068 6.96424C18.5068 7.34338 18.3564 7.70704 18.0886 7.97542L14.6016 11.466L17.3933 14.2578L22.6486 8.99894C22.8534 8.7944 23.0159 8.5515 23.1267 8.28412C23.2376 8.01675 23.2946 7.73015 23.2946 7.44071C23.2946 7.15127 23.2376 6.86467 23.1267 6.59729C23.0159 6.32992 22.8534 6.08702 22.6486 5.88247Z"
                          fill="black"
                        />
                        <path
                          d="M16.9826 14.8472L12.5426 10.4036L13.8662 9.08012C14.0042 8.94938 14.1147 8.7923 14.191 8.61815C14.2673 8.44401 14.308 8.25634 14.3106 8.06622C14.3132 7.8761 14.2776 7.68739 14.2061 7.51124C14.1345 7.33509 14.0284 7.17506 13.8939 7.04061C13.7595 6.90617 13.5994 6.80003 13.4233 6.72846C13.2471 6.6569 13.0584 6.62136 12.8683 6.62394C12.6782 6.62653 12.4905 6.66719 12.3164 6.74352C12.1422 6.81985 11.9852 6.9303 11.8544 7.06835L10.5309 8.39188L10.4285 8.28953C10.3482 8.20896 10.2528 8.14503 10.1477 8.10142C10.0426 8.0578 9.92995 8.03535 9.81617 8.03535C9.7024 8.03535 9.58975 8.0578 9.48467 8.10142C9.37959 8.14503 9.28415 8.20896 9.20382 8.28953L7.87676 9.61659C7.63641 9.85659 7.55912 10.2166 7.67912 10.5342L8.19441 11.8895L1.33994 18.7472C0.443469 19.6436 0.49641 21.1295 1.49876 21.9625C2.37406 22.686 3.67994 22.5589 4.48465 21.7542L11.8541 14.3848L14.6494 17.1801C15.2952 17.8225 16.3399 17.8225 16.9823 17.1801C17.1358 17.0271 17.2576 16.8453 17.3407 16.6452C17.4238 16.445 17.4666 16.2304 17.4666 16.0136C17.4666 15.7969 17.4238 15.5823 17.3407 15.3821C17.2576 15.182 17.1362 15.0002 16.9826 14.8472ZM3.5317 20.9213C3.44632 21.0089 3.3444 21.0786 3.23187 21.1265C3.11933 21.1745 2.9984 21.1996 2.87609 21.2004C2.75378 21.2013 2.63252 21.1779 2.51932 21.1315C2.40613 21.0852 2.30325 21.0169 2.21664 20.9305C2.13004 20.8441 2.06143 20.7414 2.01479 20.6284C1.96815 20.5153 1.9444 20.3941 1.94493 20.2718C1.94545 20.1495 1.97024 20.0285 2.01785 19.9158C2.06546 19.8031 2.13495 19.701 2.22229 19.6154C2.3961 19.443 2.63117 19.3466 2.87596 19.3473C3.12076 19.3479 3.3553 19.4456 3.52817 19.6189C3.61401 19.7042 3.6822 19.8055 3.72885 19.9171C3.77549 20.0287 3.79966 20.1484 3.79999 20.2694C3.80032 20.3903 3.77679 20.5102 3.73076 20.6221C3.68472 20.7339 3.61708 20.8356 3.5317 20.9213Z"
                          fill="black"
                        />
                        <path
                          d="M7.59766 19.6405C7.74517 19.7596 7.93153 19.8199 8.12086 19.8099C8.31018 19.7998 8.4891 19.7201 8.62316 19.586C8.75723 19.4519 8.83696 19.273 8.84702 19.0837C8.85708 18.8944 8.79676 18.708 8.67766 18.5605L7.59766 19.6405ZM10.2694 16.9719L9.17883 18.059L9.56001 18.4366C9.70567 18.5732 9.89876 18.6479 10.0985 18.6447C10.2981 18.6415 10.4888 18.5607 10.63 18.4195C10.7712 18.2783 10.8519 18.0877 10.8551 17.888C10.8583 17.6883 10.7837 17.4952 10.6471 17.3495L10.2694 16.9719ZM13.0259 16.5554L11.8541 15.3837L10.7671 16.4707L11.9388 17.6425C12.0779 17.784 12.2663 17.8663 12.4646 17.8722C12.663 17.8781 12.8559 17.807 13.0031 17.674C13.1503 17.5409 13.2404 17.3561 13.2545 17.1582C13.2686 16.9602 13.2057 16.7645 13.0788 16.6119C13.0612 16.5943 13.0435 16.5731 13.0259 16.5554Z"
                          fill="black"
                        />
                      </svg>
                      Plumbing
                    </button>
                    {/* Electrical */}
                    <button className="flex flex-col items-start gap-2 justify-between p-3 rounded-[24px] bg-[#F3F3F4] min-h-[94px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_208_8359)">
                          <path
                            d="M23.1547 17.2259L21.307 15.3783C20.3221 14.3933 18.8024 14.2693 17.6827 15.0059L8.99406 6.31719C9.7306 5.19744 9.60657 3.67776 8.62163 2.69287L6.77396 0.845242C5.8126 -0.116117 4.34218 -0.257304 3.23096 0.421164C3.09591 0.503571 3.07627 0.692477 3.18816 0.804321L5.42434 3.04049C5.70095 3.3171 5.70095 3.76556 5.42434 4.04216L4.04171 5.42479C3.7651 5.70135 3.31665 5.70135 3.04004 5.42474L0.803915 3.18862C0.692071 3.07677 0.503165 3.09641 0.420712 3.23146C-0.257288 4.34245 -0.115819 5.8131 0.845165 6.77409L2.69284 8.62171C3.67773 9.6066 5.19742 9.73068 6.31717 8.99413L15.0058 17.6828C14.2693 18.8025 14.3933 20.3222 15.3782 21.3071L17.2259 23.1547C18.1873 24.1161 19.6577 24.2573 20.769 23.5788C20.904 23.4964 20.9236 23.3075 20.8118 23.1957L18.5756 20.9595C18.299 20.6829 18.299 20.2344 18.5756 19.9578L19.9582 18.5752C20.2348 18.2986 20.6833 18.2986 20.9599 18.5752L23.1961 20.8114C23.3079 20.9233 23.4969 20.9036 23.5793 20.7686C24.2572 19.6576 24.1157 18.1869 23.1547 17.2259Z"
                            fill="#685E68"
                          />
                          <path
                            d="M5.42443 3.0405C5.70104 3.31711 5.70104 3.76556 5.42443 4.04217L6.14706 3.31955C6.42366 3.04294 6.42366 2.59449 6.14706 2.31788L3.94041 0.111237C3.69103 0.181989 3.4524 0.286252 3.23106 0.421174C3.09601 0.503627 3.07637 0.692487 3.18826 0.80433L5.42443 3.0405ZM21.6825 17.8526C21.4059 17.576 20.9574 17.576 20.6808 17.8526L19.9583 18.5751C20.2349 18.2986 20.6833 18.2986 20.9598 18.5753L23.196 20.8114C23.3079 20.9233 23.4968 20.9036 23.5792 20.7686C23.7141 20.5472 23.8183 20.3085 23.889 20.0591L21.6825 17.8526ZM20.7822 23.1661C19.8077 23.4437 18.716 23.1996 17.9485 22.4321L16.1009 20.5845C15.116 19.5996 14.9919 18.0799 15.7284 16.9602L7.03984 8.27147C5.92009 9.00806 4.40045 8.88399 3.41551 7.89905L1.56784 6.05142C0.800774 5.28436 0.556415 4.19269 0.833634 3.21825L0.803915 3.18858C0.692071 3.07674 0.503165 3.09638 0.420712 3.23142C-0.257288 4.34236 -0.115819 5.81306 0.845165 6.77405L2.69284 8.62167C3.67773 9.60661 5.19742 9.73064 6.31717 8.99409L15.0058 17.6828C14.2693 18.8025 14.3933 20.3222 15.3782 21.3071L17.2259 23.1547C18.1872 24.1161 19.6577 24.2573 20.7689 23.5788C20.9039 23.4963 20.9236 23.3075 20.8117 23.1956L20.7822 23.1661Z"
                            fill="#554E56"
                          />
                          <path
                            d="M9.63057 13.1067H7.34026C6.85135 13.1067 6.59574 12.5254 6.92626 12.1651L14.5682 3.83469C14.9595 3.40813 15.6622 3.78055 15.5289 4.34385L14.1246 10.2763C14.0411 10.6291 14.3087 10.9674 14.6713 10.9674H16.661C17.1454 10.9674 17.4027 11.5396 17.0813 11.902L9.75755 20.1583C9.37008 20.5951 8.65608 20.2243 8.79062 19.6561L10.1773 13.7978C10.2608 13.445 9.99319 13.1067 9.63057 13.1067Z"
                            fill="#3A3939"
                          />
                          <path
                            d="M12.0708 13.7981L10.8592 18.916L9.75722 20.1584C9.37003 20.5951 8.65584 20.2244 8.79061 19.6563L10.1774 13.7981C10.261 13.445 9.99319 13.1067 9.63042 13.1067H11.5244C11.8866 13.1067 12.1544 13.445 12.0708 13.7981ZM15.529 4.34411L15.367 5.02923L8.82019 12.1651C8.4893 12.5256 8.74514 13.1067 9.23414 13.1067H7.34016C6.85116 13.1067 6.59587 12.5256 6.9262 12.1651L14.5681 3.83518C14.9593 3.4082 15.6621 3.78058 15.529 4.34411Z"
                            fill="#3A3939"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_208_8359">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Electrical
                    </button>
                    {/* Drainage */}
                    <button className="flex flex-col items-start gap-2 justify-between p-3 rounded-[24px] bg-[#F3F3F4] min-h-[94px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_779_8406)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5338 11.2905C19.755 11.221 19.9674 11.0966 20.154 10.9101C20.3303 10.7338 20.617 10.7338 20.7932 10.9101L21.7655 11.8831C21.9417 12.0594 21.9417 12.3453 21.7655 12.5215C20.8079 13.4792 21.4877 15.1199 22.8417 15.1199C22.901 15.1198 22.9598 15.1315 23.0146 15.1542C23.0694 15.1768 23.1192 15.2101 23.1612 15.2521C23.2031 15.294 23.2364 15.3438 23.2591 15.3986C23.2817 15.4534 23.2934 15.5122 23.2933 15.5715V16.9466C23.2934 17.006 23.2817 17.0647 23.2591 17.1195C23.2364 17.1743 23.2031 17.2242 23.1612 17.2661C23.1192 17.3081 23.0694 17.3413 23.0146 17.364C22.9598 17.3867 22.901 17.3983 22.8417 17.3983C21.4877 17.3983 20.8079 19.039 21.7655 19.9966C21.9417 20.1728 21.9417 20.4596 21.7655 20.6359L20.7932 21.6081C20.617 21.7844 20.3303 21.7844 20.154 21.6081C19.1964 20.6504 17.5556 21.3303 17.5556 22.6843C17.5557 22.7436 17.544 22.8024 17.5214 22.8572C17.4987 22.912 17.4654 22.9618 17.4235 23.0038C17.3815 23.0457 17.3317 23.079 17.2769 23.1017C17.2221 23.1243 17.1634 23.136 17.104 23.1359H15.7289C15.6696 23.136 15.6108 23.1243 15.556 23.1017C15.5012 23.079 15.4514 23.0457 15.4094 23.0038C15.3675 22.9618 15.3342 22.912 15.3116 22.8572C15.2889 22.8024 15.2773 22.7436 15.2773 22.6843C15.2773 21.3287 13.6374 20.6496 12.6789 21.6081C12.5027 21.7844 12.2168 21.7844 12.0405 21.6081L11.0674 20.6359C10.8912 20.4596 10.8912 20.1728 11.0674 19.9966C12.0251 19.039 11.3461 17.3983 9.99124 17.3983C9.74188 17.3983 9.53962 17.196 9.53962 16.9466V15.5715C9.53962 15.3222 9.74188 15.1199 9.99124 15.1199C11.3461 15.1199 12.0251 13.4792 11.0674 12.5215C10.8912 12.3453 10.8912 12.0594 11.0674 11.8831L12.0405 10.9101C12.2168 10.7338 12.5027 10.7338 12.6789 10.9101C12.8661 11.0972 13.0793 11.2218 13.3013 11.2911V13.5722C12.7152 14.2754 12.3616 15.1805 12.3616 16.1673C12.3616 18.4063 14.1778 20.2225 16.4169 20.2225C18.656 20.2225 20.4721 18.4063 20.4721 16.1673C20.4721 15.1804 20.1197 14.2755 19.5338 13.5723V11.2905ZM16.4169 0.86409C17.7682 0.86409 18.875 1.97082 18.875 3.32216V13.8228C19.4564 14.4323 19.8133 15.2583 19.8133 16.1673C19.8133 18.0426 18.2922 19.5637 16.4169 19.5637C14.5416 19.5637 13.0205 18.0426 13.0205 16.1673C13.0205 15.2583 13.3787 14.4323 13.9601 13.8228V3.32216C13.9601 1.97082 15.0656 0.86409 16.4169 0.86409ZM17.4061 14.9066V9.75844C17.4061 9.21411 16.9648 8.7728 16.4205 8.7728H16.4132C15.8689 8.7728 15.4276 9.21411 15.4276 9.75844V14.9066C14.9888 15.2173 14.7022 15.729 14.7022 16.3071C14.7022 17.2534 15.4705 18.0217 16.4169 18.0217C17.3632 18.0217 18.1316 17.2534 18.1316 16.3071C18.1316 15.729 17.8449 15.2173 17.4061 14.9066ZM11.7067 7.49378C10.5869 7.49378 10.0246 8.85077 10.8166 9.64277C10.9623 9.78856 10.9623 10.0257 10.8166 10.1715L10.0125 10.9756C9.86673 11.1214 9.6296 11.1214 9.48381 10.9756C8.69176 10.1836 7.33482 10.7458 7.33482 11.8657C7.33486 11.9148 7.32523 11.9633 7.30648 12.0087C7.28772 12.054 7.26021 12.0952 7.22552 12.1299C7.19083 12.1646 7.14963 12.1921 7.1043 12.2109C7.05896 12.2296 7.01038 12.2392 6.96131 12.2392H5.824C5.77493 12.2392 5.72634 12.2296 5.681 12.2109C5.63566 12.1921 5.59447 12.1646 5.55978 12.1299C5.52508 12.0952 5.49757 12.054 5.47882 12.0087C5.46007 11.9633 5.45044 11.9148 5.45049 11.8657C5.45049 10.7445 4.09416 10.1829 3.30145 10.9756C3.23144 11.0456 3.13647 11.0849 3.03746 11.0849C2.93844 11.0849 2.84347 11.0456 2.77345 10.9756L1.9687 10.1715C1.82291 10.0257 1.82291 9.78856 1.9687 9.64277C2.7607 8.85077 2.1991 7.49378 1.07858 7.49378C0.979528 7.49377 0.884532 7.45442 0.814489 7.38437C0.744446 7.31433 0.705091 7.21933 0.705078 7.12028V5.98296C0.705103 5.88391 0.744463 5.78892 0.814503 5.71888C0.884544 5.64884 0.979532 5.60948 1.07858 5.60945C2.1991 5.60945 2.7607 4.25251 1.9687 3.46047C1.89869 3.39045 1.85935 3.29548 1.85935 3.19647C1.85935 3.09745 1.89869 3.00249 1.9687 2.93247L2.77345 2.12767C2.84347 2.05765 2.93844 2.01832 3.03746 2.01832C3.13647 2.01832 3.23144 2.05765 3.30145 2.12767C4.0935 2.91971 5.45049 2.35811 5.45049 1.2376C5.4505 1.13854 5.48986 1.04354 5.5599 0.973501C5.62994 0.903458 5.72494 0.864102 5.824 0.86409H6.96131C7.06037 0.864102 7.15537 0.903458 7.22541 0.973501C7.29545 1.04354 7.33481 1.13854 7.33482 1.2376C7.33482 2.35811 8.69176 2.91971 9.48381 2.12767C9.6296 1.98188 9.86673 1.98188 10.0125 2.12767L10.8166 2.93247C10.8866 3.0025 10.9259 3.09746 10.9259 3.19647C10.9259 3.29548 10.8866 3.39044 10.8166 3.46047C10.0246 4.25251 10.5869 5.60945 11.7067 5.60945C11.7557 5.60941 11.8043 5.61904 11.8497 5.6378C11.895 5.65655 11.9362 5.68406 11.9709 5.71876C12.0056 5.75345 12.0331 5.79464 12.0518 5.83997C12.0706 5.88531 12.0802 5.9339 12.0802 5.98296V7.12028C12.0802 7.16934 12.0706 7.21793 12.0519 7.26327C12.0331 7.30861 12.0056 7.3498 11.9709 7.3845C11.9362 7.41919 11.895 7.4467 11.8497 7.46545C11.8043 7.48421 11.7557 7.49383 11.7067 7.49378ZM6.39298 9.28475C7.89774 9.28475 9.12574 8.05675 9.12574 6.55195C9.12574 5.04654 7.89774 3.8192 6.39298 3.8192C4.88753 3.8192 3.66018 5.04654 3.66018 6.55195C3.66018 8.05675 4.88753 9.28475 6.39298 9.28475Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_779_8406">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Electrical
                    </button>
                    {/* Heating */}
                    <button className="flex flex-col items-start gap-2 justify-between p-3 rounded-[24px] bg-[#F3F3F4] min-h-[94px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_208_8343)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5338 11.2905C19.755 11.221 19.9674 11.0966 20.154 10.9101C20.3303 10.7338 20.617 10.7338 20.7932 10.9101L21.7655 11.8831C21.9417 12.0594 21.9417 12.3453 21.7655 12.5215C20.8079 13.4792 21.4877 15.1199 22.8417 15.1199C22.901 15.1198 22.9598 15.1315 23.0146 15.1542C23.0694 15.1768 23.1192 15.2101 23.1612 15.252C23.2031 15.294 23.2364 15.3438 23.2591 15.3986C23.2817 15.4534 23.2934 15.5122 23.2933 15.5715V16.9466C23.2934 17.0059 23.2817 17.0647 23.2591 17.1195C23.2364 17.1743 23.2031 17.2241 23.1612 17.2661C23.1192 17.308 23.0694 17.3413 23.0146 17.364C22.9598 17.3867 22.901 17.3983 22.8417 17.3982C21.4877 17.3982 20.8079 19.0389 21.7655 19.9966C21.9417 20.1728 21.9417 20.4596 21.7655 20.6358L20.7932 21.6081C20.617 21.7844 20.3303 21.7844 20.154 21.6081C19.1964 20.6504 17.5556 21.3303 17.5556 22.6843C17.5557 22.7436 17.544 22.8024 17.5214 22.8572C17.4987 22.912 17.4654 22.9618 17.4235 23.0038C17.3815 23.0457 17.3317 23.079 17.2769 23.1016C17.2221 23.1243 17.1634 23.1359 17.104 23.1359H15.7289C15.6696 23.1359 15.6108 23.1243 15.556 23.1016C15.5012 23.079 15.4514 23.0457 15.4094 23.0038C15.3675 22.9618 15.3342 22.912 15.3116 22.8572C15.2889 22.8024 15.2773 22.7436 15.2773 22.6843C15.2773 21.3287 13.6374 20.6496 12.6789 21.6081C12.5027 21.7844 12.2168 21.7844 12.0405 21.6081L11.0674 20.6358C10.8912 20.4596 10.8912 20.1728 11.0674 19.9966C12.0251 19.0389 11.3461 17.3982 9.99124 17.3982C9.74188 17.3982 9.53962 17.196 9.53962 16.9466V15.5715C9.53962 15.3221 9.74188 15.1199 9.99124 15.1199C11.3461 15.1199 12.0251 13.4792 11.0674 12.5215C10.8912 12.3453 10.8912 12.0594 11.0674 11.8831L12.0405 10.9101C12.2168 10.7338 12.5027 10.7338 12.6789 10.9101C12.8661 11.0972 13.0793 11.2218 13.3013 11.2911V13.5722C12.7152 14.2754 12.3616 15.1805 12.3616 16.1673C12.3616 18.4063 14.1778 20.2225 16.4169 20.2225C18.656 20.2225 20.4721 18.4063 20.4721 16.1673C20.4721 15.1804 20.1197 14.2755 19.5338 13.5723V11.2905ZM16.4169 0.864075C17.7682 0.864075 18.875 1.9708 18.875 3.32215V13.8228C19.4564 14.4323 19.8133 15.2583 19.8133 16.1673C19.8133 18.0426 18.2922 19.5637 16.4169 19.5637C14.5416 19.5637 13.0205 18.0426 13.0205 16.1673C13.0205 15.2583 13.3787 14.4323 13.9601 13.8228V3.32215C13.9601 1.9708 15.0656 0.864075 16.4169 0.864075ZM17.4061 14.9066V9.75843C17.4061 9.2141 16.9648 8.77278 16.4205 8.77278H16.4132C15.8689 8.77278 15.4276 9.2141 15.4276 9.75843V14.9066C14.9888 15.2173 14.7022 15.729 14.7022 16.307C14.7022 17.2534 15.4705 18.0217 16.4169 18.0217C17.3632 18.0217 18.1316 17.2534 18.1316 16.307C18.1316 15.729 17.8449 15.2173 17.4061 14.9066ZM11.7067 7.49377C10.5869 7.49377 10.0246 8.85076 10.8166 9.64276C10.9623 9.78855 10.9623 10.0257 10.8166 10.1715L10.0125 10.9756C9.86673 11.1213 9.6296 11.1213 9.48381 10.9756C8.69176 10.1836 7.33482 10.7458 7.33482 11.8657C7.33486 11.9147 7.32523 11.9633 7.30648 12.0087C7.28772 12.054 7.26021 12.0952 7.22552 12.1299C7.19083 12.1646 7.14963 12.1921 7.1043 12.2108C7.05896 12.2296 7.01038 12.2392 6.96131 12.2392H5.824C5.77493 12.2392 5.72634 12.2296 5.681 12.2109C5.63566 12.1921 5.59447 12.1646 5.55978 12.1299C5.52508 12.0952 5.49757 12.054 5.47882 12.0087C5.46007 11.9633 5.45044 11.9147 5.45049 11.8657C5.45049 10.7445 4.09416 10.1829 3.30145 10.9756C3.23144 11.0456 3.13647 11.0849 3.03746 11.0849C2.93844 11.0849 2.84347 11.0456 2.77345 10.9756L1.9687 10.1715C1.82291 10.0257 1.82291 9.78855 1.9687 9.64276C2.7607 8.85076 2.1991 7.49377 1.07858 7.49377C0.979528 7.49376 0.884532 7.4544 0.814489 7.38436C0.744446 7.31431 0.705091 7.21932 0.705078 7.12026V5.98295C0.705103 5.88389 0.744463 5.7889 0.814503 5.71886C0.884544 5.64882 0.979532 5.60946 1.07858 5.60944C2.1991 5.60944 2.7607 4.2525 1.9687 3.46045C1.89869 3.39043 1.85935 3.29547 1.85935 3.19645C1.85935 3.09743 1.89869 3.00247 1.9687 2.93245L2.77345 2.12765C2.84347 2.05764 2.93844 2.0183 3.03746 2.0183C3.13647 2.0183 3.23144 2.05764 3.30145 2.12765C4.0935 2.9197 5.45049 2.3581 5.45049 1.23758C5.4505 1.13852 5.48986 1.04353 5.5599 0.973486C5.62994 0.903443 5.72494 0.864087 5.824 0.864075H6.96131C7.06037 0.864087 7.15537 0.903443 7.22541 0.973486C7.29545 1.04353 7.33481 1.13852 7.33482 1.23758C7.33482 2.3581 8.69176 2.9197 9.48381 2.12765C9.6296 1.98186 9.86673 1.98186 10.0125 2.12765L10.8166 2.93245C10.8866 3.00248 10.9259 3.09744 10.9259 3.19645C10.9259 3.29546 10.8866 3.39042 10.8166 3.46045C10.0246 4.2525 10.5869 5.60944 11.7067 5.60944C11.7557 5.6094 11.8043 5.61903 11.8497 5.63778C11.895 5.65654 11.9362 5.68405 11.9709 5.71874C12.0056 5.75343 12.0331 5.79462 12.0518 5.83996C12.0706 5.8853 12.0802 5.93388 12.0802 5.98295V7.12026C12.0802 7.16933 12.0706 7.21792 12.0519 7.26326C12.0331 7.30859 12.0056 7.34979 11.9709 7.38448C11.9362 7.41918 11.895 7.44669 11.8497 7.46544C11.8043 7.48419 11.7557 7.49382 11.7067 7.49377ZM6.39298 9.28473C7.89774 9.28473 9.12574 8.05673 9.12574 6.55193C9.12574 5.04652 7.89774 3.81918 6.39298 3.81918C4.88753 3.81918 3.66018 5.04652 3.66018 6.55193C3.66018 8.05673 4.88753 9.28473 6.39298 9.28473Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_208_8343">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Heating
                    </button>
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
                        rules={{ required: 'Street Address is required' }}
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
                          {' '}
                          {errors.street.message}{' '}
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
                            required: 'Apartment / Suite / Unit is required',
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
                            {' '}
                            {errors.apartment.message}{' '}
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
                          rules={{ required: 'State / Province / Region' }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter state..."
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                            />
                          )}
                        />

                        {errors.state && (
                          <p className="text-red-500">
                            {' '}
                            {errors.state.message}{' '}
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
                            required: 'city is required',
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
                            {' '}
                            {errors.city.message}{' '}
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
                          rules={{ required: 'Postal / ZIP Code is required' }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter postal.."
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                            />
                          )}
                        />

                        {errors.postal && (
                          <p className="text-red-500">
                            {' '}
                            {errors.postal.message}{' '}
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
                          required: 'country is required',
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
                          {' '}
                          {errors.country.message}{' '}
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
                          required: 'Boiler Type is required',
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
                          {' '}
                          {errors.boilerType.message}{' '}
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
                        rules={{ required: 'Brand & Model* is required' }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter brand & model"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
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
                          required: 'Number of Boilers is required',
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
                          {' '}
                          {errors.boilersNumber.message}{' '}
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
                          rules={{ required: 'Age of Boiler is required' }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              prefix={<></>}
                              placeholder="Enter boiler age"
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                            />
                          )}
                        />

                        {errors.boilerAge && (
                          <p className="text-red-500">
                            {' '}
                            {errors.boilerAge.message}{' '}
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
                          rules={{ required: 'Last Serviced Date is required' }}
                          render={({ field }) => (
                            <DatePicker
                              onChange={onChange}
                              {...field}
                              placeholder="DD/MM/YYYY"
                              allowClear
                              prefix={<></>}
                              className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                            />
                          )}
                        />

                        {errors.lastServiceDate && (
                          <p className="text-red-500">
                            {' '}
                            {errors.lastServiceDate.message}{' '}
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
                        rules={{ required: 'Boiler Location* is required' }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter boiler location"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.boilerLocation && (
                        <p className="text-red-500">
                          {' '}
                          {errors.boilerLocation.message}{' '}
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
                        name="propertyName"
                        control={control}
                        rules={{ required: 'Property Name is required' }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter property name"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.propertyName && (
                        <p className="text-red-500">
                          {' '}
                          {errors.propertyName.message}{' '}
                        </p>
                      )}
                    </div>
                    {/* Property Type* */}
                    <div className="w-full">
                      <label className="block text-[#111214] font-[Manrope] text-[15px] md:text-[16px] not-italic font-bold leading-[21.12px] tracking-[-0.16px] mb-1">
                        Property Type
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="propertyType"
                        control={control}
                        rules={{ required: 'Property Type is required' }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter property name"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.propertyType && (
                        <p className="text-red-500">
                          {' '}
                          {errors.propertyType.message}{' '}
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
                        name="accessibilityInfo"
                        control={control}
                        rules={{ required: 'Accessibility Info is required' }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            prefix={<></>}
                            placeholder="Enter property name"
                            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)] "
                          />
                        )}
                      />

                      {errors.accessibilityInfo && (
                        <p className="text-red-500">
                          {' '}
                          {errors.accessibilityInfo.message}{' '}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="btn-wrapper mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={
                      ()=>{
                        navigate(-1)
                      }
                    }
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
