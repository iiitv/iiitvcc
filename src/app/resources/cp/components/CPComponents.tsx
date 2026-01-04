import Link from "next/link";
import { ReactNode } from "react";

export function ResourceCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/10 p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function ResourceSection({ title, children, className = "" }: { title: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <ResourceCard>
        {children}
      </ResourceCard>
    </section>
  );
}

export function ResourceList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {children}
    </ul>
  );
}

export function ResourceItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-2 w-2 min-w-2 rounded-full bg-white" />
      <div className="text-card-foreground w-full">{children}</div>
    </li>
  );
}

export function ResourceLink({ href, children, external = true, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:text-sky-700 dark:hover:text-sky-200 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}

export interface ResourceData {
  title: string;
  url: string;
}

export function WeekSection({ weekNumber, topics, resources, questions, note }: { weekNumber: number, topics: string, resources: ResourceData[], questions: ResourceData[], note?: string }) {
  return (
    <ResourceCard className="mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-center underline">
        Week {weekNumber}
      </h3>

      <div className="mb-6">
        <div className="font-medium mb-2 text-center">Topics:</div>
        <div className="font-bold text-center">
          {topics}
        </div>
      </div>

      {note && (
        <div className="mb-6 rounded-md border border-amber-200/40 bg-amber-50/60 dark:bg-amber-950/30 px-4 py-3">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <span className="font-semibold">Note:</span> {note}
          </p>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-medium mb-3">Resources:</h4>
        <ResourceList>
          {resources.map((res, idx) => (
            <ResourceItem key={idx}>
              <ResourceLink href={res.url}>{res.title}</ResourceLink>
            </ResourceItem>
          ))}
        </ResourceList>
      </div>

      <div>
        <h4 className="font-medium mb-3">Questions:</h4>
        <ResourceList>
          {questions.map((q, idx) => (
            <ResourceItem key={idx}>
              <ResourceLink href={q.url}>{q.title}</ResourceLink>
            </ResourceItem>
          ))}
        </ResourceList>
      </div>
    </ResourceCard>
  );
}
