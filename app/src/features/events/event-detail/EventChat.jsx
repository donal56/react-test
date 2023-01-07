import React from "react";
import {Button, Comment, Form, Header, Segment} from "semantic-ui-react";

export default function EventChat() {
    return (
        <>
            <Segment
                textAlign="center"
                attached="top"
                inverted
                color="teal"
                style={{border: "none"}}>
                <Header>Platica sobre el evento</Header>
            </Segment>

            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">Pedro</Comment.Author>
                            <Comment.Metadata>
                                <div>Hoy a las 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Que artistico!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Responder</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">Juan</Comment.Author>
                            <Comment.Metadata>
                                <div>Ayer a las 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p>
                                    Fue muy útil para mi investigación.
                                    Gracias igualmente!
                                </p>
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Responder</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src="/assets/user.png" />
                                <Comment.Content>
                                    <Comment.Author as="a">
                                        María
                                    </Comment.Author>
                                    <Comment.Metadata>
                                        <div>Ahora</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        Tienes mucha razón Juan :)
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Responder</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">
                                Jorge
                            </Comment.Author>
                            <Comment.Metadata>
                                <div>hace 5 días</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                Compa, esto estuvo genial. Gracias.
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Responder</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea />
                        <Button
                            content="Agregar respuesta"
                            labelPosition="left"
                            icon="edit"
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>
    );
}
