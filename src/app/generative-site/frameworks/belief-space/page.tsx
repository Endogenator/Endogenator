import type { ReactNode } from "react";

function Section({ title, status, children }: { title: string; status?: string; children: ReactNode }) {
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
      {status && (
        <p className="mb-4 text-sm italic text-[var(--site-clay)]">
          {status}
        </p>
      )}
      <div className="space-y-4 text-[1.05rem] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function BeliefSpacePage() {
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
          Belief Space
        </h1>

        <div className="space-y-14">
          <Section title="What this page actually covers">
            <p>
              Belief Space is reference frames, the aggregate of them,
              across every mind that has ever conceived one. Topology
              already gave the definition, the human-perceived or
              human-conceived subset of Possibility Space, entered by
              conception alone, sharing not required. This page is about
              what happens inside that domain specifically, what it means
              to live there, what goes wrong when a reference frame is
              built badly, and why so much of human life never leaves it.
            </p>
          </Section>

          <Section title="When a reference frame is built around an error">
            <p>
              A reference frame is a learned mapping of qualia to
              substrate. That mapping can be accurate or it can be wrong
              from the start, built around a false claim about what the
              substrate actually is. When a reference frame carries that
              error in its foundation, the belief built on it doesn&apos;t
              become knowledge no matter how long it&apos;s held, because
              the reaction that would convert belief into knowledge
              requires genuine contact with substrate, and a reference
              frame built around an error is exactly what distorts that
              contact, testing and confirming the wrong mapping instead of
              the real one. This is where asymptotic belief actually
              originates, not belief that simply hasn&apos;t been tested
              yet, but belief built on a frame that was wrong from the
              beginning, and stays that way no matter how much apparent
              confirmation it accumulates.
            </p>
          </Section>

          <Section title="Most human life happens here, and that's why some errors persist">
            <p>
              Most people spend more of their lives in Belief Space than in
              any other domain. Conceiving, holding, discussing, comparing
              reference frames, without those frames ever being enacted,
              tested against actual substrate contact in Transformation
              Space. That asymmetry matters, because TS-level contact is
              what corrects a reference frame built around an error. A
              belief that stays in BS, discussed, reinforced, never
              enacted, never actually tested against the substrate it
              claims to map, has no mechanism forcing it toward
              correction.
            </p>
            <p>
              This is part of why a social problem like racism persists
              long after it&apos;s been shown to rest on false premises. A
              reference frame about a group of people, built around an
              error, survives specifically where it isn&apos;t enacted,
              where segregation, homogeneous social environments, or
              simple lack of real contact mean the belief never meets the
              substrate that would correct it. The error isn&apos;t
              sustained by evidence. It&apos;s sustained by staying in
              Belief Space, protected from the one kind of contact that
              could force it to react.
            </p>
          </Section>

          <Section title="The knowledge illusion starts and lives here">
            <p>
              Sloman and Fernbach&apos;s illusion of explanatory depth, the
              gap between how well people think they understand something
              and how well they actually can explain its mechanism when
              asked, is a Belief Space phenomenon specifically. It&apos;s
              what happens when a reference frame is held with confidence
              but has never been tested against the causal understanding
              tier XIK-TS describes. The illusion survives because Belief
              Space doesn&apos;t require explanation to hold something,
              only conception. A belief can sit there, confidently held,
              indefinitely, without ever being asked to show its
              mechanism, because nothing about BS forces that question the
              way actual enactment would.
            </p>
          </Section>

          <Section title="Rhetoric works here, and it's a precursor, not the thing itself">
            <p>
              Belief Space is where rhetoric operates, persuasion,
              argument, framing, moving belief around, opening or
              exploiting permeability, entirely within the cognitive
              domain, without requiring anything be enacted or tested.
              Rhetoric can spread a belief, stabilize it, make it feel more
              certain than it is. What it can&apos;t do on its own is
              convert that belief into knowledge, since that conversion
              requires the reaction, genuine substrate contact, that only
              happens outside Belief Space. Rhetoric is the precursor to
              knowledge creation in the sense that it can move a belief
              into position, into wider circulation, closer to where it
              might eventually be tested. It is not itself the mechanism
              that tests it.
            </p>
          </Section>

          <Section title="The base human element">
            <p>
              Belief Space is the base human element specifically because
              it&apos;s the domain built from conception alone, the
              uniquely human capacity to represent, hold, and aggregate
              belief across minds, prior to and independent of whether any
              of it gets enacted or verified. Possibility Space
              doesn&apos;t require a human mind at all. Transformation
              Space and Aggregated Reality require enactment. Belief Space
              is the layer where being human, specifically, does its own
              distinct work, conceiving, regardless of whether that
              conceiving is ever tested.
            </p>
          </Section>

          <Section title="Where this connects, without restating it here">
            <p>
              Topology set Belief Space&apos;s place in the larger nested
              structure. XIK-TS described what it takes for something to
              cross from belief into knowledge inside a single mind. This
              page is about what happens, and what fails to happen, while
              something stays in Belief Space specifically, before that
              crossing, or instead of it. ETCS shows what it looks like
              when an institution recruits at the Belief Space level
              without a strong enough correcting mechanism to force the
              crossing. Correctors and Recruiters, whenever that page is
              built, needs to account for what actually pulls a reference
              frame out of Belief Space and into the kind of contact that
              can correct it.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}