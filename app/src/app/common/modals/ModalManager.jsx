import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from 'features/sandbox/TestModal';
import LoginModal from 'features/auth/LoginModal';

export default function ModalManager() {
    const modalLookup = {
        TestModal,
        LoginModal
    };
    const currentModal = useSelector(state => state.modalsStore);

    let renderedModal = (<></>);

    if(currentModal) {
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];

        if(!ModalComponent) {
            console.error("Modal no reconocido: " + modalType);
        }

        renderedModal = <ModalComponent {...modalProps}></ModalComponent>
    }

    return (<span>{renderedModal}</span>);
}