import { combineReducers } from "@reduxjs/toolkit";
import asyncReducer from "app/async/asyncReducer";
import modalReducer from "app/common/modals/modalReducer";
import securityReducer from "app/layout/security/securityReducer";
import eventReducer from "features/events/eventReducer";
import testReducer from "features/sandbox/testReducer";

const rootReducer = combineReducers({
    eventsStore: eventReducer,
    modalsStore: modalReducer,
    securityStore: securityReducer,
    testStore: testReducer,
    asyncStore: asyncReducer
});

export default rootReducer;