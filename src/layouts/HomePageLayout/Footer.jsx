import React from 'react'
import { useLocation } from 'react-router-dom'

import LogoWhite from "../../assets/svg/logo_white.svg"

const Footer = () => {

  const location = useLocation()

  return (
    <div className='w-full'>
      {
        location.pathname === "/jobs" ?
        <div className='px-[104px] flex justify-between pt-[60px] items-center bg-[#fff]' >
          <img src={LogoWhite} alt='LogoWhite' />
          <p className='text-base font-euclid text-[#5D626C]'>&copy; 2023 Heala Tech Ltd. All Rights Reserved</p>
        </div>
        :
        <div className='bg-[#0D1B3C] w-full h-[69px] lg:h-[134px] px-5 lg:px-[104px] py-[27px] lg:py-[55px]'>
            <p className='text-[11px] lg:text-base text-[#fff] font-euclid font-normal'>&copy; 2023 Heala Tech Ltd. All Rights Reserved</p>
        </div>
      }

    </div>
  )
}

export default Footer