# TQ2 Wireframes

Status: Product Design / Low-Fidelity Structural Blueprint

This document defines low-fidelity text wireframes for the major Titan Quest 2 Starter Tools page types.

These are structural blueprints only. They define block order and decision flow, not visual design.

Based on:

- `TQ2_USER_DECISION_FLOW.md`
- `TQ2_INFORMATION_ARCHITECTURE.md`
- `TQ2_PAGE_BLUEPRINTS.md`
- `TQ2_DECISION_DESIGN_SYSTEM.md`

This document does not define implementation, HTML, React, CSS, Tailwind, routing, build steps, or deployment steps.

---

## Wireframe Principles

- Use decision order, not content inventory order.
- Start each page with the user decision being solved.
- Put recommendation before deep explanation when possible.
- Every page ends with a next decision.
- Exit paths are decision paths, not generic related pages.
- Early Access uncertainty should be visible wherever game-specific advice appears.

---

# 1. Home

## Page Goal

Help first-time and returning users choose the right starting path: playstyle, beginner build, class/mastery, guide, or tool.

## User State

The user knows they are interested in Titan Quest 2, but may not know whether they need a build, class picker, skill guide, or beginner guide.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Playstyle Match]

v

[Recommendation Cards]

v

[Beginner Guide Entry]

v

[Confidence Indicator]

v

[Next Decision Block]

v

[Decision Footer]

## Block Purpose

Decision Hero:

- Establishes that the site helps players choose faster.
- Frames the page around the question: Where should I start?

Decision Entry:

- Offers the core first paths: choose build, beginner build, class picker, skills, guide, tools.
- Prevents users from treating the homepage like a generic directory.

Playstyle Match:

- Converts broad preference into action: melee, caster, ranged, pet, or hybrid.

Recommendation Cards:

- Surfaces safe starter directions before users browse everything.

Beginner Guide Entry:

- Gives new players a low-risk learning path before committing.

Confidence Indicator:

- Explains that advice may change as Titan Quest 2 data stabilizes.

Next Decision Block:

- Forces the homepage to end with action, not passive reading.

Decision Footer:

- Gives recovery paths for users still unsure.

## Primary CTA

Choose your first build path.

## Secondary CTA

Open beginner guide.

## Exit Paths

- Playstyle Selection.
- Beginner Builds.
- Mastery Selection.
- Skills.
- Tools.
- FAQ.

---

# 2. Playstyle Selection

## Page Goal

Help users decide what style of gameplay they want before choosing a class, mastery, or build.

## User State

The user wants a build direction but may only know what kind of gameplay sounds fun.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Playstyle Match]

v

[Comparison Matrix]

v

[Difficulty Rating]

v

[Recommendation Card]

v

[Confidence Indicator]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the page around: What do you enjoy playing?

Decision Entry:

- Presents Melee, Caster, Ranged, Pet, and Hybrid as decision paths.

Playstyle Match:

- Explains what each playstyle feels like in practical terms.

Comparison Matrix:

- Compares playstyles by beginner friendliness, complexity, safety, and progression fit.

Difficulty Rating:

- Prevents beginners from choosing advanced playstyles without context.

Recommendation Card:

- Converts the selected playstyle into a recommended direction.

Confidence Indicator:

- Marks any game-data-dependent advice as provisional when needed.

Next Decision Block:

- Moves users toward mastery/class selection or beginner builds.

## Primary CTA

Choose this playstyle.

## Secondary CTA

Compare playstyles.

## Exit Paths

- Mastery Selection.
- Hybrid Selection.
- Build Hub.
- Beginner Builds.
- Beginner Guide.

---

# 3. Mastery Selection

## Page Goal

Help users choose a class or mastery direction based on playstyle, experience level, and goal.

## User State

The user may know a preferred playstyle but does not know which class/mastery direction fits it.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Playstyle Match]

v

[Comparison Matrix]

v

[Pros & Cons]

v

[Difficulty Rating]

v

[Recommendation Card]

v

[Confidence Indicator]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the decision: Which class or mastery direction should I choose?

Decision Entry:

- Lets users enter by playstyle, beginner safety, or preferred goal.

Playstyle Match:

- Maps class/mastery options to melee, caster, ranged, pet, or hybrid preferences.

Comparison Matrix:

- Compares options by complexity, beginner safety, build availability, and progression fit.

Pros & Cons:

- Makes tradeoffs explicit before users commit.

Difficulty Rating:

- Separates easy starter options from advanced options.

Recommendation Card:

- Presents the best-fit class/mastery direction with rationale.

Confidence Indicator:

- Clarifies whether current data is verified or provisional.

Next Decision Block:

- Moves users to hybrid selection, build category, or beginner build.

## Primary CTA

Choose this mastery direction.

## Secondary CTA

Compare mastery options.

## Exit Paths

- Hybrid Selection.
- Build Hub.
- Beginner Builds.
- Skill Detail.
- Planner.

---

# 4. Hybrid Selection

## Page Goal

Help users decide whether a hybrid direction is appropriate or whether they should choose a simpler starter path.

## User State

The user is interested in combining playstyles or mastery directions but may not understand the complexity cost.

## Block Order

[Decision Hero]

v

[Playstyle Match]

v

[Comparison Matrix]

v

[Pros & Cons]

v

[Difficulty Rating]

v

[Recommendation Card]

v

[Confidence Indicator]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames hybrid as a decision with tradeoffs, not automatically an upgrade.

Playstyle Match:

- Shows which mixed playstyles make sense conceptually.

Comparison Matrix:

- Compares simple path versus hybrid path.

Pros & Cons:

- Explains flexibility, complexity, synergy risk, and beginner safety.

Difficulty Rating:

- Identifies when hybrid planning is too demanding for a first character.

Recommendation Card:

- Recommends either a safe hybrid path or a simpler alternative.

Confidence Indicator:

- Marks hybrid advice as more cautious if data is incomplete.

Next Decision Block:

- Sends users to build category, planner, or beginner path.

## Primary CTA

Choose hybrid direction.

## Secondary CTA

Return to beginner-safe path.

## Exit Paths

- Build Hub.
- Beginner Builds.
- Planner.
- Mastery Selection.
- Beginner Guide.

---

# 5. Build Hub

## Page Goal

Help users choose a build category before opening specific build details.

## User State

The user wants a build but may not know whether they need beginner, easy, leveling, solo, hybrid, or endgame guidance.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Comparison Matrix]

v

[Build Snapshot]

v

[Difficulty Rating]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the hub around: Which build type fits me?

Decision Entry:

- Routes by beginner, easy, leveling, solo, endgame, or playstyle.

Comparison Matrix:

- Helps users compare build categories before reading detail pages.

Build Snapshot:

- Gives quick evaluation of available or planned build paths.

Difficulty Rating:

- Makes build complexity visible early.

Confidence Indicator:

- Shows whether build recommendations are stable enough to trust.

Related Decision Block:

- Offers adjacent choices like class picker or beginner guide only when they help the current decision.

Next Decision Block:

- Moves users into a build detail or back to a safer category.

## Primary CTA

Choose a build category.

## Secondary CTA

Use class picker first.

## Exit Paths

- Build Detail.
- Beginner Builds.
- Playstyle Selection.
- Mastery Selection.
- Beginner Guide.
- Planner.

---

# 6. Build Detail

## Page Goal

Help users decide whether a specific build is right for them and what to do after choosing it.

## User State

The user is evaluating a specific build or recommended build direction.

## Block Order

[Decision Hero]

v

[Build Snapshot]

v

[Recommendation Card]

v

[Pros & Cons]

v

[Difficulty Rating]

v

[Playstyle Match]

v

[Skill Progression]

v

[Gear Progression]

v

[Farming Recommendation]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the question: Should I play this build?

Build Snapshot:

- Gives immediate fit, difficulty, and best-for context.

Recommendation Card:

- Explains why the build is recommended and for whom.

Pros & Cons:

- Makes tradeoffs clear before commitment.

Difficulty Rating:

- Explains execution, leveling, and gear complexity.

Playstyle Match:

- Confirms whether the build matches how the user wants to play.

Skill Progression:

- Tells the user what to prioritize after choosing the build.

Gear Progression:

- Explains what equipment direction supports the build.

Farming Recommendation:

- Gives a future improvement path instead of ending at build choice.

Confidence Indicator:

- Marks advice that depends on unstable or incomplete data.

Related Decision Block:

- Offers meaningful alternatives if the build does not fit.

Next Decision Block:

- Moves user to leveling, skill, gear, farming, planner, or comparison.

## Primary CTA

Follow this build path.

## Secondary CTA

Compare another build.

## Exit Paths

- Skill Detail.
- Equipment Guide.
- Farming Guide.
- Planner.
- Build Hub.
- Beginner Guide.

---

# 7. Skill Detail

## Page Goal

Help users decide whether and when to invest in a specific skill.

## User State

The user is evaluating a skill because of a build, class/mastery, guide, or planner path.

## Block Order

[Decision Hero]

v

[Recommendation Card]

v

[Pros & Cons]

v

[Difficulty Rating]

v

[Skill Progression]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the page around: Should I invest in this skill?

Recommendation Card:

- States whether the skill is core, optional, situational, or not recommended for now.

Pros & Cons:

- Explains what the skill enables and what it costs.

Difficulty Rating:

- Clarifies whether the skill is simple, timing-sensitive, gear-dependent, or advanced.

Skill Progression:

- Explains when to invest and what to pair it with.

Confidence Indicator:

- Marks skill advice as verified, provisional, or incomplete.

Related Decision Block:

- Routes to builds, class/mastery context, or alternative skills.

Next Decision Block:

- Sends user back to build execution or toward planner adjustment.

## Primary CTA

Use this skill in a build.

## Secondary CTA

Compare skill alternatives.

## Exit Paths

- Build Detail.
- Mastery Selection.
- Skill Progression.
- Planner.
- FAQ.

---

# 8. Equipment Guide

## Page Goal

Help users decide what equipment direction or upgrade priority supports their build.

## User State

The user has a build or playstyle direction and wants to improve damage, defense, comfort, or progression.

## Block Order

[Decision Hero]

v

[Recommendation Card]

v

[Pros & Cons]

v

[Gear Progression]

v

[Farming Recommendation]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the page around: What gear direction should I pursue?

Recommendation Card:

- Gives the first equipment priority based on current goal.

Pros & Cons:

- Explains offensive, defensive, and utility tradeoffs.

Gear Progression:

- Organizes gear direction by early, transition, and endgame needs.

Farming Recommendation:

- Connects gear goals to the next activity decision.

Confidence Indicator:

- Separates stable gear principles from uncertain item specifics.

Related Decision Block:

- Routes users back to build, skill, or farming decisions.

Next Decision Block:

- Moves user toward farming, planner, or build optimization.

## Primary CTA

Choose gear priority.

## Secondary CTA

Return to build guide.

## Exit Paths

- Farming Guide.
- Build Detail.
- Planner.
- Skill Detail.
- FAQ.

---

# 9. Farming Guide

## Page Goal

Help users decide what activity or progression step to pursue next.

## User State

The user is playing or planning a build and has a blocker: level, gear, damage, defense, or unclear endgame direction.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Farming Recommendation]

v

[Gear Progression]

v

[Confidence Indicator]

v

[FAQ Block]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the page around: What should I do next to progress?

Decision Entry:

- Lets users identify their blocker: leveling, gear, damage, defense, or endgame.

Farming Recommendation:

- Recommends an activity or progression focus.

Gear Progression:

- Connects farming to practical equipment outcomes.

Confidence Indicator:

- Flags whether farming advice depends on stable game systems.

FAQ Block:

- Resolves common farming and progression blockers.

Related Decision Block:

- Offers adjacent decisions such as build adjustment or equipment priorities.

Next Decision Block:

- Sends users to action, reassessment, build improvement, or endgame preparation.

## Primary CTA

Follow this progression path.

## Secondary CTA

Diagnose another blocker.

## Exit Paths

- Equipment Guide.
- Build Detail.
- Planner.
- Endgame guidance.
- FAQ.

---

# 10. Planner

## Page Goal

Help users validate or customize a build direction after they have enough context to make meaningful choices.

## User State

The user has chosen or nearly chosen a playstyle, class/mastery, build category, or skill direction.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Playstyle Match]

v

[Difficulty Rating]

v

[Planner Result]

v

[Pros & Cons]

v

[Skill Progression]

v

[Gear Progression]

v

[Farming Recommendation]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Frames the planner around: Is this build direction coherent enough to follow?

Decision Entry:

- Captures the user's current decision inputs at a conceptual level.

Playstyle Match:

- Confirms whether the plan matches the desired gameplay feel.

Difficulty Rating:

- Warns about complexity before the user follows the plan.

Planner Result:

- Summarizes the recommended plan and why it fits.

Pros & Cons:

- Makes the plan's tradeoffs explicit.

Skill Progression:

- Shows what skill priorities make the plan actionable.

Gear Progression:

- Shows what equipment direction supports the plan.

Farming Recommendation:

- Gives progression after the plan is accepted.

Confidence Indicator:

- Marks planner output as verified, provisional, or incomplete.

Related Decision Block:

- Offers comparison or adjustment decisions.

Next Decision Block:

- Moves user from planning to action.

## Primary CTA

Follow this plan.

## Secondary CTA

Adjust inputs.

## Exit Paths

- Build Detail.
- Skill Detail.
- Equipment Guide.
- Farming Guide.
- Build Hub.
- Search Results.

---

# 11. FAQ

## Page Goal

Resolve common blockers quickly and return users to the correct decision path.

## User State

The user has a specific question or hesitation that interrupts the decision flow.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[FAQ Block]

v

[Related Decision Block]

v

[Next Decision Block]

v

[Decision Footer]

## Block Purpose

Decision Hero:

- Frames FAQ as a way to unblock decisions, not a content archive.

Decision Entry:

- Lets users choose question type: build, class/mastery, skill, equipment, farming, tools, or Early Access data.

FAQ Block:

- Answers the blocker directly and explains the decision implication.

Related Decision Block:

- Routes from answer to the decision that follows.

Next Decision Block:

- Gives the most useful next step after the answer.

Decision Footer:

- Provides recovery paths for users still unsure.

## Primary CTA

Continue to recommended decision.

## Secondary CTA

Choose another question category.

## Exit Paths

- Home.
- Playstyle Selection.
- Build Hub.
- Mastery Selection.
- Skill Detail.
- Tools.

---

# 12. Search Results

## Page Goal

Turn a user query into the correct decision path instead of a flat list of results.

## User State

The user has a search term but may not know whether it belongs to builds, classes, skills, guides, equipment, farming, or tools.

## Block Order

[Decision Hero]

v

[Decision Entry]

v

[Recommendation Card]

v

[Build Snapshot]

v

[Confidence Indicator]

v

[Related Decision Block]

v

[Next Decision Block]

## Block Purpose

Decision Hero:

- Reframes search around: What are you trying to decide?

Decision Entry:

- Classifies the query by decision type.

Recommendation Card:

- Highlights the best decision match before showing broader results.

Build Snapshot:

- Summarizes build-related matches when the query implies build intent.

Confidence Indicator:

- Marks result confidence when data or matching is incomplete.

Related Decision Block:

- Offers alternate decision paths if the query is ambiguous.

Next Decision Block:

- Moves the user into the best decision surface.

## Primary CTA

Open best decision match.

## Secondary CTA

Start from Choose Build.

## Exit Paths

- Build Hub.
- Build Detail.
- Mastery Selection.
- Skill Detail.
- Equipment Guide.
- Farming Guide.
- Planner.
- FAQ.

---

## Cross-Page Wireframe Rules

1. Every page starts by naming the decision.
2. Every page shows the most useful decision component before deep explanation.
3. Every page includes a next decision before the user reaches the end.
4. Confidence appears wherever game-specific claims may change.
5. Generic related pages are replaced with decision-based exit paths.
6. Beginner routes stay visible until the user clearly chooses advanced paths.
7. Planner and Search Results use the same decision components as editorial pages.
8. These wireframes do not define visual layout, styling, code, routing, or implementation.

---

## Completion Status

This low-fidelity wireframe document is complete for the Product Design stage.

It can support the next stage:

- Component Spec.

No implementation is included.
