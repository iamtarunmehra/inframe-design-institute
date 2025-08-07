"use client";
import React, { useState } from "react";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

export default function UserControl({ activePage, setActivePage }) {
    return <>
        {activePage == "login" && <LoginForm activePage={activePage} setActivePage={setActivePage} />}
        {activePage == "register" && <Register activePage={activePage} setActivePage={setActivePage} />}

    </>;
}

export function LoginForm({ activePage, setActivePage }) {
    return (
        <div className="fixed lg:w-[350px] w-[300px] h-[auto] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600">
            <div className="flex justify-between items-center">
                <h3 className="text-[25px] text-gray-900 my-4 ">Login</h3>
                <span onClick={() => setActivePage('')} className="text-[25px] hover:text-red-600 duration-300 cursor-pointer">
                    <HiMiniArrowRightStartOnRectangle />
                </span>
            </div>
            <form className="my-[15px] space-y-5">
                <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Enter Your Email" type="text" />
                <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Enter Your Password" type="text" />
                <button type="submit" className="w-full bg-red-600 hover:bg-gray-800 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[10px]">Login</button>
                <p className="text-center">Not a member yet ? <span onClick={() => setActivePage('register')} className="text-red-600
                 hover:underline cursor-pointer">Sign Up</span></p>
            </form>
        </div>
    );
}

export function Register({ activePage, setActivePage }) {

    const [otpStatus, setOtpStatus] = useState(true)
    return (
        <>
            <div className="fixed lg:w-[400px] w-[320px] h-[auto] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600">
                <div className="flex justify-between items-center">
                    <h3 className="text-[25px] text-gray-900 my-4 ">Register</h3>
                    <span onClick={() => setActivePage('')} className="text-[25px] hover:text-red-600 duration-300 cursor-pointer">
                        <HiMiniArrowRightStartOnRectangle />
                    </span>
                </div>
                <form className="my-[15px] space-y-5">
                    <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Enter Your Name" type="text" />
                    <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Enter Your Email" type="text" />
                    <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Create Your Password" type="text" />
                    {otpStatus &&
                        <input className="border-[1px] w-full rounded-[15px] px-[8px] py-[10px]" placeholder="Enter OTP" type="text" />
                    }
                    <button type="submit" className="w-full bg-red-600 hover:bg-gray-800 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[10px]">{otpStatus ? 'Request OTP' : 'Register'}</button>
                    <p className="text-center">Not a member yet ? <span onClick={() => setActivePage('login')} className="text-red-600
                 hover:underline cursor-pointer">Sign Up</span></p>
                </form>
            </div>
        </>
    )
}
