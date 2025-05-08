import homeHero from '../../assets/homeHero.png';
import { Button } from 'antd';

const PricingBanner = () => {
  return (
    <section className="relative">
      <div className="pt-[120px] pb-[80px] md:pt-[130px] md:pb-[100px] lg:pt-[180px] lg:pb-[130px] h-full w-full flex items-center justify-center bg-[#010B21]">
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-[#FFF] text-center font-[Manrope] text-[35px] md:text-[60px] lg:text-[80px] not-italic font-bold leading-[48px] md:leading-[68px] lg:leading-[88px] tracking-[-1px]">
            Pricing & Plans
          </h1>
          <p className="text-[#FAFAFC] text-center font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[27.2px] max-w-[222px]">
            No hidden fees. Just honest cover that works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
