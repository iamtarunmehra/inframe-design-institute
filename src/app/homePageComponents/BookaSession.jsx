'use client'
import React from 'react'
import { MdLocalPhone, MdOutlineImportContacts } from "react-icons/md";
import { FaGraduationCap, FaUser } from "react-icons/fa";

export default function BookaSession() {
    return (
        <div className='w-full lg:p-0 p-3'>
            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-20 lg:py-[60px] py-[30px]">
                <div className='px-5 py-4 rounded-[35px] shadow-lg lg:py-20 shadow-gray-400'>
                    <div className='flex items-center gap-3 lg:px-5 text-blue-600'>
                        <MdOutlineImportContacts className='text-[35px]' />
                        <h3 className=' font-semibold lg:text-[30px] text-[25px]'>Book a Counseling Session</h3>
                    </div>
                    <div className='lg:p-5'>
                        <ul>
                            <li className='my-[15px] text-[18px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5 '><FaUser className='text-[22px]' /> Fill your details.</li>
                            <li className='my-[15px] text-[18px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5 '><MdLocalPhone className='text-[22px]' /> Our counselor will get in touch with you.</li>
                            <li className='my-[15px] text-[18px] text-gray-800 grid grid-cols-[5%_auto] items-center gap-5 '><FaGraduationCap className='text-[22px]' /> We will guide you through academic options, program details, and more.</li>
                        </ul>
                    </div>
                </div>
                <form className="w-full bg-white p-8 rounded-[20px] shadow-2xl shadow-gray-400 space-y-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">Please Fill All the details</h2>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name*</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email*</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Exam Type*</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select Exam Type</option>
                            <option value="nift">NIFT</option>
                            <option value="nid">NID</option>
                            <option value="uceed">UCEED</option>
                            <option value="nata">NATA</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 uppercase"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
