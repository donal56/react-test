import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Segment
} from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign="center" vertical className="homepage">
            <Container>
                <Header as="h1" inverted>
                    <Image
                        size="massive"
                        src="/assets/logo.png"
                        style={{marginBottom: 12}}></Image>
                    Eventalia
                </Header>
                <Button as= {Link} to= "/events" size="huge" inverted>
                    Explorar
                    <Icon name="arrow right" inverted></Icon>
                </Button>
            </Container>
        </Segment>
    );
}
