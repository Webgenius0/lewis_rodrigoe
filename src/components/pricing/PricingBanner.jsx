import homeHero from '../../assets/homeHero.png';
import { Button } from 'antd';

const PricingBanner = () => {
  return (
    <section className="relative">
      <div className=" h-screen w-full flex items-center justify-center bg-[#010B21]">
        <div className="flex flex-col items-center justify-center text-white">
          <h3 className="text-[#FFF] font-[Manrope] text-[112px] not-italic font-black leading-[125.44px] tracking-[-2.24px]">
            WELCOME
          </h3>
          <h3 className="text-[#FFF] font-[Manrope] text-[112px] not-italic font-black leading-[125.44px] tracking-[-2.24px]">
            TO HOUSEMATE
          </h3>
          <div className="flex">
            <p className="text-[#FFF] font-[Inter] text-[18px] not-italic font-semibold leading-[132%] max-w-[298px]">
              Your trusted partner for plumbing and electrical peace of mind.
            </p>
            <h3 className="text-[#FFF] font-[Manrope] text-[112px] not-italic font-black leading-[125.44px] tracking-[-2.24px]">
              SERVICES.
            </h3>
          </div>

          <Button className="text-[#FFF] text-right font-[Inter] text-[14px] not-italic font-semibold leading-[23.8px] uppercase px-[50px] py-[20px] rounded-[30px] [background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)] border-none ">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
