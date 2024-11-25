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


// Notes:
// grabCursor={true} for cursor
// loop= {true} means we can slide slide 1, slide 2, slide1 again when end is slide 2
// rotate: 50, rotates the image slightly while dragging image
// rotate: 0, the image won't rotate while dragging image
// In coverflowEffect configuration, stretch is a parameter that controls the horizontal spacing between the slides in the swiper carousel.
// Value of stretch = 0: There is no additional spacing or overlapping beyond the default positioning.

// The depth property in the coverflowEffect configuration controls the perceived distance (in pixels) between the slides along the Z-axis (towards or away from the viewer), which creates a 3D effect.
// Positive values for depth:
// Slides appear farther apart along the Z-axis, increasing the sense of depth.

// The modifier property in the coverflowEffect configuration is a multiplier that amplifies the intensity of the 3D effect applied to the slides. It acts as a global scale factor for other properties like depth, rotate, and stretch.
// Higher values for modifier:
// Increases the exaggeration of the coverflow effect.
// For example, slides will rotate more, shift further, or stretch more dramatically.
// Lower values for modifier:
// Decreases the intensity of the effect.
// For example, the slides will rotate less or stretch less, creating a subtler appearance.
// Default value of modifier:
// If not specified, modifier defaults to 1, meaning no scaling is applied to the other properties.

// Example:
// coverflowEffect={{
//    rotate: 50,
//    stretch: 20,
//    depth: 150,
//    modifier: 2, // Intensifies the effect
//    slideShadows: true,
//  }}
// The rotate, stretch, and depth values will be doubled because the modifier is set to 2.
// This results in:
// Larger rotations of the slides.
// Greater horizontal spacing between slides.
// A deeper sense of Z-axis separation.


