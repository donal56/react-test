import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "app/common/modals/modalReducer";
import securityReducer from "app/layout/security/securityReducer";
import eventReducer from "features/events/eventReducer";
import testReducer from "features/sandbox/testReducer";

const rootReducer = combineReducers({
    testStore: testReducer,
    eventsStore: eventReducer,
    securityReducer: securityReducer,
    modalReducer: modalReducer
});

export default rootReducer;