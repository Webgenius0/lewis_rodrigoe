import { cn } from "@/lib/utils";


const Title = ({ title, className = '' }) => {
  return (
    <>
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        className={cn(
          'text-[#0E0F11] text-center font-[Manrope] text-[22px] sm:text-[24px] md:text-[32px] xl:text-[48px] not-italic font-bold leading-[33.36px] sm:leading-[43.36px] md:leading-[53.36px] lg:leading-[63.36px] tracking-[-0.48px]',
          className
        )}
      >
        {title}
      </h2>
    </>
  );
};


export default Title;
