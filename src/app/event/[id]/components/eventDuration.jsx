import React from "react";
export default function EventDuration(props) {
	return (
		<>
			<div className="event-mode rounded-lg border bg-card text-card-foreground shadow-sm flex gap-2">
				<div style={{color:"var(--primary)"}}><DurationIcon/></div>
				<p className="event-mode-icon">{props.eventDuration}</p>
			</div>
		</>
	);
}

const DurationIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 64 64"
		id="stopwatch"
		width={"32px"}
		height={"32px"}
	>
		<path d="M34 10.09c-.66-.09-1.32-.09-2-.09s-1.34 0-2 .09a22 22 0 1 0 4 0zM32 50a18 18 0 1 1 18-18 18 18 0 0 1-18 18zm18.76-34a2 2 0 0 1-1.44-.62 23.9 23.9 0 0 0-8.07-5.54 2 2 0 1 1 1.54-3.69 27.87 27.87 0 0 1 9.42 6.46A2 2 0 0 1 50.76 16zm-37.52 0a2 2 0 0 1-1.44-3.38 27.87 27.87 0 0 1 9.42-6.46 2 2 0 1 1 1.54 3.69 23.9 23.9 0 0 0-8.07 5.54 2 2 0 0 1-1.45.61z"></path>
		<path d="M38 6a2 2 0 0 1-2 2h-2v2.09c-.66-.09-1.32-.09-2-.09s-1.34 0-2 .09V8h-2a2 2 0 0 1 0-4h8a2 2 0 0 1 2 2zm2 28h-8a2 2 0 0 1-2-2V20a2 2 0 0 1 4 0v10h6a2 2 0 0 1 0 4z"></path>
	</svg>
);
