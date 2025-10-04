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
    <div className="mt-10 flex flex-col items-center">
      <div className={`${alataFont.className} text-4xl underline mb-8`}>
        Resources
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {resources.map((res) => (
          <div
            key={res.title}
            className={`flex flex-col border rounded-lg hover:shadow-lg transition-shadow ${montserratFont.className}`}
          >
            <Image
              src={res.img}
              alt={res.title}
              className="rounded-t-lg w-full h-full object-cover"
              width={400}
              height={400}
            />
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-2xl font-semibold mb-2">{res.title}</h2>
              <p className="text-sm flex-1">{res.desc}</p>
              <Link
                href={res.href}
                className="active:scale-95 transition-all duration-100 ease-in-out inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-lg font-medium shadow mt-4 w-fit"
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
