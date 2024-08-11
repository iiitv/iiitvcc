'use client'
import React, { useEffect, useState } from "react";  
import Link from "next/link";
import { useRouter } from "next/navigation";
import EventMode from "./eventMode"
import EventDuration from "./eventDuration";
import EventRequirements from "./eventRequirements";
import EventPrizes from "./eventPrizes";
import EventConvenors from "./eventConvenors";
import EventVenue from "./eventVenue";
import EventWinners from "./eventWinners";

import { Montserrat } from "next/font/google";
const montserratFont = Montserrat({weight: ["100","400"], subsets: ["latin"]});


function EventDetails(props){
    const [isAdmin,setIsAdmin] = useState(true);

    const [event,setEvent] = useState(props.event || '');
    const [eventName,setEventName] = useState(event.name || "Event Name");
    const [eventDescription,setEventDescription] = useState(event.description || "No description available");
    const [registerUntilDate,setRegisterUntilDate] = useState(event.register_until || new Date());
    const [registrationLink , setRegistrationLink] = useState(event.registration_link || "https://www.registration.com");
    const [hostedRegistration , setHostedRegistration] = useState(event.hosted_registration || false);
    const [hostLink, setHostLink] = useState(event.host_link || "https://www.hosted.com");
    const [daysLeftToRegister,setDaysLeftToRegister]= useState(CalculateDaysLeft(registerUntilDate) || "Registration closed");
    const [eventDate,setEventDate] = useState(event.date || new Date());
    const [eventDuration , setEventDuration]=useState((CalculateEventDuration(event.duration)) || "Not Specified");
    const [eventMode ,setEventMode] = useState(event.mode || false);
    const [eventVenue ,setEventVenue] = useState(event.venue || "Online");
    const [eventRequirements, setEventRequirements] = useState(event.requirements || []);
    const [eventPrizes , setEventPrizes] = useState(event.prizes || []);
    const [eventConvenors,setEventConvenors] = useState(event.convenors || []);
    const [eventWinners,setEventWinners] = useState(event.winners || {});
    
    //To update the remaining registration time each second
    useEffect(()=>{
        setInterval(()=>{
            setDaysLeftToRegister(CalculateDaysLeft(registerUntilDate))
        },1000)
    },[daysLeftToRegister])



    return <>
        <div className="event-cover-details grid grid-cols-2 lg:grid-cols-12 gap-2 ">
            <p className="col-span-2 lg:col-span-6 event-title ">{eventName}</p>
            
            <div className="col-span-2 lg:col-span-6 ">
                <p className="event-days-left " suppressHydrationWarning>{daysLeftToRegister}</p>
                <Link className={((CalculateDaysLeft(registerUntilDate)==="Registration closed")?"disabled-link ":null)+"col-span-1 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"}
                href={hostedRegistration?registrationLink:hostLink} target="_blank" >
                    Register
                </Link>
                {isAdmin ? DeleteButton() : null}
            </div>  
        </div>
        <div className= {`event-date-time-container ${montserratFont.className}`}>
            <div className="event-date-container rounded-lg border shadow-sm bg-secondary border-none px-4 py-2 gap-6">
                <p className="event-date-title ">Event Date</p>
                <p className="event-date">{formatDate(new Date(eventDate))}</p>
            </div>
            <div className="event-time-container rounded-lg border shadow-sm bg-secondary border-none px-4 py-2 gap-6">
                <p className="event-time-title">Event Time</p>
                <p className="event-time">{new Date(eventDate).toLocaleTimeString()}</p>
            </div>
        </div>
        
        <hr style={{width : "100%"}}/>
        
        <div className={`event-details-description ${montserratFont.className}`}>
            <p className="event-description-title">About Event</p>
            <pre className={`event-description ${montserratFont.className}`}>{eventDescription}</pre>
        </div>
        <div className= {`event-mode-duration-container ${montserratFont.className}`}>
            <EventMode 
                eventMode = {eventMode}
                eventVenue = {eventVenue}
            />
            <EventDuration eventDuration ={eventDuration} />
        </div>
        <div className="event-winner-div rounded-lg shadow-sm bg-secondary p-6 gap-6">
            {(eventWinners === null || Object.keys(eventWinners).length === 0) ? null:<EventWinners eventWinners={eventWinners}/>}
        </div>
        
        <div className="event-grid-container grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch justify-stretch">
            <div style={{width:"100%"}} className= {`lg:col-span-1 lg:row-span-1 ${montserratFont.className}`}>
                <EventRequirements eventRequirements = {eventRequirements}/>
            </div>
            <div style={{width:"100%"}} className= {`lg:col-span-1 lg:row-span-2 ${montserratFont.className}`}>
                <EventPrizes eventPrizes = {eventPrizes}/>
            </div>
            <div style={{width:"100%"}} className= {`lg:col-span-1 lg:row-start-2 lg:row-span-2 order-last ${montserratFont.className}`}>
                <EventVenue />
            </div>
            <div style={{width:"100%"}} className= {`lg:col-span-1 lg:row-span-1 ${montserratFont.className}`}>
                <EventConvenors eventConvenors = {eventConvenors}/>
            </div>
        </div>
    </>
}

function DeleteButton(){
    const router = useRouter();

    function onDeleteButtonClicked(){ 
        if(confirm("Are you sure you want to delete this event?")){
            router.push("/events");
        }else{
            return false;
        }
    }
    
    return(
        <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-muted hover:text-primary-foreground border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        onClick={onDeleteButtonClicked}>
            Delete
        </button> 
    )
}



function CalculateDaysLeft(date){
    var today = new Date();
    var anotherDate = new Date(date);
    const timeInMS = anotherDate.getTime() - today.getTime();
    var daysRemaining = Math.ceil(timeInMS / (1000 * 60 * 60 * 24));
    
    var hoursRemaining = (Math.ceil(timeInMS / (1000 * 60 * 60 )));
    var minutesRemaining = (Math.ceil(timeInMS / (1000 * 60)));
    var secondsRemaining = (Math.ceil(timeInMS / (1000)));
    if(daysRemaining>3){
        return (daysRemaining+" days left")
    }
    else{
        if(hoursRemaining>1){
            return (hoursRemaining+" hours left");
        }
        else{
            if(minutesRemaining>2){
                return(minutesRemaining+" minutes left");
            }
            else{
                if(secondsRemaining>0){
                    return(secondsRemaining+" seconds left");
                }
                else{
                    return("Registration closed");
                }
            }
        }
    }
}

function CalculateEventDuration (totalmins)  {
    
      var absTotal= Math.abs(totalmins);
      var mins= absTotal % 60;
      var hours = Math.floor(absTotal / 60);
      var days= Math.floor(hours / 24);
      var hourss = hours % 24;
      var duration ="";
      if(days>0){
        ;
        if(days==1){duration = duration+days+" Day"}
        else{duration = duration+days+" Day"};
        if(hourss || mins){duration = duration+", ";}
      }
      if(hourss){
        if(hourss==1){duration = duration+hourss+" Hour"}
        else{duration = duration+hourss+" Hours"};
        if(mins){duration = duration+", ";}
      }
      if(mins){
        duration = duration+mins+" Minutes";
      }

      return duration;

}

function formatDate(date) {
    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Array of day names
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // Extract day, month, and year from the date
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const dayName = dayNames[date.getDay()];

    // Format the date
    return `${day < 10 ? '0' + day : day}-${month}-${year}, ${dayName}`;
}
export default EventDetails;