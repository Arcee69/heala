import React from 'react'
import Logo from "../assets/svg/logo.svg"

const Header = () => {
  return (
    <div className='w-full bg-[#fff] h-[102px] px-[104px] py-[23px]'>
        <div className='flex items-center justify-between'>
            <img src={Logo} alt='Logo' />
            <div className='flex items-center justify-between w-[456px] '>
                <p className='w-[112px] h-[56px] flex items-center font-euclid text-base font-medium text-[#AEB0B5] hover:text-[#25324B]'>Home</p>
                <p className='w-[112px] h-[56px] flex items-center font-euclid text-base font-medium text-[#AEB0B5] hover:text-[#25324B]'>Find a Doctor</p>
                <p className='w-[112px] h-[56px] flex items-center font-euclid text-base font-medium text-[#AEB0B5] hover:text-[#25324B]'>Jobs</p>
            </div>
            <button
                type='button'
                className='bg-[#3E5EA9] w-[275px] h-[56px] rounded-lg'
            >
                <p className='text-[#fff] font-euclid text-base font-medium'>Become a Heala Doctor</p>
            </button>
        </div>
    </div>
  )
}

export default Header