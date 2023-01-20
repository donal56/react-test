import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Header, Segment} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import CustomTextInput from "app/common/form/CustomTextInput";
import CustomTextArea from "app/common/form/CustomTextArea";
import CustomDropdown from "app/common/form/CustomDropdown";
import {categoryOptions} from "app/api/CategoryOptions";
import CustomDatePicker from "app/common/form/CustomDatePicker";

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
        title: Yup.string().required("Campo requerido"),
        category: Yup.string().required("Campo requerido"),
        description: Yup.string().required("Campo requerido"),
        city: Yup.string().required("Campo requerido"),
        venue: Yup.string().required("Campo requerido"),
        date: Yup.date().required("Campo requerido")
    });

    return (
        <Segment clearing>
            <Header
                content={
                    eventId ? "Actualizar evento" : "Crear evento"
                }></Header>
            <Formik
                initialValues={event}
                validationSchema={validationSchema}
                onSubmit={event => {
                    dispatch(
                        event.id ? updateEvent(event) : createEvent(event)
                    );
                    navigate("/events");
                }}>
                {({isSubmitting, dirty, isValid}) => (
                    <Form className="ui form">
                        <Header sub color="teal" content="Detalles"></Header>
                        <CustomTextInput
                            label="Nombre del evento"
                            name="title"></CustomTextInput>
                        <CustomDropdown
                            label="Categoría"
                            name="category"
                            options={categoryOptions}></CustomDropdown>
                        <CustomTextArea
                            label="Descripción"
                            name="description"
                            rows={3}></CustomTextArea>
                        <Header sub color="teal" content="Ubicación"></Header>
                        <CustomTextInput
                            label="Ciudad"
                            name="city"></CustomTextInput>
                        <CustomTextInput
                            label="Lugar"
                            name="venue"></CustomTextInput>
                        <CustomDatePicker
                            label="Fecha"
                            name="date"
                            showTimeSelect
                            timeCaption="Hora"></CustomDatePicker>
                        <Button
                            as={Link}
                            to="/events"
                            type="button"
                            floated="right"
                            disabled={isSubmitting}
                            content="Cerrar"></Button>
                        <Button
                            type="submit"
                            floated="right"
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            content={
                                eventId ? "Actualizar evento" : "Crear evento"
                            }
                            color="green"></Button>
                    </Form>
                )}
            </Formik>
        </Segment>
    );
}
