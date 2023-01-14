import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Header, Segment, FormField, Label} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

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

    const validationSchema = Yup.object({
        title: Yup.string().required("Campo requerido")
    });

    return (
        <Segment clearing>
            <Header
                content={
                    eventId ? "Actualizar evento" : "Crear evento"
                }></Header>
            <Formik
                initialValues={defaultEvent}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}>
                <Form className="ui form" onSubmit={handleSubmit}>
                    <FormField>
                        <label>Nombre del evento</label>
                        <Field name="title"></Field>
                        <ErrorMessage name="title" render= {error => (<Label basic color= "red" style= {{marginTop: 10}} content= {error}></Label>)}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Categoría</label>
                        <Field name="category"></Field>
                        <ErrorMessage name="category" render= {error => (<Label basic color= "red" content= {error}></Label>)}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Descripción</label>
                        <Field name="description"></Field>
                        <ErrorMessage name="description" render= {error => (<Label basic color= "red" content= {error}></Label>)}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Ciudad</label>
                        <Field name="city"></Field>
                        <ErrorMessage name="city" render= {error => (<Label basic color= "red" content= {error}></Label>)}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Lugar</label>
                        <Field name="venue"></Field>
                        <ErrorMessage name="venue" render= {error => (<Label basic color= "red" content= {error}></Label>)}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Fecha</label>
                        <Field name="date" type="date"></Field>
                        <ErrorMessage name="date" render= {error => (<Label basic color= "red" content= {error}></Label>)}></ErrorMessage>
                    </FormField>
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
            </Formik>
        </Segment>
    );

    function handleSubmit() {
        dispatch(event.id ? createEvent(event) : updateEvent(event));
        navigate("/events");
    }
}
