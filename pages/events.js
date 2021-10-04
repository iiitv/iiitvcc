import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsCarousel from "../components/EventsCarousel";

const events = () => {
  return (
    <React.Fragment>
      <main className="main__events">
        <Header />
        <EventsCarousel />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default events;
