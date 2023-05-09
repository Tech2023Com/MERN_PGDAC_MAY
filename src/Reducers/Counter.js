



function Counter(state, action){

    if(typeof state === 'undefined')
    {

        return {
            count : 0,
            auth : null
        }
    }


    switch(action.type){

        case 'INCREMENT' :
            return{
                ...state,
                count :  action.data
            }
        case "DECREMENT" : 
            return{
                ...state,
                count :  action.data
            } 
            
        case "LOGIN":
            return{
                ...state,
                auth :  action.data
            }
        case "LOGOUT":
            return{
                ...state,
                auth :  action.data
            }
            
        default:
            return state
    }



}

export default Counter