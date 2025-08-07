'use client'
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaPhone, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

export default function BannerSlider() {

    const [contactModel, setcontactModel] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    };

    return (
        <div className='w-[100%] pb-10 overflow-hidden'>
            <Slider {...settings}>
                <div>
                    <img className='w-[100%] lg:h-[80vh] object-cover ' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-Red-Sale-Banner-Design-1-scaled.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[100%] lg:h-[80vh] object-cover ' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-Red-Sale-Banner-Design-1-scaled.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[100%] lg:h-[80vh] object-cover ' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-Red-Sale-Banner-Design-1-scaled.jpg" alt="" />
                </div>
            </Slider>


            <button onClick={() => setcontactModel(!contactModel)} className={`fixed cursor-pointer top-[88%] right-[25px] z-[110] text-[28px] bg-red-500 text-white rounded-full lg:p-4 p-3 transition-all ease-initial duration-400`}>{contactModel ? <IoMdClose /> : <FaPhoneAlt />}

                <div className={`${contactModel ? 'opacity-[1] scale-[1]' : 'opacity-0 scale-0'} transition-all duration-300 ease-in-out w-[300px] h-[auto] p-5 rounded-[10px] origin-bottom-right shadow-lg shadow-gray-500  bg-white z-[110] absolute top-[-180px] right-[40px]`}>
                    <h3 className='text-[18px] text-gray-800 flex items-center gap-2'><FaUserAlt className='text-[16px]' /> Talk to a counsellor</h3>
                    <p className='my-[5px] text-[14px] text-black text-left'>Have doubts? Our support team will be happy to assist you !</p>
                    <button className='w-[100%] py-[10px] border-[2px] border-red-600 font-semibold mt-3 text-red-600 rounded-[10px] cursor-pointer text-[18px]'>+91 807531251</button>
                </div>
            </button>

        </div>
    )
}
