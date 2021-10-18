import React, { useRef, useState } from "react";
import Header from "../components/Header";
import EventsCarousel from "../components/eventsPage/eventsCarousel";
import EventsArchive from "../components/eventsPage/eventsArchive";

const events = () => {
  return (
    <React.Fragment>
      <main className="main__events">
        <Header />
        <div className="carousel-bg">
          <EventsCarousel />
        </div>
        <EventsArchive />
      </main>
    </React.Fragment>
  );
};

export default events;
