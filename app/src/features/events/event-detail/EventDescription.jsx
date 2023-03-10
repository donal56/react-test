import React, { useState } from "react";
import {Button, Grid, Icon, Segment} from "semantic-ui-react";
import format from "date-fns/format";
import EventMap from "./EventMap";

export default function EventDescription({event}) {
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{event.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{format(event.date, "dd/MM/yyyy HH:mm a")}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{event.venue.address}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color="teal" size="tiny" content={mapOpen ? "Esconder mapa" : "Ver mapa"} onClick={() => setMapOpen(!mapOpen)}/>
                    </Grid.Column>
                </Grid>
            </Segment>
            {mapOpen && <EventMap latLng={event.venue.latLng}></EventMap>}
        </Segment.Group>
    );
}
