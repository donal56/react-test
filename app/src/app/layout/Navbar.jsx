import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function Navbar({setFormOpen}) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <MenuItem header>
                    <img src="/assets/logo.png" alt="logo"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Eventalia
                </MenuItem>
                <MenuItem name="Events">Eventos</MenuItem>
                <MenuItem>
                    <Button positive inverted content="Crear evento" onClick= {() => setFormOpen(true)}></Button>
                </MenuItem>
                <MenuItem position="right">
                    <Button basic inverted content="Iniciar sesión"></Button>
                    <Button
                        basic
                        inverted
                        content="Crear cuenta"
                        style={{ marginLeft: "10px" }}
                    ></Button>
                </MenuItem>
            </Container>
        </Menu>
    );
}
