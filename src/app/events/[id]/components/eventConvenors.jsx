import React from "react";
export default function EventConvenors(props) {
  return (
    <>
      <div className="event-convenors-container rounded-lg border shadow-sm bg-secondary border-none p-6 gap-6">
        <p className="event-convenors-title bold">Convenors</p>
        <ul className="event-convenors">
          {props.eventConvenors.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
