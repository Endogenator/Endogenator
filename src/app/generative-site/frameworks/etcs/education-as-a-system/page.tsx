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

export default function EducationAsASystemPage() {
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
          ETCS, applied
        </p>
        <h1
          className="mb-2 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Education as a System
        </h1>
        <p className="mb-14 pl-8 text-sm italic text-[var(--site-clay)] md:pl-10">
          This is ETCS&apos;s formal case, the institutional side of belief
          and identity formation, worked through with accreditation as the
          specific example.
        </p>

        <div className="space-y-14">
          <Section title="The argument">
            <p>
              Higher education gets talked about in the language of
              institutions, policies, degrees, outcomes. Underneath that
              language, it behaves like a system. Governance exists at
              every level, municipal to federal, and that tells you two
              things: there&apos;s a shared belief about what education is
              supposed to do, and without that governance, the assumption
              is that things go wrong. Schools, colleges, and universities
              share structural properties that only become visible when
              you stop looking at any one of them in isolation and start
              looking at the whole.
            </p>
            <p>
              A system&apos;s real purpose isn&apos;t what it claims for
              itself. It&apos;s what you can deduce from its behavior.
              Accreditation usually gets treated as something external to
              education, a quality check applied from outside. But if a
              system&apos;s purpose has to be read from behavior, and
              accreditation is itself a component with its own behavior,
              then it isn&apos;t external at all. It&apos;s part of the
              system, with its own sub-purpose, one that can align with or
              work against the larger purpose it&apos;s supposed to be
              serving.
            </p>
          </Section>

          <Section title="What the behavior actually shows">
            <p>
              Accreditation evaluates a system it cannot see into. It has
              access to inputs, processes, and proxied outputs, standards
              compliance, reported data, documented procedure, but not to
              the actual interior where transformation happens or fails to
              happen. So accreditation substitutes what it can see for
              what it&apos;s actually trying to measure, standards
              compliance stands in for quality, and the substitution
              becomes invisible over time, until compliance simply is the
              definition of quality in practice.
            </p>
            <p>
              Institutions respond to accreditation by optimizing for
              compliance, not outcomes: building reporting infrastructure,
              timing curriculum changes to review cycles, hiring to meet
              an accreditor&apos;s definitions rather than a program&apos;s
              actual needs. Once a measure becomes the target, it stops
              being a good measure. And accreditation status doesn&apos;t
              reliably predict outcomes at all. In documented cases,
              institutions that lost accreditation had better graduation
              rates than institutions that kept it.
            </p>
            <p>
              Accreditation persists anyway, because accredited status is
              required for funding, students, and recognition, a matter of
              legitimacy, not verified quality. Organizations going
              through the same credentialing process converge in form
              without converging in function, the same pressures pushing
              everyone toward the same compliance behaviors regardless of
              whether those behaviors serve the students inside the
              institution at all.
            </p>
          </Section>

          <Section title="Where this connects to ETCS directly">
            <p>
              This is what ETCS means by institutions functioning as
              recruiters that structurally struggle to scale correcting.
              Accreditation is the recruited target, spread across
              thousands of institutions at once. What&apos;s missing is
              the correcting half, genuine substrate contact strong
              enough to catch a target that&apos;s drifted from what it
              claims to certify. Nothing about that failure is unique to
              accreditation. It&apos;s the general pattern ETCS describes,
              observed in its most fully documented institutional form.
            </p>
            <p>
              The deeper reason the literature can&apos;t close this gap
              from inside itself is the same reason named throughout this
              site: every existing account of the system studies its
              outputs, compliance behaviors, outcome data, reporting
              infrastructure, and never the thing actually producing them.
              Identity, the carrier that determines whether a standard or
              a review cycle produces real understanding or just its
              appearance, gets factored out of the analysis entirely.
              XIK-TS is the account of what &quot;real understanding&quot;
              would even mean at the level of one mind. Accreditation&apos;s
              black box problem is the predictable result of trying to
              certify a process it was never built to see.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
