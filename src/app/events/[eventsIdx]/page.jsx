import "./styles.css";
import EventCard from "./components/eventCard";
import fetchEvents from "./_actions/fetchEvents";
import Link from "next/link";
import ChevronRight from "./icons/ChevronRight";
import ChevronLeft from "./icons/ChevronLeft";

import { Montserrat, Alata } from "next/font/google";
const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});
const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });

export default async function Events({ params }) {
  let { eventsIdx } = params;
  eventsIdx = parseInt(eventsIdx, 10); // string to base 10 :)

  let events = [];
  const { data, error } = await fetchEvents(eventsIdx);

  if (error) {
    console.error("Error fetching events:", error);
  }
  else {
    events = data;
  }


  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-[95%]">
        <p className={`underline text-3xl ml-4 ${alataFont.className}`}>
          Events
        </p>
        <div className="grid lg:grid-cols-3 gap-8 px-4 mt-6 sm:grid-cols-2 grid-cols-1 grid-rows-1">
          {/* Static Quote Box in 2nd column, 1st row */}
          <div className="h-full lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 sm:col-span-2 col-span-1 p-4 bg-gray-700 rounded-2xl flex items-center justify-center text-white text-center">
            Random image or quote
          </div>

          {
            events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))

          }
        </div>

        <div
          className={`${montserratFont.className} w-full flex flex-row gap-2 justify-center items-center my-10`}
        >
          {
            eventsIdx > 1 && (
              <Link href={`/events/${eventsIdx - 1}`} className="cursor-pointer show-more-button">
                <div className="flex flex-row items-center pl-2 pr-4 py-2">
                  <ChevronLeft className="w-4 h-4 flex-shrink-0" />
                  <p>
                    Previous
                  </p>
                </div>
              </Link>
            )
          }

          <Link href={`/events/${eventsIdx + 1}`} className="cursor-pointer show-more-button">
            <div className="flex flex-row items-center pr-2 pl-4 py-2">
              <p>Next</p>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
