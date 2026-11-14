import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Belief Space" };

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
          <Section title="Where most of life happens">
            <p>
              Belief Space is the aggregate of reference frames across every mind
              that has ever conceived one. It is the human-perceived or
              human-conceived subset of Possibility Space, entered by conception
              alone, with no sharing
              required. <a href="/frameworks/topology">Topology</a> has the
              definition. Most of human life is spent here, and much of what is
              believed never leaves.
            </p>
          </Section>

          <Section title="When a reference frame is built around an error">
            <p>
              A reference frame is a learned mapping of qualia to substrate. The
              mapping can be accurate, or it can be wrong from the start, built
              around a false claim about what the substrate is. A belief built on
              a frame like that doesn&apos;t become knowledge however long it is
              held. The reaction that converts belief into knowledge requires
              contact with substrate, and a frame built around an error distorts
              that contact. It tests and confirms the wrong mapping.
            </p>
            <p>
              This is where asymptotic belief originates. An untested belief is a
              different thing. An asymptotic belief sits on a frame that was wrong
              from the beginning, and stays wrong however much apparent
              confirmation it gathers.
            </p>
          </Section>

          <Section title="Why some errors persist">
            <p>
              Most people spend more of their lives in Belief Space than in any
              other domain. They conceive, hold, discuss and compare reference
              frames, and those frames are never enacted or tested against
              substrate in Transformation Space. That matters, because contact at
              the TS level is what corrects a frame built around an error. A
              belief that stays in BS, discussed and reinforced and never enacted,
              has nothing forcing it toward correction.
            </p>
            <p>
              This is part of why a social problem like racism persists long after
              its premises have been shown false. A reference frame about a group
              of people, built around an error, survives where it isn&apos;t
              enacted. Segregation, homogeneous social environments, or a simple
              lack of contact mean the belief never meets the substrate that would
              correct it. Evidence doesn&apos;t sustain the error. Staying in
              Belief Space does, by protecting it from the one kind of contact
              that could force it to react.
            </p>
          </Section>

          <Section title="The illusion of explanatory depth">
            <p>
              Rozenblit and Keil named the illusion of explanatory depth: people
              feel they understand how things work in far more depth than they do,
              and the gap shows when they are asked to explain the mechanism. It
              is a Belief Space phenomenon. A reference frame is held with
              confidence and has never been tested against knowledge. The illusion
              survives because Belief Space requires only conception to hold
              something. A belief can sit there, confidently held, without ever
              being asked to show its mechanism. Enactment would force that
              question, and nothing in BS does.
            </p>
          </Section>

          <Section title="Rhetoric">
            <p>
              Belief Space is where rhetoric operates. Persuasion, argument and
              framing move belief around and open or exploit permeability, all
              within the cognitive domain, with nothing enacted or tested.
              Rhetoric can spread a belief, stabilize it, and make it feel more
              certain than it is. It cannot convert that belief into knowledge,
              because the conversion requires substrate contact, which happens
              outside Belief Space. Rhetoric is a precursor to knowledge. It can
              move a belief into wider circulation, closer to where it might be
              tested. It does not test it.
            </p>
          </Section>

          <Section title="The base human element">
            <p>
              Belief Space is the base human element because it is built from
              conception alone: the human capacity to represent, hold and
              aggregate belief across minds, before and apart from any of it being
              enacted or tested. Possibility Space doesn&apos;t require a human
              mind at all. Transformation Space and Aggregated Reality require
              enactment. Belief Space is the layer where being human does its own
              distinct work, which is conceiving.
            </p>
          </Section>

          <Section title="Where this connects">
            <p>
              <a href="/frameworks/belief-to-knowledge">Belief to Knowledge</a> describes
              what it takes for something to cross from belief into knowledge
              inside a single
              mind. <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> takes
              up what pulls a reference frame out of Belief Space and into contact
              that can correct it.
            </p>
          </Section>

          <p className="pt-4 text-xs text-[var(--site-ink-muted)]">
            Rozenblit, L., &amp; Keil, F. (2002). The misunderstood limits of
            folk science: an illusion of explanatory depth. Cognitive Science,
            26(5), 521-562.
          </p>
        </div>
      </div>
    </div>
  );
}