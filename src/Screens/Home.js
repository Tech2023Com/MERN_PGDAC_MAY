import {useDispatch , useSelector} from 'react-redux'

function Home(){

    const dispatch = useDispatch()
    
    var count  =  useSelector((state)=> state.Counter.count  )

    console.log(count)


    function incre(){
            dispatch({type : "INCREMENT" ,  data : count + 1})
    }

    function decre(){
        dispatch({type : "DECREMENT" ,  data :  count  - 1})

    }


return (

    <>
        <button  onClick={incre} >INCREMENT</button>
        <button  onClick={decre} >DECREMENT</button>
        <h1>Value of Count is : {count}</h1>
    </>


)


}

export default Home