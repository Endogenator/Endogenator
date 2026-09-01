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

export default function EtcsPage() {
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
          ETCS
        </h1>

        <div className="space-y-14">
          <Section title="What ETCS actually covers">
            <p>
              Education as a Transformative Coordination System. Not a
              general theory of institutions that happens to use education
              as its example, specifically education, where TS-level
              coordination gets institutionalized and run at scale rather
              than happening person to person. XIK-TS covers what happens
              to belief and knowledge inside a single mind. ETCS covers
              what happens when an institution takes on the job of
              coordinating that process across many minds at once.
            </p>
          </Section>

          <Section title="Institutions as recruiters, mostly without correctors">
            <p>
              An educational institution is, functionally, a recruiting
              apparatus. It exists to expand how many people are enacting
              toward a shared coordination target, a curriculum, a
              credential, a body of knowledge treated as worth
              transmitting. That&apos;s recruiting in the literal sense
              already established, widening the membrane at scale rather
              than one person at a time.
            </p>
            <p>
              What&apos;s harder for an institution to sustain is the
              correcting half of that pair. Correcting means keeping the
              coordination target honestly tethered to Possibility Space,
              to whether the knowledge being spread is actually knowledge,
              reacted, hard to vary, rather than belief being maintained
              because it&apos;s useful to the institution to keep teaching
              it. Recruiting without correcting is exactly the failure mode
              already named elsewhere in this framework: coordination that
              spreads and stabilizes a target without verifying the target
              still deserves to hold. An institution can recruit at
              enormous scale, generation after generation, while its
              actual correcting mechanism, whatever process would catch a
              target that&apos;s drifted from what it claims to teach, gets
              structurally weaker the larger and more self-sustaining the
              institution becomes.
            </p>
            <p>
              Accreditation is one documented case of this pattern inside
              American higher education specifically, institutions
              optimizing for the appearance of a coordination target being
              met rather than for whether it&apos;s actually being met.
              That case is worked through in full elsewhere, on the{" "}
              <a href="https://doctorate.endogenator.com/education-as-a-system">
                Education as a System
              </a>{" "}
              page, rather than re-argued here.
            </p>
          </Section>

          <Section
            title="Crystallization as a live hypothesis in institutional terms"
            status="Status: this extends the crystallization mechanism from Topology in a direction that hasn't been proposed before. Stated as a hypothesis, not something to treat as settled."
          >
            <p>
              Topology reframes crystallization as permeability reduction,
              a domain closing to further revision once continuing to fund
              open plasticity in that domain costs more than it&apos;s
              worth. Re-coordination, the crystallization curve&apos;s
              punctuated re-opening events, was already described as gated
              by competence rather than age, something has to happen
              before a domain can re-key toward a new target.
            </p>
            <p>
              The mixture-and-compound distinction gives that gate a
              specific candidate mechanism it didn&apos;t have before.
              Belief is a mixture, maintained continuously, costly to
              sustain. Knowledge is a compound, reacted, no longer
              requiring that ongoing maintenance. If a domain crystallizes
              because maintaining open revision there stops being worth
              the cost, then crossing from belief into knowledge in that
              domain would free exactly the capacity crystallization was
              spending to hold it in place, since knowledge doesn&apos;t
              need that maintenance anymore. Re-coordination becoming
              available once someone has actually converted belief into
              knowledge in their current domain, rather than simply aging
              or accumulating more time in it, would explain why
              competence gates re-coordination specifically rather than
              mere exposure or duration.
            </p>
            <p>
              For an institution, this would mean the re-coordination
              points that matter aren&apos;t scheduled transitions, a
              semester ending, a grade level completing. They&apos;d be
              wherever a student has actually crossed the
              belief-to-knowledge threshold in a given domain, which an
              institution built around scheduled transitions has no
              natural way to detect, since it isn&apos;t watching for that
              event specifically.
            </p>
          </Section>

          <Section title="Where this connects, without restating it here">
            <p>
              Topology set the space and permeability. XIK-TS set the
              Belief-to-Knowledge threshold inside a single mind. This page
              is what both look like once an institution takes over the
              recruiting half of that process at scale, usually without a
              correcting mechanism strong enough to match it. Correctors
              and Recruiters, whenever that page is built, needs to account
              for why the correcting side degrades as institutions grow,
              not just define what a corrector is in the abstract.
              Generative Coordination is what it looks like when an
              institution manages to do both at once, at scale, without
              the correcting side collapsing under its own success.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}