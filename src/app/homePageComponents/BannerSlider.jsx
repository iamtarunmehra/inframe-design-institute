'use client'
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

export default function BannerSlider() {

    const [contactModel, setcontactModel] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className='w-[100%] pb-10 overflow-hidden'>
            <Slider {...settings}>
                <div>
                    <img className='w-[100%] h-[70vh]' src="https://www.inframedesigninstitute.com/images/homesliderpic/1732701125MOCK_TEST01.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[100%] h-[70vh]' src="https://www.inframedesigninstitute.com/images/homesliderpic/168845617729-June-Book.jpg" alt="" />
                </div>
                <div>
                    <img className='w-[100%] h-[70vh]' src="https://www.inframedesigninstitute.com/images/homesliderpic/1732702600GET_COURSE.jpg" alt="" />
                </div>
            </Slider>
            <button onClick={() => setcontactModel(!contactModel)} className={`${contactModel ? 'rotate-180 ' : 'rotate-0'} fixed cursor-pointer top-[88%] right-[25px] z-[110] text-[28px] bg-blue-500 text-white rounded-full lg:p-4 p-3 transition-all ease-initial duration-400`}>{contactModel ? <IoMdClose /> : <FaPhoneAlt />}
            </button>
            <div className={`${contactModel ? 'opacity-[1] scale-[1]' : 'opacity-0 scale-0'} transition-all duration-300 ease-in-out w-[300px] h-[auto] p-5 rounded-[10px] origin-bottom-right shadow-lg shadow-gray-500  bg-white z-[110] fixed top-[62%] right-[60px]`}>
                <h3 className='text-[18px] text-gray-900'>Talk to a counsellor</h3>
                <p className='my-[5px] text-[14px]'>Have doubts? Our support team will be happy to assist you!</p>
                <button className='w-[100%] py-[10px] border-[2px] border-blue-600 font-semibold mt-3 text-blue-600 rounded-[10px] cursor-pointer'>+91 807531251</button>
            </div>
        </div>
    )
}
