import React, {useState} from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function TestGoogleMapsPlaces({setLat, setLng}) {
    const [address, setAdress] = useState("");

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}>
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
            }) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: "Search Places ...",
                            className: "location-search-input"
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer"
                                  }
                                : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer"
                                  };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style
                                    })}
                                    key={suggestion.placeId}>
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );

    function handleChange(address) {
        setAdress(address);
    }

    function handleSelect(address) {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log("Success", latLng);
                setLat(latLng.lat);
                setLng(latLng.lng);
            })
            .catch(error => console.error("Error", error));
    }
}
