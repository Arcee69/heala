import React, { useState } from 'react'

import Hamburger from "../../assets/svg/hamburger.svg"
import Logo from "../../assets/svg/logo.svg"
import MobileNavBar from './MobileNavBar'

const MiniHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full fixed z-10'>
        <div  className='w-full h-[70px] bg-[#fff] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[135px] h-[70px]' />
            <img src={Hamburger} alt='logo'  className='w-[24px] h-[24px]' onClick={() => setOpen(true)}/>
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader