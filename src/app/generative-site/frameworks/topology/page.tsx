import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Topology" };

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

export default function TopologyPage() {
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
          Topology: PS, BS, TS, AR
        </h1>

        <div className="space-y-14">
          <Section title="Four domains, one space">
            <p>
              Possibility Space, Belief Space, Transformation Space and Aggregated
              Reality are four domains of one continuous space. They nest inside
              each other, and each is a narrowing filter on the one before it.
            </p>
            <p>
              <strong>Possibility Space (PS)</strong> is the full space of
              what the universe permits: every transformation physics allows,
              whether or not any mind has perceived it or ever will. The concept
              comes from David Deutsch&apos;s constructor theory, which treats
              physics as the science of which transformations are possible and
              which are not. PS is that space taken whole. It is invariant. It
              doesn&apos;t move and doesn&apos;t care what anyone believes. Most
              of it is never actualized, and is beyond the reach of any evolved
              cognitive system that will ever exist.
            </p>
            <p>
              <strong>Belief Space (BS)</strong> is the human-perceived or
              human-conceived subset of PS, aggregated across every mind that has
              ever conceived something. The only entry threshold is being
              perceived or conceived. Sharing isn&apos;t required: a private
              realization no one else ever hears about is in BS the moment it is
              conceived. BS is mostly cognitive in character. Its unit is
              the <strong>reference frame</strong>, a learned mapping of
              qualia to substrate, built through experience.
            </p>
            <p>
              <strong>Transformation Space (TS)</strong> is the individual,
              always-instantiated subset: an enactment, physical or between
              people, happening now. A reference frame is cognitive, something a
              person has whether or not they are using it. TS is what happens when
              that structure meets a present situation and a transformation gets
              chosen. A rock sitting in front of someone is a fact about the
              world. Whether it gets thrown, used as a hammer, or ignored is TS.
              TS is bounded by BS, since no one can enact a transformation they
              have no reference frame for. Having the reference frame doesn&apos;t
              guarantee it reaches TS, and the sections below give the mechanism
              for that gap.
            </p>
            <p>
              <strong>Aggregated Reality (AR)</strong> is the zeitgeist-level
              sum of what everyone enacts. No one perceives it directly. It can
              only be reconstructed from a position within it. If TS is the
              individual event, AR is that event summed across all of humanity. BS
              is the same kind of sum, taken over what people conceive.
            </p>
          </Section>

          <Section title="Domains, not categories">
            <p>
              The four domains were inspired by the frequency domain. The mapping
              isn&apos;t technical. The frequency domain is a model for how one
              underlying reality can look completely different depending on the
              domain you view it through. Movement from PS toward AR is movement
              from discovering the possible toward instantiating it: the same
              territory, read at increasing degrees of actualization.
            </p>
            <p>
              PS, BS, TS and AR are regions of a continuous topology. They are not
              four types of knowledge or four modes of experience. Position,
              distance, density and direction all mean something here, as they
              wouldn&apos;t in a simple taxonomy.
            </p>
            <p>
              There are two gaps here, at different scales or times. A point can
              have real density in PS (nothing in physics forbids it) and close to
              zero density in BS (almost no one has conceived it). Many of the
              better outcomes within reach that our current belief space keeps out
              of view are points of this kind. Once a point is conceived, it can
              have real density in BS and still close to zero density in AR
              (almost no one is enacting it). The first gap is between what PS
              permits and what BS covers. The second is between what BS holds and
              what AR shows. Because this is a topology, each gap has a shape and
              a direction, and coordination can be pointed at it. A better belief
              space is one in which we can see more of the possibilities we would
              collectively want to pursue, including the ones the current one
              obscures.
            </p>
          </Section>

          <Section title="Distance">
            <p>
              If this is a topology, distance needs a measure, and probably more
              than one. There are two candidates. Both live in PS, since PS is the
              invariant that everything else is measured against.
            </p>
            <p>
              <strong>Transformation count.</strong> How many applications of
              physically possible transformations separate two points. One step
              away is the adjacent possible in the literal sense. This is
              sequential depth.
            </p>
            <p>
              <strong>Substrate count.</strong> How many distinct physical
              substrates have to be in place at once for a transformation to occur
              at all. A single switch is one substrate. A supply chain or a
              coordinated construction project is many, aligned at once. This is
              breadth.
            </p>
            <p>
              Both are PS-domain measures. They depend only on what the physics
              requires, whoever is doing the transforming and however many people
              are involved. A person&apos;s poverty is partly a fact about
              transformation count. Someone with fewer resources has more
              transformations to complete to reach food than someone with more.
              That distance is objective.
            </p>
            <p>
              PS stays invariant underneath all of this. BS and TS each express it
              differently, one in cognition and one in enactment. Whether a given
              PS distance can be crossed by a specific person is settled outside
              PS, by permeability.
            </p>
          </Section>

          <Section title="Identity and permeability">
            <p>
              Akerlof and Kranton&apos;s identity utility model scores how well a
              person&apos;s characteristics match the prescribed ideal for a
              category they identify with or aspire to. They built that fit
              measure to feed a utility payoff calculation. Read another way, the
              same measure is a permeability.
            </p>
            <p>
              Close fit means high permeability and low resistance. A
              category&apos;s beliefs, assumptions and discourse move freely in
              both directions across the boundary between a person and that region
              of Belief Space. Poor fit means high resistance. The belief in that
              region may be dense and immediately available, and it still
              won&apos;t cross, because the membrane isn&apos;t open. Distance and
              effort have nothing to do with it. It is the variable Akerlof and
              Kranton already had, doing a different job.
            </p>
            <p>
              Belief behaves like a gas. It fills whatever space permeability
              permits, and no active sender has to push it across. Given a
              permeability setting, belief diffuses into whatever region has
              opened to it, at a density set by that region&apos;s prior belief
              and the pressure difference between the two sides. Conversation, in
              this picture, is each person adjusting how open they are, moment to
              moment. What results is made in the exchange. Neither side assembled
              it in advance.
            </p>
            <p>
              Two things can happen independently once something crosses.
              Legibility is whether what arrives is recognizable: whether the
              receiving side has categories that give it shape. Resonance is
              whether the density that arrives matches something already building
              on the other side, so that it amplifies. Something can be perfectly
              legible and not resonate at all. Something can resonate without ever
              being explicitly parsed.
            </p>
            <p>
              This also gives the adjacent possible a mechanism. What is adjacent
              for a given person is fixed by what is currently permeable to them.
              What exists in PS doesn&apos;t fix it, and neither does what has
              been conceived in BS. Permeability sets the boundary of what is
              reachable right now, and the number of reference frames alone does
              not.
            </p>
            <p>
              Permeability also varies within a single person. Identity is one
              complex system, and permeability differs across its domains or
              functions. Someone in real tension with themselves is open in one
              domain and closed in another. That is one system showing
              inconsistent permeability, and it is a mistake to picture two
              separate pieces in conflict. Resonance failing between people and
              this inconsistency within a person may be the same mechanism at
              different scales. That thread is still being pulled.
            </p>
          </Section>

          <Section title="Access versus acquisition">
            <p>
              When TS shrinks under cognitive load, no reference frames have
              disappeared. Permeability has narrowed under pressure. Someone under
              resource-scarce stress hasn&apos;t forgotten that a rock can be used
              as a hammer. The membrane has closed on almost everything except the
              paths that resolve the active constraint, because the person&apos;s
              openness has been pulled there.
            </p>
            <p>
              The consequence is structural. A person whose permeability has
              narrowed to triage will systematically miss transformations that
              would resolve the constraint at a level they aren&apos;t scanning.
              Someone worried about their next meal can know that other options
              exist. Those options still don&apos;t cross into TS, because almost
              nothing except food-directed paths is permeable right now.
              Everything else stays available in principle and closed in practice.
            </p>
            <p>
              This narrowing is acute and situational. An active, resolvable
              pressure causes it, and it reverses once the pressure lifts.
              Crystallization is the durable version of the same mechanism.
            </p>
          </Section>

          <Section title="Crystallization">
            <p>
              Neuroplasticity is metabolically expensive to maintain. Past a
              certain point, funding open revision costs more than further
              learning is worth, and biology shifts the balance toward doing. Read
              this way, crystallization is the same triage as above, running on a
              developmental timescale. It is a default setting, and nothing has
              malfunctioned.
            </p>
            <p>
              TS size tracks accumulated reference frames: more learned mappings
              make more transformations visible in a given situation.
              Crystallization tracks how fixed identity becomes in processing new
              experience. The two are distinct, and they can decouple. A rigid
              expert has a large TS and high crystallization. A plastic but
              under-resourced child has a small TS and low crystallization.
            </p>
            <p>
              The design carries an externality. Crystallized belief resists
              revision partly because disconfirming information is never admitted.
              Permeability at that point is asymmetric: still open to confirming
              information, and closed to whatever would trigger revision. That
              makes crystallization self-sustaining beyond what the energy logic
              alone would require. A crystallized belief rarely meets a real
              challenge, because the information that would be one doesn&apos;t
              cross the membrane.
            </p>
            <p>
              This is a default, and it can be reversed. There is evidence that
              neuroplasticity can be transiently increased even late in life, so
              permeability reduction is costly to reverse and not impossible. What
              can reopen a crystallized region is open, including whether that
              takes a mechanism distinct from ordinary correctors.
            </p>
          </Section>

          <Section title="Drift">
            <p>
              Drift is the ontological side of a belief going slack while
              coordination persists. It happens at the level of what one person
              enacts. One person&apos;s enactment losing its tether to PS is a
              drift event. AR shifts only once enough individuals have gone slack
              for the aggregate to move.
            </p>
            <p>
              Accounts of perception as a controlled process describe the same
              thing. A mind&apos;s model of reality stays honest only while
              something keeps tethering it to what is out there. When the tether
              weakens, the model doesn&apos;t announce that it has become
              unreliable. It keeps running, confident and no longer tracking.
              Drift is that failure in individuals, before it shows in the
              aggregate.
            </p>
          </Section>

          <Section title="Where this connects">
            <p>
              <a href="/frameworks/belief-to-knowledge">Belief to Knowledge</a> is
              what happens inside a single mind once something has
              crossed. <a href="/frameworks/correctors-recruiters">Correctors and Recruiters</a> are
              what move a point through this topology: correctors keep movement
              tethered to PS, and recruiters widen the membrane for many people at
              once. <a href="/">Generative Coordination</a> is both working
              together.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}