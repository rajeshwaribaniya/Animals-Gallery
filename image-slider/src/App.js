import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';




function App() {
  return (
    <>
      <div>
         <h1>Animals Gallery</h1>
         <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop= {true}
         slidesPerView={'auto'}
         coverflowEffect= {{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }

         }
         navigation={true}
         pagination={true}
         modules={[EffectCoverflow, Pagination, Navigation]}
         
         className=''> 

           <SwiperSlide>
              <img src = "/assets/images/dog.jpg" alt='dog'/>
           </SwiperSlide>

           <SwiperSlide>
              <img src = "/assets/images/dog.jpg" alt='dog'/>
           </SwiperSlide>

           <SwiperSlide>
              <img src = "/assets/images/dog.jpg" alt='dog'/>
           </SwiperSlide>

           <SwiperSlide>
              <img src = "/assets/images/dog.jpg" alt='dog'/>
           </SwiperSlide>

           

         </Swiper>
      </div>
    </>
  );
}

export default App;

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





















//  {/* slider controller */}
//  <div>
//  {/* back arrow icon */}
//  <div>
//     <img src='assets/icons/backarrow.svg' />
//  </div>

//  {/* next arrow icon */}
//  <div>
//     <img src='assets/icons/nextarrow.svg' />
//  </div>

// </div>