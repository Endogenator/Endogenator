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

export default function CorrectorsRecruitersPage() {
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
          Correctors and Recruiters
        </h1>

        <div className="space-y-14">
          <Section title="Recruiters">
            <p>
              A recruiter widens permeability at scale. Not a relationship
              formed one mind at a time, but access opening for many minds
              at once to a given region of Belief Space. ETCS already
              described institutions doing this as their basic function,
              spreading a coordination target, a curriculum, a credential,
              wide enough that large numbers of people become permeable to
              it simultaneously. Nothing new to resolve here. Recruiting is
              the mechanism already established, just named directly.
            </p>
          </Section>

          <Section title="Correctors">
            <p>
              A corrector is not a thing that gets transmitted. It
              isn&apos;t belief or information pushed across a membrane,
              that&apos;s the sender-pushes-a-packet model permeability
              already replaced for belief in general. A corrector is an
              event: genuine substrate contact of a kind the existing
              reference frame can&apos;t absorb without being forced to
              react.
            </p>
            <p>
              This is why more exposure, more repetition, more stirring,
              never converts a mixture into a compound. It takes a
              different kind of contact entirely, not more of the same
              kind. Real testing, real experience, evidence that can&apos;t
              be reinterpreted away, forces the reaction that produces
              knowledge. Belief that only ever receives more of the same
              confirming contact stays belief indefinitely, however long
              it&apos;s held.
            </p>
          </Section>

          <Section title="Why correcting doesn't scale the way recruiting does">
            <p>
              Recruiting scales because it&apos;s fundamentally a diffusion
              process, belief as gas filling whatever&apos;s permeable, and
              permeability can be opened for enormous numbers of people at
              once through a single institutional act, a curriculum, a
              broadcast target, a credential requirement. Correcting
              doesn&apos;t have that structure. Forcing genuine substrate
              contact strong enough to produce a reaction is inherently a
              per-mind event, the specific experience that breaks one
              person&apos;s existing frame open doesn&apos;t necessarily do
              the same for the next person, and can&apos;t be mass-produced
              the way a target can be mass-broadcast.
            </p>
            <p>
              This means institutions don&apos;t neglect correcting through
              malice or oversight. Any institution optimizing for reach
              naturally tilts toward the mechanism that actually scales.
              The imbalance ETCS described, recruiting outpacing correcting
              as institutions grow, isn&apos;t a design failure. It&apos;s
              what happens by default when one half of the pair scales and
              the other doesn&apos;t.
            </p>
            <p>
              <strong>
                Crisis is the exception, and it&apos;s the exception that
                proves the mechanism rather than breaking it.
              </strong>{" "}
              A crisis forces genuine, undeniable substrate contact on
              large numbers of people simultaneously, without needing an
              institution to mediate it person by person. That&apos;s
              still a corrector, still substrate contact strong enough to
              force a reaction, it&apos;s just one of the rare conditions
              under which correcting achieves the kind of scale recruiting
              gets by default. Crisis doesn&apos;t scale correcting by
              design. It scales correcting by brute force, substrate
              imposing contact directly rather than needing to be
              arranged.
            </p>
          </Section>

          <Section title="What actually produces the permeability-crystallization correlation">
            <p>
              XIK-TS left this open: permeability and crystallization show
              up correlated, with no single located mechanism producing
              either. There is one mechanism, not two separate pathways
              converging on the same appearance.
            </p>
            <p>
              Mixtures, asymptotic beliefs, lack the substrate bond that
              would let them stand independently. What sustains them
              instead is identity anchoring, they get tied to a
              person&apos;s sense of self, and once anchored, they&apos;re
              protected by whatever function protects the rest of
              identity. Knowledge, genuinely reacted, doesn&apos;t need
              anchoring to persist, so it gives identity nothing to
              defend, and stays comparatively permeable, open to being
              extended without threat. Crystallization and low
              permeability are what identity&apos;s general
              self-protective function looks like when applied to
              something that was never actually reacted, but has been
              anchored to self anyway.
            </p>
            <p>
              The rigid expert case makes the mechanism concrete rather
              than abstract. What crystallizes isn&apos;t usually the
              technical knowledge itself, which may be genuinely reacted
              and comparatively open to refinement. What&apos;s anchored
              is the identity of being an expert, being the kind of person
              who would already know if something were true. When
              disconfirming contact arrives, it doesn&apos;t test that
              identity the way a corrector is supposed to. Instead, the
              anchored identity claim tests the contact,{" "}
              <em>I would have known this if it were true</em>, and
              whatever fails that test gets rejected or reinterpreted
              rather than triggering revision. That&apos;s the correction
              relationship inverted: substrate contact is supposed to test
              belief, and here belief, specifically an identity anchored to
              expertise, has become the standard that substrate contact is
              measured against instead.
            </p>
          </Section>

          <Section title="Where this connects, without restating it here">
            <p>
              Belief Space described what a reference frame built around
              an error looks like, and why staying unenacted protects it.
              This page names the event that would actually correct it,
              and explains why that event is structurally rare compared to
              how easily belief spreads. ETCS&apos;s recruiting-without-
              correcting problem now has a real mechanism behind it, not
              just an observation. Generative Coordination, whenever fully
              drafted, is what it looks like when correctors and recruiters
              operate together deliberately, correcting scaled up wherever
              possible, recruiting never allowed to outrun it by default.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}