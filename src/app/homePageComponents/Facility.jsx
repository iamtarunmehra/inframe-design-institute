'use client'
import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher, FaBookOpen, FaTrophy } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Facility() {
    const highlights = [
        {
            heading: 'Best Faculty',
            description: 'Learn from design institute pros with experience in the field. Our passionate instructors are dedicated to your entrance exam.',
            icon: <FaChalkboardTeacher />
        },
        {
            heading: 'Best Material',
            description: 'Get expert-curated study materials that cover the latest trends and entrance exam requirements for Nift, Nid, Nata, Uceed.',
            icon: <FaBookOpen />
        },
        {
            heading: 'Best Results',
            description: "Boost your odds with our proven track record of 100% selection. We're proud of our students' achievements in top institutes.",
            icon: <FaTrophy />
        }
    ];

    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, []);

    return (
        <div className='w-full bg-gray-100 lg:p-0 p-3'>
            <div className="max-w-[1320px] lg:py-[60px] py-[30px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="p-6 bg-white text-center rounded-b-[50px] rounded-[25px] border-[0] border-blue-600 border-b-[1px] shadow-sm flex flex-col items-center gap-5 shadow-blue-600"
                    >
                        <p className='text-[35px] text-white rounded-full shadow-lg p-5 bg-blue-500' >{item.icon}</p>
                        <h2 className="text-[25px] font-bold text-gray-700 uppercase">
                            {item.heading}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
