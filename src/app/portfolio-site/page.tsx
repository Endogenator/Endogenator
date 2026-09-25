import Image from "next/image";

const ECON = "https://econ100-graph-explorers.vercel.app/";
const BREAK_EVEN = "/tools/break-even.html";
const THUMBS = "/portfolio/thumbs/";

// Copy lives in plain strings so apostrophes don't trip JSX lint rules.
const TEXT = {
  lede: "Everything here started with a problem I saw across the table from a founder or in a classroom. AI did much of the building. Deciding what counts as right, and checking that it is, stayed with me.",
  mentoringIntro: "A product idea isn't a business. A business is the system that makes selling it repeatable, and most of what sinks a new one is a constraint nobody saw in time. These tools help founders see their system and find out what they don't yet know.",
  breakEven: "Most break-even tools ask founders to predict their sales. This one works out what has to be true for the business to cover its costs, and shows how much of that the founder actually knows. Three example businesses are built in: retail, service, and manufacturing.",
  toolkitNote: "The tools will share one business file saved on the owner's own computer. Nothing is sent anywhere.",
  econIntro: "Built for Introduction to Economics at Crafton Hills College, taught fully online, including dual-enrollment sections. The course platform strips out interactivity, so these are hosted separately and linked in. Students explore each graph as many times as they need, with nothing to submit.",
  biIntro: "Dashboards and reporting built for decisions, with clarity over volume.",
  biCard: "A Looker Studio dashboard for a fictional retailer that compares planned ranges with actual results month by month, showing where reality landed inside or outside each band. It's the after-launch view of the same system the mentoring tools map before launch.",
  about1: "I fix things. Sometimes that means soldering a circuit board. Sometimes it means helping someone turn a business idea into a plan they can actually execute. Sometimes it means working through why markets behave the way they do with a room full of students.",
  about2: "I've owned retail businesses, supervised an IT help desk, taught economics, and mentor founders as a volunteer. The thread through all of it is systems: how they work, why they break, and what it takes to rebuild them from the inside out.",
};

const BE_POINTS = [
  "Founders say where each number came from. The tool decides whether it's a fact, evidence, or a guess.",
  "No odds anywhere. Putting probabilities on guesses makes them look like knowledge.",
  "Staff, capacity, and owner time are built in, because a result that looks too good usually means a limit is missing.",
  "It points to the one guess most worth testing, then hands the whole picture to any free AI tool with instructions not to invent certainty.",
];

const PLANNED = [
  ["Is this a business yet?", "From product idea to the system around it: who buys, how they find you, where the cash waits."],
  ["Startup costs", "Every line tagged by where it came from, with a contingency sized to what's still a guess."],
  ["Pricing", "Works backward from costs and required volume to a price floor, then compares it with the market."],
  ["Operations", "Vendors, space, inventory, and staffing, with the limits each one sets."],
  ["Customer discovery", "AI generates the candidates. Contact with real customers decides which survive."],
  ["Plan builder", "Assembles everything into a business plan draft, with every gap marked instead of filled."],
  ["Growth", "Where surplus should go: relieving the next constraint before it binds."],
];

const ECON_TOOLS = [
  { file: "Econ100_InteractiveGraphLab_03_PPF.html", img: "ppf.jpg", title: "Production possibilities", desc: "What an economy can make, what it can't yet, and how growth changes that." },
  { file: "Econ100_InteractiveGraphLab_01_SupplyDemand.html", img: "sd.jpg", title: "Supply and demand", desc: "A market moving to a new equilibrium, and the shortage that pushes the price there." },
  { file: "Econ100_InteractiveGraphLab_02_FirmProfitLoss.html", img: "firm.jpg", title: "The firm: profit and loss", desc: "A price-taking firm choosing output where marginal cost meets price." },
  { file: "Econ100_InteractiveGraphLab_04_Monopoly.html", img: "mono.jpg", title: "Monopoly", desc: "The only seller, on the same costs, setting price by holding output back." },
  { file: "adas_explorer.html", img: "adas.jpg", title: "Aggregate demand and supply", desc: "Shift a curve, watch the economy move, then let the long run play out." },
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
          <p className="name">Brian R. Davis</p>
          <h1 className="thesis">
            AI supplies the iterations. <span>Systems thinking supplies the validator.</span>
          </h1>
          <div className="lede">
            <p>{TEXT.lede}</p>
          </div>
        </div>
        <nav aria-label="Sections">
          <a href="#mentoring">Mentoring toolkit</a>
          <a href="#econ">Economics teaching tools</a>
          <a href="#bi">Business intelligence</a>
          <a href="#about">About and contact</a>
        </nav>
      </header>

      <section id="mentoring">
        <h2>Mentoring toolkit</h2>
        <p className="intro">{TEXT.mentoringIntro}</p>
        <article className="feature">
          <a className="shot" href={BREAK_EVEN}>
            <Image src={`${THUMBS}be.jpg`} width={640} height={400} priority
              alt="Cash-over-time chart from the break-even tool, showing good, middle, and tough cases against a stop point" />
          </a>
          <div>
            <p className="status">Live demo</p>
            <h3>Break-even under uncertainty</h3>
            <p>{TEXT.breakEven}</p>
            <ul>
              {BE_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a className="go" href={BREAK_EVEN}>Open the demo</a>
          </div>
        </article>
        <h3 className="sub">In development</h3>
        <Planned items={PLANNED} />
        <p className="note">{TEXT.toolkitNote}</p>
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
        <h3 className="sub">Also built for the course</h3>
        <Planned items={ALSO_BUILT} />
      </section>

      <section id="bi">
        <h2>Business intelligence</h2>
        <p className="intro">{TEXT.biIntro}</p>
        <div className="empty">
          <p className="status dev">In progress</p>
          <h3>Calibration dashboard</h3>
          <p className="note">{TEXT.biCard}</p>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <div className="about">
          <div>
            <p>{TEXT.about1}</p>
            <p>{TEXT.about2}</p>
          </div>
          <div className="contact">
            <a href="mailto:brianruthvendavis@gmail.com">brianruthvendavis@gmail.com</a>
            <a href="https://www.linkedin.com/in/brianruthvendavis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>&copy; {year} Brian R. Davis</footer>
    </div>
  );
}
