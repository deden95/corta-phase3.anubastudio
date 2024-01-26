import testimonial_data from '../data/testimonial-data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonial_content = {
   bg_img: "/assets/design/testi-bg.png",
   title_id: <>Peningkatan <span>Kapasitas</span></>,
   title_en: <>Capacity  <span>Building</span></>
}
const { bg_img, title_id, title_en } = testimonial_content

// setting 
const setting = {
   loop: true,
   slidesPerView: 2.5,
   spaceBetween: 20,
   Pagination:true,
   breakpoints: {
      '1200': {
         slidesPerView: 2.5,
      },
      '992': {
         slidesPerView: 1.5,
      },
      '768': {
         slidesPerView: 1.5,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
   navigation: {
      nextEl: '.test-prev',
      prevEl: '.test-next',
   },
}

export default function TestimonialArea(props: any) {
   const bahasa = props.onSelectLanguage;
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   return (
      <>
         <div className="tp-testimonial-area pt-20 sm:pt-32 md:pt-48 lg:pt-56 pb-20 sm:pb-32 md:pb-48 lg:pb-56 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg_img})` }} id="peningkatanKapasitas">
            <div className="container mx-auto mb-3" >
               <div className="flex items-end tp-testimonial-five-section-space lg:px-16 px-8">
                  <div className="w-full lg:w-8/12">
                     <div className="tp-testimonial-five-section-box">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tp-section-title-5">
                           {bahasa === "EN" ? title_en : title_id}
                        </h3>
                     </div>
                  </div>
                  <div className="lg:w-4/12 flex items-center justify-start lg:justify-end">
                     <div className="tp-testimonial-five-arrow flex items-center">
                        <div className="test-next mr-2">
                              <button className="bg-gray-200 p-3.5 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                 </svg>
                              </button>
                        </div>
                        <div className="test-prev">
                              <button className="bg-gray-200 p-3.5 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                 </svg>
                              </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                     <div className="col-12">
                        <div className="tp-testimonial-five-slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""
                              }`}
                        >
                           {testimonial_data.map((item, i) =>
                              <SwiperSlide key={i} className="tp-testimonial-five-item">
                                 <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                    <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                       <div className="tp-testimonial-five-author-info">
                                          <h4>{item.name}</h4>
                                          <span>{item.title}</span>
                                       </div>
                                    </div>
                                    <div className="tp-testimonial-five-brand d-none d-sm-block">
                                       <img
                                          className="w-full aspect-video youtube mt-5"                                  
                                          src={item.url}                                        
                                       />
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-five-content">
                                    <p>
                                       {bahasa === "EN" ? item.description_en : item.description_id}
                                    </p>
                                 </div>
                              </SwiperSlide>
                           )
                           }
                        </Swiper>
                           <div className="tp-scrollbar"></div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      </>
   );
};