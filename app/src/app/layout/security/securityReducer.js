import {LOGIN_EVENT, LOGOUT_EVENT} from "./securityConstants";

const initialState = {
    user: "Ecoturismo Olmaya"
};

export default function securityReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOGIN_EVENT:
            return {
                user: payload.user
            };
        case LOGOUT_EVENT:
            return {
                user: null
            };
        default:
            return state;
    }
}
