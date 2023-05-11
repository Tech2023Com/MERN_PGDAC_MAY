import { useState } from "react"

import {useLocation, useNavigate} from  'react-router-dom'

import axios from 'axios'
import {toast} from 'react-toastify'
import { Base_URL_User } from "../Config/BaseUrl"




function EditDetails(){

    const navigate = useNavigate()


    const {state} =  useLocation()


    var [values , setValues ] =  useState({
        name :state.name,
        email  : state.email,
        mobile  : state.mobile,
        id :  state._id
    })


 function handleInput(e){
    setValues({...values , [e.target.name] : e.target.value })
 }   


 function handleSubmit(e){
    e.preventDefault()
    console.log(values)

    axios.post(Base_URL_User + 'edit-user' ,values).then((res)=>{
        toast.success(res.data.message)
        if(res.data.status == 200)
        {
            navigate('/home')
        }
    }).catch((err)=>{
        toast.error(err.response.data.message)
    })
 }


return(

    <>
 <div style={{display:"flex" , width:'70%' , margin : "auto" ,  marginTop : 100 , flexDirection : "row" ,  justifyContent:"center"}}>

<form>

<div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Name</label>
  <input  onChange={handleInput} placeholder="Enter Your Name"  value={values.name}  name='name' type="text" id="form2Example1" class="form-control" />
</div>


<div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Email</label>
  <input onChange={handleInput}  placeholder="Enter Your Email" value={values.email} name="email" type="email" id="form2Example2" class="form-control" />
</div>
<div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Mobile</label>
  <input onChange={handleInput} placeholder="Enter Your Mobile"  value={values.mobile} name="mobile" type="number" id="form2Example2" class="form-control" />
</div>


<div class="row mb-4">
  <div class="col d-flex justify-content-center">
   
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
      <label class="form-check-label" for="form2Example31"> Remember me </label>
    </div>
  </div>

  <div class="col">
   
    <a href="#!">Forgot password?</a>
  </div>
</div>


<button type="submit"  onClick={(e)=>{handleSubmit(e)}} class="btn btn-primary btn-block mb-4">Sign in</button>


</form>
</div>

    </>


)


}

export default EditDetails