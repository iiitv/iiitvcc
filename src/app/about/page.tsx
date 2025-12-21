"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Zap, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "@/app/about/components/AnimatedSection";

export default function About() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Learning Together",
      description: "We grow by sharing knowledge and challenging each other.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Passion for Tech",
      description:
        "We embrace curiosity and are excited about new technologies.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community First",
      description: "Teamwork, inclusivity, and empathy guide everything we do.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Building for Impact",
      description: "Turn ideas into reality and create real-world solutions.",
    },
  ];
  const stats = [
    { number: "25+", label: "Active Members" },
    { number: "5+", label: "National Hackathon Wins" },
    { number: "30+", label: "Projects Built" },
    { number: "20+", label: "Workshops" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative min-h-[90dvh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 w-full">
          <div className="w-[85%] mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="border border-white rounded-full bg-white/10 w-fit px-4 py-1.5 text-sm font-medium">
                  About Us
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                  Empowering Coders at IIIT Vadodara
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  We are a vibrant community of innovative thinkers and
                  passionate builders. Our club brings together students who
                  share a love for programming, technology, and learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/auth"
                    className="btn-brutalist h-10 bg-transparent text-primary border-primary text-base"
                    prefetch={false}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
              <div className="relative pointer-events-none">
                <Image
                  src="/IIITV_Home_poster.png"
                  alt="IIITV Coding Club"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-muted/50 w-full">
          <div className="w-[85%] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-32 items-center justify-items-center">
              {stats.map((stat, index) => (
                <AnimatedSection key={index}>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-6xl lg:text-7xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection>
        <section className="py-10 w-full">
          <div className="w-[85%] mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex w-full lg:w-[50%] items-center justify-center">
                <Image
                  src={"/mission2.png"}
                  width={500}
                  height={500}
                  quality={100}
                  className="pointer-events-none"
                  alt="mission"
                />
              </div>
              <div className="space-y-6 w-full lg:w-[50%] text-center lg:text-start">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  To create an inclusive environment where every student can
                  code, innovate, and become a leader in technology. We
                  celebrate curiosity, teamwork, and turning ideas into impact.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  Our mentorship, competitions, and workshops empower everyone -
                  from beginners to pros.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection>
        <section className="py-10 w-full">
          <div className="w-[85%] mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="space-y-6 w-full lg:w-[60%] text-center lg:text-start order-2 lg:order-1">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
                  Our Vision
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  To be a beacon for innovation, nurturing a culture of
                  continuous learning and collaboration that inspires students
                  to shape the technological landscape of tomorrow.
                </p>
              </div>
              <div className="flex w-full lg:w-[40%] items-center justify-center order-1 lg:order-2">
                <Image
                  src={"/vision.png"}
                  width={500}
                  height={500}
                  quality={100}
                  className="pointer-events-none"
                  alt="vision"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection>
        <section className="py-20 w-full">
          <div className="w-[85%]  mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
                Our Values
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto">
                These principles guide our club and help us achieve more
                together.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <AnimatedSection key={index}>
                  <Card className="hover:shadow-2xl shadow-black/50 hover:shadow-black text-center p-6 hover:scale-105 transition-all duration-200 shadow-lg h-full">
                    <CardContent className="space-y-4 p-0">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-base text-muted-foreground leading-snug">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <section className="pt-20 pb-40 w-full">
          <div className="w-full mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6 text-center lg:text-start">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-primary">
                  Meet Our Team
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  The core committee and conveners of IIITV Coding Club.
                </p>
                <Link
                  href="/members"
                  className="btn-brutalist h-10 bg-transparent text-primary border-primary text-base inline-flex"
                >
                  View All Members
                  <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="group max-w-2xl w-full mx-auto shadow-2xl shadow-black/90 rounded-xl">
                <Link
                  href="/members"
                  className="border-2 border-transparent hover:border-white w-full relative flex flex-col items-center justify-center rounded-xl shadow-lg overflow-hidden cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-105"
                >
                  <Image
                    src={"/codingTeam.png"}
                    alt="IIITV Coding Club Team"
                    width={600}
                    height={500}
                    className="w-full object-cover h-72 sm:h-96 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 p-3 px-4 bg-white flex flex-row items-center justify-center text-black w-full">
                    <p className="text-lg font-bold">Meet the Team</p>
                    <MoveRight className="ml-2 h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
