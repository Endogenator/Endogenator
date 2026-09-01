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

export default function GenerativeCoordinationPage() {
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
          The Thesis
        </p>
        <h1
          className="mb-2 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Generative Coordination
        </h1>

        <div className="space-y-14">
          <Section title="Coordination is what we're built for">
            <p>
              Humans are social animals. Coordination isn&apos;t one thing
              we do among others. It&apos;s the point. Conceiving a goal
              and working together toward it is what the species is built
              for. Stonehenge, cities, language itself, all of it runs on
              coordination first.
            </p>
            <p>
              But coordination alone isn&apos;t the goal. To tackle the
              hard problems, humans need something more. It needs to be
              generative.
            </p>
          </Section>

          <Section title="The definition">
            <p>
              Generative Coordination is coordination that expands what&apos;s
              collectively reachable, not coordination that reproduces an
              existing configuration. That&apos;s the whole claim, and it
              doubles as a test. Take any instance of people coordinating
              around a belief, a target, an institution. Ask whether
              it&apos;s moving the aggregate toward a point with real
              density in Belief Space and Possibility Space that
              hasn&apos;t been enacted yet, or whether it&apos;s defending
              a position already held. The first is generative. The
              second, however large or successful, is not.
            </p>
          </Section>

          <Section title="Where this actually came from">
            <p>
              For most of my life I&apos;ve been bothered by the gap
              between what people profess to believe and the actions they
              actually take when it counts. At different points I found
              myself thinking the only lever big enough to close that gap
              was something like founding a religion. Nothing smaller
              seemed big enough. That impulse wasn&apos;t wrong about the
              size of the problem. It was aimed at the wrong tool.
            </p>
            <p>
              Generative Coordination is the answer that came instead. Not
              a new institution to organize belief, but a theory of why
              belief and action come apart, and what has to be true for
              them to stay together. Everything else on this site,
              Topology, Belief Space, XIK-TS, ETCS, Correctors and
              Recruiters, was built to explain the mechanism this page
              names directly. This isn&apos;t a fifth framework alongside
              the others. It&apos;s what they were all in service of, even
              though that wasn&apos;t obvious while each one was being
              built.
            </p>
          </Section>

          <Section title="The mechanism">
            <p>
              Recruiting and correcting, working together, are the actual
              mechanism. Recruiting widens permeability at scale, more
              minds becoming open to a given region of Belief Space at
              once. Correcting is genuine substrate contact strong enough
              to force a reaction, converting belief into knowledge
              instead of letting it persist as an unreacted mixture.
            </p>
            <p>
              Recruiting scales easily. Correcting doesn&apos;t, it&apos;s
              structurally a per-mind event. That asymmetry is why the
              default failure mode isn&apos;t rare, it&apos;s the norm:
              institutions and movements recruit at enormous scale while
              their correcting mechanism, whatever would catch a target
              that&apos;s drifted from what it claims, quietly weakens the
              larger and more self-sustaining they become. Generative
              Coordination is the condition where that doesn&apos;t happen,
              where correcting is kept deliberately strong enough to match
              however far recruiting has spread.
            </p>
          </Section>

          <Section title="The clearest historical test case">
            <p>
              Religion is the sharpest available example. The scale it
              operates at has no real peer in human history, coordination
              sustained across generations who would never see the outcome
              or verify the claim that organized their labor.
              Stonehenge&apos;s construction and alteration ran somewhere
              between 800 and 1,400 years, from the first earthwork
              enclosure through the final Bronze Age additions to the
              stones (English Heritage, n.d.). Whoever laid the first
              timber posts never saw the monument in anything like its
              later form. They held the target in Belief Space, conceived
              and motivating, never checked against their own enacted
              experience.
            </p>
            <p>
              Religion earns its reputation as both the great organizer
              and the great corruptor because both are the same mechanism,
              not two separate effects. What let belief spread and
              stabilize across centuries of people who&apos;d never verify
              it is exactly what let false substrate claims spread and
              stabilize with equal durability. Recruiters don&apos;t
              discriminate between a true target and a false one. Only
              correctors do. Large-scale religious coordination
              structurally suppresses correctors once it succeeds,
              orthodoxy defending itself against exactly the kind of
              contact that would test it.
            </p>
            <p>
              The precise failure isn&apos;t holding an unverifiable
              belief. Honest belief that knows itself as belief, openly
              inhabiting an unresolved question, is a legitimate way to
              coordinate around something not yet settled. The failure is
              claiming certainty a belief hasn&apos;t earned, to protect
              the coordination that depends on people believing it&apos;s
              certain. That belief holds on not because it&apos;s been
              tested and passed, but because it&apos;s been anchored to
              identity, and identity protects what it&apos;s anchored to.
            </p>
            <p>
              The same coordination event can be generative in one domain
              while failing in another, at the same time, inside the same
              institution. Stonehenge and the pyramids required real
              engineering and real astronomy, genuine advancement,
              tethered to substrate. The cosmological claims that
              organized the labor were never tested the same way. Whether
              a coordination system counts as generative isn&apos;t a
              single verdict on the whole institution. It has to be
              assessed domain by domain. Correctors can be fully intact in
              one region of what an institution does while completely
              absent in another.
            </p>
          </Section>

          <Section title="What it looks like when it's working">
            <p>
              A Pareto-optimized form of society is a useful test case
              because it&apos;s not yet real. It has genuine density in
              Belief Space, it&apos;s been conceived, and genuine density
              in Possibility Space, nothing in physics forbids it, while
              having almost no density in Aggregated Reality, almost no
              one is actually living it. That gap, conceivable and
              constructible but unenacted, is exactly the shape Generative
              Coordination is meant to close. Closing it well means
              recruiting enough people toward that point that enactment
              catches up, without losing the tethering that keeps the
              target honest. Closing it badly means recruiting outrunning
              correcting, the same failure that already has a long history
              behind it.
            </p>
          </Section>

          <Section title="What's still genuinely open">
            <p>
              The formal distance metrics proposed in Topology,
              transformation count and substrate count, remain unproven.
              What specifically triggers a corrector event versus what
              merely maintains belief as a mixture is described
              mechanically, not exhaustively. AI&apos;s role in expanding
              or narrowing what&apos;s collectively reachable is a live
              question, worked out on its own terms, not folded into this
              page prematurely. This is a moving target by design.
              That&apos;s stated plainly, not as a caveat. It&apos;s the
              reason to come back, not a reason to wait.
            </p>
          </Section>

          <p className="pt-4 text-xs text-[var(--site-ink-muted)]">
            English Heritage. (n.d.). A timeline of Stonehenge.
            Retrieved July 2026, from
            https://www.english-heritage.org.uk/visit/places/stonehenge/history-and-stories/timeline/
          </p>
        </div>
      </div>
    </div>
  );
}