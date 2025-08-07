import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className='w-full bg-gray-200 lg:mt-[60px] mt-[30px]'>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 grid-cols-1 p-3 lg:gap-15 gap-5 py-[30px]">
        <div>
          <img className='w-[180px] object-cover' src="https://inframestudios.co.nz/wp-content/uploads/2025/01/Copy-of-Original-size-inframe-studios-removebg-preview-removebg-preview.png" alt="" />
          <p className='my-[25px] text-gray-900 '>InFrame Design Institute (IDI), established in 2013, is a premier design education center located in Jodhpur, Rajasthan. Founded by a group of artists, IDI offers comprehensive coaching for various design entrance examinations, including NIFT, NID, and UCEED.</p>
          <div className='flex gap-5 my-[25px]'>
            <img className='w-[140px]' src="https://www.pw.live/_next/static/media/google-play-badge.171251c3.webp" alt="" />
            <img className='w-[140px]' src="https://www.pw.live/_next/static/media/apple-store-badge.acb101ce.webp" alt="" />
          </div>
          <div className='my-[25px]'>
            <p className='my-[10px] text-[20px]'>Let’s get social :</p>
            <div className="flex items-center gap-2">
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="YouTube"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                  alt="Telegram"
                  className="w-10 h-7 rounded-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        <div>
          <ul>
            <li className='text-[23px] text-red-600'>Contact Us</li>
            <li className='my-[15px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5'><FaLocationDot className='text-[18px]' /> B-09 Pal link Road Behind Kamla Nagar Hospital, Marudhar Nagar Jodhpur(Raj) 342008</li>
            <li className='my-[15px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5'>
              <FaPhoneAlt className='text-[18px]' /> (+91) 9649-9649-37 ,  (+91) 9649-9649-70
            </li>
            <li className='my-[15px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5'> <MdEmail className='text-[18px]' /> info@inframedesigninstitute.com</li>
          </ul>
        </div>

        <ul>
          <li className='text-[22px] text-red-600 mb-2'>Quick Link</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>IDI Institute</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Alliances</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Top Colleges</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Student Work</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Faculty Work</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Testimonial</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Latest News</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Gallery</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Inframe Video</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Login</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Online Mock Test</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Terms & Conditions</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Privacy Policy</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Delivery and Shipping Policy</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Refund and Cancellation</li>
        </ul>

        <ul>
          <li className='text-[22px] text-red-600 mb-2'>Student's Zone</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Register</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Career in Design @ abroad</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Career After 12th</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Interview Tips</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Design Aptitude Test</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Crack NIFT</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Crack NID</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Crack NATA</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Crack U-CEED</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>How to Crack JEE-MAINS B.arch</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Top Colleges of Architecture</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Top Colleges of Design</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Top Colleges of Fine Art</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Top Colleges of Fashion design</li>
          <li className='my-[5px] text-gray-800 cursor-pointer'>Placement in Design</li>
        </ul>


      </div>

      <p className='bg-red-600 text-[14px] text-center py-[20px] text-white'>© Copyrights 2013 - 2025 IDI Jodhpur. All Rights Reserved</p>
    </div>
  )
}
