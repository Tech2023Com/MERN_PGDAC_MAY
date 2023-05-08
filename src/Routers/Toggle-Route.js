import AllRoutes from "./All-Routes";
import AuthRoutes from "./Auth-Routes";
import Navbar from "../Layout/Navbar";
import { useState } from "react";







function MainRouting(){

    var [auth ,  setAuth ] =  useState(false)


    return(
        <>

        {localStorage.getItem('auth') == 'bhanu@gmail.com' ?
        <>
        <Navbar/>
        <AllRoutes />
        </> 

        :  <AuthRoutes/> }

        </>

    )
}

export default MainRouting