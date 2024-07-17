import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layouts = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <div>
            <Header />
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

export default Layouts