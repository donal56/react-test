import React from "react";
import { Link } from "react-router-dom";
import {Button, Header, Image, Item, Segment} from "semantic-ui-react";

export default function EventHeader({event}) {
    const eventImageStyle = {
        filter: "brightness(30%)"
    };

    const eventImageTextStyle = {
        position: "absolute",
        bottom: "5%",
        left: "5%",
        width: "100%",
        height: "auto",
        color: "white"
    };

    return (
        <Segment.Group>
            <Segment basic attached="top" style={{padding: "0"}}>
                <Image
                    src={`/assets/categoryImages/drinks.jpg`}
                    fluid
                    style={eventImageStyle}
                />

                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content="Nombre del evento"
                                    style={{color: "white"}}
                                />
                                <p>Fecha del evento</p>
                                <p>
                                    Organizado por <strong>Pedro</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Deshacer</Button>
                <Button color="teal">ASISTIRE</Button>

                <Button as= {Link} to= {`/events/${event.id}/manage`} color="orange" floated="right">
                    Administrar evento
                </Button>
            </Segment>
        </Segment.Group>
    );
}
