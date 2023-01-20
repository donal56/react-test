import {LOGIN_EVENT, LOGOUT_EVENT} from "./securityConstants";

export function loginEvent(credentials) {
    return {
        type: LOGIN_EVENT,
        payload: {
            user: credentials.username
        }
    };
}

export function logoutEvent() {
    return {
        type: LOGOUT_EVENT,
        payload: {
            user: null
        }
    };
}
