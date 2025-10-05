import Link from "next/link";

export default function AndroidResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Android Development Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Complete guide for Android app development including native
          development with Kotlin/Java and cross-platform development with
          Flutter.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">For Native Development:</span>
                <div className="text-sm text-muted-foreground">
                  Kotlin/Java and XML -{" "}
                  <Link
                    href="https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                  >
                    Code with Harry
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">For Cross-Platform:</span>
                <span className="text-sm text-muted-foreground">
                  JavaScript/Dart
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Object Oriented Programming</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Familiarity with Android Studio</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Native Android Development
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Primary Technologies:</span>
              <span className="text-sm text-muted-foreground">
                Kotlin, Java, XML, Android Studio
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Udacity course - Android Apps with Kotlin
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Tracks from Android Study Jam</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://developer.android.com/codelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Google Codelab - Kotlin
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Get a taste of working with Kotlin)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Cross-Platform Development with Flutter
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Primary Technology:</span>
              <span className="text-sm text-muted-foreground">
                Dart, Flutter Framework
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Udemy course - Android Apps with Flutter
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Google Codelab - Flutter
                </Link>
                <span className="text-sm text-muted-foreground">
                  (Get a taste of working with Flutter)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Flutter-Specific Resources
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Widget of the Week series - YouTube
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/c/GoogleDevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Official Google Developers channel - YouTube
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/c/Fireship"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Fireship.io channel - YouTube
              </Link>
              <span className="text-sm text-muted-foreground">
                (Quality content for individual concepts)
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Development Environment Setup
        </h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Android Studio:</span> Official
                IDE for Android development
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Flutter SDK:</span> For
                cross-platform development
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>
                <span className="font-medium">Emulator/Physical Device:</span>{" "}
                For testing applications
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Best Practices & Tips</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="rounded-md border border-blue-200/40 bg-blue-50/60 dark:bg-blue-950/30 px-4 py-3">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <span className="font-semibold">Resources for Help:</span>{" "}
                Official documentation and StackOverflow are invaluable for
                understanding concepts and troubleshooting.
              </p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Start with simple projects and gradually increase complexity
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Focus on understanding Android architecture and lifecycle
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Practice with different UI components and layouts</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>Learn about data persistence and API integration</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Test your apps on different screen sizes and Android versions
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Official Documentation</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://developer.android.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Android Developers Official Documentation
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://flutter.dev/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Flutter Official Documentation
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://kotlinlang.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Kotlin Documentation
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://dart.dev/guides"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Dart Language Guide
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Start building small apps and gradually work your way up to more complex
        projects. The key is consistent practice!
      </footer>
    </div>
  );
}
