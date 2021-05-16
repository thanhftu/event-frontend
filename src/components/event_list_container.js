import {useContext, useEffect} from "react";
import EventList from "./event_list";
import Loader from "./loader";
import BookingContext from "../context/booking/BookingContext";


const EventListContainer = ()=> {
    const bookingContext = useContext(BookingContext)
    const {events,loading, getEvents}=bookingContext

    useEffect( ()=>{
             getEvents()
        },[])

    const handleEventBooked=(e) =>{
        console.log("booking event...")
    }

    
        return <Loader loading={loading} message="Loading events...">
            <EventList events={events} onEventBooked={e => handleEventBooked(e)}/>
        </Loader>
    
}

export default EventListContainer