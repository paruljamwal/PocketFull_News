import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes