"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GenerateEvent from "./components/event";
import useFetchEvent from "./fetchEvent";
import Loading from "@/components/loading";

function Event({ params }) {
  const eventId = params.id;
  const { event, loading, error } = useFetchEvent(eventId);
  const router = useRouter();

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    console.error(error);
    router.push("/events");
    return null;
  }

  // To start calling api delete the object below and uncomment the above code
  //   const event = {
  //     "id": 46,
  //     "name": "CodeStrike v6.0",
  //     "description": "A competitive coding event",
  //     "date": "2024-07-30",
  //     "duration": 180,
  //     "mode": true,
  //     "host_link": "https://www.example.com",
  //     "venue": null,
  //     "requirements": [
  //         "Laptop",
  //         "Notebook"
  //     ],
  //     "hosted_registration": true,
  //     "register_until": "2024-09-28T00:00:00",
  //     "registration_link": "https://www.example.com",
  //     "creator": "16ca184e-2872-48e0-b7c1-6425cdc66b0b",
  //     "venue_link": "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Indian%20Institute%20of%20Information%20Technology%20Vadodara+(IIIT%20Vadodara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  //     "convenors": [
  //         "devyash",
  //         "devyash",
  //         "devyash"
  //     ],
  //     "prizes": [
  //         "7Cr",
  //         "69L",
  //         "3.14L",
  //         {
  //             "fy special": "150 Rupiya"
  //         }
  //     ],
  //     "winners": {
  //         "Web Dev": [
  //             "ABCDEGFHIJKL",
  //             "ABCDEGFHIJKL",
  //             "ABCDEGFHIJKL"
  //         ],
  //         "Cloud ": [
  //             "ABCDEGFHIJKL"
  //         ],
  //         "CyberSecurity": [
  //             "ABCDEGFHIJKL",
  //             "ABCDEGFHIJKL"
  //         ]
  //     },
  //     "time": "22:29:39"
  // };

  return <GenerateEvent props={event} />;
}

export default Event;
