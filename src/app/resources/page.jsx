import Link from "next/link";
import Image from "next/image";

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
    <div className="w-full flex justify-center mt-8 mb-16">
      <div className="w-[90%] flex flex-col px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">Resources</h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Curated collection of tutorials, tools, and learning materials to
            help you master various technologies and advance your skills
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group bg-secondary rounded-2xl shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden border border-border hover:border-primary/50 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={resource.img}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                  {resource.desc}
                </p>

                {/* Explore Button */}
                <Link
                  href={resource.href}
                  className="btn-brutalist text-base bg-transparent text-primary border-primary w-full justify-center"
                  prefetch={false}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Can't find what you're looking for?{" "}
            <Link
              href="/contact_us"
              className="text-primary hover:underline font-medium"
            >
              Let us know
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
