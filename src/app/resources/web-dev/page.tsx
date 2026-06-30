import Link from "next/link";

export default function WebDevResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Web Development Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Complete roadmap for web development from basics to advanced topics
          including frontend, backend, and full-stack development.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                How the Web works - MDN
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                Languages:{" "}
                <span className="font-medium">HTML, CSS, JavaScript</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">HTML & CSS Fundamentals</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://internetingishard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Interneting Is Hard - HTML & CSS Tutorials
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="http://www.dontfeartheinternet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Don't Fear the Internet
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.freecodecamp.org/learn/responsive-web-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Learn HTML5 and CSS3 From Scratch - FreeCodeCamp
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">JavaScript</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://javascript.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                The Modern JavaScript Tutorial
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                Complete this before moving ahead:{" "}
                <Link
                  href="https://javascript30.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  JavaScript 30 — Build 30 things with vanilla JS
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Frontend Development</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Frameworks & Libraries:</span>
              <span className="text-sm text-muted-foreground">
                React, Angular, Vue, Bootstrap
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://roadmap.sh/frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Frontend Developer Roadmap
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  React Course by Maximilian Schwarzmüller - Udemy
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://frontendmasters.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Frontend Masters
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Use GitHub Student Education Pack)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.coursera.org/learn/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Interactivity with JavaScript - University of Michigan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Backend Development</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Technologies:</span>
              <span className="text-sm text-muted-foreground">
                NodeJS, Django, GoLang, Flask
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://docs.djangoproject.com/en/stable/intro/tutorial01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Getting started with Django
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udemy.com/course/django-python-advanced/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  DRF Tutorial: Build a Backend REST API with Python & Django -
                  Udemy
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udemy.com/course/python-django-the-practical-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Django Tutorial: Python Django - The Practical Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Comprehensive Courses</h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://cs50.harvard.edu/web/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                CS50 Web (Harvard)
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                For Udemy coupons, visit:{" "}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Online Courses
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Helpful YouTube Channels
        </h2>
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                Wes Bos, thenewboston, Net Ninja, Coding Entrepreneurs, Corey
                Schafer
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Keep practicing and building projects to strengthen your web development
        skills!
      </footer>
    </div>
  );
}
