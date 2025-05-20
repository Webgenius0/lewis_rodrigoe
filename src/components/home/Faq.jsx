import Subtitile from '../shared/Subtitile';
import Title from '../shared/Title';
import { Collapse } from 'antd';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';

const items = [
  {
    key: '1',
    label: (
      <div className="text-[#1B1139] font-[Manrope] text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] not-italic font-bold leading-[31.2px] opacity-[0.88]">
        What is HouseMate and how does it work?
      </div>
    ),
    children: (
      <p className="text-[#363049] font-[Manrope] text-[15px] sm:text-[17px] md:text-[18px] not-italic font-normal md:leading-[29.52px] tracking-[0.1px] opacity-70">
        HouseMate is a modern homecare subscription designed to keep your home
        running smoothly — without the stress of unexpected repair bills.
        Whether it’s your boiler, heating, plumbing, drains, or electrics, we’ve
        got it covered.
        <br />
        <br />
        For a simple monthly fee, you get access to: <br /> ✅ An annual boiler
        service by a local Gas Safe engineer <br /> ✅ Fast, reliable support
        for breakdowns or home emergencies <br /> ✅ Flexible plan options based
        on the level of cover you need <br /> ✅ Qualified, local professionals
        — not a national call centre
        <br />
        <br />
        Getting started is easy: <br /> ✅ Pick a plan that suits your home{' '}
        <br /> ✅ Sign up online in minutes <br /> ✅ Relax — we’ll handle the
        rest when something goes wrong <br /> ✅ No hassle. No hidden fees. Just
        peace of mind — powered by HouseMate
      </p>
    ),
    className:
      'rounded-[8px] bg-[#FFF] p-[16px] sm:p-[18px] md:p-[20px] lg:p-[24px] [box-shadow:0px_4px_32px_-14.734px_rgba(149,_149,_149,_0.25)]',
  },
  {
    key: '2',
    label: (
      <div className="text-[#1B1139] font-[Manrope] text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] not-italic font-bold leading-[31.2px] opacity-[0.88]">
        How do I use HouseMate?
      </div>
    ),
    children: (
      <p className="text-[#363049] font-[Manrope] text-[15px] sm:text-[17px] md:text-[18px] not-italic font-normal md:leading-[29.52px] tracking-[0.1px] opacity-70">
        Using HouseMate is simple and hassle-free. Once you&apos;ve selected and
        subscribed to your preferred plan, you’ll have immediate access to our
        network of trusted local professionals. When you experience a breakdown
        or a home emergency, just contact us through our 24/7 support system —
        no long waits or complicated processes. We&apos;ll quickly dispatch a
        qualified engineer to fix the issue. Plus, your annual boiler service
        will be scheduled automatically, so you don’t have to worry about
        booking it yourself.
      </p>
    ),
    className:
      'rounded-[8px] bg-[#FFF] p-[16px] sm:p-[18px] md:p-[20px] lg:p-[24px] [box-shadow:0px_4px_32px_-14.734px_rgba(149,_149,_149,_0.25)]',
  },
  {
    key: '3',
    label: (
      <div className="text-[#1B1139] font-[Manrope] text-[17px] sm:text-[18px] md:text-[20px] lg:text-[24px] not-italic font-bold leading-[31.2px] opacity-[0.88]">
        Is HouseMate available in all regions?
      </div>
    ),
    children: (
      <p className="text-[#363049] font-[Manrope] text-[15px] sm:text-[17px] md:text-[18px] not-italic font-normal md:leading-[29.52px] tracking-[0.1px] opacity-70">
        HouseMate is currently available across many regions within the United
        Kingdom. We’re rapidly expanding to cover even more areas to meet
        growing demand. To check if HouseMate is available in your specific
        location, simply enter your postcode during the sign-up process — we’ll
        instantly let you know if we can provide coverage at your address. If
        we&apos;re not in your area yet, stay tuned! We’re working hard to reach
        more homes soon.
      </p>
    ),
    className:
      'rounded-[8px] bg-[#FFF] p-[16px] sm:p-[18px] md:p-[20px] lg:p-[24px] [box-shadow:0px_4px_32px_-14.734px_rgba(149,_149,_149,_0.25)]',
  },
];
const Faq = () => {
  return (
    <>
      <section>
        <div className="container mt-14">
          <div className="content-wrapper flex flex-col lg:flex-row gap-3">
            <div className="w-full lg:max-w-[405px] flex flex-col items-center lg:items-start gap-3 mb-4">
              <Subtitile text="FAQ" className="text-start justify-center" />
              <Title title="HouseMate Explained" className="text-start" />
            </div>
            <div className="accordion-part w-full ">
              <Collapse
                accordion
                items={items}
                ghost
                className="faq-collapse flex flex-col gap-[20px]"
                expandIcon={({ isActive }) => (
                  <img
                    src={isActive ? minusIcon : plusIcon}
                    alt="Arrow"
                    className="w-[20px] h-[20px] transition-transform duration-300"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
