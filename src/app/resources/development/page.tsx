import Link from "next/link";

export default function DevelopmentResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Development Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Comprehensive resources for learning computer science, programming languages, tools, and development environments.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Free CS Education</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://github.com/ossu/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                OSSU - Computer Science
              </Link>
              <span className="text-sm text-muted-foreground">(Free self-taught education in CS/IT)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://learnxinyminutes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Learn X in Y minutes
              </Link>
              <span className="text-sm text-muted-foreground">(Quick dive into programming languages)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://roadmap.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Developer Roadmaps
              </Link>
              <span className="text-sm text-muted-foreground">(All development roadmaps)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Student Tools & Benefits</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="rounded-md border border-blue-200/40 bg-blue-50/60 dark:bg-blue-950/30 px-4 py-3 mb-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <span className="font-semibold">Note:</span> Use your Institute ID for all the resources listed below
            </p>
          </div>
          
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                GitHub Education Pack
              </Link>
              <span className="text-sm text-muted-foreground">(Free access to many development tools)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.coursera.org/campus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Coursera for Campus
              </Link>
              <span className="text-sm text-muted-foreground">(Free online learning for university students)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://visualstudio.microsoft.com/dev-essentials/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Microsoft Visual Studio Dev Essentials
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://aws.amazon.com/education/awseducate/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                AWS Educate
              </Link>
              <span className="text-sm text-muted-foreground">(Credits, training, and tools)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.jetbrains.com/community/education/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                JetBrains Student License
              </Link>
              <span className="text-sm text-muted-foreground">(All JetBrains IDEs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://unity.com/products/unity-teach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Unity 3D Education
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.microsoft.com/en-us/education/products/office"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Microsoft Office 365 Education
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.ibm.com/academic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                IBM Student Dev Community
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.mathworks.com/academia/tah-support-program/eligibility.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                MATLAB and Simulink
              </Link>
              <span className="text-sm text-muted-foreground">(Campus license)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Code Editors & IDEs</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Offline Code Editors (For normal people)</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>VSCode</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Atom</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Sublime Text</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Jupyter Lab/Notebook (for Python)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Notepad++ (Windows-only)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>GNU Nano (for CLI)</div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Online Code Editors/IDEs</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://replit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Repl.it
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://ideone.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Ideone
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://codesandbox.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    CodeSandbox
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://github.com/features/codespaces"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    GitHub Codespaces
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.onlinegdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Online GDB
                  </Link>
                  <span className="text-sm text-muted-foreground">(for C/C++)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://dartpad.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    DartPad
                  </Link>
                  <span className="text-sm text-muted-foreground">(for Dart)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>
                    <Link
                      href="https://colab.research.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                    >
                      Google Colab
                    </Link>
                    {' / '}
                    <Link
                      href="https://www.kaggle.com/code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                    >
                      Kaggle Kernels
                    </Link>
                    <span className="text-sm text-muted-foreground block">(for Python, ML/AI/Data Science)</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Pro Developer Editors</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>
                    Vim (Enhanced: 
                    <Link
                      href="https://neovim.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline ml-1"
                    >
                      Neovim
                    </Link>)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Emacs</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Essential Skills</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Version Control with Git</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://www.udacity.com/course/version-control-with-git--ud123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Version Control with Git - Udacity
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://docs.github.com/en/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Master Git and Github - GitHub Docs
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://learngitbranching.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Learn Git Branching
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://gitexplorer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Git Explorer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Command Line Environment</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Windows Command Prompt in 15 Minutes</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>The Linux Command Line</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Mac OSX CLI short introduction</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <Link
                    href="https://missing.csail.mit.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    MIT's Missing Semester of CS Education
                  </Link>
                  <span className="text-sm text-muted-foreground">(very interesting!)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Core CS Concepts</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Object-Oriented Programming (OOP): 
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline ml-1"
                    >
                      OOPs in C++
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  <div>Database Management System (DBMS): 
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline ml-1"
                    >
                      DBMS Concepts
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Community & Networking</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                Subscribe to mailing list by Avi Aryan: {' '}
                <Link
                  href="https://aviaryan.com/letters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  https://aviaryan.com/letters
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Join LinkedIn group of IIITV alums</div>
            </li>
          </ul>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Remember: Consistent practice and building projects is key to becoming a successful developer!
      </footer>
    </div>
  );
}