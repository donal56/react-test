import { openModal } from "app/common/modals/modalReducer";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "semantic-ui-react";
import {increment, decrement} from "./testReducer";

export default function Sandbox() {
    const data = useSelector(state => state.testStore.data);
    const dispatch = useDispatch();

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
                onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps: {data}}))}
                content="Abrir modal"
                negative></Button>
        </>
    );
}
