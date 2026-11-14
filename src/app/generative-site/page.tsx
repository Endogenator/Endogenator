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
          <Section title="The claim">
            <p>
              Generative Coordination is coordination that expands what we can
              collectively reach. Most coordination does something else. It
              reproduces a configuration that already exists, and defends it.
            </p>
            <p>
              Coordination is what our species is built for. Stonehenge, cities
              and language all run on people conceiving a goal and working toward
              it together. The hard problems ask for more than that. They need
              coordination that widens what we can see and reach.
            </p>
            <p>
              The definition doubles as a test. Take any case of people
              coordinating around a belief, a target or an institution, and ask
              what it is doing. If it is bringing better outcomes into view and
              into reach, it is generative. If it is defending a position already
              held, it is not, however large or successful it has become.
            </p>
          </Section>

          <Section title="Out of view">
            <p>
              There are two gaps between what is possible and what we live.
            </p>
            <p>
              The first is between what the world permits and what anyone has
              conceived. There are better outcomes within reach that our current
              belief space keeps out of view. Belief space is the sum of what
              human minds have so far perceived or conceived, and no one can work
              toward an outcome that isn&apos;t in it.
            </p>
            <p>
              The second is between what has been conceived and what has been
              enacted. An outcome can be thinkable for a long time before many
              people are living it.
            </p>
            <p>
              A better belief space is one in which we can see more of the
              possibilities we would collectively want to pursue. Generative
              Coordination works on both gaps.
            </p>
          </Section>

          <Section title="What Stonehenge shows">
            <p>
              Stonehenge was built and altered over somewhere between 800 and
              1,400 years, from the first earthwork enclosure through the final
              Bronze Age additions to the stones (English Heritage, n.d.). Whoever
              laid the first timber posts never saw the monument in anything like
              its later form.
            </p>
            <p>
              That is recruiting. Generations worked toward a target they would
              never see finished and could not check against their own experience.
              What moved them was a signal from other people.
            </p>
            <p>
              What they could see was progress. Each generation had the work in
              front of it: the enclosure, then the posts, then the stones. Visible
              progress is feedback, and feedback is what makes coordination
              possible.
            </p>
            <p>
              The monument is also a picture of Aggregated Reality, the sum of
              what everyone enacts. No one who worked on it perceived the whole.
              Each saw it from a position inside it.
            </p>
            <p>
              And it shows correcting. A stone stands or it falls. When the
              builders got the engineering wrong, the answer came back from the
              world itself. The engineering and the astronomy stayed tied to the
              world that way. The cosmological claims that organized the labor
              never faced the same test.
            </p>
          </Section>

          <Section title="The mechanism">
            <p>
              Feedback is the primary mechanism. Recruiting and correcting are the
              two ways signals act on belief and identity.
            </p>
            <p>
              In recruiting, the signal comes from other people. It widens what
              many minds are open to at once. In correcting, the signal comes back
              from the world itself, as the result of acting on it. Correcting is
              what turns belief into knowledge.
            </p>
            <p>
              Recruiting scales easily. Correcting happens one mind at a time.
              That asymmetry makes the failure common. Institutions and movements
              recruit at enormous scale, while whatever would catch a drifting
              target weakens as they grow. Generative Coordination is the
              condition where correcting is kept strong enough to match however
              far recruiting has spread.
            </p>
          </Section>

          <Section title="The oldest failure">
            <p>
              Religion is the sharpest example. Nothing else in human history has
              coordinated people at that scale, across generations who would never
              see the outcome or verify the claim that organized their labor.
            </p>
            <p>
              Religion is known as both the great organizer and the great
              corruptor, and both come from one mechanism. What let belief spread
              and hold across centuries of people who would never verify it also
              let false claims about the world spread and hold just as durably.
              Recruiters don&apos;t discriminate between a true target and a false
              one. Only correctors do. Once religious coordination succeeds at
              scale it suppresses correctors, because orthodoxy defends itself
              against the contact that would test it.
            </p>
            <p>
              Holding a belief no one can verify is not the failure. Belief that
              knows itself as belief, and openly lives with an unresolved
              question, is a legitimate way to coordinate around something not yet
              settled. The failure is claiming certainty a belief hasn&apos;t
              earned, to protect the coordination that depends on people believing
              it&apos;s certain. That belief holds on because it has been anchored
              to identity, and identity protects what it&apos;s anchored to.
            </p>
            <p>
              One institution can be generative in one domain and failing in
              another at the same moment. Stonehenge and the pyramids took real
              engineering and real astronomy, tied to the world. The cosmological
              claims behind the labor were never tested that way. So whether
              coordination is generative has to be asked domain by domain.
            </p>
          </Section>

          <Section title="Where this came from">
            <p>
              I came to this through a gap that has bothered me most of my life,
              between what people profess to believe and what they do when it
              counts. That story is
              at <a href="https://endogenator.com">endogenator.com</a>.
            </p>
            <p>
              Everything else on this site (Topology, Belief Space, XIK-TS, ETCS,
              Correctors and Recruiters) was built to explain the mechanism this
              page names.
            </p>
          </Section>

          <Section title="What's still open">
            <p>
              The distance measures proposed in Topology, transformation count and
              substrate count, are proposals I haven&apos;t finished reasoning
              through. What triggers a corrector event, and what only maintains a
              belief, is described in outline and not in full. Whether AI expands
              or narrows what we can collectively reach is an open question,
              worked out separately.
            </p>
            <p>
              The theory is a moving target by design, which is the reason to come
              back. If you see where it breaks, tell
              me: <a href="mailto:endogenator@gmail.com">endogenator@gmail.com</a>.
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