import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function Navbar() {
    // @ts-ignore
    const {user} = useSelector(state => state.securityStore);

    return (
        <Menu inverted fixed="top">
            <Container>
                <MenuItem as={NavLink} to="/" header>
                    <img src="/assets/logo.png" alt="logo"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp; Eventalia
                </MenuItem>
                <MenuItem as={NavLink} to="/events" name="Events">
                    Eventos
                </MenuItem>
                <MenuItem as={NavLink} to="/sandbox" name="Sandbox">
                    Sandbox
                </MenuItem>
                {user !== null && (
                    <MenuItem as={NavLink} to="/events/create">
                        <Button
                            positive
                            inverted
                            content="Crear evento"></Button>
                    </MenuItem>
                )}
                {user !== null ? (
                    <SignedInMenu></SignedInMenu>
                ) : (
                    <SignedOutMenu></SignedOutMenu>
                )}
            </Container>
        </Menu>
    );
}
