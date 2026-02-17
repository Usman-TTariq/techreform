"use client";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Labkins",
    role: "Partner & CEO, Healthcare Product",
    quote:
      "We hired Tech Reforms for our healthcare website development project, and they exceeded our expectations. The team delivered a stunning, user-friendly website that perfectly represents our brand. Their attention to detail and dedication to our vision were outstanding. We couldn't be happier with the result!",
  },
  {
    name: "Amanda Chen",
    role: "Network Manager, Tech Solutions",
    quote:
      "Tech Reforms transformed our digital presence. Their expertise and professionalism made the entire process smooth and stress-free. Highly recommend for any business looking to elevate their online presence.",
  },
  {
    name: "Daniel Leg",
    role: "CIO, E-Commerce Inc",
    quote:
      "From strategy to launch, Tech Reforms delivered excellence at every stage. Our new platform has significantly improved user engagement and conversion rates. A true partnership.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Director, Brand Co",
    quote:
      "The creativity and technical skill of the Tech Reforms team is unmatched. They understood our brand from day one and brought our vision to life with precision and flair.",
  },
  {
    name: "Michael Torres",
    role: "Founder, Startup Labs",
    quote:
      "Working with Tech Reforms was a game-changer. They're responsive, innovative, and truly care about their clients' success. Our project was completed on time and beyond expectations.",
  },
];

const TestimonialCard = ({ name, role, quote }) => (
  <div className="testimonial-card h-full min-h-[280px] sm:min-h-[320px] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col relative bg-[#2E2E2E]">
    <div className="flex-1 flex flex-col min-h-0">
      <p className="font-britanicaExtraBold text-white text-[22px] sm:text-[28px] md:text-[34px] font-bold capitalize tracking-tight">
        {name}
      </p>
      <p className="text-white/90 text-xs sm:text-sm md:text-base font-britanicaRegular mt-1 uppercase">
        {role}
      </p>
      <p
        className="testimonial-quote font-britanicaRegular text-white mt-3 sm:mt-4 flex-1 text-[13px] sm:text-sm md:text-base leading-relaxed opacity-80"
        style={{ lineHeight: 1.6 }}
      >
        {quote}
      </p>
    </div>
    <div className="mt-4 sm:mt-6 flex items-center">
      <button
        type="button"
        aria-label="Read more"
        className="testimonial-card-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20 text-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </button>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <div className="relative">
      <Image
        className="absolute top-[50%] -translate-y-1/2 right-0 w-[50%] sm:w-[40%] opacity-80"
        src="/images/testbk.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative pt-12 sm:pt-16 md:pt-[90px] z-20 px-4 sm:px-4">
        <div className="bg-[#161616] rounded-xl py-8 sm:py-12 md:py-[60px] pb-0 px-4 sm:px-6 md:px-[30px] lg:px-[50px] relative overflow-hidden">
          <Image
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[100%] sm:w-[90%] h-full object-cover opacity-60 sm:opacity-100"
            src="/images/testimonialbk.png"
            alt=""
            width={1000}
            height={1000}
          />
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 text-center sm:text-left">
            <div className="order-2 sm:order-1">
              <CapsuleLabel firstWord="OUR" secondWord="TESTIMONIALS" />
            </div>
            <div className="font-britanicaBlack text-[28px] sm:text-[36px] md:text-[50px] leading-tight sm:leading-[42px] md:leading-[52px] font-black order-1 sm:order-2 text-center sm:text-right">
              <span className="text-white">Our Work</span>
              <br />
              <span className="text-[#F74B1C]">Speaks For Us</span>
            </div>
          </div>
          <div style={styles.page} className="pt-6 sm:pt-8 md:pt-10">
            <Swiper
              modules={[EffectCoverflow, Pagination]}
              effect="coverflow"
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={12}
              coverflowEffect={{
                rotate: 6,
                stretch: 0,
                depth: 60,
                modifier: 1.15,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                480: { slidesPerView: 1.15, spaceBetween: 14 },
                640: { slidesPerView: 1.5, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 2.5, spaceBetween: 16 },
                1280: { slidesPerView: 3, spaceBetween: 16 },
              }}
              className="testimonial-swiper"
              style={{ width: "100%", paddingTop: 24, paddingBottom: 40 }}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
            <style>{css}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: "100%",
    overflow: "hidden",
  },
};

const css = `
  .testimonial-swiper .swiper-slide {
    height: auto;
    border-radius: 16px;
    overflow: visible;
  }

  .testimonial-swiper .swiper-slide-active .testimonial-card {
    background: #F74B1C !important;
  }

  .testimonial-swiper .swiper-slide:not(.swiper-slide-active) .testimonial-card {
    background: #2E2E2E !important;
  }

  .testimonial-swiper .swiper-slide-active .testimonial-card .testimonial-card-btn {
    background: #fff !important;
    color: #F74B1C !important;
  }

  .testimonial-swiper .swiper-slide-active .testimonial-card .testimonial-quote {
    opacity: 1 !important;
  }

  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right {
    border-radius: 16px;
    background-image: linear-gradient(to right, rgba(0,0,0,0.3), transparent);
  }

  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to left, rgba(0,0,0,0.3), transparent);
  }

  .testimonial-swiper .swiper-pagination {
    position: relative;
    margin-top: 24px;
  }

  .testimonial-swiper .swiper-pagination-bullet {
    background: #696969;
    transition: all 0.3s ease;
    border-radius: 8px;
    opacity: 1;
    width: 8px;
    height: 8px;
  }

  .testimonial-swiper .swiper-pagination-bullet-active {
    background: #F74B1C;
    width: 30px;
  }
`;

export default TestimonialSection;
