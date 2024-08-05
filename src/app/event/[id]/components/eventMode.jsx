import React from "react";
export default function EventMode(props) {
  return <>
    <div className="event-mode rounded-lg border bg-card text-card-foreground shadow-sm flex gap-2">
      <div style={{color:"var(--primary)"}} >{props.eventMode ? <OnlineIcon /> : <OfflineIcon/>}</div>
      <p className="event-mode-icon">{props.eventMode ? "Online" : props.eventVenue}</p>
    </div>
  </>
}

const OnlineIcon = ({ width = 24, height = 24}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    id="wifi"
    fill="currentColor"
  >
    <path d="M13.414 19.412a1.994 1.994 0 0 0 0-2.826 1.994 1.994 0 0 0-2.828-.002 2 2 0 1 0 2.828 2.828zm7.071-7.897a1.99 1.99 0 0 1-1.414-.586c-3.899-3.899-10.243-3.898-14.143 0A2 2 0 0 1 2.099 8.1c5.459-5.458 14.341-5.458 19.799 0a2 2 0 0 1-1.413 3.415zM7.757 15.757a2 2 0 0 1-1.414-3.414c3.118-3.119 8.194-3.119 11.313 0a2 2 0 0 1-2.829 2.829 4.005 4.005 0 0 0-5.657 0 1.99 1.99 0 0 1-1.413.585z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)" />
  </svg>
);


const OfflineIcon = ({ width = 32, height = 32}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    id="gps"
    fill="currentColor"
  >
    <g>
    <path d="M16 6.781c4.008 0 7.25 3.225 7.25 7.23 0 1.812-.674 3.455-1.773 4.727l-.288.37-3.668 4.154-.292.373-1.208 1.355-1.189-1.353-.289-.375-3.56-4.024a.512.512 0 0 0-.03-.029c-.018-.017-.041-.043-.074-.076a7.22 7.22 0 0 1-2.129-5.121c0-4.006 3.242-7.23 7.25-7.23zm.002 3.71a3.532 3.532 0 0 0-3.525 3.525 3.534 3.534 0 0 0 3.525 3.527 3.536 3.536 0 0 0 3.527-3.527 3.534 3.534 0 0 0-3.527-3.526zm0 1a2.519 2.519 0 0 1 2.527 2.525 2.52 2.52 0 0 1-2.527 2.527 2.519 2.519 0 0 1-2.525-2.527 2.517 2.517 0 0 1 2.525-2.526z" >

    </path></g>
  </svg>
);

