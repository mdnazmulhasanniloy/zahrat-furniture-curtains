"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      image: "/review1.png",
    },
    {
      image: "/review2.png",
    },
    {
      image: "/review3.png",
    },
    {
      image: "/review4.png",
    },
  ];
  return (
    <div className="bg-[#353535] py-5">
      <div className="container my-20">
        <h2 className="text-center text-3xl font-medium mb-6 text-white">
          Don't take our word for it
        </h2>

        <div className="mx-52">
          <Swiper
            slidesPerView={2}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={true}
            style={{
              width: "100%",
              height: "300px",
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex justify-center items-center relative bg-white rounded">
                  <img className="mx-auto" src={item.image} alt="" />
                  <h2 className="text-[100px] text-[#ffbb29] mx-auto absolute -top-12 left-0">
                    ❝
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
