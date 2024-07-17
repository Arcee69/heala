import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Find from '../pages/Find'
import HomePageLayout from '../layouts/HomePageLayout'
import Jobs from '../pages/Jobs'



const Routers = () => {
  return (
    <Routes>
      <Route element={<HomePageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/find-a-doctor' element={<Find />} />
        <Route path='/jobs' element={<Jobs />} />
      </Route>
    </Routes>
  )
}

export default Routers
