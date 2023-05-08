import React from "react";

import {Route ,  Routes} from 'react-router-dom'
import Login from "../Screens/Login";




function AuthRoutes(){


  return(

    <Routes>
        <Route  path="/"  element={<Login/>} />
        <Route  path="/login"  element={<Login/>} />
        <Route  path="*"  element={<Login/>} />

    </Routes>

  )  



}

export default AuthRoutes