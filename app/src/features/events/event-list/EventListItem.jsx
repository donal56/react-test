import React from "react";
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event, selectedEventHandler, deleteEventHandler}) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size="tiny"
                            rounded
                            src={event.hostPhotoURL}></Item.Image>
                        <Item.Content>
                            <Item.Header content={event.title}></Item.Header>
                            <Item.Description>
                                <b>Anfitrión:</b> {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" color="blue"></Icon> {event.date}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Icon name="map marker alternate" color="green"></Icon>
                    {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee
                            attendee={attendee}
                            key={attendee.id}></EventListAttendee>
                    ))}
                </List>
            </Segment>
            <Segment>
                <span>{event.description}</span>
            </Segment>
            <Segment clearing>
                <Button
                    icon
                    negative
                    floated="right"
                    labelPosition="left"
                    onClick={() => deleteEventHandler(event.id)}>
                    <Icon name="trash"></Icon>
                    Eliminar
                </Button>
                <Button
                    icon
                    secondary
                    floated="right"
                    labelPosition="left"
                    onClick={() => selectedEventHandler(event, false)}>
                    <Icon name="edit"></Icon>
                    Editar
                </Button>
                <Button
                    icon
                    primary
                    floated="right"
                    labelPosition="left"
                    onClick={() => selectedEventHandler(event, true)}>
                    <Icon name="right arrow"></Icon>
                    Ver
                </Button>
            </Segment>
        </Segment.Group>
    );
}
