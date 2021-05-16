import * as React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import EventListContainer from "./components/event_list_container";
import Navigation from "./components/navigation";
import EventBookingFormContainer from "./components/event_booking_form_container";
import BookingState from "./context/booking/BookingState"

function App() {
  
    return (
    <BookingState>
    <Router>
        <div>
            <Navigation brandName="MyEvents"/>
            <div className="container">
                <h1>My Events</h1>

                <Route exact path="/" component={EventListContainer}/>
                <Route path="/events/:id/book" component={EventBookingFormContainer}/>
            </div>
        </div>
    </Router>
    </BookingState>
    )
}




export default App;
