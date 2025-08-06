'use client'
import React, { useState } from 'react'
import { FaAngleRight, FaChevronDown, FaClosedCaptioning } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from 'react-icons/md';

export default function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className='sticky top-0 z-[100] bg-white' >

            {/* header for pc */}
            <div className='w-full shadow-lg z-[100] lg:block hidden '>
                <div className="max-w-[1320px] mx-auto flex items-center justify-between py-[0px]">
                    <div className='flex items-center'>
                        <img className='w-[200px] object-cover' src="https://www.inframedesigninstitute.com/assets/images/logo4.png" alt="" />
                        <button className='flex items-center gap-2 border-[2px] border-blue-600 rounded-[10px] px-[15px] py-[8px] text-blue-600 bg-white hover:bg-blue-600 hover:text-white  cursor-pointer hover:border-transparent font-semibold duration-300'>All Courses <FaChevronDown /> </button>
                    </div>

                    {/* mega menu open and close functionality*/}
                    <div className='flex items-center gap-10'>
                        <ul className='flex items-center gap-10'>
                            <li className='text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500 group relative'>ONLINE COURSES
                                <div className='invisible opacity-0 group-hover:opacity-[1] scale-[0.9] group-hover:scale-[1] origin-top transition-all duration-300 ease-in-out group-hover:visible absolute top-[100%] left-1/2 -translate-x-1/2 w-[900px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-10 p-5 rounded-b-[35px]'>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>ug exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design UG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>UCEED Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBOS NIFT/NID/UCEED</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Architecture UG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NATA Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>JEE B.Arch Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBOS NATA/JEE</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>PG EXAMS</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design PG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>CEED Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Online Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIDOnline Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Architecture PG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>GATE Architecture</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>Short Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Short term Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Situation/Studio test</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Portfolio</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>Fast Track Courses</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Short term Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Brushup 30 days</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Brushup 45 days</li>
                                    </ul>
                                </div>

                            </li>
                            <li className='text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500 relative group'>OFFLINE COURSES
                                <div className='invisible opacity-0 group-hover:opacity-[1] scale-[0.9] group-hover:scale-[1] origin-top transition-all duration-300 ease-in-out group-hover:visible absolute top-[100%] left-[-300px] w-[850px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-10 p-5 rounded-b-[35px]'>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>UG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design UG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NIFT/NID/UCEED</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NATA Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>JEE Barch Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NATA/JEE</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>PG EXAM</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>CEED Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Architecture PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Gate Architectures</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>Short Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Short Term Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Studio/Situation Test</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Portfolios</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500 group relative'>Study Material

                                <div className='invisible opacity-0 group-hover:opacity-[1] scale-[0.9] group-hover:scale-[1] origin-top transition-all duration-300 ease-in-out group-hover:visible absolute top-[100%] left-[-400px] w-[850px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-10 p-5 rounded-b-[35px]'>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>UG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design UG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NIFT/NID/UCEED</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NATA Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>JEE Barch Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NATA/JEE</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>PG EXAM</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>CEED Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Architecture PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Gate Architectures</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>Short Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Short Term Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Studio/Situation Test</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Portfolios</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='uppercase text-[16px] font-semibold hover:bg-blue-50 px-[5px] py-[30px] duration-300 cursor-pointer text-gray-500 relative group'>Test Series
                                <div className='invisible opacity-0 group-hover:opacity-[1] scale-[0.9] group-hover:scale-[1] origin-top transition-all duration-300 ease-in-out group-hover:visible absolute top-[100%] left-[-500px] w-[850px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-10 p-5 rounded-b-[35px]'>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>UG Exams</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design UG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NIFT/NID/UCEED</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NATA Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>JEE Barch Offline course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>COMBO NATA/JEE</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>PG EXAM</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Design PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NIFT Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>NID Offline Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>CEED Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>FDDI Offline Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Architecture PG Exam</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Gate Architectures</li>
                                    </ul>
                                    <ul>
                                        <li className='text-[22px] text-blue-600 uppercase mb-2'>Short Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Short Term Course</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Studio/Situation Test</li>
                                        <li className='my-[10px] hover:text-blue-500 duration-200 text-gray-900'>Portfolios</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button onClick={() => setLoginForm(true)} className='bg-blue-600 hover:bg-blue-500 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[10px] text-white  text-[18px]'>Login / Register</button>
                    </div>
                </div>
            </div>

            {/* header for mobile */}
            <div className='lg:hidden block'>
                <div className='flex items-center justify-between gap-0 py-[25px] px-2 shadow-xl'>
                    <div className='flex items-center'>
                        <button onClick={() => setMobileMenu(!mobileMenu)} className='text-[30px]'><HiOutlineBars3CenterLeft /></button>
                        <img className='w-[180px] object-cover' src="https://www.inframedesigninstitute.com/assets/images/logo4.png" alt="" />
                    </div>
                    <button className='bg-blue-600 hover:bg-blue-500 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[5px] text-white text-[18px]'>Login</button>
                </div>
                <div className={`${mobileMenu ? 'left-0' : '-left-[100%]'} duration-300 fixed top-0 w-[100%] h-[100vh] bg-white px-3 py-8`}>
                    <div className='flex justify-between'>
                        <img className='w-[180px] object-cover' src="https://www.inframedesigninstitute.com/assets/images/logo4.png" alt="" />
                        <button onClick={() => setMobileMenu(false)} className='text-[25px] '><MdClose /></button>
                    </div>
                    <ul className='px-3'>
                        <li className='my-[35px] text-[18px] flex items-center gap-1 justify-between'>All Courses <FaAngleRight /></li>
                        <li className='my-[35px] text-[18px]'>Online Courses</li>
                        <li className='my-[35px] text-[18px]'>Offline Courses</li>
                        <li className='my-[35px] text-[18px]'>Study Materials</li>
                        <li className='my-[35px] text-[18px]'>Test Series</li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
