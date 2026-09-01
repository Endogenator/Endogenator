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
              Possibility Space, Belief Space, Transformation Space, and
              Aggregated Reality aren&apos;t four separate ideas. They&apos;re
              four domains of one continuous space, nested inside each
              other, each one a narrowing filter on the one before it.
            </p>
            <p>
              <strong>Possibility Space (PS)</strong> is the full space of
              what the universe permits, every transformation physics
              allows, whether or not any mind has ever perceived it or ever
              will. The concept comes directly from David Deutsch&apos;s
              constructor theory, physics reframed as the science of which
              transformations are and aren&apos;t possible, rather than the
              science of predicting what happens next. PS is that space
              taken whole. It&apos;s invariant. It doesn&apos;t move,
              doesn&apos;t care what anyone believes, and most of it is
              never actualized, structurally unreachable by any evolved
              cognitive system that will ever exist.
            </p>
            <p>
              <strong>Belief Space (BS)</strong> is the human-perceived or
              human-conceived subset of PS, aggregated across every mind
              that has ever conceived something. The entry threshold is
              just perceived or conceived, nothing more. Sharing isn&apos;t
              required for something to be in BS, a private realization no
              one else ever hears about is already BS-resident the moment
              it&apos;s conceived. BS is mostly cognitive in character. Its
              unit is the <strong>reference frame</strong>, a learned
              mapping of qualia to substrate, built through experience.
            </p>
            <p>
              <strong>Transformation Space (TS)</strong> is the individual,
              always-instantiated subset. Not a possibility under
              consideration, an actual enactment, physical or
              intersubjective, happening right now. A reference frame is
              cognitive, something a person has whether or not they&apos;re
              using it. TS is what happens when that cognitive structure
              meets an actually-present situation and a choice of
              transformation gets made. A rock sitting in front of someone
              isn&apos;t a reference frame, it&apos;s a fact about the
              world. Whether that rock gets thrown, used as a hammer, or
              ignored, that&apos;s TS. TS is bounded by BS, you can&apos;t
              enact a transformation you have no reference frame for, but
              having the reference frame doesn&apos;t guarantee it
              populates TS. That gap gets a real mechanism further down.
            </p>
            <p>
              <strong>Aggregated Reality (AR)</strong> is the
              zeitgeist-level sum of everyone&apos;s enacted reality, never
              perceived directly by anyone, only ever reconstructed from a
              position within it. If TS is the individual event, AR is what
              you get from summing that event across all of humanity, the
              same kind of operation that makes BS an aggregate of
              individual conceptions, just applied to enactment instead of
              cognition.
            </p>
          </Section>

          <Section title="Domains, not categories">
            <p>
              The inspiration for these four domains came from the concept
              of the frequency domain, not as a literal technical mapping,
              but as a model for how the same underlying reality can look
              completely different depending on which domain you view it
              through. Movement from PS toward AR is movement from the
              discovery of the possible toward the instantiation of the
              possible, the same territory, read at increasing degrees of
              actualization.
            </p>
            <p>
              PS, BS, TS, and AR are regions of a continuous topology, not
              four types of knowledge or four modes of experience. Position,
              distance, density, and direction are all meaningful here the
              way they wouldn&apos;t be for a simple taxonomy.
            </p>
            <p>
              A point can have real density in BS (it&apos;s been
              conceived, it&apos;s thinkable) and real density in PS
              (nothing in physics forbids it) while having close to zero
              density in AR (almost no one is actually enacting it yet). A
              Pareto-optimized form of society is exactly this kind of
              point: conceivable, physically constructible, and almost
              entirely unenacted. That&apos;s not a failure of imagination
              or a failure of physics. It&apos;s a gap between where BS and
              PS density already sit and where AR currently is, and because
              this is a topology rather than a category system, that gap
              has an actual shape, a direction, something coordination can
              be pointed at.
            </p>
          </Section>

          <Section
            title="Distance, and what's actually invariant"
            status="Status: the general shape of this is settled. The formal proof isn't done yet."
          >
            <p>
              If this is a real topology, distance needs a real measure, or
              more likely, more than one. Two candidates, both live in PS
              specifically, since PS is the invariant substrate everything
              else gets measured against:
            </p>
            <p>
              <strong>Transformation count.</strong> How many applications
              of physically possible transformations separate two points.
              One step away is the adjacent possible in the literal sense.
              This is sequential depth.
            </p>
            <p>
              <strong>Substrate count.</strong> How many distinct physical
              substrates need to be simultaneously in place for a
              transformation to occur at all. A single switch is one
              substrate. A supply chain or a coordinated construction
              project is many, aligned at once. This is breadth, not depth.
            </p>
            <p>
              Both of these are PS-domain measures. They don&apos;t care
              who&apos;s doing the transforming or how many people are
              involved cognitively, only what the physics requires. A
              person&apos;s poverty is partly a fact about transformation
              count. Someone with fewer resources genuinely has more
              transformations to do to reach food than someone with more,
              an objective distance, not a perceptual one.
            </p>
            <p>
              PS stays invariant underneath all of this, the fixed thing
              that BS and TS are each expressing differently, one
              cognitively, one enactedly. What actually determines whether
              a given PS distance becomes crossable for a specific person
              isn&apos;t a property of PS itself. It&apos;s the next
              section.
            </p>
          </Section>

          <Section
            title="Identity and permeability"
            status="Status: this replaces an earlier draft of this section entirely. The first pass modeled identity as a transfer function with variable gain, catalyst in some regions, filter in others. That framing has been retired, not patched, in favor of the mechanism below, which has a real lineage behind it rather than a borrowed physics metaphor."
          >
            <p>
              Akerlof and Kranton&apos;s identity utility model scores how
              well a person&apos;s own characteristics match the prescribed
              ideal for a category they identify with or aspire to, a fit
              measure, originally built to feed a utility payoff
              calculation. Read differently, that same fit measure isn&apos;t
              just a payoff input. It&apos;s a permeability.
            </p>
            <p>
              Close fit means high permeability, low resistance. A
              category&apos;s beliefs, assumptions, and discourse move
              freely across the boundary between a person and that region
              of Belief Space, in both directions. Poor fit means high
              resistance. That region&apos;s belief might be dense and
              immediately available, and it still won&apos;t cross, not
              because it&apos;s blocked by distance or effort, but because
              the membrane simply isn&apos;t open. Same underlying variable
              Akerlof and Kranton already had, doing a different job than
              the one they used it for.
            </p>
            <p>
              Belief behaves like gas, filling whatever space permeability
              permits rather than needing to be pushed across by an active
              sender. Given a permeability setting, belief diffuses into
              whatever region has opened to it, at whatever density that
              region&apos;s own prior belief and the pressure differential
              between the two sides allow. Conversation, in this picture,
              isn&apos;t two people exchanging formed packets. It&apos;s
              each person adjusting how open they are, moment to moment,
              and what results is made in the exchange itself, not
              assembled in advance by either side.
            </p>
            <p>
              Two things can happen independently once something crosses.
              Legibility is whether what arrives is even recognizable,
              whether the receiving side has categories that give it shape.
              Resonance is whether the density that arrives matches
              something already building on the other side, so it
              amplifies rather than just sitting there inert. Something can
              be perfectly legible and still not resonate at all. Something
              can resonate without ever being explicitly parsed. These
              aren&apos;t the same property wearing two names.
            </p>
            <p>
              This is also where the adjacent possible connects to
              something mechanical rather than a resonant phrase. The
              adjacent possible isn&apos;t fixed by what exists in PS or
              even by what&apos;s been conceived in BS. It&apos;s fixed by
              what&apos;s currently permeable to a given person.
              Permeability, not reference frame count alone, sets the
              boundary of what&apos;s reachable right now.
            </p>
            <p>
              Permeability doesn&apos;t only operate between people. It
              also varies within a single person&apos;s identity, across
              different domains or functions of that same complex system,
              rather than between discrete parts. Someone in real tension
              with themselves shows permeability behaving differently
              across different regions of one system, open in one domain,
              closed in another, not two separate pieces in conflict but
              one system exhibiting inconsistent permeability across its
              own functions. Interpersonal resonance failure and this kind
              of internal inconsistency may be expressions of the same
              underlying mechanism, observed at different scales, though
              that&apos;s a thread still being pulled rather than something
              settled.
            </p>
          </Section>

          <Section title="Access versus acquisition">
            <p>
              TS shrinking under cognitive load isn&apos;t reference frames
              disappearing. It&apos;s permeability narrowing under
              pressure. Someone under real, resource-scarce stress
              hasn&apos;t forgotten that a rock can be used as a hammer.
              Almost everything except the paths that resolve the active
              constraint has had its membrane close, not because those
              other reference frames were lost, but because the
              person&apos;s openness to them, right now, has been pulled
              elsewhere.
            </p>
            <p>
              The consequence is structural, not personal. A person whose
              permeability has narrowed to triage will systematically miss
              transformations that would resolve the constraint at a level
              that narrowed permeability isn&apos;t scanning for. Someone
              worried about their next meal isn&apos;t failing to see that
              other options exist. Those options simply aren&apos;t
              crossing into TS, because almost nothing except food-directed
              paths is permeable right now, and everything else stays
              available in principle while remaining closed off in
              practice.
            </p>
            <p>
              This is acute and situational, permeability narrowed by an
              active, resolvable pressure. It&apos;s reversible once the
              pressure lifts. The next section is the durable version of
              the same mechanism.
            </p>
          </Section>

          <Section title="Crystallization is permeability reduction, by design">
            <p>
              Neuroplasticity is metabolically expensive to maintain. Past
              a certain point, continuing to fund open revision costs more
              than the value of further learning, and biology shifts the
              balance toward doing rather than learning. Crystallization,
              read this way, is the same triage logic as Access versus
              acquisition, just running on a developmental timescale
              instead of a situational one. It&apos;s a default setting,
              not a malfunction.
            </p>
            <p>
              TS size tracks accumulated reference frames, more learned
              mappings means more transformations become visible in a
              given instantiated situation. Crystallization tracks
              something else, how fixed identity becomes in processing new
              experience. These stay genuinely distinct axes, and they can
              decouple. A rigid expert has a large TS and high
              crystallization. A plastic but under-resourced child has a
              small TS and low crystallization.
            </p>
            <p>
              An externality rides along with this otherwise sound design.
              Crystallized belief resists revision partly because
              disconfirming information is structurally excluded, not
              admitted in the first place. Permeability at that point
              isn&apos;t just reduced, it&apos;s selectively asymmetric:
              still open to confirming information, closed specifically to
              whatever would trigger revision. That&apos;s what makes
              crystallization self-sustaining beyond what the underlying
              energetic logic alone would require. It explains why a
              crystallized belief doesn&apos;t just resist being changed
              when challenged, it rarely encounters a real challenge at
              all, the information that would constitute one doesn&apos;t
              cross the membrane to begin with.
            </p>
            <p>
              This is a default, not a terminal state. There is real
              evidence that neuroplasticity can be transiently increased
              even late in life, which means permeability reduction isn&apos;t
              structurally irreversible so much as it&apos;s costly to
              reverse. What can reopen a crystallized region, and whether
              that connects to a distinct class of plasticity-restoring
              mechanism separate from ordinary correctors, is genuinely
              open.
            </p>
          </Section>

          <Section title="Drift, held strictly individual">
            <p>
              Drift, the ontological side of belief going slack while
              coordination persists, lives at the level of an
              individual&apos;s enacted reality, not at the aggregate level
              directly. A single ER losing its tether to PS is a drift
              event. AR only shifts once enough individual ER instances
              have gone slack for the aggregate itself to move. This
              mirrors a controlled account of perception: a mind&apos;s
              model of reality stays honest only as long as something
              keeps tethering it to what&apos;s actually out there, and
              when that tethering weakens, the model doesn&apos;t announce
              its own unreliability, it just keeps running, confident and
              no longer tracking. Drift is that failure, individually,
              before it&apos;s ever visible in the aggregate.
            </p>
          </Section>

          <Section title="Where this connects, without restating it here">
            <p>
              This page is the foundation the other frameworks build on,
              not a replacement for them. XIK-TS is what identity&apos;s
              permeability looks like at the level of a single mind. ETCS
              is what happens when TS-level coordination operates at
              institutional scale. Correctors and Recruiters are the actual
              mechanisms that move a point through this topology,
              correctors keeping movement tethered to PS, recruiters
              expanding how many TS instances are enacting toward a given
              point, in permeability terms, widening the membrane at scale
              rather than for one person at a time. Generative Coordination
              is what it looks like when both are working together, toward
              a point with real BS and PS density that AR hasn&apos;t
              reached yet. None of that gets re-argued here. This page
              establishes the space, and the permeability mechanism, they&apos;re
              all operating with.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}