# TQ2 Information Architecture

Status: Product Design / Blueprint

This document defines the logical information architecture for Titan Quest 2 Starter Tools. It is not an implementation plan, routing file, HTML specification, React specification, or component specification.

The architecture is based on `TQ2_USER_DECISION_FLOW.md` and follows one principle:

Players do not arrive looking for pages. They arrive with decisions to make.

---

## 1. Site Vision

### What Problem The Website Solves

Titan Quest 2 players need help choosing a direction before they understand the full game system.

The site solves decision problems such as:

- What playstyle should I start with?
- Which class or mastery direction fits me?
- Which beginner build is safest?
- Which skills deserve early investment?
- How do I level without ruining my build?
- When should I move from beginner guidance to build optimization?
- What should I do next after choosing a build?

The site is not designed as a general information archive. It is designed as a decision path for players who want useful recommendations quickly.

### Core User Journey

The intended user journey is:

Landing

↓

Choose Playstyle

↓

Choose Experience Level

↓

Choose Difficulty Preference

↓

Choose Play Goal

↓

Receive Recommendation

↓

Read Build Guidance

↓

Use Guide Or Tool For Next Decision

↓

Optimize Toward Endgame

### Primary User Goals

The primary user goals are:

- Choose a first build.
- Choose a class or mastery direction.
- Understand beginner-safe options.
- Compare playstyles without reading a wiki.
- Learn which skills matter for the chosen direction.
- Move from starter path to stronger build path.
- Know what to do next after each decision.

### Product Rule

Every major page must answer this question:

What decision does this page help the player make?

If the answer is unclear, the page should not exist yet.

---

## 2. User Journey

### Journey Stage 1: Landing

User question:

- Where should I start?

Site response:

- Present the site as a decision tool.
- Offer immediate choices by playstyle, beginner safety, class choice, and guide path.
- Avoid forcing users into a generic page list.

Primary next decision:

- Choose a playstyle or choose a beginner-safe path.

### Journey Stage 2: Playstyle Choice

User question:

- What kind of gameplay do I enjoy?

Options:

- Melee
- Caster
- Ranged
- Pet
- Hybrid

Site response:

- Explain the tradeoffs of each playstyle.
- Recommend class/mastery directions that fit the choice.
- Identify whether the playstyle is beginner friendly.

Primary next decision:

- Choose a class/mastery direction.

### Journey Stage 3: Player Experience

User question:

- What kind of player am I?

Options:

- New ARPG Player
- Titan Quest Veteran
- Path of Exile Player
- Diablo Player
- Casual Player

Site response:

- Adjust recommendation depth.
- Route new players toward beginner builds and simple guidance.
- Route experienced players toward comparison and optimization.

Primary next decision:

- Choose the level of build complexity.

### Journey Stage 4: Difficulty Preference

User question:

- How much difficulty or complexity do I want?

Options:

- Easy
- Balanced
- Hardcore

Site response:

- Easy routes emphasize survivability, low gear dependence, and simple skill use.
- Balanced routes allow more specialization.
- Hardcore routes can expose advanced tradeoffs and optimization paths.

Primary next decision:

- Choose the build type.

### Journey Stage 5: Play Goal

User question:

- What am I trying to accomplish?

Options:

- Fast Leveling
- Endgame
- Solo
- Group
- Fun
- Relaxed

Site response:

- Map the user goal to recommended build categories.
- Explain why a build type matches the goal.
- Avoid unsupported exact claims while game data is still unstable.

Primary next decision:

- Choose the recommended build or starter path.

### Journey Stage 6: Recommendation

User question:

- What should I play?

Site response:

- Provide a recommended build or class path.
- Explain why it fits.
- Show strengths and weaknesses.
- Identify who should play it.
- Link to the next guide or tool that helps the player act on the recommendation.

Primary next decision:

- Follow the build path or compare another option.

### Journey Stage 7: Build Guidance

User question:

- How do I play and level this direction?

Site response:

- Explain the leveling path.
- Identify important skills.
- Explain early priorities.
- Link to beginner guide, skills, class details, and future planner.

Primary next decision:

- Continue leveling, optimize, or compare alternatives.

### Journey Stage 8: Optimization And Endgame

User question:

- How do I improve this build later?

Site response:

- Explain upgrade priorities.
- Point to skill optimization, equipment direction, farming goals, and future planner tools.
- Separate beginner advice from endgame advice.

Primary next decision:

- Optimize build, farm equipment, or plan endgame version.

---

## 3. Site Map

This site map is logical. It does not require all pages to exist in the first MVP.

Home
├── Choose Build
│   ├── Choose Playstyle
│   ├── Choose Experience Level
│   ├── Choose Difficulty
│   ├── Choose Goal
│   └── Recommendation Result
├── Builds
│   ├── Beginner Builds
│   ├── Easy Builds
│   ├── Leveling Builds
│   ├── Solo Builds
│   ├── Endgame Builds
│   └── Build Detail
├── Classes / Masteries
│   ├── Class Overview
│   ├── Class Picker
│   ├── Mastery Comparison
│   ├── Beginner Class Recommendation
│   └── Class / Mastery Detail
├── Skills
│   ├── Skill Overview
│   ├── Skill By Class / Mastery
│   ├── Skill Choice Guide
│   ├── Skill Synergy
│   └── Skill Detail
├── Guides
│   ├── Beginner Guide
│   ├── Leveling Guide
│   ├── Attribute Guide
│   ├── Gear Guide
│   ├── Mastery Guide
│   └── Endgame Guide
├── Tools
│   ├── Class Picker
│   ├── Build Advisor
│   ├── Skill Advisor
│   ├── Leveling Advisor
│   ├── Build Planner
│   └── Build Comparison
├── Equipment
│   ├── Equipment Overview
│   ├── Gear Priority By Build Type
│   ├── Beginner Gear Guide
│   └── Endgame Gear Direction
├── Farming
│   ├── Farming Overview
│   ├── Leveling Farming
│   ├── Gear Farming
│   └── Endgame Farming
├── Community / Sharing
│   ├── Shared Builds
│   ├── Build Import
│   └── Build Export
└── FAQ
    ├── Beginner Questions
    ├── Build Questions
    ├── Class Questions
    ├── Skill Questions
    └── Tool Questions

### MVP Site Map

The MVP should remain intentionally small:

Home
├── Builds
│   └── Beginner Builds
├── Classes
│   └── Class Picker
├── Skills
├── Guides
│   └── Beginner Guide
└── Tools

### Expansion Site Map

Expansion should happen only after user demand or official data supports it:

Build Detail
Class / Mastery Detail
Skill Detail
Build Planner
Equipment
Farming
Build Sharing
AI Recommendation

---

## 4. Navigation System

### Primary Navigation

Primary navigation should help users answer what to do next.

Recommended primary navigation:

- Choose Build
- Builds
- Classes
- Skills
- Guides
- Tools

Rationale:

- `Choose Build` reflects the decision-first nature of the site.
- `Builds` supports users who already know they want a build.
- `Classes` supports mastery/class selection intent.
- `Skills` supports users validating skill choices.
- `Guides` supports learning and progression.
- `Tools` supports interactive or rule-based decision surfaces.

### Secondary Navigation

Secondary navigation appears inside hubs and long decision pages.

Examples:

Builds secondary navigation:

- Beginner Builds
- Easy Builds
- Leveling Builds
- Solo Builds
- Endgame Builds
- Compare Build Types

Classes secondary navigation:

- Class Picker
- Beginner Classes
- Class Comparison
- Mastery Pairing
- Class Details

Skills secondary navigation:

- Skill Overview
- Skills By Class
- Beginner Skills
- Skill Synergy
- Skills Used By Builds

Guides secondary navigation:

- Beginner Guide
- Leveling Guide
- Attributes
- Gear
- Endgame

Tools secondary navigation:

- Class Picker
- Build Advisor
- Skill Advisor
- Leveling Advisor
- Build Planner

### Breadcrumb Logic

Breadcrumbs should show decision context, not only location.

Examples:

- Home > Choose Build > Beginner Builds
- Home > Builds > Beginner Builds > Build Detail
- Home > Classes > Class Picker > Recommended Class
- Home > Skills > Skill Choice > Skill Detail
- Home > Guides > Beginner Guide > Next Build Decision
- Home > Tools > Build Advisor > Recommendation

Breadcrumb rules:

- Start with Home.
- Include the decision hub where possible.
- End with the current decision or content object.
- Avoid breadcrumb paths that imply implementation folders.

### Footer Navigation

Footer navigation should support trust, policy, and rediscovery.

Recommended footer groups:

Site:

- Home
- Builds
- Classes
- Skills
- Guides
- Tools

Decision Entry Points:

- Choose Build
- Beginner Builds
- Class Picker
- Beginner Guide

Future Tools:

- Build Planner
- Skill Advisor
- Build Comparison

Trust:

- Early Access Notice
- Update Policy
- Contact
- Privacy
- Affiliate Disclosure

### Contextual Navigation

Contextual navigation appears inside page content and always points to the next decision.

Examples:

- After playstyle explanation: choose class/mastery direction.
- After class recommendation: view beginner builds using that class.
- After beginner build: read leveling guide or open future planner.
- After skill explanation: see builds that use this skill.
- After gear guidance: move to farming or optimization.
- After endgame guidance: compare builds or plan upgrades.

Rule:

Contextual links should answer `what should I do next?`, not simply list related URLs.

---

## 5. Page Relationships

Page relationships must be decision-driven.

### Home

Decision answered:

- Where should I start?

Next decision:

- Choose playstyle, choose beginner build, or choose class.

Connects to:

- Choose Build
- Beginner Builds
- Classes
- Class Picker
- Skills
- Beginner Guide
- Tools

### Choose Build

Decision answered:

- What type of build fits me?

Inputs:

- Playstyle
- Experience level
- Difficulty preference
- Play goal

Next decision:

- Accept a recommended build type or compare build categories.

Connects to:

- Beginner Builds
- Easy Builds
- Leveling Builds
- Solo Builds
- Endgame Builds
- Build Advisor

### Builds Hub

Decision answered:

- Which build category should I inspect?

Next decision:

- Choose beginner, easy, leveling, solo, or endgame path.

Connects to:

- Beginner Builds
- Build Detail
- Class Picker
- Skills
- Beginner Guide

### Beginner Builds

Decision answered:

- Which beginner-safe build should I start with?

Next decision:

- Choose a build or learn why the recommendation fits.

Connects to:

- Build Detail
- Class Detail
- Beginner Guide
- Skill Choice Guide
- Build Advisor

### Build Detail

Decision answered:

- Should I play this build?

Next decision:

- Follow leveling path, compare alternatives, or optimize.

Connects to:

- Leveling Guide
- Skill Detail
- Class Detail
- Gear Guide
- Future Build Planner
- Future Build Comparison

### Classes Hub

Decision answered:

- Which class or mastery direction should I consider?

Next decision:

- Use Class Picker or compare class/mastery options.

Connects to:

- Class Picker
- Beginner Builds
- Skills
- Mastery Comparison
- Class Detail

### Class Picker

Decision answered:

- Which class direction fits my playstyle and experience?

Next decision:

- View recommended builds or learn class strengths and weaknesses.

Connects to:

- Beginner Builds
- Build Advisor
- Class Detail
- Skill Choice Guide

### Class / Mastery Detail

Decision answered:

- Is this class/mastery right for me?

Next decision:

- Choose a build using this class or inspect its skills.

Connects to:

- Beginner Builds
- Build Detail
- Skills By Class
- Mastery Pairing
- Future Planner

### Skills Hub

Decision answered:

- Which skills matter for my chosen direction?

Next decision:

- Explore skills by class or by build need.

Connects to:

- Skill By Class
- Skill Choice Guide
- Build Detail
- Class Detail

### Skill Detail

Decision answered:

- Should I invest in this skill?

Next decision:

- Use it in a build, compare alternatives, or understand synergy.

Connects to:

- Builds using the skill
- Class Detail
- Skill Synergy
- Future Skill Advisor

### Beginner Guide

Decision answered:

- How should I start playing without getting lost?

Next decision:

- Choose a beginner build or choose class direction.

Connects to:

- Beginner Builds
- Class Picker
- Choose Build
- Skills

### Tools Hub

Decision answered:

- Which tool helps my current decision?

Next decision:

- Choose Class Picker, Build Advisor, Skill Advisor, or future Planner.

Connects to:

- Class Picker
- Build Advisor
- Skill Advisor
- Build Planner
- Build Comparison

### Equipment

Decision answered:

- What gear direction supports my build?

Next decision:

- Farm, optimize, or return to build priorities.

Connects to:

- Build Detail
- Farming
- Endgame Guide
- Future Planner

### Farming

Decision answered:

- What should I farm next?

Next decision:

- Improve equipment, level faster, or prepare for endgame.

Connects to:

- Equipment
- Build Detail
- Endgame Guide

### FAQ

Decision answered:

- What quick answer resolves a common blocker?

Next decision:

- Move into the relevant decision path.

Connects to:

- Choose Build
- Class Picker
- Beginner Builds
- Skills
- Tools

---

## 6. Information Flow

The website information flow should follow the user decision sequence.

Landing
↓
Decision
↓
Recommendation
↓
Build
↓
Guide
↓
Optimization
↓
Endgame

### Landing

Information shown:

- Site purpose.
- Primary decision options.
- Early Access disclaimer.
- Beginner-safe entry points.

User output:

- Chooses a starting path.

### Decision

Information shown:

- Playstyle choices.
- Experience-level choices.
- Difficulty choices.
- Goal choices.

User output:

- Provides enough context for a recommendation.

### Recommendation

Information shown:

- Recommended direction.
- Why this direction fits.
- Strengths.
- Weaknesses.
- Beginner friendliness.
- Next step.

User output:

- Accepts recommendation or compares alternatives.

### Build

Information shown:

- Build type.
- Class/mastery direction.
- Leveling concept.
- Skill priorities.
- Who should play it.

User output:

- Starts playing or seeks more detail.

### Guide

Information shown:

- Explanation needed to execute the decision.
- Beginner context.
- Skill and class reasoning.
- Mistakes to avoid.

User output:

- Understands how to proceed.

### Optimization

Information shown:

- Upgrade priorities.
- Gear direction.
- Skill synergy.
- Alternative paths.

User output:

- Improves or adjusts the build.

### Endgame

Information shown:

- Endgame readiness.
- Farming direction.
- Build comparison.
- Future planner output.

User output:

- Chooses long-term build direction.

---

## 7. Content Hierarchy

### Home

Purpose:

- Introduce the site as a decision tool and route users to the right first decision.

Inputs:

- User intent from search or direct visit.
- Broad uncertainty about build/class/skill choice.

Outputs:

- Entry into Choose Build, Beginner Builds, Class Picker, Skills, Guides, or Tools.

Next Action:

- Choose a playstyle or beginner-safe path.

### Choose Build

Purpose:

- Translate user preferences into a build direction.

Inputs:

- Playstyle.
- Experience level.
- Difficulty preference.
- Play goal.

Outputs:

- Recommended build category or starter path.

Next Action:

- View recommended beginner build or open Build Advisor.

### Builds Hub

Purpose:

- Organize build decisions by use case.

Inputs:

- User goal: beginner, leveling, solo, endgame, easy.

Outputs:

- Build category choice.

Next Action:

- Choose a build category.

### Beginner Builds

Purpose:

- Help new or cautious players choose a safe first build.

Inputs:

- Need for low-risk starter recommendation.

Outputs:

- Beginner-safe build recommendation.

Next Action:

- View build detail or beginner guide.

### Build Detail

Purpose:

- Help the player decide whether to play a specific build.

Inputs:

- Selected build.
- User goal.
- User experience level.

Outputs:

- Why this build fits.
- Strengths and weaknesses.
- Leveling direction.
- Upgrade priorities.

Next Action:

- Follow guide, inspect skills, or use future planner.

### Classes Hub

Purpose:

- Help users understand broad class/mastery options.

Inputs:

- Interest in class identity or mastery direction.

Outputs:

- Class comparison and class picker entry.

Next Action:

- Use Class Picker or inspect class detail.

### Class Picker

Purpose:

- Recommend class direction based on player preference.

Inputs:

- Playstyle.
- Experience.
- Difficulty.
- Goal.

Outputs:

- Recommended class/mastery direction.

Next Action:

- View beginner builds using that class.

### Class / Mastery Detail

Purpose:

- Explain whether a class/mastery fits a player.

Inputs:

- Selected class/mastery.

Outputs:

- Strengths, weaknesses, beginner friendliness, and build fit.

Next Action:

- Choose build or inspect skills.

### Skills Hub

Purpose:

- Help players understand skill choices at a high level.

Inputs:

- Chosen class, build, or skill curiosity.

Outputs:

- Skill category and skill priority direction.

Next Action:

- Inspect skill by class or build use.

### Skill Detail

Purpose:

- Help players decide whether to invest in a skill.

Inputs:

- Selected skill.

Outputs:

- Use case, synergy, builds using it, and investment priority.

Next Action:

- Return to build or compare skills.

### Beginner Guide

Purpose:

- Give new players enough context to make early decisions safely.

Inputs:

- New player uncertainty.

Outputs:

- Beginner rules, early mistakes to avoid, and next choices.

Next Action:

- Choose beginner build or class path.

### Tools Hub

Purpose:

- Route users to the tool matching their current decision.

Inputs:

- User needs help choosing class, build, skill, or planner path.

Outputs:

- Tool selection.

Next Action:

- Use Class Picker, Build Advisor, Skill Advisor, or future Planner.

### Equipment

Purpose:

- Help players decide what gear direction supports a build.

Inputs:

- Existing build and upgrade need.

Outputs:

- Gear priority direction.

Next Action:

- Farm or optimize build.

### Farming

Purpose:

- Help players decide what to farm for their current goal.

Inputs:

- Leveling, gear, or endgame goal.

Outputs:

- Farming direction.

Next Action:

- Improve equipment or continue endgame path.

### FAQ

Purpose:

- Resolve common blockers quickly and return users to the right decision path.

Inputs:

- Specific user question.

Outputs:

- Short answer and next decision link.

Next Action:

- Move to relevant hub, guide, or tool.

---

## 8. URL Structure

These are logical URLs only. They do not imply implementation or route creation now.

### MVP URLs

- `/`
- `/builds`
- `/builds/beginner`
- `/classes`
- `/class-picker`
- `/skills`
- `/guides`
- `/guides/beginner`
- `/tools`

### Decision URLs

- `/choose-build`
- `/build-advisor`
- `/class-picker`
- `/tools/class-picker`
- `/tools/build-advisor`

Decision URL rule:

- If a tool becomes the primary decision entry, it can live under `/tools/` or own a direct URL if search and product demand justify it.
- Avoid duplicate live pages with the same purpose.

### Build URLs

- `/builds`
- `/builds/beginner`
- `/builds/easy`
- `/builds/leveling`
- `/builds/solo`
- `/builds/endgame`
- `/builds/[build-slug]`

### Class / Mastery URLs

- `/classes`
- `/classes/beginner`
- `/classes/compare`
- `/classes/[class-slug]`
- `/masteries`
- `/masteries/[mastery-slug]`

Class/mastery rule:

- Use the naming that best matches player search behavior.
- If both `class` and `mastery` are needed, define one primary owner and one supporting explanation to avoid duplicate intent.

### Skill URLs

- `/skills`
- `/skills/[skill-slug]`
- `/skills/[skill-slug]/builds`
- `/skills/by-class/[class-slug]`

### Guide URLs

- `/guides`
- `/guides/beginner`
- `/guides/leveling`
- `/guides/attributes`
- `/guides/gear`
- `/guides/masteries`
- `/guides/endgame`

### Future Tool URLs

- `/tools`
- `/tools/build-advisor`
- `/tools/skill-advisor`
- `/tools/leveling-advisor`
- `/tools/build-planner`
- `/tools/build-comparison`

### Future System URLs

- `/equipment`
- `/equipment/beginner`
- `/equipment/endgame`
- `/farming`
- `/farming/leveling`
- `/farming/endgame`
- `/faq`

---

## 9. Internal Linking Strategy

Internal links should be decision-driven, not SEO-first.

### Core Rule

Every link should answer one of these questions:

- Should I choose this?
- Should I play this?
- Is this beginner friendly?
- What should I learn before choosing?
- What should I do next?
- How do I improve this later?

### Homepage Links

Homepage should link to:

- Choose Build: for undecided users.
- Beginner Builds: for users who want the safest start.
- Class Picker: for users asking what to play.
- Skills: for users validating skill choices.
- Beginner Guide: for new players needing context.
- Tools: for users who want interactive help.

### Build Links

Build pages should link to:

- Beginner Guide when the user needs execution context.
- Class Detail when the user needs class understanding.
- Skills when the user needs investment guidance.
- Gear Guide when the user needs upgrade direction.
- Future Planner when the user needs customization.
- Alternative builds when the user may reject this option.

### Class Links

Class pages should link to:

- Class Picker when the user has not decided yet.
- Beginner Builds when the class is beginner friendly.
- Skills when the user wants to understand the class kit.
- Build Advisor when the user needs a recommendation.

### Skill Links

Skill pages should link to:

- Builds using the skill.
- Class page that owns the skill.
- Skill synergy guidance.
- Future Skill Advisor.

### Guide Links

Guides should link to:

- The decision that follows the explanation.
- Beginner Builds after beginner concepts.
- Class Picker after class explanation.
- Skills after skill explanation.
- Build Advisor after broad build-planning explanation.

### Tool Links

Tools should link to:

- Recommendation output.
- Relevant build category.
- Relevant class page.
- Relevant skill guidance.
- Next optimization step.

### Avoid

Avoid links that exist only because two pages are topically similar.

Use links because the user needs a next decision.

---

## 10. Future Expansion

Future expansion should preserve the decision-first architecture.

### Planner

Reserved location:

- `/tools/build-planner`

Purpose:

- Let users customize a build after receiving a recommendation.

Inputs:

- Class/mastery choice.
- Skills.
- Leveling goal.
- Endgame goal.

Outputs:

- Build summary.
- Skill priorities.
- Upgrade path.
- Shareable build direction.

### Database

Reserved locations:

- `/skills`
- `/classes`
- `/equipment`

Purpose:

- Support decisions with structured information.

Rule:

- Database pages should not become disconnected wiki pages.
- Every database entry must link to a build, guide, or tool decision.

### Interactive Tools

Reserved location:

- `/tools`

Future tools:

- Build Advisor
- Class Picker
- Skill Advisor
- Gear Advisor
- Leveling Advisor
- Farming Advisor

Tool rule:

- A tool exists only if it helps the user choose.

### Comparison

Reserved locations:

- `/builds/compare`
- `/classes/compare`
- `/tools/build-comparison`

Purpose:

- Help users choose between options when both seem viable.

Comparison should include:

- Beginner friendliness.
- Complexity.
- Leveling speed.
- Gear dependence.
- Endgame potential.
- Solo friendliness.

### Build Sharing

Reserved locations:

- `/builds/shared/[id]`
- `/tools/build-planner/shared/[id]`

Purpose:

- Let users share planner outputs or community build paths.

Rule:

- Shared build pages should not become indexable by default until quality controls exist.

### AI Recommendation

Reserved locations:

- `/tools/ai-build-advisor`
- `/tools/ai-class-picker`
- `/tools/ai-skill-advisor`

Purpose:

- Help users choose faster using structured site data.

AI rule:

- AI tools should recommend, explain, and route to canonical pages.
- AI tools should not invent game data.
- AI tools should not replace verified build and skill guidance.

### Equipment Expansion

Reserved location:

- `/equipment`

Purpose:

- Help players decide what gear direction matters for a build.

Expansion trigger:

- Official item and gear data becomes stable enough to support useful guidance.

### Farming Expansion

Reserved location:

- `/farming`

Purpose:

- Help players decide what activity supports the next build upgrade.

Expansion trigger:

- Endgame systems and farming loops become stable enough to describe accurately.

---

## IA Governance Rules

1. Decision pages come before information pages.
2. No page exists only to target a keyword.
3. Every page has a defined user question.
4. Every page has a defined next action.
5. Every future expansion must fit into the decision flow.
6. Early Access uncertainty should be handled with clear scope, not fake data.
7. Navigation should reduce decision time.
8. Internal links should move users forward.
9. Tools should help users choose, not merely display information.
10. The site can expand only when the new section improves a real player decision.

---

## Completion Status

This Information Architecture is complete for the Blueprint stage.

It can now serve as the product structure reference for:

- Wireframe planning.
- Component specification.
- Static MVP scope.
- Future MVP implementation.
- Launch readiness review.

No implementation is included in this document.

