'use client'
import React from 'react'
import { MdOutlineImportContacts } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function BookaSession() {
    return (
        <div className='w-full'>
            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2  lg:py-[60px] py-[30px]">
                <div className='p-5 border-2 rounded-[15px] border-gray-200'>
                    <div className='flex items-center gap-3 px-5 text-blue-600'>
                        <MdOutlineImportContacts className='text-[35px]' />
                        <h3 className=' font-semibold text-[24px]'>Book a Counseling Session</h3>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <li className='my-[15px] text-[18px] text-gray-800 '> Fill your details.</li>
                            <li className='my-[15px] text-[18px] text-gray-800 '> Our counselor will get in touch with you.</li>
                            <li className='my-[15px] text-[18px] text-gray-800 '>We will guide you through academic options, program details, and more.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
