import React from "react";
export default function EventRequirements(props) {
  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        className=" rounded-lg border shadow-sm bg-secondary border-none p-6 gap-6"
      >
        <p className="event-venue-title">
          <OfflineIcon />
          Venue
        </p>
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            className="rounded-lg"
            width="100%"
            height="300"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Indian%20Institute%20of%20Information%20Technology%20Vadodara+(IIIT%20Vadodara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}

const OfflineIcon = ({ width = 32, height = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    id="gps"
    fill="currentColor"
  >
    <g>
      <path d="M16 6.781c4.008 0 7.25 3.225 7.25 7.23 0 1.812-.674 3.455-1.773 4.727l-.288.37-3.668 4.154-.292.373-1.208 1.355-1.189-1.353-.289-.375-3.56-4.024a.512.512 0 0 0-.03-.029c-.018-.017-.041-.043-.074-.076a7.22 7.22 0 0 1-2.129-5.121c0-4.006 3.242-7.23 7.25-7.23zm.002 3.71a3.532 3.532 0 0 0-3.525 3.525 3.534 3.534 0 0 0 3.525 3.527 3.536 3.536 0 0 0 3.527-3.527 3.534 3.534 0 0 0-3.527-3.526zm0 1a2.519 2.519 0 0 1 2.527 2.525 2.52 2.52 0 0 1-2.527 2.527 2.519 2.519 0 0 1-2.525-2.527 2.517 2.517 0 0 1 2.525-2.526z"></path>
    </g>
  </svg>
);
