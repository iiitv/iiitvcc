import React from "react";

function EventBox({
  time,
  category,
  caption,
  secondCat = false,
  hostLink,
  img,
}) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`w-11/12 ${
          secondCat ? "h-24 md:h-40" : "h-40 md:h-60"
        } rounded-3xl ${
          secondCat ? "border-[0.1vh]" : "border-[0.4vh] md:border-[1vh]"
        } border-[#FFBADE]`}
      ></div>
      <p className="text-[#FFBADE] px-2 md:ml-2 font-mono text-xl md:text-2xl">
        {time}
      </p>
      <p className="text-[#FFBADE] px-2 md:ml-2 font-mono text-nowrap  text-xs md:text-xl">
        {category}
      </p>
      <a
        href={hostLink}
        className="text-white md:ml-2 hover:underline text-center self-center text-xs md:text-2xl px-2 font-semibold"
      >
        {caption}
      </a>
    </div>
  );
}

export default EventBox;
