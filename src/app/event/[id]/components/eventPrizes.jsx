import React from "react";

export default function EventPrizes(props) {
  return (
    <div className="event-prize-container rounded-lg border border-none shadow-sm bg-secondary p-6 gap-6">
      <div className="event-prizes">
        <p className="font-bold text-pink-300 text-3xl mb-5 text-center tracking-wide">
          Prizes
        </p>
        {Object.entries(props.eventPrizes).map(([event, prizes]) => (
          <div key={event} className="event-prize-category mb-4">
            <h2 className="text-2xl text-pink-300 font-semibold mb-3 text-center">
              {event}
            </h2>
            <ul className="space-y-1 ml-3">
              {Object.entries(prizes).map(([category, amount]) => (
                <li
                  className="flex gap-2 justify-center items-center pl-1 text-base text-gray-100"
                  key={category}
                >
                  <span className="font-medium">{category}:</span>
                  <span className="font-semibold">{amount}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}
