"use client";
import { useEffect, useState } from "react";
import EventBox from "../../components/ui/EventBox";

function Page() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/v1/get/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const columns = [[], [], []];

  events.forEach((event, index) => {
    if (!(index % 4 === 3)) {
      columns[index % 3].push(
        <EventBox
          key={event.id}
          caption={event.description}
          time={event.date}
          category={event.name}
          hostLink={event.host_link}
        />
      );
    } else {
      columns[index % 3].push(
        <EventBox key={event.id} secondCat={index % 4 === 3} />
      );
    }
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="self-center h-fit py-2 w-11/12 flex flex-col bg-[#201f31] mt-4">
        <p className=" md:pl-12 pt-5 text-2xl font-medium">Events Near</p>
        <div className="self-center w-full grid grid-flow-row grid-cols-2 md:grid-cols-3">
          {columns.map((column, colIndex) => (
            <section
              key={colIndex}
              className={`h-fit w-full md:w-full gap-8 py-4 grid grid-flow-row  md:pl-12 ${colIndex==1?'mt-20':undefined}`}
            >
              {column}
            </section>
          ))}
        </div>
        <button className="text-xl text-[#FFBADE] border-[#FFBADE] border-[0.5vh] w-fit px-32 active:scale-95 transition-all duration-100 self-center rounded-3xl py-3">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Page;
