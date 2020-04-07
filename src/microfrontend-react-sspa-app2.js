import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App"

// ReactDOM.render(<App />, document.getElementById('root-app2'))

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App
})

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;