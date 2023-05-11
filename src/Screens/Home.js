import { useEffect ,  useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Base_URL_User} from '../Config/BaseUrl'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Register from '../Screens/Register'

function Home(){

    const current_user_id  = useSelector((state)=> state.Counter.auth)

    const [data , setData] = useState([])

    const navigate = useNavigate()

    function getData(){
        axios.get(Base_URL_User+'get-all-users').then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
    
            toast.error(err.response.data.message)
    
        })
    }

 useEffect(()=>{

   getData()

 },[])


 function onEdit(el){

    navigate(`/about/${el._id}` ,  {state : el})

 }

 function onDelete(el){

  var x =   window.confirm("Do you want to delete this user?")

  if(x == true)
  {
    axios.get(Base_URL_User  + 'del-user' , {params : {id : el._id}}).then((res)=>{
        toast.success(res.data.message)
        getData()
       
    }).catch((err)=>{
        toast.error(err.response.data.message)
    })
  }
    

 }




return (

    <>
    <Register  ftgd={getData} />
    <table>
        <tr>

        <th>SR#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        </tr>
        {data.map((el,i)=>(

            <tr>
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.mobile}</td>
                <td><button  disabled={el._id == current_user_id} onClick={()=> onEdit(el)}  >Edit</button></td>
                <td><button disabled={el._id == current_user_id}  onClick={()=> onDelete(el)} >Delete</button></td>
            </tr>

        ))}

    </table>

        
    </>


)


}

export default Home