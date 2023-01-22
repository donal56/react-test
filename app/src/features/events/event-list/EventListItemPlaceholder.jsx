import React from "react";
import {Button, Icon, Placeholder, Segment} from "semantic-ui-react";

export default function EventListItemPlaceholder() {
    return (
        <Placeholder fluid>
            <Segment.Group>
                <Segment stlye={{minHeight: 110}}>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line></Placeholder.Line>
                            <Placeholder.Line></Placeholder.Line>
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line></Placeholder.Line>
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
                <Segment>
                    <Placeholder.Paragraph>
                        <Placeholder.Line></Placeholder.Line>
                        <Placeholder.Line></Placeholder.Line>
                    </Placeholder.Paragraph>
                </Segment>
                <Segment secondary style={{minHeight: 70}}></Segment>
                <Segment clearing>
                    <Button
                        disabled
                        icon
                        primary
                        floated="right"
                        labelPosition="left">
                        <Icon name="arrow right"></Icon>
                        Ver
                    </Button>
                </Segment>
            </Segment.Group>
        </Placeholder>
    );
}
