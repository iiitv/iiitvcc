import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Pagination } from "swiper";
import Link from "next/link";
import { eventarchive } from "../../events/eventArchive.json";

SwiperCore.use([Autoplay, Keyboard, Pagination]);

const EventsCarousel = () => {
  let currentyear = "2021";
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      }}
      className="mySwiper"
    >
      <div>
        {eventarchive.map((e, index) => {
          let eventDate = new Date(e.date);
          if (eventDate.getFullYear() == currentyear) {
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
              <SwiperSlide>
                <div className="event-slide">
                <div className="event-photo">
                    <img src={e.photos[0]} alt="event-photo" />
                  </div>
                  <div className="event-name">{e.title}</div>
                  <div className="event-date">
                    <span className="day">{eventDate.getDate()}</span>
                    <span className="month">
                      {monthNames[eventDate.getMonth()]}
                    </span>
                  </div>
                  <div className="event-buttons">
                    <Link href="">
                      <button className="register">Register</button>
                    </Link>
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
                      <button className="details">Details</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </div>
    </Swiper>
  );
};

export default EventsCarousel;
