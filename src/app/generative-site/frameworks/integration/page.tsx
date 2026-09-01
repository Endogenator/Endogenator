import type { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative pl-8 md:pl-10">
      <span
        className="growth-marker absolute left-[-5px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--site-sand)] md:left-[calc(1px-6px)]"
        style={{ backgroundColor: "var(--site-rust)" }}
        aria-hidden="true"
      />
      <h2
        className="mb-3 text-2xl font-medium"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[1.05rem] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function IntegrationPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="relative">
        <div
          className="growth-rail absolute left-[3px] top-2 hidden w-px md:block"
          style={{ bottom: "2.5rem" }}
          aria-hidden="true"
        />

        <p
          className="mb-2 pl-8 text-xs font-medium uppercase tracking-widest text-[var(--site-clay)] md:pl-10"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Framework
        </p>
        <h1
          className="mb-2 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Integration
        </h1>

        <div className="space-y-14">
          <Section title="The seam, stated plainly">
            <p>
              <strong>Topology</strong> is the space itself, Possibility
              Space, Belief Space, Transformation Space, Aggregated
              Reality, nested domains rather than categories, with
              permeability as the mechanism governing what crosses between
              them.
            </p>
            <p>
              <strong>Belief Space</strong> is where reference frames live,
              the aggregate of every conceived mapping of qualia to
              substrate across humanity, and where most of human life is
              actually spent, unenacted, untested, which is why errors
              built into a reference frame can persist there indefinitely.
            </p>
            <p>
              <strong>XIK-TS</strong> is what happens inside a single mind
              once something has crossed into it, the Belief-to-Knowledge
              threshold specifically, mixture held by maintenance versus
              compound that no longer needs it.
            </p>
            <p>
              <strong>ETCS</strong> is the same process, institutionalized,
              run at scale, education specifically, where recruiting a
              shared coordination target comes naturally to an institution
              and correcting that target against substrate does not.
            </p>
            <p>
              <strong>Correctors and Recruiters</strong> names the two
              mechanisms that actually move something through this whole
              space, recruiting as permeability widening at scale,
              correcting as the event, genuine substrate contact, that
              converts belief into knowledge, and explains why the two
              scale so differently in practice.
            </p>
            <p>None of that gets re-argued here. Each page carries its own weight now.</p>
          </Section>

          <Section title="What all five are in service of">
            <p>
              Generative Coordination is the thing this entire architecture
              has been building toward, coordination that expands what&apos;s
              collectively reachable rather than reproducing what already
              holds. Every page above is either part of the space that
              coordination moves through, or part of the mechanism by
              which it moves. Topology and Belief Space describe the
              terrain. XIK-TS and ETCS describe what happens to belief as
              it crosses that terrain, individually and institutionally.
              Correctors and Recruiters describe the two forces that
              actually do the moving. Generative Coordination is what it
              looks like when recruiting and correcting operate together,
              deliberately, rather than recruiting quietly outrunning
              correcting by default, which is the more common failure this
              architecture keeps finding wherever it looks closely.
            </p>
            <p>
              This page is the map showing how the other five fit
              together. The argument for why that fit matters lives on the
              page that comes next.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}