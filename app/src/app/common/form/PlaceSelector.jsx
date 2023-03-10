import {useField} from "formik";
import React from "react";
import {FormField, Input, Label, List, Segment} from "semantic-ui-react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function PlaceSelector({label, name, options = {}, ...props}) {
    const [field, meta, helpers] = useField(name);

    return (
        <PlacesAutocomplete
            value={field.value["address"]}
            onChange={value => helpers.setValue({address: value})}
            onSelect={handleSelect}
            searchOptions={options}>
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
            }) => (
                <FormField error={meta.touched && !!meta.error}>
                    <label>{label}</label>
                    <Input
                        icon = "map marker alternate"
                        {...getInputProps({
                            name: field.name,
                            onBlur: handleBlur,
                            ...props
                        })}></Input>
                    {meta.touched && meta.error ? (
                        <Label basic color="red" style={{marginTop: 10}}>
                            {meta.error["address"]}
                        </Label>
                    ) : null}
                    {suggestions?.length > 0 && (
                        <Segment
                            loading={loading}
                            style={{
                                marginTop: 0,
                                position: "absolute",
                                zIndex: 1000,
                                width: "100%"
                            }}>
                            <List selection>
                                {suggestions.map(suggestion => (
                                    <List.Item
                                        key={suggestion.placeId}
                                        {...getSuggestionItemProps(suggestion)}>
                                        <List.Header>
                                            {
                                                suggestion.formattedSuggestion
                                                    .mainText
                                            }
                                        </List.Header>
                                        <List.Description>
                                            {
                                                suggestion.formattedSuggestion
                                                    .secondaryText
                                            }
                                        </List.Description>
                                    </List.Item>
                                ))}
                            </List>
                        </Segment>
                    )}
                </FormField>
            )}
        </PlacesAutocomplete>
    );

    function handleSelect(address) {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => helpers.setValue({address, latLng}))
            .catch(error => helpers.setError(error));
    }

    function handleBlur(e) {
        field.onBlur(e);
        if (!field.value.latLng) {
            helpers.setValue({address: "", latLng: null});
        }
    }
}
