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
