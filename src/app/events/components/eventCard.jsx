"use client";
import { useState } from "react";

import { getPublicUrl } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function EventCard(props) {
  const [event, setEvent] = useState(props.event);
  const [eventDate, setEventDate] = useState(event.date);
  const [eventTime, setEventTime] = useState(event.time);
  let posterUrl = getPublicUrl(`/events/${event.id}/poster`);
  return (
    <div className="lg:row-span-2 lg:col-span-1 w-full h-fit group">
      <Link href={`\\event\\${event.id}`}>
        <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-2">
          <div className="w-full aspect-square border-2 border-primary rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
            <Image
              src={posterUrl}
              width={1000}
              height={1000}
              alt={`Poster for ${event.name}`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="ms-2 mt-3">
            <p className="text-primary text-sm font-medium mb-1 transition-colors duration-300 group-hover:text-primary/80">
              {formatDate(eventDate)} | {formatTime(eventTime)}
            </p>
            <p className="font-semibold text-xl mb-2 transition-colors duration-300 group-hover:text-primary">
              {event.name}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {trimString(event.description, 50)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day); // Month is 0-indexed

  const formattedDay = date.getDate();
  const monthName = date.toLocaleString("default", { month: "long" });
  const formattedYear = date.getFullYear();

  return `${formattedDay} ${monthName} ${formattedYear}`;
}

const formatTime = (timeString) => {
  const timeRegex = /^(\d{2}):(\d{2}):(\d{2})$/;
  const match = timeString.match(timeRegex);
  if (!match) {
    return "Invalid Time Format";
  }
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${hours}:${formattedMinutes} ${ampm}`;
};

const trimString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};
