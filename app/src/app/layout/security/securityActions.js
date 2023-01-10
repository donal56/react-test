import {LOGIN_EVENT, LOGOUT_EVENT} from "./securityConstants";

export function loginEvent(user) {
    return {
        type: LOGIN_EVENT,
        payload: {
            user: user
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
