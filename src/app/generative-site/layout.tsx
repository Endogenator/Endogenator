import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: {
    default: "Generative Coordination | Brian Davis",
    template: "%s | Generative Coordination",
  },
  description:
    "Coordination that expands what we can collectively reach. A theory of why belief and action come apart.",
};

const THEORY_LINKS = [
  { href: "/frameworks/topology", label: "Topology" },
  { href: "/frameworks/belief-space", label: "Belief Space" },
  { href: "/frameworks/belief-to-knowledge", label: "Belief to Knowledge" },
  { href: "/frameworks/correctors-recruiters", label: "Correctors & Recruiters" },
];

const APPLICATION_LINKS = [
  { href: "/applications/education", label: "Education" },
  { href: "/applications/agency-in-the-age-of-ai", label: "Agency in the Age of AI" },
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
          <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
            {THEORY_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <span className="text-xs uppercase tracking-widest text-[var(--site-clay)]">
              Applications
            </span>
            {APPLICATION_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--site-clay)]/30">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-[var(--site-ink-muted)]">
          <p>
            A moving target on purpose. Some of this is settled and some
            is still being worked out. Part of the{" "}
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