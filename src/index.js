import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GenQR from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GenQR />
  </StrictMode>,
  rootElement
);
