import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import GetStarted from "@/components/home/GetStarted";
import Offer from "@/components/home/Offer";
import Testimonial from "@/components/home/Testimonial";
import { ReactHookForm } from "@/components/shared/ReactHookForm";

const Home = () => {
  return (
    <div >
        <Banner/>
        <Offer/>
        <Testimonial/>
        <Faq/>
        <GetStarted/>
        <ReactHookForm/>
      
    </div>
  );
};

export default Home;
