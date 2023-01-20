import {openModal} from "app/common/modals/modalReducer";
import React from "react";
import {useDispatch} from "react-redux";
import {Button, MenuItem} from "semantic-ui-react";

export default function SignedOutMenu() {
    const dispatch = useDispatch();

    return (
        <MenuItem position="right">
            <Button
                basic
                inverted
                content="Iniciar sesión"
                onClick={() =>
                    dispatch(openModal({modalType: "LoginModal"}))
                }></Button>
            <Button
                basic
                inverted
                content="Crear cuenta"
                style={{marginLeft: "10px"}}></Button>
        </MenuItem>
    );
}
