import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({events, deleteEventHandler, currentUser}) {
    return (
        <>
            {events.map(event => (
                <EventListItem
                    event={event}
                    key={event.id}
                    deleteEventHandler={deleteEventHandler}
                    currentUser={currentUser}></EventListItem>
            ))}
        </>
    );
}
