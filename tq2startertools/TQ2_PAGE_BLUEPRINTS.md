# TQ2 Page Blueprints

Status: Product Design / Blueprint

This document defines the responsibility of each major page type in Titan Quest 2 Starter Tools before visual design begins.

This is not a wireframe document. It does not define layout, components, visual hierarchy, HTML, CSS, React, routes, or implementation details.

The page blueprints are based on:

- `TQ2_USER_DECISION_FLOW.md`
- `TQ2_INFORMATION_ARCHITECTURE.md`

Core rule:

Every page must help the player complete a decision. If a page does not help the player decide what to choose, play, learn, or do next, it should not exist yet.

---

## Page Blueprint Principles

### Decision First

Pages are not content containers. Pages are decision surfaces.

Every page must answer at least one of these questions:

- What should I choose?
- Should I play this?
- Is this beginner friendly?
- What should I learn before choosing?
- What should I do next?
- How do I improve this later?

### Information Blocks, Not Layouts

The sections below define required information blocks only.

They do not define:

- Page layout.
- Wireframe structure.
- Visual styling.
- Component design.
- Interactive behavior.
- Technical implementation.

### Progression Rule

The website should move users through this sequence:

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

---

# 1. Home

## Purpose

The Home page helps users understand that Titan Quest 2 Starter Tools is a decision tool and choose their first path.

It solves the problem of first-visit uncertainty: users may not know whether they should start with a build, class, skill, guide, or tool.

## User State

What the user already knows:

- They are interested in Titan Quest 2.
- They may need help choosing a build, class, or starter direction.
- They may have arrived from a broad search query.

What uncertainty they still have:

- Where should I start?
- What type of build fits me?
- Is there a beginner-safe route?
- Should I use a tool, read a guide, or browse builds?

## Inputs

The user brings:

- Search intent or direct curiosity.
- Experience level: beginner, returning ARPG player, or veteran.
- Possible playstyle preference.
- Unclear decision priority.

## Outputs

The user should leave with:

- A clear first action.
- Awareness that the site is organized around decisions.
- A path toward playstyle selection, beginner builds, class selection, or tools.

## Required Sections

Mandatory information blocks:

- Site purpose statement.
- Primary decision entry: choose build or playstyle.
- Beginner-safe entry point.
- Class or mastery selection entry point.
- Skills entry point.
- Beginner guide entry point.
- Tools entry point.
- Early Access / data confidence notice.
- Short explanation that recommendations may evolve as official data stabilizes.

## Decision Goal

The user should decide what first decision path to follow:

- Choose playstyle.
- View beginner builds.
- Choose class/mastery direction.
- Read beginner guide.
- Enter tools.

## Next Decision

The next decision should be one of:

- What playstyle do I enjoy?
- What class/mastery should I choose?
- Which beginner build should I start with?
- What should I learn before choosing?

## Success Criteria

The Home page succeeds when:

- Users do not need to understand the whole site before taking action.
- Users can choose a clear next step quickly.
- Beginner users can find beginner-safe guidance immediately.
- Experienced users can reach builds, classes, skills, or tools without friction.
- The page avoids becoming a generic marketing or news page.

---

# 2. Playstyle Selection

## Purpose

The Playstyle Selection page helps users translate personal gameplay preference into a recommended direction.

It solves the problem of users not knowing whether they should start melee, caster, ranged, pet, or hybrid.

## User State

What the user already knows:

- They want help choosing how to play.
- They may have vague preferences such as safe, fast, simple, powerful, or fun.

What uncertainty they still have:

- Which playstyle fits my personality?
- Which playstyle is beginner friendly?
- Which playstyle maps to builds or classes?
- Which playstyle should I avoid?

## Inputs

The user brings:

- Preferred combat feel.
- Tolerance for complexity.
- Preferred range: close, ranged, spell, pet, or mixed.
- Risk tolerance.
- Solo or group preference.

## Outputs

The user should leave with:

- A selected playstyle direction.
- A short explanation of why it fits.
- Awareness of strengths and tradeoffs.
- A recommended next decision: mastery/class or build category.

## Required Sections

Mandatory information blocks:

- Playstyle question: What do you enjoy?
- Melee option explanation.
- Caster option explanation.
- Ranged option explanation.
- Pet option explanation.
- Hybrid option explanation.
- Beginner friendliness by playstyle.
- Complexity by playstyle.
- Recommended next step for each playstyle.
- Warning that specific builds depend on stable official data.

## Decision Goal

The user should choose a playstyle direction.

## Next Decision

The next decision should be:

- Which mastery/class supports this playstyle?
- Which beginner build matches this playstyle?
- Should I choose simple, balanced, or advanced difficulty?

## Success Criteria

The page succeeds when:

- Users can explain their preferred playstyle in site terms.
- Users understand tradeoffs before choosing.
- Beginner users are routed away from overly complex options when appropriate.
- Every playstyle points to a concrete next decision.

---

# 3. Mastery Selection

## Purpose

The Mastery Selection page helps users choose a class/mastery direction based on playstyle, experience, and goal.

It solves the problem of players facing class or mastery names without understanding what each choice means for actual play.

## User State

What the user already knows:

- They want to choose a class or mastery direction.
- They may already have a playstyle preference.
- They may know Titan Quest has class/mastery-style decisions.

What uncertainty they still have:

- Which mastery is beginner friendly?
- Which mastery matches my playstyle?
- Which mastery has good build paths?
- Which mastery should I avoid for a first character?

## Inputs

The user brings:

- Playstyle choice.
- Experience level.
- Difficulty preference.
- Play goal.
- Possible favorite class fantasy.

## Outputs

The user should leave with:

- A recommended mastery/class direction.
- Understanding of why it fits.
- Knowledge of beginner friendliness and complexity.
- A next step toward build selection or hybrid selection.

## Required Sections

Mandatory information blocks:

- Mastery/class choice question.
- Available mastery/class overview.
- Beginner friendliness notes.
- Playstyle fit notes.
- Complexity notes.
- Strengths by mastery/class.
- Weaknesses by mastery/class.
- Recommended for / avoid if guidance.
- Recommended next build category.
- Link path to hybrid selection when relevant.

## Decision Goal

The user should choose a primary mastery/class direction.

## Next Decision

The next decision should be:

- Should I stay with a simple beginner path?
- Should I choose a hybrid direction?
- Which build category uses this mastery/class?

## Success Criteria

The page succeeds when:

- Users understand class/mastery choices in practical gameplay terms.
- Users can identify at least one suitable direction.
- New players can distinguish safe options from advanced options.
- The page moves users toward build selection instead of stopping at information.

---

# 4. Hybrid Selection

## Purpose

The Hybrid Selection page helps users decide whether combining playstyles or mastery directions is a good idea for them.

It solves the problem of players being attracted to hybrid builds without understanding complexity, synergy, or risk.

## User State

What the user already knows:

- They are interested in combining playstyles or class directions.
- They may have chosen a primary playstyle or mastery.
- They may want flexibility or a more advanced character.

What uncertainty they still have:

- Is hybrid right for me?
- Which combinations are beginner friendly?
- Which combinations require more planning?
- What tradeoffs come with hybrid builds?

## Inputs

The user brings:

- Primary playstyle or mastery preference.
- Secondary interest.
- Complexity tolerance.
- Goal: fun, endgame, solo, fast leveling, or experimentation.

## Outputs

The user should leave with:

- A clear answer on whether hybrid is recommended.
- A safe hybrid direction or a warning to choose a simpler path.
- Understanding of synergy and tradeoffs.
- A next step toward build hub or planner.

## Required Sections

Mandatory information blocks:

- Hybrid choice question.
- When hybrid is a good idea.
- When hybrid is risky.
- Beginner-safe hybrid guidance.
- Advanced hybrid guidance.
- Synergy principles.
- Common hybrid mistakes.
- Recommended hybrid build categories.
- Next step to build selection or planner.

## Decision Goal

The user should decide whether to choose a hybrid direction now or stay with a simpler starter path.

## Next Decision

The next decision should be:

- Which hybrid build category should I inspect?
- Should I use a planner before committing?
- Should I return to beginner builds?

## Success Criteria

The page succeeds when:

- Users do not choose hybrid only because it sounds powerful.
- Users understand complexity before committing.
- Beginners can identify safer alternatives.
- Advanced users are routed toward planner or comparison paths.

---

# 5. Build Hub

## Purpose

The Build Hub helps users choose the correct build category before reading build details.

It solves the problem of users seeing too many builds without knowing which type fits their current goal.

## User State

What the user already knows:

- They want a build or build direction.
- They may know their experience level, playstyle, or goal.

What uncertainty they still have:

- Should I choose beginner, easy, leveling, solo, or endgame?
- Which build category matches my situation?
- Should I compare first or choose directly?

## Inputs

The user brings:

- Player experience.
- Playstyle preference.
- Difficulty preference.
- Goal: leveling, solo, endgame, relaxed, or advanced.

## Outputs

The user should leave with:

- A selected build category.
- A shortlist of suitable build paths.
- Understanding of which build type to avoid.
- A next step into build detail or guide.

## Required Sections

Mandatory information blocks:

- Build category decision question.
- Beginner Builds category.
- Easy Builds category.
- Leveling Builds category.
- Solo Builds category.
- Endgame Builds category.
- Playstyle-based build categories.
- Build category comparison criteria.
- Recommended first build path.
- Early Access confidence note.
- Next step guidance for each category.

## Decision Goal

The user should choose a build category or recommended first build path.

## Next Decision

The next decision should be:

- Should I play this specific build?
- Do I need beginner guide context first?
- Should I compare build categories again?

## Success Criteria

The page succeeds when:

- Users do not have to inspect every build.
- Users can narrow choices by goal and comfort level.
- Beginner users are routed to beginner-safe content.
- Advanced users can find optimization or endgame paths without confusing beginners.

---

# 6. Build Detail

## Purpose

The Build Detail page helps users decide whether a specific build is right for them and what to do after choosing it.

It solves the problem of build pages that describe a build but do not help users evaluate fit, risks, or next steps.

## User State

What the user already knows:

- They are interested in a specific build or build category.
- They may have chosen playstyle, class/mastery, or goal.

What uncertainty they still have:

- Should I play this build?
- Is it beginner friendly?
- What are the strengths and weaknesses?
- How do I level it?
- What should I upgrade next?

## Inputs

The user brings:

- Selected build or build category.
- Player experience.
- Preferred difficulty.
- Play goal.
- Possible class/mastery interest.

## Outputs

The user should leave with:

- A yes/no or compare decision about the build.
- Understanding of why the build is recommended.
- Strengths and weaknesses.
- Leveling direction.
- Next upgrade priorities.
- Next decision path.

## Required Sections

Mandatory information blocks:

- Build fit summary.
- Who should play this build.
- Who should avoid this build.
- Why this build is recommended.
- Best for: Beginner, Endgame, Solo, Group, Relaxed, or Advanced.
- Strengths.
- Weaknesses.
- Required playstyle comfort.
- Leveling advice.
- Skill priority guidance.
- Equipment direction.
- Next upgrade priorities.
- Alternative decision path if the build does not fit.
- Next step to guide, skill detail, equipment guide, farming guide, or planner.

## Decision Goal

The user should decide whether to play this build.

## Next Decision

The next decision should be:

- How do I level this build?
- Which skills should I prioritize?
- What equipment direction supports it?
- Should I compare another build?
- Should I use the planner to customize it?

## Success Criteria

The page succeeds when:

- Users know whether the build fits them.
- Users understand tradeoffs before committing.
- Users have a clear first action after choosing the build.
- Users who reject the build know where to go next.
- The page does not rely on unsupported or unstable game data.

---

# 7. Skill Detail

## Purpose

The Skill Detail page helps users decide whether a skill deserves investment for their chosen build or class direction.

It solves the problem of players reading skill information without knowing whether the skill matters for their decision.

## User State

What the user already knows:

- They are considering a skill.
- They may have chosen a class/mastery or build.

What uncertainty they still have:

- Should I invest in this skill?
- Is it core, optional, or situational?
- Which builds use it?
- What does it synergize with?
- Is it beginner friendly?

## Inputs

The user brings:

- Selected skill.
- Build or class context.
- Leveling stage or endgame goal.
- Need for investment priority.

## Outputs

The user should leave with:

- Skill investment decision.
- Understanding of use case.
- Related build context.
- Synergy and tradeoff awareness.
- Next step back into build or planner.

## Required Sections

Mandatory information blocks:

- Skill purpose summary.
- Core use case.
- Beginner friendliness.
- Investment priority: core, optional, situational, or avoid for now.
- Builds that use this skill.
- Class/mastery context.
- Synergy explanation.
- Tradeoffs or weaknesses.
- Leveling relevance.
- Endgame relevance.
- Next step to build, class, skill comparison, or future planner.

## Decision Goal

The user should decide whether to invest in the skill now, later, or not at all.

## Next Decision

The next decision should be:

- Which build uses this skill best?
- Which supporting skill should I choose?
- Should I return to the build guide?
- Should I use a future skill advisor?

## Success Criteria

The page succeeds when:

- Users can classify the skill as core, optional, situational, or not recommended for their path.
- Users understand why the skill matters.
- Users can connect the skill to builds and class decisions.
- The page does not become a disconnected wiki entry.

---

# 8. Equipment Guide

## Purpose

The Equipment Guide helps users decide what gear direction supports their chosen build or play goal.

It solves the problem of players asking what items or stats to look for without stable full item data.

## User State

What the user already knows:

- They have a build, class, or playstyle direction.
- They want to improve performance or survivability.

What uncertainty they still have:

- What gear priorities matter for this build type?
- What should I look for while leveling?
- What should I upgrade first?
- Is gear important for this build to work?

## Inputs

The user brings:

- Build type.
- Playstyle.
- Leveling or endgame stage.
- Current pain point: damage, survival, speed, resource, or comfort.

## Outputs

The user should leave with:

- Gear priority direction.
- Upgrade order.
- Understanding of gear dependence.
- Next farming or build optimization decision.

## Required Sections

Mandatory information blocks:

- Equipment decision question.
- Gear priority by build type.
- Leveling gear priorities.
- Endgame gear priorities.
- Defensive priorities.
- Offensive priorities.
- Utility or comfort priorities.
- Gear dependence warning.
- What to upgrade first.
- What not to over-optimize early.
- Next step to farming, build detail, or planner.

## Decision Goal

The user should decide what gear direction or upgrade priority to pursue next.

## Next Decision

The next decision should be:

- What should I farm?
- Which build weakness should I fix first?
- Should I return to the build guide or planner?

## Success Criteria

The page succeeds when:

- Users know what kind of equipment supports their build.
- Users avoid chasing irrelevant stats or premature optimization.
- Users understand gear dependence before committing to a build.
- Users can move naturally into farming or optimization.

---

# 9. Farming Guide

## Purpose

The Farming Guide helps users decide what activity or goal to pursue next to improve their character.

It solves the problem of players reaching a progression wall and not knowing whether to level, farm gear, change skills, or optimize build direction.

## User State

What the user already knows:

- They are playing or planning a build.
- They need progression help.
- They may be leveling, preparing for endgame, or improving gear.

What uncertainty they still have:

- What should I farm next?
- Should I level more or improve equipment?
- Is my problem build choice, skill choice, or gear?
- What endgame direction should I prepare for?

## Inputs

The user brings:

- Current build or playstyle.
- Current stage: leveling, transition, or endgame.
- Pain point: damage, defense, speed, resources, or unclear goal.

## Outputs

The user should leave with:

- Farming or progression priority.
- Understanding of whether the issue is gear, skills, level, or build fit.
- Next optimization step.

## Required Sections

Mandatory information blocks:

- Farming decision question.
- Leveling farming direction.
- Gear farming direction.
- Endgame farming direction.
- Progression blocker diagnosis.
- Build-specific farming considerations.
- When to return to build optimization.
- When to change build direction.
- Next step to equipment guide, build detail, or planner.

## Decision Goal

The user should decide what progression activity to pursue next.

## Next Decision

The next decision should be:

- What gear priority should I target?
- Should I adjust my build?
- Should I move toward endgame optimization?

## Success Criteria

The page succeeds when:

- Users can identify the next useful progression action.
- Users do not farm aimlessly.
- Users understand whether farming is actually the right solution.
- Users can return to build or equipment guidance with clearer intent.

---

# 10. Planner

## Purpose

The Planner helps users customize or validate a build direction after they have enough context to make meaningful choices.

It solves the problem of users needing to adapt a recommendation to their preferred playstyle, goal, or available information.

## User State

What the user already knows:

- They have chosen or are close to choosing a build, class/mastery, or playstyle.
- They want to make a more personalized decision.

What uncertainty they still have:

- Does this build path make sense together?
- Which skills should I prioritize?
- What should I change for my goal?
- Can I share or save this direction later?

## Inputs

The user brings:

- Playstyle.
- Class/mastery direction.
- Skill interest.
- Difficulty preference.
- Play goal.
- Leveling or endgame stage.

## Outputs

The user should leave with:

- A build summary.
- Recommended priorities.
- Explanation of fit.
- Strengths and weaknesses.
- Next guide or optimization action.

## Required Sections

Mandatory information blocks:

- Planner purpose statement.
- Current decision context.
- Selected playstyle.
- Selected class/mastery direction.
- Selected goal.
- Recommended build summary.
- Why this plan fits.
- Strengths.
- Weaknesses.
- Leveling priorities.
- Skill priorities.
- Equipment priorities.
- Next upgrade priorities.
- Warnings for unstable or incomplete data.
- Next step to build detail, skill detail, equipment guide, farming guide, or comparison.

## Decision Goal

The user should decide whether the planned build direction is coherent enough to follow.

## Next Decision

The next decision should be:

- Follow this build path.
- Adjust the plan.
- Compare another build.
- Read supporting guide.
- Move to equipment or farming priorities.

## Success Criteria

The page succeeds when:

- Users understand the recommended plan.
- Users know why the plan fits their inputs.
- Users can see strengths, weaknesses, and next priorities.
- Users can move from planning into action.
- The planner does not invent unsupported data.

---

# 11. FAQ

## Purpose

The FAQ helps users resolve common blockers quickly and return to the correct decision path.

It solves the problem of users having small but important questions that interrupt the decision flow.

## User State

What the user already knows:

- They have a specific question or hesitation.
- They may not need a full guide.

What uncertainty they still have:

- Is this beginner friendly?
- What does this term mean?
- Which path should I choose if I am unsure?
- Why is some data missing or marked unstable?

## Inputs

The user brings:

- A specific question.
- Confusion about a term, decision, or recommendation.
- Need for a short answer.

## Outputs

The user should leave with:

- A direct answer.
- A recommended next decision path.
- Confidence to continue.

## Required Sections

Mandatory information blocks:

- Beginner questions.
- Build questions.
- Class/mastery questions.
- Skill questions.
- Equipment questions.
- Farming questions.
- Tool questions.
- Early Access and data confidence questions.
- Next decision links after each answer.

## Decision Goal

The user should resolve a blocker and return to a meaningful decision path.

## Next Decision

The next decision should be:

- Choose build.
- Choose class/mastery.
- Read beginner guide.
- Inspect skills.
- Use tool.
- Continue optimization.

## Success Criteria

The page succeeds when:

- Users get short answers without leaving the decision flow.
- Each answer points to a next decision.
- FAQ content does not replace proper build, class, skill, or guide pages.
- The FAQ reduces confusion rather than becoming a content dump.

---

# 12. Search Results

## Purpose

The Search Results page helps users find the correct decision surface when they search within the site.

It solves the problem of users searching for terms like build, class, skill, beginner, gear, or planner and receiving an undifferentiated content list.

## User State

What the user already knows:

- They have a specific term or intent in mind.
- They may not know which section owns the answer.

What uncertainty they still have:

- Which result helps me decide?
- Is this a build question, class question, skill question, or guide question?
- What should I click first?

## Inputs

The user brings:

- Search query.
- Implied intent.
- Possible decision stage.

## Outputs

The user should leave with:

- The best matching decision path.
- Clear distinction between builds, classes, skills, guides, and tools.
- A suggested next action.

## Required Sections

Mandatory information blocks:

- Search query summary.
- Best decision match.
- Build matches.
- Class/mastery matches.
- Skill matches.
- Guide matches.
- Tool matches.
- No-result recovery path.
- Suggested next decision.

## Decision Goal

The user should decide which result category best answers their current question.

## Next Decision

The next decision should be:

- Choose a build result.
- Choose a class/mastery result.
- Choose a skill result.
- Read a guide.
- Use a tool.
- Start from Choose Build if the query is ambiguous.

## Success Criteria

The page succeeds when:

- Users are not given a flat list of pages.
- Search results clarify intent.
- Ambiguous queries are routed to decision entry points.
- Users can recover from no-result searches.
- The page reinforces the decision-first structure of the site.

---

# Cross-Page Decision Rules

## Required Decision Continuity

Every page must preserve continuity from the previous decision to the next one.

Examples:

- Home leads to playstyle or beginner path.
- Playstyle leads to mastery/class or build category.
- Mastery selection leads to hybrid selection or build category.
- Build hub leads to build detail.
- Build detail leads to skill, equipment, farming, or planner.
- Skill detail leads back to build decision.
- Equipment guide leads to farming or optimization.
- Farming guide leads to build improvement.
- Planner leads to execution or comparison.
- FAQ leads back to the relevant decision path.
- Search results route users to the best decision surface.

## Avoid Generic Related Pages

Do not use generic related pages as a product principle.

Use next decisions instead:

- Next: choose class.
- Next: inspect beginner builds.
- Next: validate skill investment.
- Next: improve equipment.
- Next: decide what to farm.
- Next: customize with planner.

## Early Access Data Rule

Because Titan Quest 2 data may change, every page type that depends on game facts should include:

- Data confidence note.
- Clear scope of current knowledge.
- Avoidance of fake exact numbers.
- Path to update later when official data stabilizes.

---

# Completion Status

This Page Blueprint document is complete for the Product Design / Blueprint stage.

It can now support the next product design step:

- Wireframe planning.

It does not contain implementation instructions, HTML, CSS, React, routing, build commands, deployment steps, or component specifications.
