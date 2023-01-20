import ModalWrapper from "app/common/modals/ModalWrapper";
import React from "react";

export default function TestModal({data}) {
    return (
        <ModalWrapper size="mini" header="Test">
            <div>Contador: {data}</div>
        </ModalWrapper>
    );
}
