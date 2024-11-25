import {  Slider } from "./components";

function App() {
  return (
    <>
     

      <div className="flex flex-col gap-[16pxpx] items-center justify-center m-[24px]">
          
          <div className="flex flex-col gap-[4px] items-center justify-center">
              <p className="text-[24px] font-sans font-bold text-[#1b1b1b]">Animals Gallery</p>
              <p className="text-[16px] font-sans text-[#3b3b3b]">The best collection of nature’s most incredible creatures</p>
          </div>

          <Slider/>
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


