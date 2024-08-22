"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import data from "./data.json";

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
  const [teamMembers] = useState<{
    [key: string]: {
      name: string;
      position: string;
      image: string;
      social: { platform: string; url: string }[];
    }[];
  }>(data);
  const [activeTeam, setActiveTeam] = useState("2023");
  const [focusCard, setFocusCard] = useState<number | null>(null);
  const [isScroll, setIsScroll] = useState<number>(-1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="font-poppins font-light text-center py-[min(20vh,6rem)] w-[calc(min(90rem,90%))] mx-auto my-16 relative">
      <h2 className="text-white text-[clamp(3.5rem,3rem+1.6vw,5rem)] -mt-[0.625rem] font-extrabold">
        MEET OUR <span className="text-primary">TEAM</span>
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
        {Object.keys(data).map((team, index) => (
          <Button
            variant={"ghost"}
            key={index}
            onClick={() => setActiveTeam(team)}
            className={`py-0 px-8 text-[clamp(.9rem,.1.0rem+0.9333vw,1.2rem)] transition ${activeTeam === team && "bg-primary text-secondary font-bold border-primary"}`}
          >
            {team}
          </Button>
        ))}
      </div>
      <span className="absolute z-[-1] left-1/2 -translate-x-1/2 -translate-y-[15%] text-[clamp(6rem,1.3333rem+14.9333vw,20rem)] font-extrabold text-[#36354a] select-none tracking-widest uppercase">
        {activeTeam}
      </span>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers[activeTeam].map((member, index) => (
          <motion.div
            initial={false}
            animate={isScroll - index * 120 > 0 ? "open" : "closed"}
            variants={itemVariants}
            key={index}
            className={cn(
              "card relative cursor-pointer grayscale-[100%]  hover:grayscale-[0%] transition-all  rounded-md",
              index % 3 !== 1
                ? "translate-y-0"
                : "translate-y-0 sm:translate-y-[15%] midChild",
              focusCard !== null &&
                focusCard !== index &&
                "scale-[.98] duration-500 blur-[4px]",
            )}
            onMouseEnter={() => setFocusCard(index)}
            onMouseLeave={() => setFocusCard(null)}
          >
            <img
              src={member.image}
              alt={`Photo of ${member.name}`}
              className="w-full block grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10 text-white">
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm tracking-wider font-light">
                {member.position}
              </p>
              <ul className="flex justify-center items-center space-x-2 mt-4">
                {member.social.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.url}
                      className="text-white hover:text-pink-500 transition"
                    >
                      {social.platform === "github" ? (
                        <FaGithub className="text-xl" />
                      ) : (
                        <FaLinkedinIn className="text-xl" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
