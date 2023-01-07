import { combineReducers } from "@reduxjs/toolkit";
import eventReducer from "features/events/eventReducer";
import testReducer from "features/sandbox/testReducer";

const rootReducer = combineReducers({
    testStore: testReducer,
    eventsStore: eventReducer
});

export default rootReducer;