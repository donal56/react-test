import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Form, Header, Segment} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";

export default function EventForm() {
    const {eventId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultEvent = {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: ""
    };

    const event = useSelector(state =>
        eventId
            ? state.eventsStore.events.find(ev => ev.id === parseInt(eventId))
            : defaultEvent
    );

    const [formData, setFormData] = useState(event);

    return (
        <Segment clearing>
            <Header
                content={
                    eventId ? "Actualizar evento" : "Crear evento"
                }></Header>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Nombre del evento</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Form.Field>
                    <label>Categoría</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Form.Field>
                    <label>Descripción</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Form.Field>
                    <label>Ciudad</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Form.Field>
                    <label>Lugar</label>
                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Form.Field>
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}></input>
                </Form.Field>
                <Button
                    as={Link}
                    to="/events"
                    type="button"
                    floated="right"
                    content="Cerrar"></Button>
                <Button
                    type="submit"
                    floated="right"
                    content={eventId ? "Actualizar evento" : "Crear evento"}
                    color="green"></Button>
            </Form>
        </Segment>
    );

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        dispatch(event.id ? createEvent(event) : updateEvent(event));
        navigate("/events");
    }
}
