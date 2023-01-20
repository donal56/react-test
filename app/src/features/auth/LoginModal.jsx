import CustomTextInput from "app/common/form/CustomTextInput";
import { closeModal } from "app/common/modals/modalReducer";
import ModalWrapper from "app/common/modals/ModalWrapper";
import { loginEvent } from "app/layout/security/securityActions";
import {Form, Formik} from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {Button} from "semantic-ui-react";
import * as Yup from "yup";

export default function LoginModal() {
    const dispatch = useDispatch();

    return (
        <ModalWrapper size="mini" header="Iniciar sesión">
            <Formik
                initialValues={{username: "", password: ""}}
                validationSchema={Yup.object({
                    username: Yup.string().required(),
                    password: Yup.string().required()
                })}
                onSubmit={values => {
                    dispatch(closeModal());
                    dispatch(loginEvent(values));
                }}>
                {({isSubmitting, isValid, dirty}) => (
                    <Form className="ui form">
                        <CustomTextInput
                            name="username"
                            label="Usuario"></CustomTextInput>
                        <CustomTextInput
                            name="password"
                            label="Contraseña"
                            type="password"></CustomTextInput>
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            fluid
                            size="large"
                            color="teal"
                            content="Iniciar sesión"></Button>
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    );
}
