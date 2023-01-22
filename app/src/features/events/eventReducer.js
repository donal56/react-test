import {CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT} from "./eventConstants";

const initialState = {
    events: []
};

export default function eventReducer(state = initialState, {type, payload}) {
    
    switch (type) {
        case CREATE_EVENT:
            const currentId = state.events
                .map(x => x.id)
                .reduce((acc, curr, arr) => (curr > acc ? curr : acc), 1);

            payload.event.attendees = [];
            payload.event.id = currentId + 1;
            payload.event.hostedBy = "Anónimo";
            payload.event.hostPhotoURL = "/assets/user.png";

            return {
                ...state,
                events: [...state.events, payload.event]
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events.filter(
                        event => event.id !== payload.event.id
                    ),
                    payload
                ]
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events.filter(event => event.id !== payload.id)
                ]
            };
        case FETCH_EVENTS:
            return {
                ...state,
                events: payload
            }
        default:
            return state;
    }
}
