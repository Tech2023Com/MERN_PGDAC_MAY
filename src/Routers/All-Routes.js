import React from "react";

import {Route ,  Routes} from 'react-router-dom'
import Home from "../Screens/Home";
import About from '../Screens/About'




function AllRoutes(){


  return(

    <Routes>
        <Route  path="/"  element={<Home/>} />
        <Route  path="/home"  element={<Home/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="*"  element={<Home/>} />

    </Routes>

  )  



}

export default AllRoutes