import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Dropdown, Image, MenuItem} from "semantic-ui-react";
import {logoutEvent} from "./security/securityActions";

export default function SignedInMenu() {
    
    // @ts-ignore
    const {user} = useSelector(state => state.securityStore);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                        onClick={handleLogOut}
                        icon="power"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </MenuItem>
    );

    function handleLogOut() {
        dispatch(logoutEvent());
        navigate("/");
    }
}
