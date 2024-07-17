import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layouts from '../layouts'



const Routers = () => {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Routers
