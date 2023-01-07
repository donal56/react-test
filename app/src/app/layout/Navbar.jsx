import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function Navbar({
    currentUser,
    isAuthenticated,
    setAuthenticated,
    setUser
}) {
    const navigate = useNavigate();

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
                {isAuthenticated && (
                    <MenuItem as={NavLink} to="/events/create">
                        <Button
                            positive
                            inverted
                            content="Crear evento"></Button>
                    </MenuItem>
                )}
                {isAuthenticated ? (
                    <SignedInMenu
                        handleSignOut={handleSignOut}
                        user={currentUser}></SignedInMenu>
                ) : (
                    <SignedOutMenu handleSignIn={handleSignIn}></SignedOutMenu>
                )}
            </Container>
        </Menu>
    );

    function handleSignIn() {
        setAuthenticated(true);
        setUser("Ecoturismo Olmaya");
    }

    function handleSignOut() {
        setAuthenticated(false);
        setUser(null);
        navigate("/");
    }
}
