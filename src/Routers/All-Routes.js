import React from "react";

import {Route ,  Routes} from 'react-router-dom'
import Home from "../Screens/Home";




function AllRoutes(){


  return(

    <Routes>
        <Route  path="/"  element={<Home/>} />
        <Route  path="/home"  element={<Home/>} />
        <Route  path="*"  element={<Home/>} />

    </Routes>

  )  



}

export default AllRoutes