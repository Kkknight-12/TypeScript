import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EventComponents } from "./components/events/EventComponents";
import { SearchRef } from "./components/refs/SearchRef";
// components

// --------------------------------------------------------------------------

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<EventComponents />*/}
    <SearchRef />
  </React.StrictMode>
);