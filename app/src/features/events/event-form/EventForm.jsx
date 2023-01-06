import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Form, Header, Segment} from "semantic-ui-react";

export default function EventForm({saveEventHandler, selectedEvent}) {
    const defaultFormData = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: ""
    };
    const [formData, setFormData] = useState(defaultFormData);

    return (
        <Segment clearing>
            <Header
                content={
                    selectedEvent ? "Ver evento" : "Actualizar evento"
                }></Header>
            <Form onSubmit={handleFormSubmit}>
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
                    content={
                        selectedEvent ? "Actualizar evento" : "Crear evento"
                    }
                    color="green"></Button>
            </Form>
        </Segment>
    );

    function handleFormSubmit() {
        saveEventHandler(formData);
        setFormData(defaultFormData);
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
}
