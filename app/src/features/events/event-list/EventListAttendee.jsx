import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default function EventListAttendee({attendee}) {
    return (
        <List.Item>
            <Image size= "mini" circular bordered src= {attendee.photoURL}></Image>
        </List.Item>
    );
}