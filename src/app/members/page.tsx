"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fetchTeamData } from "./_actions/fetchTeamData";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Loader from "@/components/ui/loader";
import { motion, type Variants, AnimatePresence } from "framer-motion";

// React icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [activeTeam, setActiveTeam] = useState<string | null>(null);
  const [fetchingTeam, setFetchingTeam] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setFetchingTeam(true);
    const fetchTeam = async () => {
      const data = await fetchTeamData();
      if (data.length > 0) {
        // Apply transformation to the profile pictures
        const transformation = "ar_2:3,c_crop/";
        data.forEach((item: any) => {
          item.pfp = item.pfp.replace("upload/", `upload/${transformation}`);
        });

        setTeamMembers(data);
        setActiveTeam(data[data.length - 1].batch);
      }
      setFetchingTeam(false);
    };

    fetchTeam();
  }, []);

  const batches =
    teamMembers.length > 0
      ? Array.from(new Set(teamMembers.map((item) => item.batch)))
      : [];

  const filteredMembers = teamMembers
    .filter(
      (item) =>
        (item.batch === activeTeam &&
          item.position.some((pos: string) => pos === "Member")) ||
        (activeTeam === "Developers" && item.is_dev),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="w-full flex flex-col items-center py-12 lg:py-20">
      <div className="w-[90%] px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            A small team with{" "}
            <span className="relative inline-block">impressive cred</span>.
          </h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-sm lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Meet the talented members of our coding club who are passionate
            about building innovative projects and fostering a community of
            developers.
          </p>
        </div>

        {/* Team Filter Buttons */}
        {fetchingTeam ? (
          <div className="flex flex-col items-center justify-center my-16 gap-4">
            <Loader />
            <p className="text-lg text-muted-foreground">
              Loading team members...
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              {batches.map((batch) => (
                <button
                  key={batch}
                  onClick={() => setActiveTeam(batch)}
                  className={cn(
                    "btn-brutalist px-6 py-2 text-base font-medium transition-all",
                    activeTeam === batch
                      ? "bg-transparent text-primary border-primary"
                      : "bg-secondary text-foreground border-foreground",
                  )}
                >
                  {batch}
                </button>
              ))}
              <button
                onClick={() => setActiveTeam("Developers")}
                className={cn(
                  "btn-brutalist px-6 py-2 text-base font-medium transition-all",
                  activeTeam === "Developers"
                    ? "bg-transparent text-primary border-primary"
                    : "bg-secondary text-foreground border-foreground",
                )}
              >
                Website Developers
              </button>
            </div>

            {/* Team Members Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTeam}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                {filteredMembers.map((member, idx) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={idx}
                    hasAnimated={hasAnimated}
                    setHasAnimated={setHasAnimated}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredMembers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No team members found for this selection.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

interface TeamMemberCardProps {
  member: any;
  index: number;
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  index,
  hasAnimated,
  setHasAnimated,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(!hasAnimated);

  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHasAnimated(true);
              setShouldAnimate(false);
            }
          });
        },
        { threshold: 0.1 },
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [hasAnimated, setHasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      variants={cardVariants}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <CldImage
          src={member.pfp}
          alt={`Photo of ${member.name}`}
          width={500}
          height={700}
          preserveTransformations
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay - Always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          {/* Backdrop blur container for name and content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            {/* Name and Arrow */}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <Link
                href={member.socials[0]?.url || "#"}
                target="_blank"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                aria-label={`View ${member.name}'s profile`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Position */}
            <p className="text-sm text-gray-300 mb-3 font-medium">
              {member.position
                .map(
                  (pos: string) => pos.charAt(0).toUpperCase() + pos.slice(1),
                )
                .join(", ")}
            </p>

            {/* About - Shows on hover */}
            <div
              className={cn(
                "transition-all duration-500 overflow-hidden",
                isHovered ? "max-h-40 opacity-100 mb-3" : "max-h-0 opacity-0",
              )}
            >
              <p className="text-sm text-gray-200 leading-relaxed line-clamp-4">
                {member.about}
              </p>
            </div>

            {/* Expertise - Shows on hover */}
            {member.expertise && member.expertise.length > 0 && (
              <div
                className={cn(
                  "transition-all duration-500 overflow-hidden",
                  isHovered ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0",
                )}
              >
                <p className="text-xs text-gray-400 line-clamp-2">
                  {member.expertise.join(" • ")}
                </p>
              </div>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {member.socials.map((social: any, idx: number) => (
                <Link
                  key={idx}
                  href={social.url}
                  target="_blank"
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={`${member.name}'s ${social.platform}`}
                >
                  {social.platform === "github" ? (
                    <FaGithub className="w-4 h-4" />
                  ) : (
                    <FaLinkedinIn className="w-4 h-4" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
