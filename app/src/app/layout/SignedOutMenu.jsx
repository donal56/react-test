import React from "react";
import { useDispatch } from "react-redux";
import {Button, MenuItem} from "semantic-ui-react";
import { loginEvent } from "./security/securityActions";

export default function SignedOutMenu() {

    const dispatch = useDispatch();

    return (
        <MenuItem position="right">
            <Button
                basic
                inverted
                content="Iniciar sesión"
                onClick={handleLogIn}></Button>
            <Button
                basic
                inverted
                content="Crear cuenta"
                style={{marginLeft: "10px"}}></Button>
        </MenuItem>
    );

    function handleLogIn() {
        dispatch(loginEvent("Ecoturismo Olmaya"));
    }
}
