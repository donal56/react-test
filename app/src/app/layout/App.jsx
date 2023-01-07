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
import Sandbox from "features/sandbox/Sandbox.jsx";

export default function App() {

    // Sesión
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

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
                    <Route path="/events">
                        <Route
                            index
                            element={
                                <EventDashboard
                                    currentUser={user}></EventDashboard>
                            }
                        />
                        <Route path=":eventId">
                            <Route
                                index
                                element={<EventInformation></EventInformation>}
                            />
                            <Route
                                path="manage"
                                element={
                                    <EventForm></EventForm>
                                }></Route>
                        </Route>
                        <Route
                            path="create"
                            element={
                                <EventForm></EventForm>
                            }></Route>
                    </Route>
                    <Route
                        path="/sandbox"
                        element={<Sandbox></Sandbox>}></Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Container>
        </>
    );
}
