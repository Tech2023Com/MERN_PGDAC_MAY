import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

import {useNavigate} from 'react-router-dom'

import '../Styles/About.css'


function About(){

    const navigate = useNavigate()


    var [data , setData] =  useState([])


        useEffect(()=>{

            fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then((result)=>{
                console.log(result)
                setData(result)
            })


        },[])



        function handleView(el){
console.log(el)
                navigate('/view-user/' + el.id , {state : el})

        }


        
    return(

        <>
        
            <table>
                <tr>
                    <th>SR#</th>
                    <th>USer Id</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
                 {data.map((el,i)=>(
                     <tr>
                        <td>{i+1}</td>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td>{el.completed == true ?<span style={{color : "green"}} > {"Completed"} </span> : <span style={{color:"orange"}}> {"Pending"}</span>  }</td>
                        <td><button onClick={()=>handleView(el)} >View More</button></td>
                     </tr>   
                 ))}

            </table>

        </>
    )

}

export default About