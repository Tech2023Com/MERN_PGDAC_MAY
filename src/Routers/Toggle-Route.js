import AllRoutes from "./All-Routes";
import AuthRoutes from "./Auth-Routes";
import Navbar from "../Layout/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";







function MainRouting(){

    // var [auth ,  setAuth ] =  useState(false)


    var auth = useSelector((state)=> state.Counter.auth)


    return(
        <>

        {auth == 'bhanu@gmail.com' ?
        <>
        <Navbar/>
        <AllRoutes />
        </> 

        :  <AuthRoutes/> }

        </>

    )
}

export default MainRouting