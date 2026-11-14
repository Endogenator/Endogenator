import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Education as a System" };

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

export default function EducationPage() {
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
          Application
        </p>
        <h1
          className="mb-2 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Education as a System
        </h1>

        <div className="space-y-14">
          <Section title="Read from its behavior">
            <p>
              Higher education is usually discussed in the language of
              institutions, policies, degrees and outcomes. Underneath that
              language it behaves like a system. Schools, colleges and
              universities share structural properties that show only when you
              stop looking at any one of them in isolation and look at the whole.
            </p>
            <p>
              Governance exists at every level, municipal to federal. That shows
              two things: there is a shared belief about what education is
              supposed to do, and an assumption that things go wrong without
              governance.
            </p>
            <p>
              A system&apos;s purpose is what you can deduce from its behavior,
              whatever it claims for itself. This page reads education that way,
              through <a href="/">Generative Coordination</a>.
            </p>
          </Section>

          <Section title="Recruiting without correcting">
            <p>
              An educational institution is a recruiting apparatus. It exists to
              expand how many people are enacting toward a shared target: a
              curriculum, a credential, a body of knowledge treated as worth
              passing on. That is recruiting in the
              sense <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> gives
              it. The signal comes from other people, and it opens a region of
              belief to many minds at once.
            </p>
            <p>
              Correcting is the half an institution has the most trouble keeping.
              Correcting means keeping the target tied to the world: checking
              whether what is being spread is knowledge, in the
              sense <a href="/frameworks/belief-to-knowledge">Belief to Knowledge</a> gives
              the word, or belief that is maintained because teaching it is useful
              to the institution. On this reading, an institution can recruit at
              enormous scale, generation after generation, while whatever would
              catch a drifted target weakens as the institution grows and sustains
              itself.
            </p>
          </Section>

          <Section title="Path dependence">
            <p>
              Higher education has real path dependence. Structures built for one
              purpose, a calendar, a credit, a degree sequence, keep shaping what
              is possible long after the purpose has changed. In this theory that
              is crystallization showing up in an institution: a domain closes to
              revision once keeping it open costs more than it is worth, and what
              was a choice becomes the shape of the system.
            </p>
          </Section>

          <Section title="What no one is looking at">
            <p>
              Accounts of education study its outputs: enrollment, credentials,
              outcome data, reporting. They leave out the thing producing those
              outputs. Identity is the carrier. It determines whether a course or
              a credential produces understanding in a student or only its
              appearance, and it is factored out of the analysis.
            </p>
            <p>
              <a href="/frameworks/belief-to-knowledge">Belief to Knowledge</a> is
              the account of what understanding means at the level of one mind. An
              institution that cannot see that level will measure what it can see
              and mistake it for the thing itself.
            </p>
          </Section>

          <Section title="A hypothesis about re-coordination">
            <p>
              <a href="/frameworks/topology">Topology</a> treats
              crystallization as permeability reduction: a domain closes to
              further revision once keeping it open costs more than it is worth.
              Re-coordination is the reopening. The crystallization curve has
              punctuated re-coordination events, and what gates them is
              competence. Age does not. Something has to happen before a domain
              can re-key toward a new target.
            </p>
            <p>
              The mixture and compound distinction offers a candidate for that
              gate. Belief is a mixture, maintained continuously and costly to
              sustain. Knowledge is a compound, reacted, and needs no upkeep. If a
              domain crystallizes because keeping it open stops being worth the
              cost, then crossing from belief into knowledge in that domain would
              free the capacity crystallization was spending to hold it in place.
              Re-coordination would become available once someone has converted
              belief into knowledge in their current domain. Aging, or more time
              spent there, wouldn&apos;t do it. That would explain why competence
              gates re-coordination and exposure or duration do not.
            </p>
            <p>
              For an institution, this would mean the re-coordination points that
              matter aren&apos;t the scheduled ones, a semester ending or a grade
              level completing. They would be wherever a student has crossed the
              belief-to-knowledge threshold in a domain. An institution built
              around scheduled transitions has no natural way to detect that,
              because it isn&apos;t watching for it.
            </p>
          </Section>

          <Section title="Where this connects">
            <p>
              <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> takes
              up why correcting weakens as institutions
              grow. <a href="/frameworks/topology">Topology</a> has the
              account of permeability and crystallization this page relies on.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}