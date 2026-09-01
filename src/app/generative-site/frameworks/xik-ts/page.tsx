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

export default function XikTsPage() {
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
          XIK-TS
        </h1>

        <div className="space-y-14">
          <Section title="What this page actually covers">
            <p>
              Experience, Identity, Knowledge, realized in Transformation
              Space. Topology already explains what determines whether
              something crosses into a person at all, permeability, the
              fit between a person and a given region of Belief Space.
              XIK-TS starts one step later. Once something has crossed,
              what does it become inside a single mind, and what does
              identity have to do with that, beyond the crossing itself.
            </p>
          </Section>

          <Section title="Experience, Belief, Knowledge">
            <p>
              <strong>Experience</strong> is raw contact. Something
              happened, something was noticed, nothing about why or how
              has been attached to it yet.
            </p>
            <p>
              <strong>Belief</strong> is a held claim without causal
              grounding. It has the texture of a mixture, sustained by
              memorization, repetition, usefulness, social reinforcement,
              held together by ongoing maintenance rather than by anything
              bonded. This is where validity-as-utility and crystallization
              both operate, on belief specifically, since belief is the
              only tier that needs continuous upkeep to persist. Asymptotic
              belief is what happens when something never crosses out of
              this tier, approached indefinitely, maintained rather than
              resolved.
            </p>
            <p>
              <strong>Knowledge</strong> is belief that has reacted, the
              compound rather than the mixture. It doesn&apos;t require
              continuous stirring to remain what it is because it&apos;s
              actually tied to the mechanism it&apos;s about. Some
              knowledge goes further than others, understanding a mechanism
              well enough to correctly extend it somewhere it wasn&apos;t
              originally built for, which is richer than knowledge that
              only explains the specific case it came from, but both sides
              of that distinction sit inside Knowledge, not as a fourth
              separate tier above it.
            </p>
            <p>
              Belief-to-Knowledge is the threshold that actually matters
              here. Asymptotic belief is the failure mode, indefinite
              approach without ever crossing. Knowledge is the goal. What
              specifically moves something across that threshold is still
              an open question, a live thread rather than something this
              page resolves.
            </p>
          </Section>

          <Section title="Deutsch, and the actual criterion">
            <p>
              This is where the Belief-to-Knowledge distinction gets a real
              test rather than staying descriptive. Deutsch&apos;s
              criterion from <em>The Beginning of Infinity</em>, good
              explanations are hard to vary because they&apos;re genuinely
              tied to what they explain, bad ones are easy to vary because
              nothing constrains them, is the same distinction stated as a
              test. Easy-to-vary belief is unreacted, held by whatever&apos;s
              convenient, swappable without cost because nothing about it
              is actually bonded to a mechanism. Hard-to-vary knowledge
              resists substitution because substitution would break
              something real.
            </p>
            <p>
              Constructor theory, the source of Possibility Space, tells
              you what&apos;s physically possible. It doesn&apos;t tell you
              what&apos;s reachable for a given person, or what actually
              crosses from belief into knowledge for them. That&apos;s
              outside constructor theory&apos;s scope entirely, not a
              missing layer so much as a different question, one this
              framework is answering instead.
            </p>
          </Section>

          <Section title="Identity, correlation without a located mechanism">
            <p>
              Identity isn&apos;t a set of discrete parts, portions, or
              facets that each handle a separate job. It&apos;s a complex
              system, properties, mechanisms, and functions interacting
              with other complex systems, and permeability and
              crystallization both showing up correlated with each other
              looks like an emergent property of how the whole system is
              currently organized, not the output of some small
              identifiable component doing double duty. This is a real
              advancement over treating permeability and crystallization
              as two unrelated properties that happen to co-occur. Naming
              the correlation is new. What produces it, mechanistically,
              inside a complex system rather than inside a located part,
              stays open.
            </p>
          </Section>

          <Section title="Where this connects, without restating it here">
            <p>
              Topology set the space and the entry mechanism, permeability.
              This page covers what happens once something has crossed,
              and introduces the actual threshold, belief to knowledge,
              that the rest of the framework has been gesturing at without
              naming directly. ETCS is this same process institutionalized
              and run at scale. Correctors and Recruiters, whenever that
              page is built, inherits the two open questions this page
              raises but doesn&apos;t answer: what moves belief into
              knowledge, and what produces the correlation between
              permeability and crystallization inside a system that has no
              single part responsible for either.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}