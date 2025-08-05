import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
    return (
        <header className='sticky top-0 z-[100] bg-white' >

            {/* header for pc */}
            <div className='w-full shadow-lg z-[100] '>
                <div className="max-w-[1320px] mx-auto flex items-center justify-between py-[0px]">
                    <div className='flex items-center gap-10'>
                        <img className='w-[200px] object-cover' src="https://www.inframedesigninstitute.com/assets/images/logo4.png" alt="" />
                        <button className='flex items-center gap-2 border-[2px] border-blue-600 rounded-[10px] px-[15px] py-[8px] text-blue-600 hover:bg-blue-600 hover:text-white  cursor-pointer hover:border-transparent font-semibold duration-300'>All Courses <FaChevronDown /> </button>
                    </div>
                    <div className='flex items-center gap-10'>
                        <ul className='flex items-center gap-10'>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500'>Online Course</li>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500'>Offline Course</li>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500'>Study Material</li>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500'>Test Series</li>
                        </ul>
                        <button className='bg-blue-600 hover:bg-blue-500 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[10px] text-white font-semibold text-[17px]'>Login/Register</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
