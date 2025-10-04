import Link from "next/link";

export default function MLResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Machine Learning Resources
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white-foreground">
          Complete roadmap for machine learning and AI, from mathematical foundations to advanced deep learning concepts and practical applications.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Programming Languages:</span>
              <span className="text-sm text-muted-foreground">Python, C++, R, Julia</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="font-medium">Frameworks:</span>
              <span className="text-sm text-muted-foreground">PyTorch, TensorFlow, Caffe</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="font-medium">Libraries:</span>
              <span className="text-sm text-muted-foreground">Pandas, Matplotlib, scikit-learn, OpenCV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Mathematical Foundations</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Probability and Statistics</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                MIT OCW: Linear Algebra
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Beautiful Linear Algebra Visualization by 3Blue1Brown
              </Link>
              <span className="text-sm text-muted-foreground">(Essence of Linear Algebra)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Essential Tools & References</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Python</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Jupyter Notebook</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://scikit-learn.org/stable/user_guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Sklearn Documentation
              </Link>
              <span className="text-sm text-muted-foreground">(Tutorial in itself)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/user/sentdex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Machine Learning by sentdex (YouTube)
              </Link>
              <span className="text-sm text-muted-foreground">(Better than most Udemy courses)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Learning Resources</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Search for any AI/ML topic on Medium</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://towardsdatascience.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Towards Data Science
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <div>Making Computers Smart</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://machinelearningmastery.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Machine Learning Mastery
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.deeplearningbook.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Book on Deep Learning
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Machine Learning Courses</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Build an intuition of Neural Nets by 3Blue1Brown
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.coursera.org/specializations/deep-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Deep Learning Specialization by Andrew Ng (Coursera)
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://course.fast.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Practical Deep Learning for Coders
              </Link>
              <span className="text-sm text-muted-foreground">(Prerequisite: Python)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Intro to TensorFlow for Deep Learning - Udacity
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-white" />
              <Link
                href="https://www.udacity.com/course/deep-learning-pytorch--ud188"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
              >
                Intro to Deep Learning with PyTorch - Udacity
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Practice Platforms & Computing Resources</h2>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="rounded-md border border-green-200/40 bg-green-50/60 dark:bg-green-950/30 px-4 py-3">
              <p className="text-sm text-green-800 dark:text-green-200">
                <span className="font-semibold">Tip:</span> If your machine is not powerful enough, use cloud platforms with free GPU/TPU access
              </p>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://colab.research.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Google Colab
                </Link>
                <span className="text-sm text-muted-foreground">(Free GPU, TPU, storage)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.kaggle.com/code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Kaggle Notebooks
                </Link>
                <span className="text-sm text-muted-foreground">(GPU, TPU, preinstalled dependencies)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <Link
                  href="https://www.kaggle.com/datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline"
                >
                  Practice ML/DL using Datasets on Kaggle
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                <div>
                  Access to IIITV's "Param Shavak" supercomputer with GPU accelerators{' '}
                  <span className="text-sm text-muted-foreground">(read specs for details)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        Start with the fundamentals, practice on real datasets, and gradually build more complex projects!
      </footer>
    </div>
  );
}