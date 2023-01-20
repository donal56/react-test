const OPEN_MODAL_EVENT = "OPEN_MODAL_EVENT";
const CLOSE_MODAL_EVENT = "CLOSE_MODAL_EVENT";

export function openModal(payload) {
    return {
        type: OPEN_MODAL_EVENT,
        payload
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL_EVENT
    };
}

const initialState = null;

export default function modalReducer(state = initialState, {type, payload}) {
    switch (type) {
        case OPEN_MODAL_EVENT:
            const {modalType, modalProps} = payload;
            return {modalType, modalProps};
        case CLOSE_MODAL_EVENT:
            return null;
        default:
            return state;
    }
}
