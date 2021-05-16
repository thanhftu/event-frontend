import React, {useReducer} from 'react';
import axios from 'axios';
import BookingReducer from './BookingReducer';
import bookingContext from './BookingContext';

import {
    GET_EVENTS,
    SET_LOADING,
    GET_EVENT,
    SET_STATE
} from '../types'

const BookingState=props=>{
    const initialState ={
        events:[],
        event:{},
        loading:false,
        state:"",
        // repos:[],
        // loading:false
    }
    const [state, dispatch] = useReducer(BookingReducer, initialState)

    const getEvents = async ()=>{
        setLoading()
        const res = await axios("http://localhost:8181/events")
        console.log(res)
        dispatch({
            type:GET_EVENTS,
            payload:res.data,
        });
    }

    const getEvent=async eventID=>{
        setLoading()
        const res=await axios("http://localhost:8181/events/" + eventID)
        console.log(res)
        console.log(eventID)
        dispatch({
            type:GET_EVENT,
            payload: res.data,
        });
        }
    const setLoading=()=>dispatch({type:SET_LOADING});
    const setState=(state)=>dispatch({type:SET_STATE,payload:state})

    return <bookingContext.Provider
    value={{
        events:state.events,
        loading:state.loading,
        event:state.event,
        state:state.state,
        setState,
        getEvent,
        getEvents,
        setLoading,
    }}
    >
        {props.children}
</bookingContext.Provider>
}

export default BookingState;