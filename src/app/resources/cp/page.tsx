import Link from "next/link";
import {
  ResourceCard,
  ResourceItem,
  ResourceLink,
  ResourceList,
  ResourceSection,
  WeekSection,
} from "./components/CPComponents";
import {
  afterInitMainsLinks,
  initMainsLinks,
  winterOfCodeWeeks,
} from "./data";

export default function CPStaticResources() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Competitive Programming: Ramp-up
        </h1>
        <p className="mt-3 text-sm sm:text-base texwhite-foreground">
          This is to give you a ramp up towards CP from scratch and platforms
          for <code>init_mains()</code>. More resources for advanced level will
          be provided for Winter of Code after <code>init_mains()</code>.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">init_mains()</h2>
        <ResourceCard>
          <div className="space-y-4 text-base">
            <div className="flex flex-col gap-1">
              <span className="font-medium">
                Language — <span>C++</span> (preferred)
              </span>
              <ResourceList>
                <ResourceItem>
                  <ResourceLink href="https://usaco.guide/general/choosing-lang#can-i-pass-every-problem-in-every-language">
                    Why?
                  </ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <div className="inline-flex items-center gap-2">
                    <ResourceLink href="https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL">
                      Code With Harry
                    </ResourceLink>
                    <span className="text-sm text-muted-foreground">
                      (watch lectures 1–19)
                    </span>
                  </div>
                </ResourceItem>
              </ResourceList>
            </div>

            {/* Note callout */}
            <div className="rounded-md border border-amber-200/40 bg-amber-50/60 dark:bg-amber-950/30 px-4 py-3">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <span className="font-semibold">Note:</span> Don't waste much
                time learning the language and getting into tiny details.
              </p>
            </div>

            {/* Links */}
            <ResourceList>
              {initMainsLinks.map((link, idx) => (
                <ResourceItem key={idx}>
                  <ResourceLink href={link.url}>{link.title}</ResourceLink>
                </ResourceItem>
              ))}
              <ResourceItem>
                <div className="text-card-foreground">
                  Solve questions on{" "}
                  <ResourceLink href="https://vjudge.net/group/road-to-init-mains?r=9egW7lTmVRevLskbSKMX">
                    VJudge
                  </ResourceLink>{" "}
                  for Road To init_mains().
                </div>
              </ResourceItem>
            </ResourceList>
          </div>
        </ResourceCard>
      </section>

      <ResourceSection title={<span>After <code>init_mains()</code></span>}>
        <ResourceList>
          {afterInitMainsLinks.map((link, idx) => (
            <ResourceItem key={idx}>
              <ResourceLink href={link.url}>{link.title}</ResourceLink>
            </ResourceItem>
          ))}
        </ResourceList>
      </ResourceSection>

      <ResourceSection title={<span>What after <code>init_mains()</code>?</span>}>
        <ResourceList>
          <ResourceItem>
            <div>
              We will start with Winter of Code in December. Its Resources
              will be shared here soon!
            </div>
          </ResourceItem>
          
          <div className="pt-2 pb-1 font-semibold text-lg">But if you want to get started earlier, you can:</div>
          
          <ResourceItem>
            <div>
              For CP, start following the USACO Guide (it’s good):
              <ResourceList className="mt-1 pl-4">
                <ResourceItem>
                  <ResourceLink href="https://usaco.guide/bronze/">Bronze</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="https://usaco.guide/silver/">Silver</ResourceLink>
                </ResourceItem>
              </ResourceList>
            </div>
          </ResourceItem>

          <ResourceItem>
            <div>
              Start giving div3/div4 contests on Codeforces; after progress,
              start div2 as well.{" "}
              <ResourceLink href="https://codeforces.com">codeforces.com</ResourceLink>
            </div>
          </ResourceItem>

          <ResourceItem>
            <div>
              Practice from the{" "}
              <ResourceLink href="https://www.tle-eliminators.com/cp-sheet">
                TLE Eliminator's CP-31 sheet
              </ResourceLink>
              <span>
                {" "}(Follow it for question practice. It has very nice set of
                questions).
              </span>
            </div>
          </ResourceItem>

          <ResourceItem>
            <div>
              You can refer to Striver A2Z for DSA:{" "}
              <ResourceLink href="https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=9tT0xzA6N4hANGjw">
                Striver A2Z Playlist
              </ResourceLink>
            </div>
          </ResourceItem>
          
          <ResourceItem>
            <div>
              Practice from the TLE sheet and start giving regular contests.
            </div>
          </ResourceItem>
        </ResourceList>
      </ResourceSection>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Winter of Code</h2>
        {winterOfCodeWeeks.map((week) => (
          <WeekSection
            key={week.weekNumber}
            weekNumber={week.weekNumber}
            topics={week.topics}
            resources={week.resources}
            questions={week.questions}
          />
        ))}
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
        More resources will follow for Winter of Code. Look out here!
      </footer>
    </div>
  );
}
