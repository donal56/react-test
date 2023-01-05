import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({events, selectedEventHandler, deleteEventHandler}) {
    return (
        <>
            {events.map(event => (
                <EventListItem
                    event={event}
                    key={event.id}
                    deleteEventHandler={deleteEventHandler}
                    selectedEventHandler={selectedEventHandler}></EventListItem>
            ))}
        </>
    );
}
