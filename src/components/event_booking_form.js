import * as React from "react";
import {useState} from "react";
import FormRow from "./form_row";

// export interface EventBookingFormProps {
//     event: Event;
//     onSubmit: (seats: number) => any
// }

// export interface EventBookingFormState {
//     selectedAmount: number;
// }

const EventBookingForm =({event, onSubmit})=> {
    const [selectedAmount, setSelectedAmount]=useState(1)


    const handleNewAmount=(event)=> {
        const newState=parseInt(event.target.value)

        setSelectedAmount(newState);
    }


        return <div>
            <h2>Book tickets for {event.Name}!</h2>
            <form className="form-horizontal">
                <FormRow label="Event">
                    <p className="form-control-static">{event.Name}</p>
                </FormRow>
                <FormRow label="Number of tickets">
                    <select className="form-control" value={selectedAmount} onChange={e => handleNewAmount(e)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </FormRow>
                <FormRow>
                        <button className="btn btn-primary" onClick={() => onSubmit(selectedAmount)}>Submit order</button>
                </FormRow>
            </form>
        </div>
    
}

export default EventBookingForm