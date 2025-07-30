"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Zap, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import AnimatedSection from "@/app/about/components/AnimatedSection"

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
            description: "We embrace curiosity and are excited about new technologies.",
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
    ]
    const stats = [
        { number: "25+", label: "Active Members" },
        { number: "5+", label: "National Hackathon Wins" },
        { number: "30+", label: "Projects Built" },
        { number: "20+", label: "Workshops Yearly" },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center">

            <AnimatedSection>
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="space-y-6">
                                <div className="border border-white rounded-full bg-white/10 w-fit px-4 py-1 mb-4">
                                    About Us
                                </div>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    Empowering Coders at IIIT Vadodara
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-[600px]">
                                    We are a vibrant community of innovative thinkers and passionate builders. Our club brings together students who share a love for programming, technology, and learning.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/auth"
                                        className="active:scale-95 transition-all duration-100 ease-in-out inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium shadow  hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                            <div className="relative pointer-events-none">
                                <Image
                                    src="/poster.jpg"
                                    alt="IIITV Coding Club"
                                    width={800}
                                    height={600}
                                    className="shadow-2xl shadow-black/50 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* stats */}
            <AnimatedSection>
                <section className="py-16 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <AnimatedSection key={index}>
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                        <div className="text-muted-foreground">{stat.label}</div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* mission */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-flow-col lg:auto-cols-max items-center">
                            <div className="flex items-center justify-center">
                                <Image src={"/mission2.png"} width={300} height={300} className="opacity-90 pointer-events-none" alt="mission" />
                            </div>
                            <div className="space-y-6 max-w-4xl text-center md:text-start">
                                <h2 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-7xl">Our Mission</h2>
                                <p className="text-2xl text-muted-foreground">
                                    To create an inclusive environment where every student can code, innovate, and become a leader in technology. We celebrate curiosity, teamwork, and turning ideas into impact.
                                </p>
                                <p className="text-2xl text-muted-foreground">
                                    Our mentorship, competitions, and workshops empower everyone—from beginners to pros.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* vision */}
            <AnimatedSection>
                <section className="py-20 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-flow-col lg:auto-cols-max items-center">
                            <div className="space-y-6 max-w-4xl text-center md:text-start order-2 lg:order-1">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl">Our Vision</h2>
                                <p className="text-2xl text-muted-foreground">
                                    To be a beacon for innovation, nurturing a culture of continuous learning and collaboration that inspires students to shape the technological landscape of tomorrow.
                                </p>
                            </div>
                            <div className="flex items-center justify-center order-1 lg:order-2">
                                <Image src={"/vision.png"} width={300} height={300} className="opacity-90 pointer-events-none" alt="vision" />
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* values */}
            <AnimatedSection>
                <section className="py-20 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                                These principles guide our club and help us achieve more together.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => (
                                <AnimatedSection key={index}>
                                    <Card className="hover:shadow-2xl shadow-black/50 hover:shadow-black text-center p-6 hover:scale-105 transition-all duration-200 shadow-lg">
                                        <CardContent className="space-y-4 p-0">
                                            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                {value.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold">{value.title}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* team */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="container px-4 md:px-6 w-full">
                        <div className="grid gap-10 lg:grid-cols-2 items-center w-full">
                            <div className="space-y-6">
                                <h2 className="text-primary text-4xl font-extrabold tracking-tight sm:text-8xl">Meet Our Team</h2>
                                <p className="text-xl text-muted-foreground">
                                    The core committee and conveners of IIITV Coding Club.
                                </p>
                            </div>
                            <div className="group my-4 max-w-2xl w-full mx-auto shadow-2xl shadow-black/90 rounded-xl">
                                <Link
                                    href="/members" className="border-2 border-transparent hover:border-white  w-full relative flex flex-col items-center justify-center container rounded-xl shadow-lg overflow-hidden cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-105">
                                    <Image src={"/codingTeam.png"} alt="IIITV Coding Club Team" width={600} height={500} className="w-full object-cover h-72 sm:h-96 transition-transform duration-500 " />
                                    <div className="absolute bottom-0  p-2 px-4 bg-white flex flex-row items-center justify-center  text-black w-full">
                                        <p className="text-2xl">
                                            Meet the Team
                                        </p>
                                        <MoveRight className="p-1 w-8 h-8 mt-0.5" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

        </div>
    )
}
