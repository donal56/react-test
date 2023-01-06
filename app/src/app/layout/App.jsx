import React, {useState} from "react";
import {Container} from "semantic-ui-react";
import {Routes, Route, useNavigate} from "react-router-dom";
import {sampleData} from "../../app/api/SampleData.js";
import EventDashboard from "../../features/events/event-dashboard/EventDashboard";
import Navbar from "./Navbar";
import HomePage from "../../features/events/home/HomePage";
import EventForm from "../../features/events/event-form/EventForm";
import NotFoundPage from "./NotFoundPage";
import EventInformation from "../../features/events/event-detail/EventInformation";

export default function App() {
    const navigate = useNavigate();

    // Sesión
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Datos dummy
    const [events, setEvents] = useState(sampleData);

    // TODO: Cuando se accede a la ruta raíz, no mostrar el navbar

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
            </Routes>
            <Container className="main">
                <Navbar
                    currentUser={user}
                    isAuthenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                    setUser={setUser}></Navbar>
                <Routes>
                    <Route
                        path="/events"
                        element={
                            <EventDashboard
                                currentUser={user}
                                events={events}
                                setEvents={setEvents}></EventDashboard>
                        }></Route>
                    <Route
                        path="/events/:eventId"
                        element={<EventInformation></EventInformation>}></Route>
                    <Route
                        path="/events/:eventId/manage"
                        element={
                            <EventForm
                                saveEventHandler={handleFormSave}
                                selectedEvent={{}}></EventForm>
                        }></Route>
                    <Route
                        path="/events/create"
                        element={
                            <EventForm
                                saveEventHandler={handleFormSave}
                                selectedEvent={null}></EventForm>
                        }></Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Container>
        </>
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

        navigate("/events");
    }
}
