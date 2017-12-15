//react
import React from "react";
import { render } from "react-dom";

// routing
import { Provider } from "mobx-react";
import { startRouter } from "./stores/router";
import * as stores from "./stores";

// relay
// import { QueryRenderer } from "react-relay";
// import environment from "./Environment";

import "./styles/index.css";
import App from "./components/App";

startRouter({ ...stores });

render(
    <Provider {...stores}>
        <App />
    </Provider>,

    document.getElementById("root")
);
