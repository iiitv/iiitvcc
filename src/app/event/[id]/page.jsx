'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import GenerateEvent from './components/event';
import useFetchEvent from './fetchEvent';
import Loading from '@/components/loading';

function Event({ params }) {
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
}

export default Event;
