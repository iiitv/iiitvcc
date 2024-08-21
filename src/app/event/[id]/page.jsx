"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GenerateEvent from "./components/event";
import useFetchEvent from "./fetchEvent";
import Loading from "@/components/loading";

function Event({ params }) {
<<<<<<< HEAD
    const eventId = params.id;
    const { event, loading, error } = useFetchEvent(eventId);
    const router = useRouter();
    console.log(event);

    if (loading) {
        return <>
            <Loading />
        </>;
    }

    if (error) {
        console.error(error);
        router.push('/events');
        return null;
    }
=======
  const eventId = params.id;
  const { event, loading, error } = useFetchEvent(eventId);
  const router = useRouter();

  if (loading) {
      return <>
          <Loading />
      </>;
  }

  if (error) {
      console.error(error);
      router.push('/events');
      return null;
  }
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1

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

<<<<<<< HEAD

    // To start calling api delete the object below and uncomment the above code
    // const event = {
    //     "id": 7,
    //     "name": "Codestrike v6.0",
    //     "description": `Join us for an exciting coding event organized by Coding Club IIITV, \nwhere teamwork and innovation take center stage! \nIn this unique competition, teams of three programmers will come together to \n solve complex coding challenges within a set timeframe. Participants will need to collaborate closely, leveraging each other's strengths to develop efficient and creative solutions. This event is designed to foster camaraderie, enhance problem-solving skills, and encourage effective communication among team members. Don't miss this opportunity to test your coding prowess, make new friends, and have a blast working together. Sign up now and be part of a thrilling coding adventure!`,
    //     "date": "2024-08-05T15:30:00",
    //     "duration": 60,
    //     "mode": false,
    //     "host_link": "https://www.hosted.com",
    //     "venue": "Mess Hall",
    //     "requirements": [
    //         "Laptop",
    //         "Notebook",
    //         "Pen",
    //         "Pencil"
    //     ],
    //     "hosted_registration": true,
    //     "register_until": "2024-08-05T15:32:30",
    //     "registration_link": "https://www.registration.com",
    //     "creator": "b4e05b86-df08-49d8-a118-51c205216401",
    //     "prizes" : ["Rs. 10000","Rs. 5000", "Rs. 1000",
    //         {
    //             "Female Special":"Rs. 1000",
    //             "FY Special":"Rs. 1000"
    //         }
    //     ],
    //     "winners" : {
    //         "Web Dev":["ABCDEGFHIJKL","ABCDEGFHIJKL","ABCDEGFHIJKL"],
    //         "Cloud ":["ABCDEGFHIJKL"],
    //         "CyberSecurity":["ABCDEGFHIJKL","ABCDEGFHIJKL"]
    //     },
    //     "convenors":[
    //         "Devyash Saini","Devyash Saini","Devyash Saini","Devyash Saini"
    //     ]
    // }



    return (
        <GenerateEvent
            props={event}
        />
    );
=======
  return <GenerateEvent props={event} />;
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
}

export default Event;
