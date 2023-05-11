import { useCallback, useEffect, useState } from "react"
import Todos from "./Todos"


const Demo = () =>{


    var [count , setCount] =  useState(0)

      const [todos , setTodos] = useState([])


    // const addTodo = ()  =>{
    //     setTodos([...todos ,  "New Todo"])
    // }

    const addTodo = useCallback(()=>{
        setTodos([...todos ,  "New Todo"])

    },[todos])


    useEffect(()=>{
            console.log("hi")

            if(count == 47)
            {
                alert("hi")
            }
    

            return ()=>{
                console.log("bye")
            }


    },[count])


return(

    <>
    <h1>This is Demo Comp</h1>
    <h1>Value of Count is : {count}</h1>
    <Todos todos={todos}  addTodo={addTodo}  />
    <button  onClick={()=>{ setCount ( count +1)}} >Incre</button>
    </>

)


}

export default Demo




