import Link from "next/link";

export default function UIUXResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          UI/UX Design Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Comprehensive guide for User Interface and User Experience design,
          from fundamentals to advanced design principles and tools.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Design Fundamentals</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Color Theory:</span> Understanding
                color psychology and harmony
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Typography:</span> Font selection,
                hierarchy, and readability
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Layout & Composition:</span> Grid
                systems, spacing, and visual hierarchy
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">User Research:</span>{" "}
                Understanding user needs and behaviors
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Usability Principles:</span>{" "}
                Accessibility, intuitiveness, and efficiency
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Design Tools</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">UI Design Tools</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Figma
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    (Free, collaborative)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.sketch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Sketch
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    (Mac only)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.adobe.com/products/xd.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Adobe XD
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.canva.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Canva
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    (Beginner-friendly)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Prototyping Tools</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.invisionapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    InVision
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://marvelapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Marvel
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.framer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Framer
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.principle.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Principle
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Image & Icon Resources</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.adobe.com/products/photoshop.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Adobe Photoshop
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.adobe.com/products/illustrator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Adobe Illustrator
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.gimp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    GIMP
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    (Free alternative)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Inspiration & Examples</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="rounded-md border border-green-200/40 bg-green-50/60 dark:bg-green-950/30 px-4 py-3">
              <p className="text-sm text-green-800 dark:text-green-200">
                <span className="font-semibold">Recommended:</span> Visit these
                platforms regularly for design inspiration and to stay updated
                with current design trends.
              </p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://codepen.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  CodePen
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Code examples and interactive designs)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Dribbble
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Design inspiration and trends)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Behance
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Portfolio showcase)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.awwwards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Awwwards
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Award-winning web design)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Pinterest
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Visual inspiration boards)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.designspiration.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Designspiration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Learning Resources</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.interaction-design.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Interaction Design Foundation
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.coursera.org/specializations/ui-ux-design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Google UX Design Professional Certificate - Coursera
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.udemy.com/topic/user-experience-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                UX Design Courses - Udemy
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/user/DevTipsForDesigners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                DevTips - YouTube
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/c/AJSmartOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-components gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                AJ&Smart - YouTube
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Free Resources & Assets</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Icons & Graphics</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://feathericons.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Feather Icons
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://heroicons.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Hero Icons
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.flaticon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Flaticon
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://undraw.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    unDraw
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    (Illustrations)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Images & Photos</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://unsplash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Unsplash
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.pexels.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Pexels
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://pixabay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Pixabay
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Fonts</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://fonts.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Google Fonts
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.dafont.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    DaFont
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://fonts.adobe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Adobe Fonts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Design Process</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">1. Research:</span> Understand
                users, competitors, and requirements
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">2. Ideation:</span> Brainstorm and
                sketch initial concepts
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">3. Wireframing:</span> Create
                low-fidelity structural layouts
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">4. Prototyping:</span> Build
                interactive mockups
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">5. Testing:</span> Validate design
                with users
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">6. Iteration:</span> Refine based
                on feedback
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Great design comes with practice and continuous learning. Start with
        simple projects and build a diverse portfolio!
      </footer>
    </div>
  );
}
