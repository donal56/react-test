import {openModal} from "app/common/modals/modalReducer";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "semantic-ui-react";
import TestGoogleMapsPlaces from "./TestGoogleMapsPlaces";
import TestMap from "./TestMap";
import {increment, decrement} from "./testReducer";

export default function Sandbox() {
    // @ts-ignore
    const data = useSelector(state => state.testStore.data);
    const dispatch = useDispatch();
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    return (
        <>
            <h1>Testing</h1>
            <h3>El valor guardado es: {data}</h3>
            <Button
                onClick={() => dispatch(increment(10))}
                content="Incrementar"
                positive></Button>
            <Button
                onClick={() => dispatch(decrement(10))}
                content="Decrementar"
                negative></Button>
            <Button
                onClick={() =>
                    dispatch(
                        openModal({modalType: "TestModal", modalProps: {data}})
                    )
                }
                content="Abrir modal"
                negative></Button>
            <div style={{marginTop: 35}}>
                <TestGoogleMapsPlaces
                    setLat={setLat}
                    setLng={setLng}></TestGoogleMapsPlaces>
                <TestMap lat={lat} lng={lng}></TestMap>
            </div>
        </>
    );
}
