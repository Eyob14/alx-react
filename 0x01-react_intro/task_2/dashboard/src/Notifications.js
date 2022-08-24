import React, { Component } from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from './utils';

class NotificationSlide extends Component {
  render() {
    return (
      <div className="Notification">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent">
            <div
              dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
            ></div>
          </li>
        </ul>
        <button
          type="button"
          area-label="Close"
          onClick={() => console.log("Close button has been clicked")}
          style={{
            display: "inline-block",
            position: "absolute",
            top: "16px",
            right: "16px",
            border: 0,
            outline: "none",
            cursor: "pointer",
            background: 0,
          }}
        >
          <img
            src={closeIcon}
            alt="close icon"
            style={{ width: "7px", height: "7px" }}
          />
        </button>
      </div>
    );
  }
}

export default NotificationSlide;
