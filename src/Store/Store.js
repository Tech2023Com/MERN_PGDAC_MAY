import {createStore ,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CombineReducer from '../Reducers/CombineReducer'



const persistState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore'))  : {}






const enhancer = applyMiddleware(thunk)




const store = createStore(
    CombineReducer , persistState ,  enhancer
)

export default store




