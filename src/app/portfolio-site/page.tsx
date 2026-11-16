import Image from "next/image";

const ECON = "https://econ100-graph-explorers.vercel.app/";
const THUMBS = "/portfolio/thumbs/";
const THEORY = "https://generative.endogenator.com";
const FRONT_DOOR = "https://endogenator.com";

// Copy lives in plain strings so apostrophes don't trip JSX lint rules.
const TEXT = {
  lede: "Everything here started with a problem I saw in a classroom, across the table from a founder, or in my own work. AI did much of the building. Deciding what counts as right, and checking that it is, stayed with me.",
  ctIntro: "Every new AI conversation starts from nothing. Connective Tissue is how I keep dozens of sessions across separate projects consistent over months when none of them remembers the others. Each area of work has one canonical document, an anchor, that any session can read and only one project can change. It links chats and projects so they move together.",
  econIntro: "Built for Introduction to Economics at Crafton Hills College, taught fully online, including dual-enrollment sections. The course platform strips out interactivity, so these are hosted separately and linked in. Students explore each graph as many times as they need, with nothing to submit. A student changes something and the graph answers.",
  mentoring: "I mentor founders as a volunteer. A business is the system that makes selling a product repeatable, and most of what sinks a new one is a constraint nobody saw in time. The tools I am building for that work belong to Endogenation and are not public.",
  about: "I've owned retail businesses, supervised an IT help desk, taught economics, and mentor founders as a volunteer. The thread through all of it is systems: how they work, why they break, and what it takes to rebuild them from the inside.",
};

const CT_STEPS = [
  ["Read", "Every session starts by reading the current anchor for its area of work."],
  ["Propose", "A session with something new files a supplement. It never edits the anchor."],
  ["Reconcile", "The owning project gathers supplements and works through them with me. Nothing gets folded in silently."],
  ["Replace", "The result is written as a full replacement, so the anchor always reads as one coherent document."],
  ["Apply", "A script swaps the replacement in and archives everything it consumed. No AI session touches this step."],
];

const CT_POINTS = [
  ["One owner per area", "Every session can read any anchor. Only its owning project can change it."],
  ["Proposals first", "Contributions arrive as separate files, the way code arrives as a pull request."],
  ["A person rules", "AI proposes. I decide what becomes settled."],
  ["Status is explicit", "Every term is proposed, working, settled or retired, and the record shows which."],
  ["History kept", "Retired ideas and superseded versions are archived, so later sessions know what was tried and dropped."],
  ["One place per fact", "Each fact lives in one place. Everything else refers to it."],
  ["Self-governing", "The protocol that runs the system has its own path for changing itself."],
];

const ECON_TOOLS = [
  { file: "Econ100_InteractiveGraphLab_03_PPF.html", img: "ppf.jpg", title: "Production possibilities", desc: "What an economy can make, what it can't yet, and how growth changes that." },
  { file: "Econ100_InteractiveGraphLab_01_SupplyDemand.html", img: "sd.jpg", title: "Supply and demand", desc: "A market moving to a new equilibrium, and the shortage that pushes the price there." },
  { file: "Econ100_InteractiveGraphLab_02_FirmProfitLoss.html", img: "firm.jpg", title: "The firm: profit and loss", desc: "A price-taking firm choosing output where marginal cost meets price." },
  { file: "Econ100_InteractiveGraphLab_04_Monopoly.html", img: "mono.jpg", title: "Monopoly", desc: "The only seller, on the same costs, setting price by holding output back." },
  { file: "adas_explorer.html", img: "adas.jpg", title: "Aggregate demand and supply", desc: "Shift a curve, watch the economy move, then let the long run play out." },
];

const ECON_IN_DEV = [
  ["Classroom economy simulation", "A semester-long simulation for ECON 100 that replaces weekly discussion posts. Each student is a consumer or a producer in a two-good economy. Each week the class's decisions are pooled into one market, and the outcome sets the next week's state. It runs without a server or a database: the state of the economy is a file, and each round produces a new one."],
];

const ALSO_BUILT = [
  ["The Economist's Notebook", "Twelve chapters of lessons built to work inside the course platform."],
  ["Concept Correction", "A two-tier assessment that replaced graded discussion posts: a private graded tier and an optional public one."],
  ["Thinking Like an Economist", "A reply rubric that rewards reasoning over recall."],
];

function Planned({ items }: { items: string[][] }) {
  return (
    <ul className="planned">
      {items.map(([title, desc]) => (
        <li key={title}>
          <b>{title}</b>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PortfolioPage() {
  const year = new Date().getFullYear();
  return (
    <div className="wrap">
      <header className="top">
        <div>
          <p className="name">Brian Davis</p>
          <h1 className="thesis">
            I build tools that <span>make feedback visible.</span>
          </h1>
          <div className="lede">
            <p>{TEXT.lede}</p>
            <p>
              The reasoning behind the work is a theory I
              call <a href={THEORY}>Generative Coordination</a>. How I got to it
              is at <a href={FRONT_DOOR}>endogenator.com</a>.
            </p>
          </div>
        </div>
        <nav aria-label="Sections">
          <a href="#connective">Connective Tissue</a>
          <a href="#econ">Economics teaching tools</a>
          <a href="#mentoring">Mentoring</a>
          <a href="#about">About and contact</a>
        </nav>
      </header>

      <section id="connective">
        <h2>Connective Tissue</h2>
        <p className="intro">{TEXT.ctIntro}</p>
        <p className="status">In daily use</p>
        <ol className="flow" aria-label="How a change moves through the system">
          {CT_STEPS.map(([title, desc], i) => (
            <li key={title}>
              <span className="n">{i + 1}</span>
              <b>{title}</b>
              <span>{desc}</span>
            </li>
          ))}
        </ol>
        <h3 className="sub">Design decisions</h3>
        <Planned items={CT_POINTS} />
        <p className="note">
          Why I built it, and what it does and doesn&apos;t fix, is
          in <a href={`${THEORY}/applications/agency-in-the-age-of-ai`}>Why I Built This</a>.
        </p>
      </section>

      <section id="econ">
        <h2>Economics teaching tools</h2>
        <p className="intro">{TEXT.econIntro}</p>
        <div className="grid">
          {ECON_TOOLS.map((t) => (
            <a key={t.file} className="tile" href={`${ECON}${t.file}`} target="_blank" rel="noopener noreferrer">
              <span className="shot">
                <Image src={`${THUMBS}${t.img}`} width={640} height={400} alt={`${t.title} explorer`} />
              </span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>
        <h3 className="sub">In development</h3>
        <Planned items={ECON_IN_DEV} />
        <h3 className="sub">Also built for the course</h3>
        <Planned items={ALSO_BUILT} />
        <p className="note">
          <a href={`${THEORY}/applications/education`}>Education as a System</a> reads
          the institution these tools were built inside.
        </p>
      </section>

      <section id="mentoring">
        <h2>Mentoring</h2>
        <p className="intro">{TEXT.mentoring}</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <div className="about">
          <div>
            <p>{TEXT.about}</p>
          </div>
          <div className="contact">
            <a href="mailto:endogenator@gmail.com">endogenator@gmail.com</a>
            <a href="https://www.linkedin.com/in/brianruthvendavis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://endogenator.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          </div>
        </div>
      </section>

      <footer>&copy; {year} Brian R. Davis</footer>
    </div>
  );
}
