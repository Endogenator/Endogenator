import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Agency in the Age of AI" };

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

export default function AgencyPage() {
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
          Application: Agency in the Age of AI
        </p>
        <h1
          className="mb-2 pl-8 text-4xl font-semibold md:pl-10"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Why I Built This
        </h1>

        <p className="mb-12 mt-6 pl-8 text-[1.05rem] leading-relaxed md:pl-10">
          Most mornings I open a conversation with an AI and work on something I
          don&apos;t yet understand well. The goal is to come out knowing more and
          able to do more than I did going in. If the thinking happens in the
          machine and stays there, I have gained nothing, so I build my working
          habits around keeping it.
        </p>

        <div className="space-y-14">
          <Section title="Two leaks">
            <p>
              The first leak is meaning that is made and never taken up. By taken
              up I mean internalized, so that it becomes something I know. The gap
              looks like reading a few pages and not remembering a single word. An
              hour of work produces an insight, a cleaner framing, a decision
              about what to do next, and a week later it is gone, or I am acting
              as if it never happened. I call this the uptake gap.
            </p>
            <p>
              The second leak is quieter. AI output is the wording most likely to
              be believed. It arrives shaped like a conclusion, and a reader can
              take it up without ever seeing what it was a result of. It is like
              receiving the end result of an experiment without knowing the
              hypothesis. Two mistakes follow, and they will look familiar to
              anyone who has met Type I and Type II error. I can accept something
              that nothing supports, or I can discard something sound because I
              can&apos;t see why it works. Nothing in the prose helps me tell the
              two apart, since believable and grounded read the same on the page.
            </p>
          </Section>

          <Section title="Why it happens to me">
            <p>
              I am monotropic. Monotropism is a way of attending in which
              attention narrows into one interest at a time and goes very deep.
              Deep focus makes insight easy. The mundane work of carrying an
              insight forward, writing it down, connecting it to the last thing,
              coming back to it, is what falls away, and without it nothing is
              internalized. That is a predictable pattern, and a predictable
              pattern can be designed around. I expect other people lose meaning
              the same way for other reasons: a full calendar, a noisy week, a
              tool that forgets.
            </p>
          </Section>

          <Section title="Tools as corrections">
            <p>
              So I build tools that correct for it. The approach matters more than
              the list. I design around the way I actually work and treat each
              failure as information about what to build next. The first is
              Connective Tissue, my name for a system of shared anchor files and
              update protocols. It links chats and projects so they move together.
              Each session starts from the current state of the work, with the
              reasoning kept alongside the conclusion, which is the answer to the
              second leak. The AI I use most is Claude, and nothing here depends
              on that choice. Continuity of that kind belongs to the files. Making
              the material mine takes a practice, and that is the part I am still
              building, something closer to a pedagogy for working with AI. How
              the system works is laid out
              on <a href="https://portfolio.endogenator.com/#connective">my work page</a>.
            </p>
          </Section>

          <Section title="What I think AI is for">
            <p>
              <a href="/frameworks/belief-space">Belief Space</a> is the sum
              of what human minds have so far perceived or conceived. Each of us
              holds a region of it, and a region has edges, the places where what
              we can see runs out. I see three possible roles for AI at those
              edges, in ascending order.
            </p>
            <p>
              The first is finding the edge. That is a diagnosis: where my
              understanding stops, and what is actually constraining me, which
              often differs from the problem I walked in with. The second is
              helping me cross it, by supplying what I need for the next step and
              letting me test that step. The third is leaping to a belief space no
              one has occupied before. That is a possibility I am not yet
              claiming.
            </p>
            <p>
              The uptake gap sits between the first two roles. An edge that is
              found and not internalized is only a note. So I try to end each
              session with a next step chosen for what it will teach me whatever
              happens, which gives the result a hypothesis to belong to. Where
              things stand: edge-finding works. Crossing is partial. Leaping is an
              aspiration.
            </p>
          </Section>

          <Section title="Where this goes">
            <p>
              Meaning that gets taken up compounds in the person who took it up. A
              transcript just sits there. The tools exist to produce the first
              kind.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}