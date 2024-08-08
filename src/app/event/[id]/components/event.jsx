import React, { useState, useEffect } from 'react';
import "@/styles/event.css";

import EventPoster from "./eventPoster";
import EventDetails from "./eventDetails";
import useWindowDimensions from "./currentWindowSize";


function GenerateEvent({props:event}){
    // Getting current window dimensions
    const {width , height} = useWindowDimensions(); 

    // console.log(width-height);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [eventDetailsFixed ,setEventDetailsFixed] = useState("event-details-fixed");
    const [eventPosterFixed ,setEventPosterFixed] = useState("");
    const [eventPosterCover, setEventPosterCover] = useState("");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    // To change classes
    useEffect(()=>{
        if(width-height>0) {
            if((scrollPosition>(width-height-(0.12*(width-height)))) ){ // 
                setEventDetailsFixed("");
                setEventPosterFixed("event-poster-fixed");
            }
            else{
                    setEventPosterFixed("");
                    setEventDetailsFixed("event-details-fixed");  
            }
            setEventPosterCover("event-poster-cover");
        }
        else{

                setEventPosterFixed("");
                setEventDetailsFixed("");
        }
    },[scrollPosition,width,height]);

    // To track scroll position
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const eventPoster = "/event_poster.avif";
    return (
        <div className="event-div">
            <div className={`event-poster ${eventPosterFixed}`}>
                <EventPoster posterUrl = {eventPoster}/>
            </div>
            
            <div className={`${eventPosterCover}`}> </div>
            <div className= {`event-details ${eventDetailsFixed}`}>
                <EventDetails
                    event = {event}
                />
            </div>
        </div>
    )
}

export default GenerateEvent;