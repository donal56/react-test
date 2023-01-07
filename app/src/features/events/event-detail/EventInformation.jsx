import React from "react";
import {Grid} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import EventChat from "./EventChat";
import EventDescription from "./EventDescription";
import EventHeader from "./EventHeader";
import EventSidebar from "./EventSidebar";

export default function EventInformation() {
    const {eventId} = useParams();
    const event = useSelector(state =>
        state.eventsStore.events.find(ev => ev.id === parseInt(eventId))
    );

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventHeader event={event}></EventHeader>
                <EventDescription event={event}></EventDescription>
                <EventChat></EventChat>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventSidebar attendees={event.attendees}></EventSidebar>
            </Grid.Column>
        </Grid>
    );
}
