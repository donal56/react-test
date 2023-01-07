import React from "react";
import {Item, Segment} from "semantic-ui-react";

export default function EventSidebar({attendees}) {
    return (
        <>
            <Segment
                textAlign="center"
                style={{border: "none"}}
                attached="top"
                secondary
                inverted
                color="teal">
                {attendees.length}{" "}
                {attendees.length === 1
                    ? "persona confirmo"
                    : "personas confirmaron"}{" "}
                su asistencia
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>
                    {attendees.map(attendee => (
                        <Item style={{position: "relative"}} key= {attendee.id}>
                            <Item.Image size="tiny" src={attendee.photoURL} />
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <span>{attendee.name}</span>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </>
    );
}
