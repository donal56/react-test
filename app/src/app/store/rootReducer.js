import { combineReducers } from "@reduxjs/toolkit";
import securityReducer from "app/layout/security/securityReducer";
import eventReducer from "features/events/eventReducer";
import testReducer from "features/sandbox/testReducer";

const rootReducer = combineReducers({
    testStore: testReducer,
    eventsStore: eventReducer,
    securityReducer: securityReducer
});

export default rootReducer;