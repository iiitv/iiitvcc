import { eventarchive } from "../../events/eventarchive.json";

const EventsArchive = () => {
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
            <button className="btn-year1">2020</button>
            <button className="btn-year2">2019</button>
          </div>
          <div className="event-archive">
            <div className="year1">
                {

                }
            </div>
            <div className="year2">
                {
                    
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsArchive;
