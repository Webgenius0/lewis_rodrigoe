

const PricingTitle = ({titletext}) => {
  return (
    <div className="flex items-center gap-3 text-[#607080] text-center font-[Manrope] text-[12px] not-italic font-medium leading-[19.68px] text-nowrap">
      <span className="bg-[#E1E6EF] h-[1px] w-full"></span>
      <p className="flex-shrink-0">{titletext}</p>
      <span className="bg-[#E1E6EF] h-[1px] w-full"></span>
    </div>
  );
}

export default PricingTitle