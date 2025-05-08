import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonailPerson1 from "../../assets/testimonial1.jpg"
import testimonailPerson2 from "../../assets/testimonial2.jpg"
import testimonailPerson3 from "../../assets/testimonial3.jpg"

import Subtitile from '../shared/Subtitile';
import Title from '../shared/Title';

const testimonials = [
  {
    name: 'Zara Khan',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful!`,
    rating: 5,
    image: testimonailPerson1,
  },
  {
    name: 'David Ali',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful!`,
    rating: 5,
    image: testimonailPerson2,
  },
  {
    name: 'Robertson',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful!`,
    rating: 5,
    image: testimonailPerson3,
  },
  {
    name: 'Zara Khan',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful! `,
    rating: 5,
    image: testimonailPerson1,
  },
  {
    name: 'David Ali',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful!`,
    rating: 5,
    image: testimonailPerson2,
  },
  {
    name: 'Robertson',
    review: `Overall, I was very impressed with the service. After using plumbing used to service amazing! It’s really wonderful. It’s really wonderful. It’s all good. I Like it. It’s related to the installation. Absolutely wonderful!`,
    rating: 5,
    image: testimonailPerson3,
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-[#FFF]">
        <div className="container mt-14">
          <div className="max-w-[978px] mx-auto flex flex-col gap-3 mb-4">
            <Subtitile
              text="TESTIMONIAL"
              className="text-center justify-center"
            />
            <Title title="What our clients say" />
          </div>

          <div className="carousel-area ">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" text-center pb-10">
                    <p className="text-[#0E0F11] text-center font-[Satoshi] text-[18px] not-italic font-normal leading-[30.6px] rounded-[8px] bg-[#FAFAFC] px-10 pt-[34px] pb-[91px] m-0">{`"${item.review}"`}</p>
                    <div className="flex justify-center -mt-10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-2.5">
                      {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">
                            ★
                          </span>
                        ))}
                    </div>
                    <h3 className="text-[#0E0F11] text-center font-[Manrope] text-[18px] not-italic font-bold leading-[30.6px]">
                      {item.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
