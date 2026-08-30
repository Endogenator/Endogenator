import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "endogenator.com — Origin Story",
  description:
    "The word, the diagnosis, and where the theoretical work lives.",
};

export default function RootSiteLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="origin-theme">
      <header className="border-b border-[var(--site-clay)]/30">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
          <span
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            endogenator
          </span>
          <nav className="flex gap-5 text-sm">
            <a href="https://generative.endogenator.com">Generative</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--site-clay)]/30">
        <div className="mx-auto max-w-2xl px-6 py-8 text-sm text-[var(--site-ink-muted)]">
          <p>
            endogenator.com, a moving target on purpose. Come back and see
            where it&apos;s gone.
          </p>
          <p className="mt-2 text-xs">
            &copy; {year} Brian Davis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}