import React from "react";
import ReactDOM from "react-dom/client";
import NotificationSlide from "./Notifications";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div id="root-notifications">
      <NotificationSlide />
    </div>
  </React.StrictMode>
);
