import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App.jsx";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "app/store/configureStore.js";
import {fetchEvents} from "features/events/eventActions.js";
import ScrollToTop from "app/layout/ScrollToTop.jsx";

import "./app/layout/styles.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";

const store = configureStore();
store.dispatch(fetchEvents());

if (module.hot) {
    module.hot.accept("./app/layout/App.jsx", function () {
        setTimeout(render);
    });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function render() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop></ScrollToTop>
                <App />
            </BrowserRouter>
        </Provider>
    );
}
