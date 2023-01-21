import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({text, lat, lng}) => (
    <div>
        {text} ({lat}, {lng})
    </div>
);

export default function TestMap({lat, lng}) {
    const defaultProps = {
        center: {
            lat: lat || 10.99835602,
            lng: lng || 77.01502627
        },
        zoom: 18
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{height: "40vh", width: "100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDPiYoUiT0T2oOasTG_a1AkVM21sXURU_U"
                }}
                center={defaultProps.center}
                zoom={defaultProps.zoom}>
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}
