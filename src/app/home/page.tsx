import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-primary flex item-center justify-center bg-cover bg-center bg-[url('/home/homebg.jpeg')] after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:-z-0 after:bg-[rgba(0,0,0,.6)] ">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-20">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Welcome to the Coding Club
          </h1>
          <p className="max-w-[700px] md:text-xl">
            Join our vibrant community of passionate coders and unlock a world of learning, collaboration, and growth.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Join Now
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex item-center justify-center">
        <div className="container px-4 md:px-6 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our upcoming events and workshops to learn new skills, network with fellow coders, and have
                fun!
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Intro to React Workshop</CardTitle>
                <CardDescription>Learn the fundamentals of React.js in this hands-on workshop.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">June 15, 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">6:00 PM - 8:00 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Hackathon: Build a Web App</CardTitle>
                <CardDescription>Join our 24-hour hackathon and build a web application from scratch.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">July 20-21, 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">9:00 AM - 9:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Intro to Data Structures</CardTitle>
                <CardDescription>Dive into the fundamentals of data structures and algorithms.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">August 5, 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">7:00 PM - 9:00 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex item-center justify-center">
        <div className="container px-4 md:px-6 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-5xl">Club Resources</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of tutorials, projects, and other resources to help you grow as a coder.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Tutorials</CardTitle>
                <CardDescription>Learn new technologies and programming languages.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Intro to JavaScript</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn the fundamentals of JavaScript, the most popular programming language for the web.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">React.js for Beginners</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Get started with React, a popular JavaScript library for building user interfaces.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Python for Data Analysis</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Explore the power of Python for data manipulation, visualization, and machine learning.
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Build real-world applications to showcase your skills.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Todo List App</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Build a simple todo list application using HTML, CSS, and JavaScript.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Weather App</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Create a weather application that fetches data from a weather API.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">E-commerce Website</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Build a full-stack e-commerce website with a shopping cart and checkout process.
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with fellow coders and get support from the community.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Discord Server</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Join our vibrant Discord server to chat, ask questions, and collaborate with other members.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Meetups</div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Attend our local and virtual meetups to network, learn, and share your projects.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function CalendarIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function XIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}