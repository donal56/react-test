import React from "react";
import {Container, Header, Icon, Segment} from "semantic-ui-react";

export default function NotFoundPage() {
    return (
        <Segment inverted textAlign="center" vertical className="homepage">
            <Container>
                <Header as="h1" inverted>
                    Error 404
                </Header>
                <Header as="h4" inverted>
                    <Icon name="close" size="big" color="red" inverted></Icon>
                    Página no encontrada
                </Header>
            </Container>
        </Segment>
    );
}
