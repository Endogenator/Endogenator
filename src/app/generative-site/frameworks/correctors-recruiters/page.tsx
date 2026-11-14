import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Correctors and Recruiters" };

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
          <Section title="Where the signal comes from">
            <p>
              Feedback is the primary mechanism. Feedback is a signal, and the two
              are degrees of the same thing. What makes coordination possible is
              that progress is visible to at least a few.
            </p>
            <p>
              Correctors and recruiters are the two ways signals act on belief and
              identity. They differ in where the signal comes from. In recruiting,
              it comes from other people. In correcting, it comes back from the
              world itself, as the result of acting on it.
            </p>
          </Section>

          <Section title="Recruiters">
            <p>
              A recruiter widens permeability at scale. Permeability is how open a
              person is to a given region of Belief Space,
              and <a href="/frameworks/topology">Topology</a> has the full
              account. A relationship opens a region one mind at a time. A
              recruiter opens it for many minds at once.
            </p>
            <p>
              The signal a recruiter carries comes from other people: a
              curriculum, a credential, a shared target, spread widely enough that
              large numbers of people become permeable to it together.
              Institutions do this as their basic
              function. <a href="/applications/education">Education as a System</a> follows that
              through education.
            </p>
          </Section>

          <Section title="Correctors">
            <p>
              A corrector is an event. No one transmits it. It is substrate
              contact, meaning contact with the world itself, of a kind the
              existing reference frame can&apos;t absorb without reacting. The
              signal in a corrector event is the world&apos;s answer to something
              a person did.
            </p>
            <p>
              Belief is a mixture, held together by upkeep. Knowledge is a
              compound: belief that has reacted, and holds without upkeep. More
              exposure, more repetition and more stirring never turn a mixture
              into a compound. The reaction takes a different kind of contact, and
              more of the same kind won&apos;t produce it. Testing, experience,
              and evidence that can&apos;t be reinterpreted away force the
              reaction. Belief that only ever meets confirming contact stays
              belief, however long it is held.
            </p>
          </Section>

          <Section title="Why correcting doesn't scale">
            <p>
              Recruiting scales because it is diffusion. Belief behaves like a
              gas, filling whatever is permeable, and a single institutional act
              can open permeability for enormous numbers of people at once: a
              curriculum, a broadcast target, a credential requirement.
            </p>
            <p>
              Correcting has no such structure. Substrate contact strong enough to
              force a reaction happens one mind at a time. The experience that
              breaks one person&apos;s frame open may do nothing for the next
              person, and it can&apos;t be mass-produced the way a target can be
              broadcast.
            </p>
            <p>
              So institutions don&apos;t neglect correcting out of malice or
              oversight. Any institution that optimizes for reach tilts toward the
              mechanism that scales. Recruiting outpaces correcting as
              institutions grow, and that is the default when one half of the pair
              scales and the other doesn&apos;t.
            </p>
            <p>
              <strong>Crisis is the exception, and it shows the mechanism at work.</strong> A
              crisis forces undeniable substrate contact on large numbers of
              people at once, with no institution mediating it person by person.
              It is still a corrector. It is one of the rare conditions under
              which correcting reaches the scale recruiting gets by default.
              Nobody designs that. The world imposes the contact directly.
            </p>
          </Section>

          <Section title="Anchored to identity">
            <p>
              Low permeability and crystallization tend to show up together.
              Crystallization is identity becoming fixed in how it takes in new
              experience. One mechanism produces both.
            </p>
            <p>
              An asymptotic belief is a mixture that never reacts. It has no bond
              to the world that would let it stand alone. What holds it up is
              identity. It gets tied to a person&apos;s sense of self, and once
              anchored it is protected by whatever protects the rest of identity.
              Knowledge needs no anchoring to persist. It gives identity nothing
              to defend, so it stays comparatively permeable and can be extended
              without threat. Crystallization and low permeability are identity
              protecting something that was anchored to the self without ever
              having reacted.
            </p>
            <p>
              Take the rigid expert. The technical knowledge usually isn&apos;t
              what crystallizes. It may have reacted, and stay open to refinement.
              What is anchored is the identity of being an expert, the kind of
              person who would already know if something were true. When
              disconfirming contact arrives, it doesn&apos;t get to test that
              identity. The identity tests the contact: I would have known this if
              it were true. Whatever fails that test is rejected or reinterpreted.
              This inverts correction. Contact with the world is supposed to test
              belief. Here a belief about oneself has become the standard the
              world is measured against.
            </p>
          </Section>

          <Section title="Where this connects">
            <p>
              <a href="/frameworks/belief-space">Belief Space</a> describes
              the kind of error a corrector would catch, and why staying unenacted
              protects it. <a href="/">Generative Coordination</a> is
              correctors and recruiters working together on purpose, with
              recruiting never allowed to outrun correcting.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}