
import {
    GET_EVENTS,
    SET_LOADING,
    GET_EVENT,
    SET_STATE
} from '../types'


export default (state, action)=>{
    console.log(action.type)
    switch(action.type){
        case GET_EVENTS:
            return {
                ...state,
                events:action.payload,
                loading:false
            }
        case GET_EVENT:
                console.log(action.payload)
                return {
                    ...state,
                    event:action.payload,
                    loading:false
                }
        case SET_STATE:
                    console.log(action.payload)
                    return {
                        ...state,
                        state:action.payload,
                    }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;
    }
}