import { useState } from "react"

import {useDispatch} from 'react-redux'

import {toast} from 'react-toastify'
import axios from 'axios'
import {Base_URL_User} from '../Config/BaseUrl'
import {useNavigate} from 'react-router-dom'


function Login(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

    var [values , setValues] =  useState({
        email : "",
        password : "",
        name : "",
        mobile : ""
    })


    function handleInput(e){

        setValues({...values , [e.target.name ] :  e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault()
        let email_reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let mobile_reg =  /^[6-9]\d{9}$/

        if(values.name == "")
        {
                toast.warn("Please Enter Your Name")
        }
        else if(!email_reg.test(values.email))
        {
            toast.warn("Please Enter a Valid Email")

        }
        else if(!mobile_reg.test(values.mobile))
        {
            toast.warn("Please Enter a Valid Mobile Number")

        }
        else if(values.password == "" || values.password.length < 5 ){
             toast.warn("Please enter at least 4 digit password")   
        }
        else{
            console.log(values)

            axios.post(Base_URL_User + 'message'  ,values ).then((res)=>{
                console.log(res.data)
                toast.success(res.data.message)
                if(res.data.status  == 200 )
                {
                    navigate('/login')
                }

                
            }).catch((err)=>{

                toast.error(err.response.data.message)
            })

        }
        

        // dispatch({type : "LOGIN" ,  data : values.email})

        // localStorage.setItem('auth' ,  values.email)
        // window.location.reload()
    }


    return (

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
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>
          <input onChange={handleInput} placeholder="Enter Your Password"  value={values.password} name="password" type="text" id="form2Example2" class="form-control" />
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
      
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
        </div>
    )
    
    
    }
    
    export default Login