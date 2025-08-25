"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";
import Loader from "@/components/ui/loader";
import EventCard from "./components/eventCard";


import { Montserrat, Alata } from "next/font/google";
const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});
const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });

const quotes = require("./qoutes.json");

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [nextPageEvents, setNextPageEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [hasMoreEvents, setHasMoreEvents] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (page) => {
    try {
      setHasMoreEvents(false);
      setLoading(true);
      const response = await fetch(`/api/v1/get/events?page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    } finally {
      setHasMoreEvents(true);
      setLoading(false);
    }
  };

  const getMoreEvents = async () => {
    setEvents((prevEvents) => [...prevEvents, ...nextPageEvents]);
    setPageCount((prev) => prev + 1);

    const newEvents = await fetchEvents(pageCount + 2);
    if (newEvents.length === 0) {
      setHasMoreEvents(false);
    } else {
      setNextPageEvents(newEvents);
    }
  };

  useEffect(() => {
    const loadInitialEvents = async () => {
      const firstPageEvents = await fetchEvents(pageCount);
      const secondPageEvents = await fetchEvents(pageCount + 1);

      setEvents(firstPageEvents);
      setNextPageEvents(secondPageEvents);

      if (secondPageEvents.length === 0) {
        setHasMoreEvents(false);
      }
    };
    loadInitialEvents();
  }, []);

  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * quotes.length));
  }, []);


  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-[95%] flex flex-col">
        <p className={`underline mb-4 lg:text-5xl ml-4 ${alataFont.className}`}>
          Events
        </p>
        <div className="grid lg:grid-cols-3 gap-14 px-4 mt-6 sm:grid-cols-2 grid-cols-1 grid-rows-1">
          {/* Static Quote Box in 2nd column, 1st row */}
          <div className={`h-fit self-center lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 sm:col-span-2 col-span-1 p-4 rounded-xl flex flex-col gap-3 items-center justify-center text-white text-center text-xl lg:text-3xl ${alataFont.className}`}>
            
            <span>"{randomIndex && (quotes[randomIndex].text)}"</span>
            <span className="text-pink-200 text-sm lg:text-xl"> — {randomIndex && (quotes[randomIndex].author)}</span>
          </div>

          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>

        {loading ? (
          <div className="w-full flex justify-center p-12">
            <p className={`text-xl px-5 ${montserratFont.className}`}>
              Loading...{" "}
            </p>
            <Loader />
          </div>
        ) : (
          hasMoreEvents && (
            <div
              className={`${montserratFont.className} w-full flex justify-center my-10`}
            >
              <button className="show-more-button" onClick={getMoreEvents}>
                <p>Show More</p>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
