"use client";
import { useEffect, useState } from "react";
import EventBox from "../../components/ui/EventBox";

function Page() {
  const [events, setEvents] = useState([]);
  const [nextPageEvents, setNextPageEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [hasMoreEvents, setHasMoreEvents] = useState(true);
  const [columnCount, setColumnCount] = useState(3); 

  const fetchEvents = async (page) => {
    try {
      const response = await fetch(`/api/v1/get/events?page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
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

   
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnCount(2); 
      } else {
        setColumnCount(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    loadInitialEvents();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columns = Array.from({ length: columnCount }, () => []);

  events.forEach((event, index) => {
    columns[index % columnCount].push(
      <EventBox
        key={event.id}
        caption={event.description}
        time={event.date}
        category={event.name}
        hostLink={event.host_link}
      />
    );
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="self-center h-fit py-2 w-11/12 flex flex-col bg-[#201f31] mt-4">
        <p className="md:pl-12 pt-5 text-2xl font-medium mb-7 ">Events Near</p>
        <div className="self-center w-full grid grid-flow-row grid-cols-2 md:grid-cols-3">
          {columns.map((column, colIndex) => (
            <section
              key={colIndex}
              className={`h-fit w-full gap-8 py-4 grid grid-flow-row md:pl-12 ${
                colIndex === 1 && columnCount === 3 ? "mt-32" : ""
              }
              ${
                colIndex === 1 && columnCount === 2 ? "mt-20" : ""
              }`
               }
            >
              {column}
            </section>
          ))}
        </div>
        {hasMoreEvents && (
          <button
            onClick={getMoreEvents}
            className="text-sm md:text-xl hover:border-[#e890bd] text-[#FFBADE] border-[#FFBADE] border-[0.5vh] w-fit px-24 md:px-32  active:scale-95 transition-all duration-100 self-center rounded-3xl py-3"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
