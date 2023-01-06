import React from "react";
import {Link} from "react-router-dom";
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({
    event,
    deleteEventHandler,
    currentUser
}) {
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
                {currentUser === event.hostedBy && (
                    <Button
                        icon
                        negative
                        floated="right"
                        labelPosition="left"
                        onClick={() => deleteEventHandler(event.id)}>
                        <Icon name="trash"></Icon>
                        Eliminar
                    </Button>
                )}
                {currentUser === event.hostedBy && (
                    <Button
                        as={Link}
                        to={`/events/${event.id}/manage`}
                        icon
                        secondary
                        floated="right"
                        labelPosition="left">
                        <Icon name="edit"></Icon>
                        Editar
                    </Button>
                )}

                <Button
                    as={Link}
                    to={`/events/${event.id}`}
                    icon
                    primary
                    floated="right"
                    labelPosition="left">
                    <Icon name="arrow right"></Icon>
                    Ver
                </Button>
            </Segment>
        </Segment.Group>
    );
}
