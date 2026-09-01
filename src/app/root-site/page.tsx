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
          Origin Story
        </p>
        <h1
          className="mb-14 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Endogenator
        </h1>

        <div className="space-y-14">
          <Section title="The word">
            <p>
              Endogenous, from within, and generator. An
              endogenator is something that generates from the inside. There&apos;s an O.G. in there too,
              on purpose, the claim isn&apos;t just generating from within,
              it&apos;s that the thing generated is actually yours, made
              rather than borrowed. And it&apos;s a maker of doing, not just
              a self-starter. The word is about the process as much as the
              motivation.
            </p>
            <p>
              I first ran into endogenous growth theory in an undergrad
              economics class, in a lecture on production models. It answers a
              specific puzzle: growth that shows up but can&apos;t be
              explained by more labor or more capital going in. The
              unexplained remainder turns out to be people, learning,
              learning to work with others, learning collectively, the parts
              of growth that come from something other than physical input.
              That idea stuck with me long before I had any theoretical use
              for it. I&apos;ve started a few small businesses of my own, and
              I believe in community as something you build from inside it,
              not something that arrives from outside.
            </p>
            <p>
              I used to call myself an entrepreneur. At some point that word
              stopped fitting. Not because what I do changed, but because
              its connotation did, it started meaning quick wealth and extraction
              more than it meant building something that outlasts you. I
              needed a word that still meant what entrepreneur used to mean
              to me, growth that comes from inside a person, a business, a
              community, rather than growth that gets imported or extracted
              from somewhere else. I made one.
            </p>
            <p>
              What I actually mean is closer to Johnny Appleseed, someone
              who spent his life helping small things take root in a lot of
              different soil, seeding what makes the next step possible
              before anyone&apos;s asked for it. That&apos;s the part I
              want, making it easier for people to step into what&apos;s
              next. Not because I&apos;ll own the orchards, but because
              that&apos;s where I want humanity to live, closer to
              what&apos;s already possible than it currently stands.
            </p>
          </Section>

          <Section title="The thing I couldn't stop noticing">
            <p>
              For most of my life I&apos;ve been bothered by a gap. Not the
              ordinary gap between what people say and what they do,
              everyone has some version of that, but a deeper one: the
              space between what people profess to believe and the actions
              they actually take when it counts. It shows up everywhere
              once you start looking for it, in institutions, in close
              relationships, in myself.
            </p>
            <p>
              I&apos;ve studied a lot of different kinds of systems, and I
              could see this gap as a pattern, a flaw in the system of human
              coordination itself. I could never quite land on a fix that
              would help other people close that gap too, not just me. In
              conversations with people close to me, I kept drifting toward
              the same uncomfortable place: that maybe the only real fix was
              something like starting a new religion, since nothing else
              seemed to organize belief and action at a scale large enough
              to make a real difference. It wasn&apos;t a passing thought.
              It came back more than once, over years, because nothing
              smaller than that seemed to match the size of what I was
              actually seeing.
            </p>
            <p>
              That impulse wasn&apos;t wrong about the scale of the problem.
              It was aimed at the wrong tool. What I needed wasn&apos;t a new
              institution to organize belief. It was a theory that explained
              why belief and action come apart in the first place, and what
              actually has to be true for them to stay together. Belief, in
              other words, that could guide believing itself.
            </p>
          </Section>

          <Section title="What I found instead">
            <p>
              The gap exists because every existing account of knowledge,
              education, and society studies the <em>output</em> of belief
              and never the thing producing it. Identity, the carrier, gets
              factored out of the picture, and only its deposits get
              studied. That omission is not a minor gap. It&apos;s the
              reason coordination at scale so often defends a position,
              draws a line, creates a barrier, instead of expanding what&apos;s
              actually possible, why institutions built to organize belief
              eventually calcify into institutions that just protect it.
            </p>
            <p>
              The name for the alternative, coordination that actually
              expands what&apos;s collectively reachable rather than just
              reproducing what already holds, is{" "}
              <strong>Generative Coordination</strong>. It&apos;s the center
              of the theoretical work I do, and it&apos;s still being built
              in real time. That&apos;s stated plainly, not as a caveat. The
              theory is a moving target on purpose, which is exactly why
              there&apos;s a reason to come back.
            </p>
            <p>
              I think Generative Coordination will hold up because it&apos;s
              true. But I don&apos;t expect that to be why anyone actually
              picks it up. People adopt an idea because of the story around
              it, the same way a best practice spreads through an industry
              long before anyone&apos;s rigorously verified it works better
              than the alternative. I&apos;m building the story on purpose,
              not instead of the truth, alongside it.
            </p>
          </Section>

          <Section title="Where things live">
            <p>This site is a portal to a new possible.</p>
            <p>
              The full theoretical architecture, the frameworks, the open
              questions, the parts that are settled and the parts still
              actively moving, lives at{" "}
              <a href="https://generative.endogenator.com">
                generative.endogenator.com
              </a>
              .
            </p>
          </Section>

          <Section title="Join the conversation">
            <p>
              I&apos;m not professing. I&apos;m building this in the open,
              and I&apos;d rather have it refined with other people than
              finished alone in a room.
            </p>
            <p>
              If something resonates, or something doesn&apos;t, or you see
              a hole I&apos;ve missed, tell me:{" "}
              <a href="mailto:endogenator@gmail.com">
                endogenator@gmail.com
              </a>
              . I&apos;m also on{" "}
              <a href="https://www.linkedin.com/in/brianruthvendavis/">
                LinkedIn
              </a>
              .
            </p>
            <p>This is going to keep changing. Come back and see where it&apos;s gone.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}