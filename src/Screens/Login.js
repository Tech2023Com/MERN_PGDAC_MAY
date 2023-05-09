import { useState } from "react"

import {useDispatch} from 'react-redux'


function Login(){

  const dispatch = useDispatch()

    var [values , setValues] =  useState({
        email : "",
        password : ""
    })


    function handleInput(e){

        setValues({...values , [e.target.name ] :  e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(values)

        dispatch({type : "LOGIN" ,  data : values.email})

        // localStorage.setItem('auth' ,  values.email)
        // window.location.reload()
    }


    return (

        <div style={{display:"flex" , width:'70%' , margin : "auto" ,  marginTop : 100 , flexDirection : "row" ,  justifyContent:"center"}}>

        <form>
       
        <div class="form-outline mb-4">
          <input  onChange={handleInput}  value={values.email}  name='email' type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>
      
       
        <div class="form-outline mb-4">
          <input onChange={handleInput}  value={values.password} name="password" type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
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