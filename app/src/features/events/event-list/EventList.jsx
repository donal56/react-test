import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({events, currentUser}) {
    return (
        <>
            {events.map(event => (
                <EventListItem
                    event={event}
                    key={event.id}
                    currentUser={currentUser}></EventListItem>
            ))}
        </>
    );
}
