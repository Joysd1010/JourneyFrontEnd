import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="bg-[url('https://i.postimg.cc/DwQ4tTT3/Untitled-design.png')] w-screen h-screen">
        
            <h1  className="relative text-right right-5  -bottom-[450px] text-white  text-5xl font-extrabold">Find your fast solution here <br/> In your location</h1>
            </div>
          
            
          
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[url('https://i.postimg.cc/25KktcVf/Untitled-design-1.png')] w-screen h-screen">
        
            <h1  className="relative float-right text-right right-5 w-1/3 -bottom-52  text-5xl font-extrabold">No more hastle for cleaning process of home <br/> Contact with Cleaner of your choice</h1>
            </div>
          
            
          
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[url('https://i.postimg.cc/1z5X2VBD/Untitled-design-2.png')] w-screen h-screen">
        
            <h1  className="text-center pt-72 text-[#f7ee4a] text-5xl font-extrabold">Find all the services for your home  <br/> In same platform</h1>
            </div>
          
            
          
        </SwiperSlide>
       

        <div className="autoplay-progress " slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
