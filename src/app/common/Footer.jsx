import React from 'react'
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className='w-full bg-gray-300 lg:mt-[60px] mt-[30px]'>
      <div className="max-w-[1320px] mx-auto grid grid-cols-[40%_auto] gap-10 py-[30px]">
        <div>
          <img className='w-[250px] object-cover' src="https://www.inframedesigninstitute.com/assets/images/logo4.png" alt="" />
          <p className='my-[25px] text-gray-900 text-justify'>InFrame Design Institute (IDI), established in 2013, is a premier design education center located in Jodhpur, Rajasthan. Founded by a group of artists, IDI offers comprehensive coaching for various design entrance examinations, including NIFT, NID, and UCEED.</p>
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
            <li className='text-[23px] text-blue-600'>Contact Us</li>
            <li className='my-[15px] text-gray-800 flex items-center gap-2'><FaLocationDot className='text-[20px]' /> B-09 Pal link Road Behind Kamla Nagar Hospital, Marudhar Nagar Jodhpur(Raj) 342008</li>
            <li className='my-[15px] text-gray-800 flex items-center gap-2'>
              <FaPhoneAlt className='text-[20px]' /> (+91) 9649-9649-37 ,  (+91) 9649-9649-70
            </li>
            <li className='my-[15px] text-gray-800 flex items-center gap-2'> <MdEmail className='text-[20px]' /> info@inframedesigninstitute.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
