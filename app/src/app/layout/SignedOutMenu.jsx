import React from "react";
import {Button, MenuItem} from "semantic-ui-react";

export default function SignedOutMenu({handleSignIn}) {
    return (
        <MenuItem position="right">
            <Button
                basic
                inverted
                content="Iniciar sesión"
                onClick={handleSignIn}></Button>
            <Button
                basic
                inverted
                content="Crear cuenta"
                style={{marginLeft: "10px"}}></Button>
        </MenuItem>
    );
}
