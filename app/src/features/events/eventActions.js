import {fetchSampleData} from "app/api/mockApi";
import {
    asyncActionError,
    asyncActionFinish,
    asyncActionStart
} from "app/async/asyncReducer";
import {
    CREATE_EVENT,
    DELETE_EVENT,
    FETCH_EVENTS,
    UPDATE_EVENT
} from "./eventConstants";

export function createEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: {
            event: event
        }
    };
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: {
            event: event
        }
    };
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        payload: {
            id: eventId
        }
    };
}

export function fetchEvents() {
    return async function (dispatch) {
        dispatch(asyncActionStart());
        try {
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: events});
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError(error));
        }
    };
}
