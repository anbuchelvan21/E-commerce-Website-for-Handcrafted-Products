import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    // <div style={{backgroundColor:'lightgrey'}}>
    <div className="w-full bg-[#8B5A2B]">
    {/* <div className="w-full bg-[#8B5A2B]"> */}
      
      {/* <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm bottom-0 left-0 right-0'> */}
      {/* <div className='container mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm px-10'> */}
      <div className='w-full flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm px-10'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="logo" />
            <p className='w-full md:w-2/3 text-black'>
            Your destination for unique, handcrafted treasures. Supporting artisans, promoting sustainability, and delivering authentic craftsmanship to your doorstep.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>SHOP</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CONTACT US</p>
            <ul className='flex flex-col gap-1 text-black'>
               <li>📞 +91 98978 71546</li>
               <li>✉️ creativehands@gmail.com</li>
               <li>📍 VIT, Vellore, Tamil Nadu</li>
               <li>📌 Pincode: 632014</li>
            </ul>
        </div>

      </div>

        {/* <div className="bg-black w-full text-white text-sm text-center py-5"> */}
        {/* <div className="bg-black w-screen text-white text-sm text-center py-5"> */}
        <div className="bg-black w-full text-white text-sm text-center py-2">
            <p className='py-2 text-sm text-center'>Copyright 2025 &copy; Creative Hands - All Right Reserved.</p>
        </div>
        
    </div>

  )
}

export default Footer



// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <div className="w-full bg-[#8B5A2B] text-black">
//       <div className="max-w-full px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Logo & Description */}
//         <div className="text-center md:text-left">
//           <img src={assets.logo} className="mb-4 mx-auto md:mx-0 w-32" alt="logo" />
//           <p className="text-sm leading-relaxed">
//             Your destination for unique, handcrafted treasures. Supporting artisans, promoting sustainability, and delivering authentic craftsmanship to your doorstep.
//           </p>
//         </div>

//         {/* Shop Links */}
//         <div className="text-center md:text-left">
//           <p className="text-lg font-semibold mb-3">SHOP</p>
//           <ul className="space-y-2">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/about" className="hover:underline">About Us</a></li>
//             <li><a href="/" className="hover:underline">Delivery</a></li>
//             <li><a href="/" className="hover:underline">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="text-center md:text-left">
//           <p className="text-lg font-semibold mb-3">CONTACT US</p>
//           <ul className="space-y-2">
//             <li>📞 +91 98978 71546</li>
//             <li>✉️ creativehands@gmail.com</li>
//             <li>📍 VIT, Vellore, Tamil Nadu</li>
//             <li>📌 Pincode: 632014</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Copyright Section */}
//       <div className="bg-black w-full text-white text-sm text-center py-2">
//       {/* <div className="w-screen bg-black text-white text-center py-4 text-sm"> */}
//         <p>Copyright 2025 &copy; Creative Hands - All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;


