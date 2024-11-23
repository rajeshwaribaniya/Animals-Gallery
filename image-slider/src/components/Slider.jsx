import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Autoplay, Pagination, EffectCoverflow,  Navigation} from 'swiper/modules';


export  function Slider() {
  return (
    <>
      <div className='flex flex-col justify-center items-center '>

         <div className='flex flex-col gap-[40px]   justify-center items-center m-[40px]'>

        

         <Swiper
         className=' flex rounded-[40px] overflow-hidden w-[1200px] items-center'
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop= {true}

         autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
            el: '.my-pagination',
            
          }}

         slidesPerView= {4}
         coverflowEffect= {{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: true,
        }

         }
         navigation={true}
         modules={[Autoplay, Pagination,  EffectCoverflow, Navigation]}
         
         > 
           
               <SwiperSlide className='rounded-[40px] overflow-hidden   '  >
                  <img src = "/assets/images/dog.jpg"  alt='dog'/>
               </SwiperSlide>

               <SwiperSlide className='rounded-[40px] overflow-hidden '>
                  <img src = "/assets/images/tiger.jpg"   alt='tiger'/>
               </SwiperSlide>

               
               <SwiperSlide className='rounded-[40px] overflow-hidden '>
                  <img src = "/assets/images/panda.jpg"  alt='panda'/>
               </SwiperSlide>
               
               <SwiperSlide className='rounded-[40px] overflow-hidden '>
                  <img src = "/assets/images/cat.jpg"  alt='cat'/>
               </SwiperSlide>

               <SwiperSlide className='rounded-[40px] overflow-hidden '>
                  <img src = "/assets/images/monkey.jpg"  alt='monkey'/>
               </SwiperSlide>

               <SwiperSlide className='rounded-[40px] overflow-hidden '>
                  <img src = "/assets/images/lion.jpg"  alt='lion'/>
               </SwiperSlide>

               

               

           

         </Swiper>

          <div className=" my-pagination flex justify-center items-center gap-[2px] "></div>
         </div>


      </div>
      
    </>
  )
}
