//import Testimonial from "@/components/home/Testimonial"
import PlanSection from "@/components/pricing/PlanSection";
import PricingBanner from "@/components/pricing/PricingBanner";

const Pricing = () => {
  return (
    <>
      <PricingBanner />
      <PlanSection />
      <div className="mb-14">{/* <Testimonial /> */}</div>
    </>
  );
};

export default Pricing;
