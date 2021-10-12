import { eventarchive } from "../../events/eventarchive.json";
import Link from "next/link";
const EventsArchive = () => {
  let year1 = "2022";
  let year2 = "2021";
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const openYear = (show, hide) => {
    let showyear = document.getElementsByClassName(show)[0];
    let hideyear = document.getElementsByClassName(hide)[0];
    showyear.style.display = "flex";
    hideyear.style.display = "none";
    let focusbutton = document.getElementsByClassName(`btn-${show}`)[0];
    let unfocusbutton = document.getElementsByClassName(`btn-${hide}`)[0];
    focusbutton.style.backgroundColor = "#602080";
    unfocusbutton.style.backgroundColor = "black";
  };
  return (
    <div style={{ display: "relative" }}>
      <div className="bg-text">CODING</div>
      <div className="event-archive-parent">
        <div className="event-archive-head-cont">
          <div className="event-archive-head-img">
            <img src="/media/calendar.png" alt="calendar" />
          </div>
          <div className="event-archive-head-text">Past Events</div>
        </div>
        <div className="event-archive-cont">
          <div className="event-archive-btns">
            {/* year1 will be open by default */}
            <button
              className="btn-year1"
              onClick={() => openYear("year1", "year2")}
            >
              {year1}
            </button>
            <button
              className="btn-year2"
              onClick={() => openYear("year2", "year1")}
            >
              {year2}
            </button>
          </div>
          <div className="event-archive">
            <div className="year1">
              {eventarchive.map((e, index) => {
                let date = new Date(e.date);
                if (date.getFullYear() == year1) {
                  return (
                    <Link
                      href={{
                        pathname: "events/[eventindex]",
                        query: {
                          eventindex: index,
                        },
                        params: {
                          eventindex: index,
                        },
                      }}
                    >
                      <div className="archived-event-detail">
                        <div className="archived-event-photo">
                          <img src={e.photos[0]} alt="event photo" />
                        </div>
                        <div className="archived-event-name">{e.title}</div>
                        <div className="archived-event-date">
                          <div className="archived-event-date-img">
                            <img src="/media/calendar.png" alt="calendar" />
                          </div>
                          <div className="archived-event-date-text">{`${monthNames[
                            date.getMonth()
                          ].toUpperCase()}/${date.getFullYear()}`}</div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
            <div className="year2">
              {eventarchive.map((e,index) => {
                let date = new Date(e.date);
                if (date.getFullYear() == year2) {
                  return (
                    <Link
                      href={{
                        pathname: "events/[eventindex]",
                        query: {
                          eventindex: index,
                        },
                        params: {
                          eventindex: index,
                        },
                      }}
                    >
                      <div className="archived-event-detail">
                        <div className="archived-event-photo">
                          <img src={e.photos[0]} alt="event photo" />
                        </div>
                        <div className="archived-event-name">{e.title}</div>
                        <div className="archived-event-date">
                          <div className="archived-event-date-img">
                            <img src="/media/calendar.png" alt="calendar" />
                          </div>
                          <div className="archived-event-date-text">{`${monthNames[
                            date.getMonth()
                          ].toUpperCase()}/${date.getFullYear()}`}</div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsArchive;
