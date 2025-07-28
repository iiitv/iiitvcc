"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fetchTeamData } from "./_actions/fetchTeamData";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { motion, type Variants } from "framer-motion";

// React icon
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [activeTeam, setActiveTeam] = useState<string | null>(null);
  const [focusCard, setFocusCard] = useState<number | null>(null);
  const [isScroll, setIsScroll] = useState<number>(-1);

  const [currCard, setcurrCard] = useState(null);
  const [ShowMore, setShowMore] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await fetchTeamData();
      if (data.length > 0) {
        // applying transformation to the profile pictures
        const transformation = "ar_2:3,c_crop/";
        data.forEach((item: any) => {
          item.pfp = item.pfp.replace("upload/", `upload/${transformation}`);
        });

        console.log("Fetched team data:", data[0].pfp);
        setTeamMembers(data);
        setActiveTeam(data[data.length - 1].batch);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="font-poppins font-light text-center py-[min(20vh,6rem)] w-[calc(min(90rem,90%))] mx-auto my-16 relative">
      <h2 className="text-white text-[clamp(3.5rem,3rem+1.6vw,5rem)] -mt-[0.625rem] font-extrabold">
        MEET OUR <div className="text-primary">TEAM</div>
      </h2>
      <p className="text-gray-400 max-w-[50rem] mx-auto leading-relaxed text-[clamp(0.9rem,0.825rem+0.3vw,1.2rem)]">
        Our team is a group of passionate individuals who are dedicated to
        making a difference in the world of technology. We are a diverse group
        of people who are united by our love for coding and technology. We are
        committed to helping each other grow and learn, and we are always
        looking for new members to join us on our journey. If you are passionate
        about technology and coding, we would love to have you on our team!
      </p>
      <div className="my-8 space-x-6 absolute w-full">
        {teamMembers.length > 0 &&
          Array.from(new Set(teamMembers.map((item) => item.batch))).map(
            (batch) => (
              <Button
                variant={"ghost"}
                key={batch}
                onClick={() => setActiveTeam(batch)}
                className={cn(
                  "py-0 px-8 text-[clamp(.9rem,1.0rem+0.9333vw,1.2rem)] transition",
                  activeTeam === batch &&
                  "bg-primary text-secondary font-bold border-primary",
                )}
              >
                {batch}
              </Button>
            ),
          )}
        <Button
          variant={"ghost"}
          onClick={() => setActiveTeam("Developers")}
          className={cn(
            "py-0 px-8 text-[clamp(.9rem,1.0rem+0.9333vw,1.2rem)] transition",
            activeTeam === "Developers" &&
            "bg-primary text-secondary font-bold border-primary",
          )}
        >
          Developers
        </Button>
      </div>
      <div className="absolute z-[-1] left-1/2 -translate-x-1/2 -translate-y-[15%] text-[clamp(6rem,1.3333rem+14.9333vw,20rem)] font-extrabold text-[#36354a] select-none tracking-widest uppercase">
        {activeTeam}
      </div>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers
          .filter((item) => (((item.batch === activeTeam) && item.position.some((pos: string) => pos === "Member")) || (activeTeam==="Developers" && item.is_dev)))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, idx) => (
            <div className="p-4" key={item.id}>
              <motion.div
                onMouseEnter={() => {
                  setcurrCard(item.id);
                  setFocusCard(item.id);
                }}
                onMouseLeave={() => {
                  setcurrCard(null);
                  setFocusCard(null);
                  setShowMore(null);
                }}
                onClick={() => setcurrCard(item.id)}
                initial={false}
                animate={isScroll - idx * 120 > 0 ? "open" : "closed"}
                variants={itemVariants}
                className={cn(
                  "card relative cursor-pointer grayscale-[100%]  hover:grayscale-[0%] transition-all  rounded-md",
                  idx % 3 !== 1
                    ? "translate-y-0"
                    : "translate-y-0 sm:mt-[15%] midChild",
                  focusCard !== null &&
                  focusCard !== item.id &&
                  "scale-[.98] duration-500 blur-[4px]",
                )}
              >
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <CldImage
                    src={item.pfp}
                    alt={`Photo of ${item.name}`}
                    width={400}
                    height={600}
                    preserveTransformations
                    className={`w-full grayscale hover:grayscale-0 transition duration-500`}
                  />

                  <div
                    className={`${ShowMore === item.id ? "h-full w-full bg-black/70" : ""}  ${currCard === item.id ? "translate-y-0" : "translate-y-full invisible pointer-events-none"} absolute inset-0 flex flex-col pb-4 items-center justify-end transition-all duration-300 ease-in-out opacity-100 text-white z-20 card-bg-linear-gradient`}
                  >
                    <div className="flex flex-col items-center gap-2 max-w-[90%]">
                      <h1 className="text-2xl">About</h1>

                      <div className={`w-full flex flex-col`}>
                        <p
                          className={`${ShowMore === item.id ? "overflow-y-scroll max-h-80 rounded-lg" : "overflow-hidden text-ellipsis line-clamp-3"} transition-all duration-300 ease-in-out`}
                        >
                          {item.about}
                        </p>
                        {item.about.length > 150 && (
                          <p
                            className="text-pink-500 hover:underline cursor-pointer"
                            onClick={() => {
                              setShowMore(
                                ShowMore === item.id ? null : item.id,
                              );
                            }}
                          >
                            {ShowMore === item.id ? "Read Less" : "Read More"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2 max-w-[80%]">
                      <h1 className="text-2xl">Expertise</h1>
                      <p>{item.expertise.join(", ")}</p>
                    </div>

                    <ul className="flex justify-center items-center space-x-2 mt-4 mb-6 ">
                      {item.socials.map((socialItem: any, idx: number) => (
                        <li key={idx}>
                          <Link
                            href={socialItem.url}
                            target="_blank"
                            className="text-white hover:text-pink-500 transition"
                          >
                            {socialItem.platform === "github" ? (
                              <FaGithub className="text-xl" />
                            ) : (
                              <FaLinkedinIn className="text-xl" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`transition-all duration-300 ease-in-out ${currCard === item.id ? "translate-y-full invisible pointer-events-none" : "translate-y-0"} absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10`}
                  >
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm tracking-wider font-light">
                      {item.position
                        .map(
                          (pos: string) =>
                            pos.charAt(0).toUpperCase() + pos.slice(1),
                        )
                        .join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TeamSection;
