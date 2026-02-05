// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>New Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero


import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const images = [
  assets.hero_img,
  assets.hero_img_1,
  assets.hero_img_2,
  assets.hero_img_3
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-36 flex flex-col sm:flex-row border border-gray-400'>

    {/* <div className='flex flex-col sm:flex-row border border-gray-400'> */}
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 bg-[#333333] flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#cfc2c2]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#cfc2c2]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>New Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#cfc2c2]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side (Slideshow) */}
      <div className="w-full sm:w-1/2 relative">
        <img className="w-full h-auto transition-opacity duration-500" src={images[currentImageIndex]} alt="creative-hands" />
      </div>
    </div>
  );
};

export default Hero;
