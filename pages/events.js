import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsCarousel from "../components/Events page/EventsCarousel";
import EventsArchive from "../components/Events page/EventsArchive";

const events = () => {
  return (
    <React.Fragment>
      <main className="main__events">
        <Header />
        <div className="carousel-bg">
          <EventsCarousel />
        </div>
        
        <EventsArchive/>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default events;
