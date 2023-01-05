import React, {useState} from "react";
import {Grid} from "semantic-ui-react";
import {sampleData} from "../../../app/api/SampleData.js";
import EventForm from "../event-form/EventForm";
import EventList from "../event-list/EventList";

export default function EventDashboard({
    formOpen,
    formReadOnly,
    setFormOpen,
    selectedEventHandler,
    selectedEvent
}) {
    const [events, setEvents] = useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    deleteEventHandler={handleEventDelete}
                    selectedEventHandler={selectedEventHandler}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                    <EventForm
                        formReadOnly={formReadOnly}
                        setFormOpen={setFormOpen}
                        selectedEvent={selectedEvent}
                        saveEventHandler={handleFormSave}
                        key={
                            selectedEvent
                                ? formReadOnly
                                    ? selectedEvent.id + "R"
                                    : selectedEvent.id
                                : null
                        }></EventForm>
                )}
            </Grid.Column>
        </Grid>
    );

    function handleFormSave(event) {
        if (event.id) {
            events.splice(event.id - 1, 1, event);
            setEvents(events);
        } else {
            const currentId = events
                .map(x => x.id)
                .reduce((acc, curr, arr) => (curr > acc ? curr : acc), 1);
            event.attendees = [];
            event.id = currentId + 1;
            event.hostedBy = "Anónimo";
            event.hostPhotoURL = "/assets/user.png";
            setEvents([...events, event]);
        }
    }

    function handleEventDelete(eventId) {
        setEvents(events.filter(x => x.id != eventId));
    }
}
