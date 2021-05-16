import * as React from "react";
import {Link} from "react-router-dom";
// import {Event} from "../model/event";

// export interface EventListItemProps {
//     event: Event;
//     selected?: boolean;

//     onBooked: () => any;
// }

const EventListItem =({event})=> {
    
        const start = new Date(event.StartDate * 1000);
        const end = new Date(event.EndDate * 1000);

        const locationName = event.Location ? event.Location.Name : "unknown";

        return <tr>
            <td>{event.Name}</td>
            <td>{locationName}</td>
            <td>{start.toLocaleDateString()}</td>
            <td>{end.toLocaleDateString()}</td>
            <td><Link to={{pathname:`/events/${event.ID}/book`,state:{id:event.ID}}} className="btn btn-primary">Book now!</Link></td>
        </tr>
    
}

export default EventListItem