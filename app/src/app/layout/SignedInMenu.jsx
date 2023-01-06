import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, Image, MenuItem} from "semantic-ui-react";

export default function SignedInMenu({handleSignOut, user}) {
    return (
        <MenuItem position="right">
            <Image avatar spaced="right" src="/assets/user.png"></Image>
            <Dropdown pointing="top left" text={user}>
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to="/events/create"
                        text="Crear evento"
                        icon="plus"></Dropdown.Item>
                    <Dropdown.Item text="Mi perfil" icon="user"></Dropdown.Item>
                    <Dropdown.Item
                        text="Cerrar sesión"
                        onClick= {handleSignOut}
                        icon="power"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </MenuItem>
    );
}
