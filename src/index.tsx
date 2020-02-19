import * as React from "react";
import * as ReactDOM from "react-dom";
import chronoscope from 'npmpackage-test-tikitaka';
import { App } from "./components/App";

const container = document.getElementById("root");

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    container
);

chronoscope(container);