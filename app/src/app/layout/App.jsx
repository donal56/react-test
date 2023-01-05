import React, {useState} from "react";
import {Container} from "semantic-ui-react";
import EventDashboard from "../../features/events/event-dashboard/EventDashboard";
import Navbar from "./Navbar";

export default function App() {
    const [formOpen, setFormOpen] = useState(false);
    const [formReadOnly, setFormReadOnly] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <>
            <Navbar setFormOpen={handleFormOpen}></Navbar>
            <Container className="main">
                <EventDashboard
                    formOpen={formOpen}
                    formReadOnly={formReadOnly}
                    setFormOpen={setFormOpen}
                    selectedEventHandler={handleSelectedEvent}
                    selectedEvent={selectedEvent}></EventDashboard>
            </Container>
        </>
    );

    function handleSelectedEvent(event, readOnly) {
        setFormReadOnly(readOnly);
        setSelectedEvent(event);
        setFormOpen(true);
    }

    function handleFormOpen(isOpen) {
        setFormOpen(isOpen);
        setFormReadOnly(false);
        setSelectedEvent(null);
    }
}
