import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Belief to Knowledge" };

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

export default function BeliefToKnowledgePage() {
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
          Belief to Knowledge
        </h1>

        <div className="space-y-14">
          <Section title="Inside a single mind">
            <p>
              Something that crosses into a mind becomes one of three things:
              experience, belief, or knowledge. The threshold that matters is the
              one between belief and knowledge.
            </p>
          </Section>

          <Section title="Experience, Belief, Knowledge">
            <p>
              <strong>Experience</strong> is raw contact. Something happened
              and was noticed. Nothing about why or how has been attached to it
              yet.
            </p>
            <p>
              <strong>Belief</strong> is a held claim without causal
              grounding. It is a mixture, sustained by memorization, repetition,
              usefulness and social reinforcement, and held together by upkeep.
              Validity-as-utility operates here: a belief feels valid when it is
              useful to the person holding it. So does crystallization. Belief is
              the only tier that needs continuous upkeep to persist. Asymptotic
              belief is what never crosses out of this tier. It is approached
              indefinitely, maintained and never resolved.
            </p>
            <p>
              <strong>Knowledge</strong> is belief that has reacted: the
              compound, where belief is the mixture. It doesn&apos;t need stirring
              to remain what it is, because it is tied to the mechanism it is
              about. Some knowledge goes further. Understanding a mechanism well
              enough to extend it somewhere it wasn&apos;t built for is richer
              than knowledge that only explains the case it came from. Both sit
              inside Knowledge. There is no fourth tier above it.
            </p>
            <p>
              Belief to knowledge is the threshold that matters. Asymptotic belief
              is the failure: indefinite approach without crossing.
            </p>
          </Section>

          <Section title="What moves a belief across">
            <p>
              The transformation from belief to knowledge can work through
              physical instantiation: a person acts, and the world answers. Any
              similar causal coupling does the same
              work. <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> calls
              that event a corrector.
            </p>
            <p>
              Where no such coupling is in play, the transformation works
              primarily through identity. Identity is the carrier. It decides what
              a belief is anchored to, and so whether contact with the world is
              allowed to test it.
            </p>
          </Section>

          <Section title="Hard to vary">
            <p>
              David Deutsch gives the distinction a test. In The Beginning of
              Infinity he argues that good explanations are hard to vary, because
              they are tied to what they explain, and bad ones are easy to vary,
              because nothing constrains them. Easy-to-vary belief is unreacted.
              It is held by whatever is convenient and can be swapped without
              cost, because nothing bonds it to a mechanism. Hard-to-vary
              knowledge resists substitution, because substitution would break
              something.
            </p>
            <p>
              Constructor theory, the source of Possibility Space, says what is
              physically possible. It doesn&apos;t say what is reachable for a
              given person, or what crosses from belief into knowledge for them.
              That is a different question, and it is the one this framework takes
              up.
            </p>
          </Section>

          <Section title="One system">
            <p>
              Identity is a complex system. It has no discrete parts that each
              handle a separate job. Its properties, mechanisms and functions
              interact with one another and with other complex systems.
            </p>
            <p>
              Low permeability and crystallization show up together in it. That
              looks like a property of how the whole system is organized, and no
              single component produces
              it. <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> gives
              the mechanism: beliefs that never reacted get anchored to identity,
              and identity protects what is anchored to it.
            </p>
          </Section>

          <Section title="Where this connects">
            <p>
              <a href="/frameworks/topology">Topology</a> sets the space and
              what lets something cross into a person.
              The <a href="/applications/education">education application</a> follows
              this same process once an institution runs it at scale.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}