import {useField} from "formik";
import React from "react";
import {FormField, Label} from "semantic-ui-react";

export default function CustomTextInput({label, ...props}) {
    const [field, meta] = useField(props.name);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field} {...props}></input>
            {meta.touched && meta.error ? (
                <Label basic color="red" style= {{marginTop: 10}} >
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}