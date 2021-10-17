import Link from "next/link";
import Header from "../../components/Header";
import EventTimer from "../../components/eventsPage/eventTimer";
import { eventarchive } from "../../events/eventArchive.json";

export async function getStaticPaths() {
  let paths = eventarchive.map((e, i) => `/events/${i}`);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context.params);
  return {
    props: {
      eventindex: context.params.eventindex,
    },
  };
}

const Eventpage = (props) => {
  let {
    title,
    date,
    details,
    address,
    speakers,
    skillreq,
    prerequisites,
    requirements,
    poweredby,
  } = eventarchive[props.eventindex];
  let eventDate = new Date(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="eventpage">
      <Header />
      <div className="back-btn">
        <Link href="/events">
          <img src="/media/arrow.png" alt="arrow" />
        </Link>
      </div>
      <div className="event-container">
        <div className="event-l-col">
          <div className="event-name-detailpg">{title}</div>
          <div className="event-date-detailpg">
            <span className="day-detailpg">{eventDate.getDate()}</span>
            <span className="month-detailpg">
              {monthNames[eventDate.getMonth()]}
            </span>
          </div>
          <div className="event-details">{details}</div>
          <div className="content-horiz">
            <div className="event-address">{address}</div>
            <Link href={`${props.eventindex}`}>
              <button className="register-detailpg">Register</button>
            </Link>
          </div>
        </div>
        <div className="event-r-col">
          <div className="event-info">
            <div className="event-key">Speakers:</div>
            <div className="event-value">
              {speakers[0]}
              <br />
              {speakers[1]}
            </div>
          </div>
          <div className="event-info">
            <div className="event-key">Skill Level:</div>
            <div className="event-value">{skillreq}</div>
          </div>
          <div className="event-info">
            <div className="event-key">Prerequisites:</div>
            <div className="event-value">{prerequisites}</div>
          </div>
          <div className="event-info">
            <div className="event-key">Requirements:</div>
            <div className="event-value">{requirements}</div>
          </div>
          <div className="poweredby">
            <div className="poweredby__text">Powered By:</div>
            <div className="poweredby__img">
              <img src="/media/logos/github.jpg" alt="githublogo" />
            </div>
          </div>
        </div>
      </div>
      <EventTimer date={eventDate} />
      <Link href={`${props.eventindex}`}>
        <button className="register-detailpg calendar-btn">
          Add to Calender
        </button>
      </Link>
    </div>
  );
};

export default Eventpage;
