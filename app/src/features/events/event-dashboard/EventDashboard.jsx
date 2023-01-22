import React from "react";
import {useSelector} from "react-redux";
import {Grid} from "semantic-ui-react";
import EventList from "../event-list/EventList";
import EventListItemPlaceholder from "../event-list/EventListItemPlaceholder";
import EventFilters from "./EventFilters";

export default function EventDashboard() {
    const {events} = useSelector(state => state.eventsStore);
    const {loading} = useSelector(state => state.asyncStore);

    return (
        <Grid>
            <Grid.Column width={10}>
                {loading && (
                    <>
                        <EventListItemPlaceholder></EventListItemPlaceholder>
                        <EventListItemPlaceholder></EventListItemPlaceholder>
                    </>
                )}
                <EventList events={events}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters></EventFilters>
            </Grid.Column>
        </Grid>
    );
}
