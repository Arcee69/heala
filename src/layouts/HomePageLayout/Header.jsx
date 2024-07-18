import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from "../../assets/svg/logo.svg"

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

  return (
    <div className='w-full bg-[#fff] h-[102px] px-[104px] py-[23px]'>
        <div className='flex items-center justify-between'>
            <img src={Logo} alt='Logo' />
            <div className='flex items-center justify-between w-[456px] '>
                <p className={`${location.pathname === "/" ? "text-[#25324B]" : "text-[#AEB0B5]"} w-[112px] h-[56px] cursor-pointer flex items-center justify-center font-euclid text-base font-medium hover:text-[#25324B]`} onClick={() => navigate("/")}>Home</p>
                <p className={`${location.pathname === "/find-a-doctor" ? "text-[#25324B]" : "text-[#AEB0B5]"} w-[112px] h-[56px] cursor-pointer flex items-center font-euclid text-base font-medium hover:text-[#25324B]`} onClick={() => navigate("/find-a-doctor")}>Find a Doctor</p>
                <p className={`${location.pathname === "/jobs" ? "text-[#25324B]" : "text-[#AEB0B5]"} w-[112px] h-[56px] cursor-pointer flex items-center font-euclid text-base font-medium hover:text-[#25324B]`}  onClick={() => navigate("/jobs")}>Jobs</p>
            </div>
            {
                location.pathname === "/jobs" ?
                <div className='w-[319px] h-[56px] flex items-center gap-2 justify-between'>
                    <button className='bg-transparent w-[114px] h-[56px] flex items-center justify-center '>
                        <p className='text-[#3E5EA9] font-euclid text-base font-medium'>Sign In</p>
                    </button>
                    <div className='w-[1px] bg-[#80808040] h-[56px]'></div>
                    <button className='bg-transparent w-[185px] h-[56px] flex items-center justify-center'>
                        <p className='text-[#25324B] font-medium text-base font-euclid'>Employer/Post Job</p>
                    </button>
                </div>
                :
                <button
                    type='button'
                    onClick={() => window.open("https://doctors.heala.io", "_blank")}
                    className={`${location.pathname === "/find-a-doctor" ? "bg-none" : "bg-[#3E5EA9] w-[275px] h-[56px] rounded-lg" }`}
                >
                    <p className={`${location.pathname === "/find-a-doctor" ? "text-[#3E5EA9]"  : 'text-[#fff]' } font-euclid text-base font-medium `}>Become a Heala Doctor</p>
                </button>
            }
        </div>
    </div>
  )
}

export default Header