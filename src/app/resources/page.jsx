import Link from "next/link";
import Image from "next/image";
import { Montserrat, Alata } from "next/font/google";

const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});

const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });

function Resources() {
  const resources = [
    {
      title: "Competitive Programming",
      desc: "Practice problems, tutorials, and resources to sharpen your algorithmic skills.",
      href: "/resources/cp",
      img: "/cp.png",
    },
    {
      title: "Web Development",
      desc: "Full-stack projects, frameworks, and guides for building web applications.",
      href: "/resources/web-dev",
      img: "/web-dev.png",
    },
    {
      title: "Development & Tools",
      desc: "Essential programming resources, student tools, and development environments.",
      href: "/resources/development",
      img: "/tools.png",
    },
    {
      title: "Machine Learning",
      desc: "AI/ML frameworks, courses, and practical resources for data science and deep learning.",
      href: "/resources/ml",
      img: "/ml.png",
    },
    {
      title: "Android Development",
      desc: "Native and cross-platform mobile app development with Kotlin, Java, and Flutter.",
      href: "/resources/android",
      img: "/android.png",
    },
    {
      title: "Blockchain Development",
      desc: "Smart contracts, DApps, and decentralized application development resources.",
      href: "/resources/blockchain",
      img: "/blockchain.png",
    },
    {
      title: "UI/UX Design",
      desc: "Design tools, inspiration platforms, and resources for creating beautiful user experiences.",
      href: "/resources/uiux",
      img: "/uiux.png",
    },
  ];

  return (
    <div className="mt-6 sm:mt-10 flex flex-col items-center px-4">
      <div
        className={`${alataFont.className} text-2xl sm:text-3xl md:text-4xl underline mb-6 sm:mb-8 text-center`}
      >
        Resources
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4 sm:px-6">
        {resources.map((res) => (
          <div
            key={res.title}
            className={`flex flex-col border rounded-lg hover:shadow-lg transition-shadow h-full ${montserratFont.className}`}
          >
            <div className="relative w-full h-48 sm:h-40 md:h-48">
              <Image
                src={res.img}
                alt={res.title}
                className="rounded-t-lg object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                {res.title}
              </h2>
              <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
                {res.desc}
              </p>
              <Link
                href={res.href}
                className="active:scale-95 transition-all duration-100 ease-in-out inline-flex h-9 sm:h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 sm:px-8 text-sm sm:text-base font-medium shadow w-full sm:w-fit"
                prefetch={false}
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
