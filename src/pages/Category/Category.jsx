import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Updated import for Pagination

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import images
import slid1 from "../../assets/images/home/slide1.jpg";
import slid2 from "../../assets/images/home/slide2.jpg";
import slid3 from "../../assets/images/home/slide3.jpg";
import slid4 from "../../assets/images/home/slide4.jpg";
import slid5 from "../../assets/images/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24 container mx-auto"
      >
        <SwiperSlide>
          <img src={slid1} alt="Slide 1" />
          <p className="text-center text-gray-800 font-medium mt-2">
            Category 1
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} alt="Slide 2" />
          <p className="text-center text-gray-800 font-medium mt-2">
            Category 2
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid3} alt="Slide 3" />
          <p className="text-center text-gray-800 font-medium mt-2">
            Category 3
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid4} alt="Slide 4" />
          <p className="text-center text-gray-800 font-medium mt-2">
            Category 4
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid5} alt="Slide 5" />
          <p className="text-center text-gray-800 font-medium mt-2">
            Category 5
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
