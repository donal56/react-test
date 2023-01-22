import TestGoogleMapsPlaces from "features/sandbox/TestGoogleMapsPlaces";
import React from "react";
import {Icon, Segment} from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

export default function EventMap({latLng}) {
    const zoom = 14;
    return (
        <Segment attahed="bottom" style={{padding: 0}}>
            <div style={{height: 300, width: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyDPiYoUiT0T2oOasTG_a1AkVM21sXURU_U"
                    }}
                    center={latLng}
                    zoom={zoom}>
                        <Marker lat= {latLng.lat} lng= {latLng.lng}></Marker>
                    </GoogleMapReact>
            </div>
        </Segment>
    );

    function Marker({lat, lng}) {
        return <Icon name="map marker alternate" size="big" color="red"></Icon>;
    }
}
