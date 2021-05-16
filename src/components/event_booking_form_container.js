import {useContext,useEffect} from "react";
import EventBookingForm from "./event_booking_form";
import BookingContext from "../context/booking/BookingContext";


// export interface EventBookingFormContainerProps {
//     eventID: string;
//     eventServiceURL: string;
//     bookingServiceURL: string;
// }

// export interface EventBookingFormState {
//     state: "loading"|"ready"|"saving"|"done"|"error";
//     event?: Event;
// }

const EventBookingFormContainer =({match})=> {
    const bookingContext = useContext(BookingContext)
    const {event,state, getEvent,setState}=bookingContext

    useEffect(()=>{
       getEvent(match.params.id)
    },[])


    
            const handleSubmit=async (seats) =>{
                setState("loading")
                const url = "http://localhost:8282/events/" + match.params.id + "/bookings"
                const payload = {seats: seats}
                setState("saving")
                const res=await fetch(url, {method: "POST", body: JSON.stringify(payload)})
                    
                 console.log("foo")
                setState(res.ok ? "done" : "error")
            }
        if (state === "loading") {
            return <div>Loading...</div>;
        }

        if (!event) {
            return <div>Unknown error</div>;
        }

        if (state === "done") {
            return <div className="alert alert-success">Booking successfully completed!</div>
        }

        return <EventBookingForm event={event} onSubmit={amount => handleSubmit(amount)}/>
    }

    
              


export default EventBookingFormContainer