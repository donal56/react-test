import React, {useState} from "react";
import {Button, Form, Header, Segment} from "semantic-ui-react";

export default function EventForm({
    setFormOpen,
    saveEventHandler,
    selectedEvent,
    formReadOnly
}) {
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
                    selectedEvent
                        ? formReadOnly
                            ? "Ver evento"
                            : "Actualizar evento"
                        : "Crear nuevo evento"
                }></Header>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <label>Nombre del evento</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Form.Field>
                    <label>Categoría</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Form.Field>
                    <label>Descripción</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Form.Field>
                    <label>Ciudad</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Form.Field>
                    <label>Lugar</label>
                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Form.Field>
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        readOnly={formReadOnly}></input>
                </Form.Field>
                <Button
                    type="submit"
                    floated="right"
                    content="Cerrar"
                    onClick={() => setFormOpen(false)}></Button>
                {formReadOnly ? (
                    <></>
                ) : (
                    <Button
                        type="submit"
                        floated="right"
                        content={
                            selectedEvent ? "Actualizar evento" : "Crear evento"
                        }
                        color="green"></Button>
                )}
            </Form>
        </Segment>
    );

    function handleFormSubmit() {
        if (formReadOnly) return;

        saveEventHandler(formData);
        setFormOpen(false);
        setFormData(defaultFormData);
    }

    function handleInputChange(e) {
        if (formReadOnly) return;
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
}
