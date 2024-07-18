import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import MiniHeader from './MiniHeader'

const HomePageLayout = () => {

  const location = useLocation()

  return (
    <div className='w-full overflow-x-hidden'>
        <div className={`${location.pathname === "/doctor/info" ? "hidden" : "hidden lg:flex" }`}>
            <Header />
        </div>
        <div className='xs:flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className={`${location.pathname === "/doctor/info" ? "bg-[#F1F5FC] flex flex-col items-center justify-center h-screen" : ""}`}>
            <Outlet />
        </div>
        <div className={`${location.pathname === "/doctor/info" ? "hidden" : "" }`}>
            <Footer />
        </div>
    </div>
  )
}

export default HomePageLayout