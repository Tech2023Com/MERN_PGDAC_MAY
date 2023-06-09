import React from "react";

import {Route ,  Routes} from 'react-router-dom'
import Home from "../Screens/Home";
import About from '../Screens/About'
import ViewUser from "../Screens/ViewUSer";
import Demo from "../Screens/Demo";
import EditDetails from "../Screens/Edit-Details";



function AllRoutes(){


  return(

    <Routes>
        <Route  path="/"  element={<Home/>} />
        <Route  path="/home"  element={<Home/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="/about/:id"  element={<EditDetails/>} />
        <Route  path="/view-user/:id"  element={<ViewUser/>} />
        <Route  path="/demo"  element={<Demo/>} />
        <Route  path="*"  element={<Home/>} />

    </Routes>

  )  



}

export default AllRoutes