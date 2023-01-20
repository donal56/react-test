import {useField} from "formik";
import React from "react";
import {FormField, Label, Select} from "semantic-ui-react";

export default function CustomDropdown({label, options, name}) {
    const [field, meta, helpers] = useField(name);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Select
                clearable
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={(e, d) => helpers.setTouched(true)}
                options= {options}></Select>
            {meta.touched && meta.error ? (
                <Label basic color="red" style={{marginTop: 10}}>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
