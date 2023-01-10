import {LOGIN_EVENT, LOGOUT_EVENT} from "./securityConstants";

export default function securityReducer(state, {type, payload}) {
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
            return {
                user: null
            };
    }
}
