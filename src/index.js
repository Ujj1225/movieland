import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

// Inside render function of ReactDOM we must pass in the component we want to render
ReactDOM.render(
    <App/>, document.querySelector("#root")
)