import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { NetworkStatusProvider } from "./Components/NetworkStatus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <HashRouter>
    <NetworkStatusProvider>
      <App />
    </NetworkStatusProvider>
  // </HashRouter>
);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
