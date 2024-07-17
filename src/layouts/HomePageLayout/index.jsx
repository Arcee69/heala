import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MiniHeader from './MiniHeader'

const HomePageLayout = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <div className='hidden lg:flex'>
            <Header />
        </div>
        <div className='xs:flex lg:hidden' >
          <MiniHeader />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default HomePageLayout