import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import Close from "../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__fadeInLeftBig animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute px-5 py-[32px] right-0 top-0"> {/* pl-[29px] pr-[13px] */}
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[135px] h-[70px]' onClick={() => {navigate("/"); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <div className='flex items-center justify-between cursor-pointer' onClick={() => {navigate("/find-a-doctor"); handleClose()}}>
                    <p className='text-base text-[#25324B] font-euclid'>Find a Doctor</p>
                    <IoIosArrowForward className='text-[#25324B]' />
                </div>
                <div className='flex items-center justify-between cursor-pointer' onClick={() => handleClose()}>
                    <p className='text-base text-[#25324B] font-euclid'>Jobs</p>
                    <IoIosArrowForward className='text-[#25324B]' />
                </div>

            </div>
            <div className=" flex flex-col gap-4 mt-[350px]">
                <button
                    onClick={() => {navigate("/access"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[8px] h-[44px] font-euclid bg-[#3E5EA9]  text-[13px] text-[#fff] font-semibold"
                >
                    Become a Heala Doctor
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar