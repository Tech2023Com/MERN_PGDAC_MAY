
import { memo } from "react"





const Todos = ({todos  , addTodo})=>{
console.log("this is todo function")

return(
    <>
    <h2>My Todos</h2>
    {todos.map((todo , index)=>(
        <h1>{todo}</h1>
        ))}

      <button onClick={addTodo} >Add to Do</button>  
        </>


)

}

export default memo( Todos)