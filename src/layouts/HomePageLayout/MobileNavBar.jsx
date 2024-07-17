import React from 'react'
import Logo from "../../assets/svg/logo_white.svg"
import Close from "../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__fadeInLeftBig animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#00141B] w-[100%] h-full absolute px-5 py-[32px] right-0 top-0"> {/* pl-[29px] pr-[13px] */}
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[166px] h-[32px]' onClick={() => {navigate("/"); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <ul class="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <li onClick={() => {navigate("/"); handleClose()}} className="font-inter font-medium text-[17px]  text-[#fff]">For Employers</li>
                <li onClick={() => { navigate("/talent"); handleClose()}} className="font-inter font-medium text-[17px]  text-[#fff]">For Talent</li>
                <li onClick={() => { navigate("/about"); handleClose()}} className="font-inter font-medium text-[17px]  text-[#fff]">About Us</li>
                {/* <a href='#solutions' onClick={() => handleClose()} className="font-inter font-medium text-[17px]  text-[#fff]">Solutions</a> */}
                {/* <li onClick={() => { handleClose()}} className="font-inter font-medium text-base  text-[#fff]">Why Synergyy</li> */}
                {/* <li onClick={() => { handleClose()}} className="font-inter font-medium text-base  text-[#fff]">Pricing</li> */}
                {/* <li onClick={() => { navigate("/talent")}} className="font-inter font-medium text-base  text-[#fff]">For Job Seekers</li> */}
            </ul>
            <div className=" flex flex-col gap-4 mt-[32px]">
                {/* <button
                    onClick={() => {navigate("/pro"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] bg-[#fff] font-mont border border-[#00141B] text-[16px] font-semibold"
                >
                    Ask a Pro
                </button> */}
                <button
                    onClick={() => {navigate("/access"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] font-inter bg-[#42B8BD] border border-[#FFF] text-[16px] font-semibold"
                >
                    Start Hiring
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar