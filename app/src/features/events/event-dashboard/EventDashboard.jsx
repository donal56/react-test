import React from "react";
import {useSelector} from "react-redux";
import {Grid} from "semantic-ui-react";
import EventList from "../event-list/EventList";
import EventFilters from "./EventFilters";

export default function EventDashboard() {

    const {events} = useSelector(state => state.eventsStore);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters></EventFilters>
            </Grid.Column>
        </Grid>
    );
}
