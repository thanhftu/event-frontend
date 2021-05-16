import * as React from "react";
import EventListItem from "./event_list_item";
// import {Event} from "../model/event";

// export interface EventListProps {
//     events: Event[]
//     onEventBooked: (e: Event) => any
// }

const EventList=({events, onEventBooked})=> {

    const items = events.map(event =>
            <EventListItem 
            key={event.ID}
            event={event} 
            onBooked={() => onEventBooked(event)}
            />)
        

        return (<table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Where</th>
                    <th colSpan={2}>When (start/end)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>)
    }

export default EventList
