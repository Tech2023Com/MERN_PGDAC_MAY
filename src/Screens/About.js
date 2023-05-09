import {useSelector} from 'react-redux'


function About(){

    var count  =  useSelector((state)=> state.Counter.count == null ||state.Counter.count == 'undefined' || state.Counter.count == ""  ? 0 : state.Counter.count  )
    console.log(count)
    return(

        <>
        <h1> Value of Count is :  {count} </h1>
        </>
    )

}

export default About