'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function BannerSlider() {
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
        </div>
    )
}
