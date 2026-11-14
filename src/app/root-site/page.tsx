import type { ReactNode } from "react";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative pl-8 md:pl-10">
      <span
        className="growth-marker absolute left-[-5px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--site-sand)] md:left-[calc(1px-6px)]"
        style={{ backgroundColor: "var(--site-rust)" }}
        aria-hidden="true"
      />
      {eyebrow && (
        <p
          className="mb-1 text-xs font-medium uppercase tracking-widest text-[var(--site-clay)]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {eyebrow}
        </p>
      )}
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

export default function RootSitePage() {
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
          Brian Davis
        </p>
        <h1
          className="mb-14 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Endogenator
        </h1>

        <div className="space-y-14">
          <div className="pl-8 text-[1.15rem] leading-relaxed md:pl-10">
            <p>
              I&apos;m Brian Davis. I work on one question: why what people
              believe and what they do come apart, and how people working together
              can reach better outcomes that current belief keeps out of view. I
              call the answer Generative Coordination. This page is how I got
              there.
            </p>
          </div>

          <Section title="The word">
            <p>
              Endogenous, meaning from within, plus generator. An endogenator is
              something that generates from the inside. There&apos;s an O.G. in
              there too, on purpose: what gets generated is yours, made rather
              than borrowed. It&apos;s a maker of doing, more than a self-starter.
              The word is about the process as much as the motivation.
            </p>
            <p>
              I first ran into endogenous growth theory in an undergrad economics
              class, in a lecture on production models. It answers a specific
              puzzle: growth that shows up but can&apos;t be explained by more
              labor or more capital going in. The unexplained remainder turns out
              to be people: learning, learning to work with others, learning
              collectively. Those are the parts of growth that come from something
              other than physical input. That idea stuck with me long before I had
              any theoretical use for it. I&apos;ve started a few small businesses
              of my own, and I believe in community as something you build from
              inside it, not something that arrives from outside.
            </p>
            <p>
              I used to call myself an entrepreneur. At some point the word
              stopped fitting. What I do didn&apos;t change. The word did: it came
              to mean quick wealth and extraction more than building something
              that outlasts you. I needed a word that still meant what
              entrepreneur used to mean to me: growth that comes from inside a
              person, a business, a community, and isn&apos;t imported or
              extracted from somewhere else. I made one.
            </p>
            <p>
              What I mean is closer to Johnny Appleseed: someone who spent his
              life helping small things take root in a lot of different soil,
              seeding what makes the next step possible before anyone has asked
              for it. That&apos;s the part I want, making it easier for people to
              step into what&apos;s next. I won&apos;t own the orchards. I want
              humanity living closer to what&apos;s already possible than it does
              now.
            </p>
          </Section>

          <Section title="The thing I couldn't stop noticing">
            <p>
              For most of my life I&apos;ve been bothered by a gap. Everyone knows
              the ordinary one, between what people say and what they do. This one
              is deeper: the space between what people profess to believe and what
              they do when it counts. Once you start looking it shows up
              everywhere: in institutions, in close relationships, in myself.
            </p>
            <p>
              I&apos;ve studied a lot of different kinds of systems, and I came to
              see this gap as a pattern, a flaw in the system of human
              coordination itself. I could never land on a fix that would help
              other people close it too. In conversations with people close to me
              I kept drifting toward the same uncomfortable place: maybe the only
              fix was something like starting a new religion, since nothing else
              seemed to organize belief and action at a large enough scale. The
              thought came back more than once, over years, because nothing
              smaller seemed to match the size of what I was seeing.
            </p>
            <p>
              That impulse wasn&apos;t wrong about the scale of the problem. It
              was aimed at the wrong tool. What I needed was a theory that
              explains why belief and action come apart in the first place, and
              what has to be true for them to stay together: belief that could
              guide believing itself.
            </p>
          </Section>

          <Section title="What I found instead">
            <p>
              The gap exists because every existing account of knowledge,
              education, and society studies the <em>output</em> of belief and
              never the thing producing it. Identity, the carrier, gets factored
              out of the picture, and only its deposits get studied. That omission
              is why coordination at scale so often defends a position, draws a
              line, or builds a barrier when it could be widening what&apos;s
              possible. It is why institutions built to organize belief harden
              into institutions that protect it.
            </p>
            <p>
              The alternative has a
              name: <strong>Generative Coordination</strong>. It is
              coordination that expands what we can collectively reach, where most
              coordination reproduces what already holds. I think there are better
              outcomes within reach that current belief keeps out of view, and
              that Generative Coordination is how we get to them. This is the
              center of my work, and I&apos;m still building it. The theory is a
              moving target on purpose, which is the reason to come back.
            </p>
            <p>
              I think Generative Coordination holds up, and I&apos;m open to being
              shown where it doesn&apos;t. I don&apos;t expect that to be why
              anyone picks it up. People adopt an idea because of the story around
              it, the way a best practice spreads through an industry long before
              anyone has checked that it works better than the alternative.
              I&apos;m building the story on purpose, alongside the reasoning and
              not in place of it.
            </p>
          </Section>

          <Section title="Where things live">
            <p>
              This site is a portal to a new possible.
            </p>
            <p>
              The full theory lives
              at <a href="https://generative.endogenator.com">generative.endogenator.com</a>:
              the frameworks, the open questions, the parts that are settled and
              the parts still moving.
            </p>
          </Section>

          <Section title="Join the conversation">
            <p>
              I&apos;m not professing. I&apos;m building this in the open, and
              I&apos;d rather have it refined with other people than finished
              alone in a room.
            </p>
            <p>
              If something resonates, or something doesn&apos;t, or you see a hole
              I&apos;ve missed, tell
              me: <a href="mailto:endogenator@gmail.com">endogenator@gmail.com</a>.
              I&apos;m also
              on <a href="https://www.linkedin.com/in/brianruthvendavis/">LinkedIn</a>.
            </p>
            <p>
              This is going to keep changing. Come back and see where it&apos;s
              gone.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}