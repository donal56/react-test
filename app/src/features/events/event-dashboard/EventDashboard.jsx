import React from "react";
import {Grid} from "semantic-ui-react";
import EventList from "../event-list/EventList";
import EventFilters from "./EventFilters";

export default function EventDashboard({currentUser, events, setEvents}) {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    deleteEventHandler={handleEventDelete}
                    currentUser={currentUser}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters></EventFilters>
            </Grid.Column>
        </Grid>
    );

    function handleEventDelete(eventId) {
        setEvents(events.filter(x => x.id !== eventId));
    }
}
