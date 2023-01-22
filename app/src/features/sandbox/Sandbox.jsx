import {openModal} from "app/common/modals/modalReducer";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "semantic-ui-react";
import TestGoogleMapsPlaces from "./TestGoogleMapsPlaces";
import TestMap from "./TestMap";
import {increment, decrement} from "./testReducer";

export default function Sandbox() {
    const dispatch = useDispatch();

    // @ts-ignore
    const data = useSelector(state => state.testStore.data);
    // @ts-ignore
    const {loading} = useSelector(state => state.asyncStore);

    const [target, setTarget] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    return (
        <>
            <h1>Testing</h1>
            <h3>El valor guardado es: {data}</h3>
            <Button
                name="increment"
                loading={loading && target === "increment"}
                onClick={e => {
                    dispatch(increment(10));
                    setTarget(e.target.name);
                }}
                content="Incrementar"
                positive></Button>
            <Button
                name="decrement"
                loading={loading && target === "decrement"}
                onClick={e => {
                    dispatch(decrement(10));
                    setTarget(e.target.name);
                }}
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
