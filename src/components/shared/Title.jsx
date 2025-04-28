import { cn } from "@/lib/utils";


const Title = ({ title, className = '' }) => {
  return (
    <>
      <h2
        className={cn(
          'text-[#0E0F11] text-center font-[Manrope] text-[48px] not-italic font-bold leading-[63.36px] tracking-[-0.48px]', className
        )}
      >
        {title}
      </h2>
    </>
  );
};


export default Title;
