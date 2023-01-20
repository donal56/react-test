import {useField, useFormikContext} from "formik";
import React from "react";
import {FormField, Label} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {registerLocale} from "react-datepicker";
import spanishLocale from "date-fns/locale/es";

registerLocale("es_MX", spanishLocale);

export default function CustomDatePicker({label, ...props}) {
    const [field, meta] = useField(props.name);
    const {setFieldValue} = useFormikContext();
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <DatePicker
                timeFormat="HH:mm"
                dateFormat="dd/MM/yyyy HH:mm a"
                locale="es_MX"
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value =>
                    setFieldValue(field.name, value)
                }></DatePicker>
            {meta.touched && meta.error ? (
                <Label basic color="red" style={{marginTop: 10}}>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
