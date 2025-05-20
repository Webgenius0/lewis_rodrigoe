import Subtitile from '../shared/Subtitile'
import Title from '../shared/Title';

const Offer = () => {
  return (
    <>
      <div className="container mt-14">
        <div className="max-w-[978px] mx-auto flex flex-col gap-3 mb-4">
          <Subtitile
            text="We are offering"
            className="text-center justify-center"
          />
          <Title title="Excellent service in Home Care and Precision in Every Detail" />
        </div>
        <p className="font-[Manrope] text-[#606060] text-center text-[16px] sm:text-[17px] md:text-[22px] lg:text-[28px] xl:text-[32px] not-italic font-medium leading-[28.48px] md:leading-[32.48px] lg:leading-[52.48px] xl:leading-[52.48px] tracking-[0.32px]">
          HouseMate provides flexible, app-based homecare plans for residential
          and commercial properties. We cover boiler servicing, heating,
          plumbing, drainage, and electrics — all under one simple monthly
          subscription. HouseMate delivers reliable, transparent maintenance
          support when you need it most. Whether you're a homeowner, landlord,
          or business owner managing multiple properties, HouseMate makes
          property maintenance effortless.
        </p>
      </div>
    </>
  );
}

export default Offer