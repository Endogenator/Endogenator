import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "Generative Coordination — Theory",
  description:
    "The theoretical apparatus: topology, XIK-TS, ETCS, Belief Space, correctors and recruiters, and Generative Coordination itself.",
};

const FRAMEWORK_LINKS = [
  { href: "/frameworks/topology", label: "Topology" },
  { href: "/frameworks/xik-ts", label: "XIK-TS" },
  { href: "/frameworks/etcs", label: "ETCS" },
  { href: "/frameworks/etcs/education-as-a-system", label: "Education as a System" },
  { href: "/frameworks/belief-space", label: "Belief Space" },
  { href: "/frameworks/correctors-recruiters", label: "Correctors & Recruiters" },
  { href: "/frameworks/integration", label: "Integration" },
];

export default function GenerativeSiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="origin-theme">
      <header className="border-b border-[var(--site-clay)]/30">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <a
            href="/"
            className="text-xl font-semibold no-underline"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Generative Coordination
          </a>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {FRAMEWORK_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="/applications/agency-in-the-age-of-ai">
              Agency in the Age of AI
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--site-clay)]/30">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-[var(--site-ink-muted)]">
          <p>
            A moving target on purpose. Some of this is settled, some of it
            is actively still being worked out, marked as such throughout
            rather than hidden. Part of the{" "}
            <a href="https://endogenator.com">endogenator.com</a> project.
          </p>
          <p className="mt-2 text-xs">
            &copy; {year} Brian Davis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}