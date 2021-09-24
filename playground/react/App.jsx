/* eslint-disable no-restricted-globals */
import React from 'react';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "./styles.css";


import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';



// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const App = () => {
  
  return (
    <>
    <Swiper 
    slidesPerView={'auto'} 
    loop={true} 
    centeredSlides={true} 
    spaceBetween={4}
    autoplay={{
      "delay": 2500,
      "disableOnInteraction": false
    }} 
    pagination={{
      "type": "fraction"}} className="mySwiper">
  <SwiperSlide><img class="img-slide" src="/img/eu-flag-6.jpg" /><div class="text">Imagery  (Rendering, 2021)</div></SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  );
};

export default App;