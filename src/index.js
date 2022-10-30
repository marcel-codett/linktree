import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGJWfUx0RWFbb196cVRMZV9BJAtUQF1hS39TdkFiXX9dcHFXQWhe"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
