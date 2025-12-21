"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";
import Loader from "@/components/ui/loader";
import EventCard from "./components/eventCard";

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
    <div className="w-full flex justify-center mt-8 mb-16">
      <div className="w-[90%] sm:w-full max-w-[1400px] flex flex-col px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6 lg:mb-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">Our Events</h1>
          <div className="w-24 h-1 bg-primary mb-4"></div>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl">
            Explore our past and upcoming events that bring together innovation,
            learning, and community
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mb-12">
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="w-full flex flex-col items-center justify-center py-16">
            <Loader />
            <p className="text-lg text-muted-foreground mt-6">
              Loading more amazing events...
            </p>
          </div>
        ) : (
          hasMoreEvents && (
            <div className="w-full flex justify-center">
              <button
                className="btn-brutalist text-md bg-transparent text-primary border-primary"
                onClick={getMoreEvents}
              >
                Show More
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
