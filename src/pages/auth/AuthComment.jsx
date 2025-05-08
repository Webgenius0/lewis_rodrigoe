import user from '../../assets/testimonial1.jpg';

export const AuthComment = () => {
  return (
    <div className="max-w-[483px] xl:max-w-[583px] px-[33px] py-[34px] lg:px-[53px] lg:py-[44px] rounded-[40px] bg-[rgba(99,_99,_99,_0.64)] backdrop-filter backdrop-blur-[5px] flex flex-col items-center justify-center gap-5 md:gap-8">
      <p className="text-[#F0F5F6] text-center font-[Urbanist] text-[20px] not-italic font-semibold leading-[34px]">
        I can now track my vitals and sleep patterns daily, and Helix has been a
        game-changer for me it’s helped me build healthier habits!
      </p>
      <div className="flex items-center gap-2">
        <div className="w-[68px] h-[68px] flex-shrink-0 rounded-[68px] border-[6px] border-[solid] border-[#FFF] bg-[lightgray_50%_/_cover_no-repeat] overflow-hidden">
          <img src={user} className="bg-cover h-full w-full " />
        </div>
        <div className="flex flex-col">
          <p className="text-[#FFF] font-[Urbanist] text-[16px] not-italic font-semibold leading-[27.2px]">
            Brooklyn Simmons
          </p>
          <p className="text-[#F0F5F6] font-[Urbanist] text-[14px] not-italic font-normal leading-[23.8px]">
            Product Manager
          </p>
        </div>
      </div>
    </div>
  );
};
