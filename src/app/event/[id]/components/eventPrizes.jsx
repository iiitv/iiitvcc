import React, { useState } from "react";
export default function EventPrizes(props) {
  var specialPrizes = false;
  var specialPrizesIndex = 0;
  var specialPrizesArray = [];

  if (props.eventPrizes === null || props.eventPrizes.length === 0) {
    return <></>;
  } else {
    props.eventPrizes.map((value, index) => {
      if (typeof value === "object") {
        specialPrizes = true;
        specialPrizesIndex = index;
      }
    });
    Object.entries(props.eventPrizes[specialPrizesIndex]).forEach(
      ([key, value]) => {
        specialPrizesArray.push(
          <div className="event-special-prize-item">
            <div>
              <SecondPrizeIcon />
            </div>
            <p className="event-special-prize-title">{key} </p>
            <p className="event-special-prize">&ensp;{value}</p>
          </div>,
        );
      },
    );
  }

  return (
    <>
      <div className="event-prize-container rounded-lg border shadow-sm bg-secondary border-none p-6 gap-6">
        <div className="event-prizes">
          <p className="event-requirement-title bold">Prizes</p>
          <ul>
            {props.eventPrizes.map((value, index) => {
              if (typeof value === "object") {
                return null;
              }
              if (index === 0) {
                return (
                  <div className="event-prize-item" key={index}>
                    <FirstPrizeIcon /> {value}
                  </div>
                );
              } else if (index === 1) {
                return (
                  <div className="event-prize-item" key={index}>
                    <SecondPrizeIcon /> {value}
                  </div>
                );
              } else if (index === 2) {
                return (
                  <div className="event-prize-item" key={index}>
                    <ThirdPrizeIcon /> {value}
                  </div>
                );
              } else {
                return (
                  <div className="event-prize-item" key={index}>
                    <p>
                      {index + 1 + `. `} {value}
                    </p>
                  </div>
                );
              }
            })}
          </ul>
        </div>
        <div className="event-special-prize-container bold">
          <p className="event-requirement-title">
            {specialPrizes ? "Special Prizes" : null}
          </p>
          {specialPrizes ? (
            <ul>
              {specialPrizesArray.map((value, index) => {
                return <div key={index}>{value}</div>;
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}

const FirstPrizeIcon = () => (
  <svg
    viewBox="104.3018 94.7931 20.0032 28.0042"
    width="20.0032"
    height="28.0042"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1, 0, 0, 1, 98.30430786133383, 92.79311543690253)">
      <path
        fill="#d32f2f"
        d="M16.91,9.08l-3-6.5A1,1,0,0,0,13,2H7a1,1,0,0,0-.91,1.42L12,16.16a1,1,0,0,0,.61.54,1,1,0,0,0,.81-.1l.17-.08A1,1,0,0,0,14.1,16l2.81-6.09A1,1,0,0,0,16.91,9.08Z"
      />
      <path
        fill="#ef5350"
        d="M25.84,2.46A1,1,0,0,0,25,2H19a1,1,0,0,0-.91.58L12.28,15.17a1,1,0,0,0,1.31,1.33,6,6,0,0,1,5.07.13A1,1,0,0,0,20,16.16L25.91,3.42A1,1,0,0,0,25.84,2.46Z"
      />
      <path
        d="M24,22a8,8,0,1,1-11.56-7.16,2.3,2.3,0,0,1,.38-.18A7.67,7.67,0,0,1,16,14a8,8,0,0,1,8,8Z"
        fill="#ffee58"
      />
      <path d="M24,22a8,8,0,0,1-8,8V14a8,8,0,0,1,8,8Z" fill="#fdd835" />
    </g>
  </svg>
);

const SecondPrizeIcon = () => (
  <svg
    viewBox="104.3018 94.7931 20.0032 28.0042"
    width="20.0032"
    height="28.0042"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1, 0, 0, 1, 98.30430786133383, 92.79311543690253)">
      <path
        fill="#d32f2f"
        d="M16.91,9.08l-3-6.5A1,1,0,0,0,13,2H7a1,1,0,0,0-.91,1.42L12,16.16a1,1,0,0,0,.61.54,1,1,0,0,0,.81-.1l.17-.08A1,1,0,0,0,14.1,16l2.81-6.09A1,1,0,0,0,16.91,9.08Z"
      />
      <path
        fill="#ef5350"
        d="M25.84,2.46A1,1,0,0,0,25,2H19a1,1,0,0,0-.91.58L12.28,15.17a1,1,0,0,0,1.31,1.33,6,6,0,0,1,5.07.13A1,1,0,0,0,20,16.16L25.91,3.42A1,1,0,0,0,25.84,2.46Z"
      />
      <path
        d="M24,22a8,8,0,1,1-11.56-7.16,2.3,2.3,0,0,1,.38-.18A7.67,7.67,0,0,1,16,14a8,8,0,0,1,8,8Z"
        fill="rgb(196, 196, 196)"
      />
      <path
        d="M24,22a8,8,0,0,1-8,8V14a8,8,0,0,1,8,8Z"
        fill="rgb(174, 174, 174)"
      />
    </g>
  </svg>
);

const ThirdPrizeIcon = () => (
  <svg
    viewBox="283.8335 159.7206 20.0032 28.0042"
    width="20.0032"
    height="28.0042"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 277.8359426750976, 157.7205992512516)">
      <path
        fill="#d32f2f"
        d="M16.91,9.08l-3-6.5A1,1,0,0,0,13,2H7a1,1,0,0,0-.91,1.42L12,16.16a1,1,0,0,0,.61.54,1,1,0,0,0,.81-.1l.17-.08A1,1,0,0,0,14.1,16l2.81-6.09A1,1,0,0,0,16.91,9.08Z"
      />
      <path
        fill="#ef5350"
        d="M25.84,2.46A1,1,0,0,0,25,2H19a1,1,0,0,0-.91.58L12.28,15.17a1,1,0,0,0,1.31,1.33,6,6,0,0,1,5.07.13A1,1,0,0,0,20,16.16L25.91,3.42A1,1,0,0,0,25.84,2.46Z"
      />
      <path
        d="M24,22a8,8,0,1,1-11.56-7.16,2.3,2.3,0,0,1,.38-.18A7.67,7.67,0,0,1,16,14a8,8,0,0,1,8,8Z"
        fill="rgb(163, 72, 36)"
      />
      <path
        d="M24,22a8,8,0,0,1-8,8V14a8,8,0,0,1,8,8Z"
        fill="rgb(149, 64, 38)"
      />
    </g>
  </svg>
);
