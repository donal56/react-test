import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import {useDispatch} from "react-redux";
import {deleteEvent} from "../eventActions";
import {format} from "date-fns";

export default function EventListItem({event}) {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.securityReducer);

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
                    <Icon name="clock" color="blue"></Icon>{" "}
                    {format(event.date, "dd/MM/yyyy HH:mm a")}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Icon name="map marker alternate" color="green"></Icon>
                    {event.venue.address}
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
                {user === event.hostedBy && (
                    <Button
                        icon
                        negative
                        floated="right"
                        labelPosition="left"
                        onClick={() => dispatch(deleteEvent(event.id))}>
                        <Icon name="trash"></Icon>
                        Eliminar
                    </Button>
                )}
                {user === event.hostedBy && (
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
