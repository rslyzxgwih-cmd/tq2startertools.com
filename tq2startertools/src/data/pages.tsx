import Link from "next/link";
import { PageDefinition } from "@/components/page-shell";
import {
  ButtonLink,
  Card,
  CardGrid,
  ComparisonTable,
  ConfidenceBox,
  DefinitionGrid,
  ListCard,
  ProsCons,
  Section,
  TextLink
} from "@/components/ui";

function SoloAction({ href, label, variant = "secondary" }: { href: string; label: string; variant?: "primary" | "secondary" }) {
  return (
    <div className="mt-5">
      <ButtonLink cta={{ href, label, variant }} />
    </div>
  );
}

function LinkedCard({
  title,
  body,
  href,
  linkLabel
}: {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <Card title={title} titleClassName="text-lg font-semibold text-white">
      <p className="mt-2 text-slate-300">{body}</p>
      <div className="mt-4">
        <TextLink href={href}>{linkLabel}</TextLink>
      </div>
    </Card>
  );
}

function DecisionAside() {
  const items = [
    { label: "I want to choose a playstyle.", href: "/choose-build/" },
    { label: "I want a class recommendation.", href: "/class-picker/" },
    { label: "I want the safest beginner build.", href: "/builds/beginner/" },
    { label: "I need beginner context first.", href: "/guides/beginner/" }
  ];

  return (
    <aside className="rounded border border-white/10 bg-white/5 p-6" aria-labelledby="home-decision-entry">
      <h2 id="home-decision-entry" className="text-xl font-semibold text-white">
        What do you want to decide?
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="block rounded border border-white/10 p-4" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export const pages = {
  home: {
    title: "Home | Titan Quest 2 Starter Tools",
    description:
      "Decision-first Titan Quest 2 starter tools for choosing a playstyle, beginner build, class path, and next step.",
    breadcrumb: "Home",
    hero: {
      id: "home-title",
      eyebrow: "Make better decisions faster",
      title: "Choose your first Titan Quest 2 path without reading a wiki.",
      body:
        "Start with the decision players actually need to make: what playstyle fits, which beginner path is safest, and what to do next after choosing.",
      ctas: [
        { label: "Choose Playstyle", href: "/choose-build/" },
        { label: "See Beginner Builds", href: "/builds/beginner/", variant: "secondary" }
      ],
      aside: <DecisionAside />
    },
    content: (
      <>
        <Section id="home-playstyle-match" title="Choose by playstyle first">
          <CardGrid columns="md:grid-cols-5">
            <Card title="Melee">
              <p className="mt-2 text-sm text-slate-300">Best if you want direct combat and readable early priorities.</p>
            </Card>
            <Card title="Caster">
              <p className="mt-2 text-sm text-slate-300">Best if you prefer skill timing, area control, and scaling decisions.</p>
            </Card>
            <Card title="Ranged">
              <p className="mt-2 text-sm text-slate-300">Best if you want safer positioning and steady combat rhythm.</p>
            </Card>
            <Card title="Pet">
              <p className="mt-2 text-sm text-slate-300">Best if you want companions to carry part of the fight.</p>
            </Card>
            <Card title="Hybrid">
              <p className="mt-2 text-sm text-slate-300">Best if you accept complexity for flexible build identity.</p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="home-recommendations" title="Recommended starter paths">
          <CardGrid>
            <LinkedCard
              title="Safest Beginner Path"
              body="Recommended for new ARPG players who want low friction, clear upgrades, and simple leveling decisions."
              href="/builds/beginner/"
              linkLabel="Open beginner builds"
            />
            <LinkedCard
              title="Class Picker Path"
              body="Recommended if you know your playstyle but not the mastery direction that should support it."
              href="/class-picker/"
              linkLabel="Use class picker"
            />
            <LinkedCard
              title="Build Hub Path"
              body="Recommended if you already want to compare build categories before reading guides."
              href="/builds/"
              linkLabel="Compare build types"
            />
          </CardGrid>
        </Section>

        <Section id="home-beginner-guide" title="Beginner guide entry">
          <p className="mt-3 max-w-3xl text-slate-300">
            If you are unsure how Titan Quest 2 builds work, start with the beginner guide before committing to mastery, skill,
            or gear choices.
          </p>
          <SoloAction href="/guides/beginner/" label="Read beginner guide" />
        </Section>

        <Section id="home-confidence" title="Confidence status">
          <ConfidenceBox>
            Early-access confidence: recommendations describe decision structure, not final balance claims. Replace
            provisional guidance only after official data is stable.
          </ConfidenceBox>
        </Section>

        <Section id="home-next" title="Next decision">
          <p className="mt-3 text-slate-300">Decide what you enjoy first, then move into a build or class recommendation.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/choose-build/", label: "Choose Playstyle" }} />
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Start with Beginner Builds", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  },

  chooseBuild: {
    title: "Choose Build | Titan Quest 2 Starter Tools",
    description: "Choose a Titan Quest 2 playstyle before selecting a mastery or beginner build.",
    breadcrumb: "Home > Choose Build",
    hero: {
      id: "choose-title",
      title: "Choose the playstyle you actually want to play.",
      body:
        "This page helps you decide between melee, caster, ranged, pet, and hybrid paths before choosing a mastery or build.",
      ctas: [
        { label: "Choose Mastery", href: "/classes/" },
        { label: "See Beginner Builds", href: "/builds/beginner/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="choose-entry" title="Decision entry">
          <CardGrid columns="md:grid-cols-5" as="ul">
            <ListCard title="Melee">I want close-range combat and simple action priorities.</ListCard>
            <ListCard title="Caster">I want skill-driven combat and stronger planning choices.</ListCard>
            <ListCard title="Ranged">I want distance, control, and safer positioning.</ListCard>
            <ListCard title="Pet">I want companions and lower direct execution pressure.</ListCard>
            <ListCard title="Hybrid">I want mixed identity and accept more decisions later.</ListCard>
          </CardGrid>
        </Section>

        <Section id="choose-matrix" title="Compare playstyle decisions">
          <ComparisonTable
            headers={["Playstyle", "Beginner fit", "Complexity", "Next decision"]}
            rows={[
              {
                cells: ["Melee", "High", "Low to medium", <TextLink href="/classes/">Choose durable mastery</TextLink>]
              },
              {
                cells: ["Caster", "Medium", "Medium", <TextLink href="/classes/">Choose skill-scaling mastery</TextLink>]
              },
              {
                cells: ["Ranged", "Medium", "Medium", <TextLink href="/builds/">Compare ranged builds</TextLink>]
              },
              {
                cells: ["Pet", "Medium", "Medium", <TextLink href="/guides/beginner/">Read beginner context</TextLink>]
              },
              {
                cells: ["Hybrid", "Lower", "High", <TextLink href="/classes/">Check mastery tradeoffs</TextLink>]
              }
            ]}
          />
        </Section>

        <Section id="choose-recommendation" title="Recommendation">
          <article className="mt-5 rounded border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">For the current MVP, start with melee or balanced caster.</h3>
            <p className="mt-3 text-slate-300">
              Why: these paths are easiest to explain without finalized game data and give new players clear next decisions
              around mastery, skill priority, and beginner build type.
            </p>
            <p className="mt-3 text-slate-300">
              Best for: Beginner and relaxed players. Endgame and SSF recommendations remain provisional until systems are stable.
            </p>
          </article>
        </Section>

        <Section id="choose-confidence" title="Confidence">
          <ConfidenceBox>Medium confidence for decision structure. Low confidence for exact build power until official data is available.</ConfidenceBox>
        </Section>

        <Section id="choose-next" title="Next decision">
          <p className="mt-3 text-slate-300">After choosing a playstyle, decide which mastery direction supports it.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/classes/", label: "Choose Mastery" }} />
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Use beginner-safe path", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  },

  builds: {
    title: "Builds | Titan Quest 2 Starter Tools",
    description: "Compare Titan Quest 2 build categories and choose the next decision path.",
    breadcrumb: "Home > Builds",
    hero: {
      id: "builds-title",
      title: "Compare build types before committing.",
      body:
        "The Builds Hub helps players narrow beginner, easy, leveling, solo, and endgame-oriented paths without pretending finalized balance data exists.",
      ctas: [
        { label: "Open Beginner Builds", href: "/builds/beginner/" },
        { label: "Choose Playstyle First", href: "/choose-build/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="builds-entry" title="Choose by goal">
          <CardGrid>
            <Card title="Fast Leveling">
              <p className="mt-2 text-sm text-slate-300">Prioritize simple rotation, low gear pressure, and stable early choices.</p>
            </Card>
            <Card title="Solo">
              <p className="mt-2 text-sm text-slate-300">Prioritize survivability, consistency, and recovery from mistakes.</p>
            </Card>
            <Card title="Endgame Later">
              <p className="mt-2 text-sm text-slate-300">Choose a path that can evolve after verified systems are known.</p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="builds-matrix" title="Build category comparison">
          <ComparisonTable
            headers={["Category", "Best for", "Risk", "Next decision"]}
            rows={[
              { cells: ["Beginner", "New players", "Lowest", <TextLink href="/builds/beginner/">Pick safe starter</TextLink>] },
              { cells: ["Easy", "Relaxed play", "Low", <TextLink href="/guides/beginner/">Check basics</TextLink>] },
              { cells: ["Leveling", "Campaign speed", "Medium", <TextLink href="/classes/">Choose mastery</TextLink>] }
            ]}
          />
        </Section>

        <Section id="builds-snapshot" title="Build snapshots">
          <CardGrid>
            <LinkedCard
              title="Beginner Safe Starter"
              body="Role: stable leveling. Strength: easy decisions. Weakness: not an endgame claim."
              href="/builds/beginner/"
              linkLabel="Review beginner option"
            />
            <LinkedCard
              title="Balanced Damage Path"
              body="Role: flexible start. Strength: broad mastery fit. Weakness: needs later confirmation."
              href="/classes/"
              linkLabel="Check mastery fit"
            />
            <LinkedCard
              title="Future Endgame Path"
              body="Role: reserved. Strength: expansion-ready. Weakness: provisional until systems settle."
              href="/tools/"
              linkLabel="View future tools"
            />
          </CardGrid>
        </Section>

        <Section id="builds-difficulty" title="Difficulty rating">
          <p className="mt-3 text-slate-300">
            Beginner and easy categories should remain the default routes until the user clearly chooses advanced optimization.
          </p>
        </Section>

        <Section id="builds-confidence" title="Confidence">
          <ConfidenceBox>Build names and exact power rankings are provisional. The page validates decision order, not balance claims.</ConfidenceBox>
        </Section>

        <Section id="builds-related" title="Related decision">
          <p className="mt-3 text-slate-300">If every build looks similar, return to playstyle first.</p>
          <SoloAction href="/choose-build/" label="Revisit playstyle" />
        </Section>

        <Section id="builds-next" title="Next decision">
          <p className="mt-3 text-slate-300">Choose a beginner-safe build category, then read the execution guide.</p>
          <SoloAction href="/builds/beginner/" label="Choose Beginner Build" variant="primary" />
        </Section>
      </>
    )
  },

  beginnerBuilds: {
    title: "Beginner Builds | Titan Quest 2 Starter Tools",
    description: "Choose a beginner-safe Titan Quest 2 starter build path with early-access starter guidance.",
    breadcrumb: "Home > Builds > Beginner Builds",
    hero: {
      id: "beginner-builds-title",
      title: "Beginner builds should be safe before they are clever.",
      body:
        "This page defines the beginner build decision surface: why a starter path is recommended, who it fits, and what the player should do next.",
      ctas: [
        { label: "Read Beginner Guide", href: "/guides/beginner/" },
        { label: "Check Class Fit", href: "/class-picker/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="beginner-snapshot" title="Beginner build snapshot">
          <article className="mt-5 rounded border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Beginner-safe starter path</h3>
            <p className="mt-3 text-slate-300">
              Best for: Beginner, relaxed solo, and players who want low gear dependence. Not positioned as a final endgame build.
            </p>
            <DefinitionGrid
              items={[
                { term: "Playstyle", description: "Melee or balanced caster" },
                { term: "Difficulty", description: "Easy to Balanced" },
                { term: "Gear pressure", description: "Low for starter guidance" },
                { term: "Confidence", description: "Structure only" }
              ]}
            />
          </article>
        </Section>

        <Section id="beginner-recommendation" title="Why this build is recommended">
          <p className="mt-3 text-slate-300">
            A beginner starter should reduce early decision load: fewer mandatory synergies, clear skill priorities, and upgrade
            choices that can be explained without unstable game data.
          </p>
        </Section>

        <ProsCons
          id="beginner-proscons"
          strengths={["Clear early decisions.", "Low assumed gear dependence.", "Easy to route into guide and class pages."]}
          weaknesses={[
            "Not an endgame power claim.",
            "Specific skill names are not finalized.",
            "Requires update after official data stabilizes."
          ]}
        />

        <Section id="beginner-difficulty" title="Difficulty rating">
          <p className="mt-3 text-slate-300">
            Target difficulty: Easy to Balanced. Beginner pages should not push Hardcore complexity as the default path.
          </p>
        </Section>

        <Section id="beginner-progression" title="Skill and gear progression">
          <CardGrid as="ol">
            <ListCard title="Early">Pick one main damage skill direction.</ListCard>
            <ListCard title="Mid">Add survivability and utility choices.</ListCard>
            <ListCard title="Later">Move toward planner or endgame guide when data exists.</ListCard>
          </CardGrid>
        </Section>

        <Section id="beginner-confidence" title="Confidence">
          <ConfidenceBox>
            This is an early-access recommendation format. Replace provisional guidance with verified build data later.
          </ConfidenceBox>
        </Section>

        <Section id="beginner-next" title="Next decision">
          <p className="mt-3 text-slate-300">
            After choosing a beginner-safe build, learn the beginner rules or validate the class direction.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/guides/beginner/", label: "Read Beginner Guide" }} />
            <ButtonLink cta={{ href: "/classes/", label: "Choose Mastery", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  },

  classes: {
    title: "Classes | Titan Quest 2 Starter Tools",
    description: "Choose a Titan Quest 2 class or mastery direction from playstyle and beginner safety.",
    breadcrumb: "Home > Classes",
    hero: {
      id: "classes-title",
      title: "Choose the mastery direction that fits your playstyle.",
      body:
        "This Classes Hub turns mastery choice into a decision: what you enjoy, how much complexity you want, and what build category should follow.",
      ctas: [
        { label: "Use Class Picker", href: "/class-picker/" },
        { label: "See Beginner Builds", href: "/builds/beginner/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="classes-entry" title="Decision entry">
          <CardGrid>
            <Card title="I want a safe start">
              <p className="mt-2 text-slate-300">Prefer beginner-friendly mastery directions and simple early skills.</p>
            </Card>
            <Card title="I want a strong fantasy">
              <p className="mt-2 text-slate-300">Choose by combat identity before optimizing numbers.</p>
            </Card>
            <Card title="I want hybrid depth">
              <p className="mt-2 text-slate-300">Accept more tradeoffs and compare pairing risk later.</p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="classes-match" title="Playstyle match">
          <p className="mt-3 text-slate-300">
            Mastery direction should follow the chosen playstyle. If the playstyle is still unclear, return to Choose Build
            before choosing a class path.
          </p>
        </Section>

        <Section id="classes-matrix" title="Mastery comparison framework">
          <ComparisonTable
            headers={["Direction", "Fits", "Tradeoff", "Next decision"]}
            rows={[
              {
                cells: ["Durable front line", "Melee, beginner", "May level slower", <TextLink href="/builds/beginner/">Pick safe build</TextLink>]
              },
              {
                cells: ["Skill caster", "Caster, balanced", "More skill planning", <TextLink href="/skills/">Check skills</TextLink>]
              },
              {
                cells: ["Hybrid pairing", "Experienced players", "Higher complexity", <TextLink href="/class-picker/">Validate class fit</TextLink>]
              }
            ]}
          />
        </Section>

        <ProsCons
          id="classes-proscons"
          strengths={[
            "Class decisions are tied to playstyle.",
            "Beginner-safe routes stay visible.",
            "Hybrid choices are treated as advanced."
          ]}
          weaknesses={[
            "Specific mastery names are pending.",
            "Exact synergies require verified data.",
            "Advanced players may need future planner tools."
          ]}
        />

        <Section id="classes-recommendation" title="Recommendation">
          <p className="mt-3 text-slate-300">
            New players should choose a mastery direction that supports their preferred playstyle and then move to beginner
            builds before optimizing.
          </p>
        </Section>

        <Section id="classes-confidence" title="Confidence">
          <ConfidenceBox>The decision structure is stable. Specific mastery recommendations remain provisional until official data is stable.</ConfidenceBox>
        </Section>

        <Section id="classes-next" title="Next decision">
          <p className="mt-3 text-slate-300">Validate the class recommendation or move directly into beginner build choice.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/class-picker/", label: "Use Class Picker" }} />
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Choose Beginner Build", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  },

  classPicker: {
    title: "Class Picker | Titan Quest 2 Starter Tools",
    description: "Choose a Titan Quest 2 class direction based on playstyle, experience, difficulty, and goal.",
    breadcrumb: "Home > Classes > Class Picker",
    hero: {
      id: "picker-title",
      title: "Pick a class path by answering the real player questions.",
      body: "This Class Picker surface shows the decision flow and recommendation format for choosing a class direction.",
      ctas: [
        { label: "Use Recommended Beginner Path", href: "/builds/beginner/" },
        { label: "Compare Classes", href: "/classes/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="picker-entry" title="Decision entry">
          <CardGrid columns="md:grid-cols-4">
            <Card title="Playstyle">
              <p className="mt-2 text-slate-300">Melee, caster, ranged, pet, or hybrid.</p>
            </Card>
            <Card title="Experience">
              <p className="mt-2 text-slate-300">New ARPG, veteran, PoE, Diablo, or casual.</p>
            </Card>
            <Card title="Difficulty">
              <p className="mt-2 text-slate-300">Easy, balanced, or hardcore.</p>
            </Card>
            <Card title="Goal">
              <p className="mt-2 text-slate-300">Leveling, endgame, solo, group, fun, or relaxed.</p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="picker-result" title="Recommendation preview">
          <article className="mt-5 rounded border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Recommended class path framework</h3>
            <p className="mt-3 text-slate-300">
              Why this path: it keeps the first build decision simple and routes the player to beginner-safe guidance.
            </p>
            <p className="mt-3 text-slate-300">
              Best for: Beginner and relaxed solo players. SSF and endgame notes are reserved until data is reliable.
            </p>
          </article>
        </Section>

        <ProsCons
          id="picker-proscons"
          strengths={[
            "Converts broad preference into a next action.",
            "Keeps beginner route visible.",
            "Avoids unsupported exact class rankings."
          ]}
          weaknesses={[
            "Official mastery data is not finalized yet.",
            "Advanced advisor behavior is reserved for later.",
            "Future recommendations will need verified game data."
          ]}
        />

        <Section id="picker-leveling" title="Leveling advice">
          <p className="mt-3 text-slate-300">
            After choosing a class path, start with one damage direction, add survival early, and delay complex hybrid choices
            until the player understands the build.
          </p>
        </Section>

        <Section id="picker-upgrades" title="Next upgrade priorities">
          <CardGrid as="ol">
            <li className="rounded border border-white/10 bg-white/5 p-5">Confirm playstyle fit.</li>
            <li className="rounded border border-white/10 bg-white/5 p-5">Choose beginner build category.</li>
            <li className="rounded border border-white/10 bg-white/5 p-5">Read skill priority guidance.</li>
          </CardGrid>
        </Section>

        <Section id="picker-confidence" title="Confidence">
          <ConfidenceBox>
            Early-access preview: recommendations explain structure and will be updated when official data is stable.
          </ConfidenceBox>
        </Section>

        <Section id="picker-next" title="Next decision">
          <p className="mt-3 text-slate-300">
            Use the recommended path to choose a beginner build, or compare mastery directions first.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Choose Beginner Build" }} />
            <ButtonLink cta={{ href: "/classes/", label: "Compare Classes", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  },

  skills: {
    title: "Skills | Titan Quest 2 Starter Tools",
    description: "Choose Titan Quest 2 skills by build direction and beginner safety.",
    breadcrumb: "Home > Skills",
    hero: {
      id: "skills-title",
      title: "Choose skills by build decision, not by raw description.",
      body: "The Skills Hub keeps skill choice tied to playstyle, mastery, beginner safety, and next build action.",
      ctas: [
        { label: "See Beginner Build Skills", href: "/builds/beginner/" },
        { label: "Choose Class First", href: "/classes/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="skills-recommendation" title="Skill recommendation rule">
          <article className="mt-5 rounded border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Prioritize one main skill direction first.</h3>
            <p className="mt-3 text-slate-300">
              Why: new players need a clear damage identity before evaluating support, utility, or hybrid synergies.
            </p>
          </article>
        </Section>

        <ProsCons
          id="skills-proscons"
          strengths={[
            "Skills are connected to build outcomes.",
            "Beginner users avoid scattered investment.",
            "Future skill pages can attach to build decisions."
          ]}
          weaknesses={["Skill-specific data is not finalized in the MVP.", "No skill calculator.", "Exact skill names are provisional."]}
        />

        <Section id="skills-difficulty" title="Difficulty rating">
          <p className="mt-3 text-slate-300">
            Beginner skill paths should be easy to execute, easy to explain, and resilient if the player changes gear later.
          </p>
        </Section>

        <Section id="skills-progression" title="Skill progression">
          <CardGrid as="ol">
            <ListCard title="Primary">Choose one main damage skill.</ListCard>
            <ListCard title="Support">Add survival, mobility, or resource help.</ListCard>
            <ListCard title="Optimization">Add synergy only after the build direction is clear.</ListCard>
          </CardGrid>
        </Section>

        <Section id="skills-confidence" title="Confidence">
          <ConfidenceBox>Skill structure is stable. Skill-specific data will be added after official data is stable.</ConfidenceBox>
        </Section>

        <Section id="skills-related" title="Related decision">
          <p className="mt-3 text-slate-300">
            A skill choice should lead back to a build or class decision, not become isolated wiki content.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Back to beginner builds", variant: "secondary" }} />
            <ButtonLink cta={{ href: "/classes/", label: "Back to class direction", variant: "secondary" }} />
          </div>
        </Section>

        <Section id="skills-next" title="Next decision">
          <p className="mt-3 text-slate-300">
            After checking skill priority, choose the beginner build that uses the skill direction.
          </p>
          <SoloAction href="/builds/beginner/" label="Choose Beginner Build" variant="primary" />
        </Section>
      </>
    )
  },

  beginnerGuide: {
    title: "Beginner Guide | Titan Quest 2 Starter Tools",
    description: "Beginner Titan Quest 2 guide for choosing a safe first build direction.",
    breadcrumb: "Home > Guides > Beginner Guide",
    hero: {
      id: "guide-title",
      title: "Beginner guide: make the first build decision safer.",
      body:
        "This guide explains the minimum context a new player needs before choosing a playstyle, mastery, build, or skill path.",
      ctas: [
        { label: "Choose Playstyle", href: "/choose-build/" },
        { label: "See Beginner Builds", href: "/builds/beginner/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="guide-beginner" title="Beginner guide path">
          <CardGrid as="ol">
            <ListCard title="1. Choose what feels fun">Start from melee, caster, ranged, pet, or hybrid.</ListCard>
            <ListCard title="2. Keep difficulty honest">Choose easy or balanced until systems are familiar.</ListCard>
            <ListCard title="3. Follow one build path">Do not scatter early skill and gear decisions.</ListCard>
          </CardGrid>
        </Section>

        <Section id="guide-faq" title="Common beginner blockers">
          <CardGrid columns="md:grid-cols-2">
            <Card title="Should I start with endgame in mind?">
              <p className="mt-2 text-slate-300">
                Not for a first character. Pick a path that teaches the game first, then optimize after systems are stable.
              </p>
            </Card>
            <Card title="Should I pick hybrid early?">
              <p className="mt-2 text-slate-300">
                Only if complexity is the point. Most beginners should start with a clearer class direction.
              </p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="guide-related" title="Related decision">
          <p className="mt-3 text-slate-300">
            After reading the guide, the next decision is not more reading. Choose a playstyle or beginner build.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/choose-build/", label: "Choose Playstyle", variant: "secondary" }} />
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Choose Beginner Build", variant: "secondary" }} />
          </div>
        </Section>

        <Section id="guide-next" title="Next decision">
          <p className="mt-3 text-slate-300">Choose the beginner-safe path that matches your preferred playstyle.</p>
          <SoloAction href="/builds/beginner/" label="Open Beginner Builds" variant="primary" />
        </Section>
      </>
    )
  },

  tools: {
    title: "Tools | Titan Quest 2 Starter Tools",
    description: "Explore the current Titan Quest 2 decision tools and future build-planning path.",
    breadcrumb: "Home > Tools",
    hero: {
      id: "tools-title",
      title: "Tools are decision surfaces, not calculators yet.",
      body:
        "The Tools Hub reserves future advisor systems while keeping the current MVP focused on decision routing and early-access guidance.",
      ctas: [
        { label: "Open Class Picker", href: "/class-picker/" },
        { label: "Choose Build Instead", href: "/choose-build/", variant: "secondary" }
      ]
    },
    content: (
      <>
        <Section id="tools-entry" title="Available in current MVP">
          <CardGrid>
            <LinkedCard
              title="Class Picker"
              body="Recommendation format for choosing class direction."
              href="/class-picker/"
              linkLabel="Open class picker"
            />
            <Card title="Build Advisor">
              <p className="mt-2 text-slate-300">Reserved for a future rule-based advisor after review.</p>
            </Card>
            <Card title="Build Planner">
              <p className="mt-2 text-slate-300">Reserved for a future phase after official data is stable.</p>
            </Card>
          </CardGrid>
        </Section>

        <Section id="tools-recommendation" title="Recommended tool path">
          <article className="mt-5 rounded border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Use Class Picker first.</h3>
            <p className="mt-3 text-slate-300">
              Why: it helps users choose a class direction without needing official build planner data.
            </p>
            <p className="mt-3 text-slate-300">
              Best for: Beginner and undecided players. Endgame optimization tools remain future work.
            </p>
          </article>
        </Section>

        <Section id="tools-confidence" title="Confidence">
          <ConfidenceBox>
            Early-access boundary: current tools explain decision paths; planner, search, and backend-backed features are
            reserved for later.
          </ConfidenceBox>
        </Section>

        <Section id="tools-related" title="Related decision">
          <p className="mt-3 text-slate-300">
            If the user does not need a tool yet, route them back to the build or guide decision.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/builds/beginner/", label: "Beginner builds", variant: "secondary" }} />
            <ButtonLink cta={{ href: "/guides/beginner/", label: "Beginner guide", variant: "secondary" }} />
          </div>
        </Section>

        <Section id="tools-next" title="Next decision">
          <p className="mt-3 text-slate-300">Use the class picker or return to build selection.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={{ href: "/class-picker/", label: "Use Class Picker" }} />
            <ButtonLink cta={{ href: "/builds/", label: "Compare Builds", variant: "secondary" }} />
          </div>
        </Section>
      </>
    )
  }
} satisfies Record<string, PageDefinition>;
