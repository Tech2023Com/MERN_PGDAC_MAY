
import {useLocation} from 'react-router-dom'


function ViewUser(){


   var {state} =  useLocation()
   
   console.log(state)



return(
<>
    <h1>USer Details</h1>
    <hr></hr>

    <h1>ID : {state.id}</h1>
    <h1>Title : {state.title}</h1>
    <h1>Status : {state.completed == true ? "Completed" : "Pending"}</h1>
</>


)


}

export default ViewUser