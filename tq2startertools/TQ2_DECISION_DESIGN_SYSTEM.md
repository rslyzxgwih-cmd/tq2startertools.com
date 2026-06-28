# TQ2 Decision Design System

Status: Product Design / Blueprint

This document defines reusable decision information components for Titan Quest 2 Starter Tools.

These are not visual UI components. They are reusable information patterns that can appear across pages, tools, guides, recommendations, search results, and future planner experiences.

Based on:

- `TQ2_USER_DECISION_FLOW.md`
- `TQ2_INFORMATION_ARCHITECTURE.md`
- `TQ2_PAGE_BLUEPRINTS.md`

This document does not define wireframes, layout, HTML, CSS, React, routing, implementation, build steps, or deployment steps.

## System Philosophy

Titan Quest 2 Starter Tools should be assembled from decision components, not generic content blocks.

A decision component exists only if it helps a player answer one of these questions:

- What should I choose?
- Should I play this?
- Is this beginner friendly?
- What should I learn before choosing?
- What should I do next?
- How do I improve this later?

Every component must have inputs, outputs, a user decision, and a next decision.

---

# 1. Decision Hero

## Purpose

Introduce the current decision the user is about to make.

## Problem It Solves

Users often land on a page without knowing whether it will help them choose, learn, compare, or optimize. The Decision Hero clarifies the decision context immediately.

## Required Inputs

- Page type.
- User decision question.
- User stage: landing, choosing, recommending, building, optimizing, or endgame.
- Primary next action.

## Expected Outputs

- Clear understanding of what this page helps decide.
- Clear first action.
- Confidence that the page is decision-oriented, not generic information.

## User Decision

Should I continue with this decision path or choose a different path?

## Mandatory Information

- Main decision question.
- Short answer to what the page helps with.
- Primary decision path.
- Current user stage.
- Data confidence or Early Access caveat when relevant.

## Optional Information

- Secondary decision path.
- Beginner note.
- Advanced player note.
- Search-intent alignment statement.

## Next Decision

- Choose playstyle.
- Choose build.
- Choose class/mastery.
- Inspect skill.
- Use planner.
- Continue guide.

## Success Criteria

- User understands the page purpose within a few seconds.
- User can identify the next meaningful decision.
- Page does not feel like a generic article or wiki entry.

---

# 2. Decision Entry

## Purpose

Offer the user a small set of decision paths based on their current uncertainty.

## Problem It Solves

Users may not know whether they need builds, classes, skills, guides, or tools. Decision Entry prevents blind browsing.

## Required Inputs

- Available decision paths.
- User intent category.
- Persona fit: beginner, veteran, casual, optimizer, or endgame.
- Priority order of paths.

## Expected Outputs

- User selects a decision path.
- User enters the correct part of the journey.
- Ambiguous intent becomes a specific next step.

## User Decision

Which path should I take first?

## Mandatory Information

- Decision prompt.
- 3 to 5 primary choices.
- One-sentence outcome for each choice.
- Beginner-safe option.
- Tool-assisted option when available.

## Optional Information

- Estimated complexity.
- Best-for labels.
- Current data confidence.
- Recommended default for unsure users.

## Next Decision

- Choose playstyle.
- Choose beginner build.
- Choose class/mastery.
- Read beginner guide.
- Use decision tool.

## Success Criteria

- User does not need to inspect navigation to continue.
- User chooses one of the decision paths.
- Beginner users are not overwhelmed by advanced paths.

---

# 3. Recommendation Card

## Purpose

Present a recommended choice with enough reasoning for the user to accept, reject, or compare it.

## Problem It Solves

Recommendations without explanation create low trust. The user needs to know why a build, class, skill, or path is recommended.

## Required Inputs

- Recommended item or path.
- Reason for recommendation.
- User inputs that influenced the recommendation.
- Strengths.
- Weaknesses.
- Next action.

## Expected Outputs

- User understands why the recommendation fits.
- User can decide whether to follow it.
- User knows the next decision if they accept or reject it.

## User Decision

Should I follow this recommendation?

## Mandatory Information

- Recommendation name.
- Why this is recommended.
- Best for.
- Strengths.
- Weaknesses.
- Who should choose it.
- Who should avoid it.
- Confidence indicator.
- Next decision.

## Optional Information

- Alternative recommendation.
- Beginner note.
- Endgame note.
- SSF or solo note.
- Required experience level.

## Next Decision

- View build detail.
- Choose another recommendation.
- Read beginner guide.
- Inspect skills.
- Use planner.

## Success Criteria

- User can explain why the recommendation was made.
- User can accept or reject it confidently.
- User is not left with a dead end.

---

# 4. Comparison Matrix

## Purpose

Help users compare multiple options using decision criteria rather than raw information.

## Problem It Solves

Users often compare builds, classes, skills, or gear paths without knowing which criteria matter. A Comparison Matrix turns comparison into a decision.

## Required Inputs

- Options being compared.
- Decision criteria.
- Evaluation for each criterion.
- Recommended default.
- Tradeoff explanation.

## Expected Outputs

- User identifies the best option for their goal.
- User understands tradeoffs.
- User can proceed without opening every detail page.

## User Decision

Which option fits my goal best?

## Mandatory Information

- Options.
- Beginner friendliness.
- Complexity.
- Leveling speed.
- Gear dependence.
- Survivability.
- Endgame potential.
- Playstyle fit.
- Recommended choice by user goal.

## Optional Information

- Solo friendliness.
- Group usefulness.
- Patch confidence.
- Skill dependency.
- Farming dependency.

## Next Decision

- Choose a build.
- Choose a class/mastery.
- Inspect skill details.
- Use planner for customization.

## Success Criteria

- User can narrow multiple options to one or two choices.
- Criteria are decision-oriented, not trivia.
- The matrix reduces confusion rather than adding data overload.

---

# 5. Build Snapshot

## Purpose

Summarize a build enough for quick evaluation before the user reads full details.

## Problem It Solves

Users need to know whether a build is worth inspecting before committing time to a full build page.

## Required Inputs

- Build name.
- Build category.
- Playstyle.
- Difficulty.
- Best-for tags.
- Confidence level.
- Primary next action.

## Expected Outputs

- User understands what the build is for.
- User can decide whether to inspect it.
- User can compare it against other build snapshots.

## User Decision

Should I inspect this build further?

## Mandatory Information

- Build name.
- Build role.
- Best for.
- Difficulty.
- Playstyle.
- Beginner friendliness.
- Key strengths.
- Key weakness.
- Next decision.

## Optional Information

- Leveling fit.
- Endgame fit.
- Solo fit.
- Gear dependence.
- Skill dependency.

## Next Decision

- Open build detail.
- Compare with another build.
- Return to playstyle or mastery selection.

## Success Criteria

- User can quickly filter builds.
- Snapshot does not overpromise.
- Snapshot leads to a clear build decision.

---

# 6. Pros & Cons

## Purpose

Make tradeoffs explicit before the user commits to a build, class, skill, gear path, or tool recommendation.

## Problem It Solves

Users need to understand what they gain and what they give up. Without tradeoffs, recommendations feel biased or shallow.

## Required Inputs

- Subject being evaluated.
- Strengths.
- Weaknesses.
- User goal.
- Context: beginner, leveling, endgame, solo, group, or advanced.

## Expected Outputs

- User understands tradeoffs.
- User can decide whether weaknesses are acceptable.
- User can compare alternatives more honestly.

## User Decision

Are these tradeoffs acceptable for me?

## Mandatory Information

- Strengths.
- Weaknesses.
- Who benefits most.
- Who should avoid.
- Tradeoff summary.
- Next decision if accepted.
- Next decision if rejected.

## Optional Information

- Mitigation advice.
- Upgrade path.
- Required comfort level.
- Known uncertainty.

## Next Decision

- Accept recommendation.
- Compare alternatives.
- Read mitigation guide.
- Use planner.

## Success Criteria

- User understands both benefits and costs.
- Weaknesses are not hidden.
- User can continue whether they accept or reject the option.

---

# 7. Difficulty Rating

## Purpose

Explain how hard a path is to play, level, understand, or optimize.

## Problem It Solves

Difficulty is not one-dimensional. A build may be easy to play but hard to gear, or strong later but awkward early.

## Required Inputs

- Subject being rated.
- Execution difficulty.
- Planning difficulty.
- Gear difficulty.
- Leveling difficulty.
- User experience level.

## Expected Outputs

- User understands whether the choice fits their skill and patience.
- User can avoid choices that are too complex for their current stage.

## User Decision

Is this difficulty level right for me?

## Mandatory Information

- Overall difficulty.
- Execution difficulty.
- Leveling difficulty.
- Gear dependence.
- Beginner friendliness.
- Explanation of the rating.
- Safer alternative when relevant.

## Optional Information

- Endgame complexity.
- Mechanical intensity.
- Knowledge requirement.
- Mistakes to avoid.

## Next Decision

- Continue with this option.
- Choose easier alternative.
- Read beginner guide.
- Use planner for safer configuration.

## Success Criteria

- User knows whether the choice matches their comfort level.
- Difficulty rating explains why, not just a label.
- New players are protected from avoidable frustration.

---

# 8. Playstyle Match

## Purpose

Map a user's preferred gameplay feel to builds, classes, skills, or tools.

## Problem It Solves

Players often search by fantasy or feel, not by exact mechanics. Playstyle Match translates preference into site decisions.

## Required Inputs

- Preferred playstyle.
- Experience level.
- Goal.
- Difficulty tolerance.
- Available build or class options.

## Expected Outputs

- Recommended matching path.
- Explanation of fit.
- Warning if the playstyle is not beginner friendly.

## User Decision

Does this option match how I want to play?

## Mandatory Information

- User playstyle.
- Matching build/class/skill direction.
- Why it matches.
- Mismatch risks.
- Beginner friendliness.
- Next decision.

## Optional Information

- Alternative playstyle.
- Hybrid possibility.
- Endgame suitability.
- Solo or group note.

## Next Decision

- Choose mastery/class.
- Choose build category.
- Compare playstyle alternatives.
- Use Build Advisor.

## Success Criteria

- User sees the connection between preference and recommendation.
- User avoids choosing by name alone.
- Playstyle preference becomes an actionable path.

---

# 9. Beginner Guide

## Purpose

Provide enough beginner context to help users make early decisions safely.

## Problem It Solves

New players need guidance before they can evaluate builds, skills, classes, or gear. They do not need a full encyclopedia.

## Required Inputs

- Beginner status.
- Current uncertainty.
- Stage: before choosing, after choosing, or early leveling.
- Recommended decision path.

## Expected Outputs

- User understands basic decision principles.
- User knows what to avoid.
- User is ready to choose a build or class path.

## User Decision

What should I do first as a beginner?

## Mandatory Information

- Beginner-safe principle.
- Common early mistakes.
- What to choose first.
- What to ignore early.
- Beginner build path.
- Beginner class path.
- Skill investment warning.
- Next decision.

## Optional Information

- Titan Quest veteran note.
- ARPG veteran note.
- Casual player note.
- Data confidence note.

## Next Decision

- Choose beginner build.
- Choose class/mastery.
- Use Class Picker.
- Continue to leveling guidance.

## Success Criteria

- User feels less lost.
- User avoids premature complexity.
- User reaches a concrete build or class decision.

---

# 10. Skill Progression

## Purpose

Explain how skill investment should progress for a build, class, or leveling path.

## Problem It Solves

Players often know a skill exists but do not know when or why to invest in it.

## Required Inputs

- Build or class context.
- Skill list.
- Leveling stage.
- User goal.
- Priority rules.

## Expected Outputs

- User knows which skills matter now.
- User knows which skills can wait.
- User understands the reasoning behind progression.

## User Decision

Which skill should I prioritize next?

## Mandatory Information

- Core skill priority.
- Early skill priorities.
- Later skill priorities.
- Optional skills.
- Skills to avoid early.
- Reasoning for priority.
- Build connection.
- Next decision.

## Optional Information

- Endgame adjustment.
- Beginner-safe variation.
- Hybrid variation.
- Unknown or unstable data warning.

## Next Decision

- Continue build guide.
- Inspect skill detail.
- Adjust planner choices.
- Move to gear progression.

## Success Criteria

- User knows what to invest in next.
- Skill advice is connected to a build decision.
- User avoids scattered or unfocused skill choices.

---

# 11. Gear Progression

## Purpose

Explain what equipment direction matters as the user moves from starter build to stronger build.

## Problem It Solves

Users can get stuck chasing gear details too early or ignoring gear problems too long.

## Required Inputs

- Build type.
- Playstyle.
- Current stage.
- Weakness to fix.
- Available gear guidance.

## Expected Outputs

- User knows which gear priorities matter now.
- User knows what can wait.
- User understands whether gear dependence is high or low.

## User Decision

What gear priority should I pursue next?

## Mandatory Information

- Current stage.
- Build gear dependence.
- Offensive priority.
- Defensive priority.
- Utility priority.
- First upgrade priority.
- What not to chase yet.
- Next decision.

## Optional Information

- Endgame gear direction.
- Beginner replacement rule.
- Farming connection.
- Confidence indicator.

## Next Decision

- Farm gear.
- Return to build optimization.
- Adjust skill progression.
- Use planner.

## Success Criteria

- User understands gear direction without needing a full database.
- User can prioritize upgrades.
- Gear advice supports the build decision.

---

# 12. Farming Recommendation

## Purpose

Recommend the next progression activity based on the player's current goal or blocker.

## Problem It Solves

Players may not know whether their problem is level, gear, skill choice, or build fit.

## Required Inputs

- Current stage.
- Current build or playstyle.
- Pain point.
- Goal.
- Available progression paths.

## Expected Outputs

- Recommended farming or progression direction.
- Reason for recommendation.
- Alternative if farming is not the right solution.

## User Decision

What should I do next to progress?

## Mandatory Information

- Current blocker.
- Recommended activity.
- Why this activity helps.
- What to look for.
- What to avoid.
- When to stop and reassess.
- Next decision.

## Optional Information

- Gear target direction.
- Leveling target.
- Endgame readiness note.
- Build adjustment warning.

## Next Decision

- Follow farming path.
- Improve gear.
- Adjust build.
- Move to endgame optimization.

## Success Criteria

- User stops farming aimlessly.
- User understands why the activity matters.
- User has a clear reassessment point.

---

# 13. Planner Result

## Purpose

Summarize a personalized or rule-based build direction after user inputs are processed.

## Problem It Solves

Planner output can become a raw list of choices. The Planner Result turns those choices into a decision-ready recommendation.

## Required Inputs

- User playstyle.
- Experience level.
- Difficulty preference.
- Goal.
- Selected class/mastery or build direction.
- Selected skills when available.

## Expected Outputs

- Recommended build plan.
- Explanation of fit.
- Strengths and weaknesses.
- Next priorities.
- Next decision path.

## User Decision

Should I follow this plan, adjust it, or compare another path?

## Mandatory Information

- Recommended plan summary.
- Why this plan fits.
- Best for.
- Strengths.
- Weaknesses.
- Skill priorities.
- Gear priorities.
- Leveling priorities.
- Confidence indicator.
- Next decision.

## Optional Information

- Share summary.
- Alternative plan.
- Warning for unstable data.
- Optimization path.

## Next Decision

- Follow build plan.
- Adjust inputs.
- Compare build.
- Read supporting guide.
- Inspect skill detail.

## Success Criteria

- User understands the plan as a coherent build direction.
- User knows what to do next.
- Planner result does not feel like disconnected data.

---

# 14. Confidence Indicator

## Purpose

Show how reliable a recommendation, build, skill, or guide is under current Early Access uncertainty.

## Problem It Solves

Titan Quest 2 data may change. Users need to know whether advice is verified, provisional, or speculative.

## Required Inputs

- Information type.
- Source confidence.
- Last review status.
- Dependency on official data.
- Risk of change.

## Expected Outputs

- User understands how much trust to place in the information.
- User knows whether advice may change.
- Site avoids fake certainty.

## User Decision

Can I rely on this advice right now?

## Mandatory Information

- Confidence level.
- Reason for confidence level.
- What is verified.
- What is uncertain.
- Update condition.
- Next decision.

## Optional Information

- Last reviewed date.
- Patch or source note.
- Alternative safer option.
- Warning for advanced users.

## Next Decision

- Proceed with advice.
- Choose safer option.
- Wait for official data.
- Use broader guide instead of specific claim.

## Success Criteria

- User understands uncertainty.
- The site maintains trust.
- Low-confidence information is not presented as final advice.

---

# 15. FAQ Block

## Purpose

Answer a common blocker and return the user to the decision flow.

## Problem It Solves

Small questions can stop users from choosing. FAQ Block resolves friction without turning the page into a generic FAQ dump.

## Required Inputs

- User question.
- Short answer.
- Decision context.
- Next decision link.

## Expected Outputs

- User gets the answer.
- User knows what to do next.
- User returns to the relevant decision path.

## User Decision

Does this answer resolve my blocker so I can continue?

## Mandatory Information

- Question.
- Direct answer.
- Why it matters.
- Decision implication.
- Next decision.

## Optional Information

- Beginner note.
- Advanced note.
- Confidence indicator.
- Link to fuller guide.

## Next Decision

- Choose build.
- Choose class.
- Inspect skill.
- Use tool.
- Continue guide.

## Success Criteria

- User does not abandon the decision path.
- Answer is short enough to unblock.
- FAQ points forward, not sideways.

---

# 16. Related Decision Block

## Purpose

Show adjacent decisions that are genuinely useful from the user's current state.

## Problem It Solves

Generic related pages create noise. Related Decision Block keeps cross-linking tied to what the user might need to decide next.

## Required Inputs

- Current page decision.
- User stage.
- Adjacent decision options.
- Reason each option matters.

## Expected Outputs

- User sees useful adjacent decisions.
- User can recover if the current path is not right.
- Internal navigation remains decision-driven.

## User Decision

Which adjacent decision should I consider next?

## Mandatory Information

- Current decision context.
- Adjacent decision options.
- Why each option matters.
- Recommended default next decision.
- Avoidance of generic related links.

## Optional Information

- Beginner-safe adjacent option.
- Advanced adjacent option.
- Tool-assisted adjacent option.
- Comparison option.

## Next Decision

- Compare alternative build.
- Inspect class.
- Inspect skill.
- Return to beginner path.
- Use planner.

## Success Criteria

- User sees logical next decisions, not random pages.
- Links explain why they exist.
- The block improves flow continuity.

---

# 17. Next Decision Block

## Purpose

Tell the user the single most important decision to make after the current section or page.

## Problem It Solves

Users often finish reading a page and still do not know what to do next. This block prevents dead ends.

## Required Inputs

- Current decision outcome.
- Recommended next step.
- Alternative next step if user rejects the current recommendation.
- User stage.

## Expected Outputs

- User leaves the page or section with a clear next action.
- Decision flow continues.
- Page completion leads to progression.

## User Decision

What should I do next?

## Mandatory Information

- Primary next decision.
- Reason this is next.
- Action label in decision terms.
- Alternative if unsure.
- Destination decision path.

## Optional Information

- Beginner fallback.
- Advanced path.
- Tool-assisted path.
- Confidence note.

## Next Decision

- Choose build.
- Follow build.
- Inspect skill.
- Improve gear.
- Decide what to farm.
- Use planner.

## Success Criteria

- User does not reach a dead end.
- Next action is specific.
- The block reduces choice overload.

---

# 18. Decision Footer

## Purpose

Close a page with durable trust, rediscovery, and decision continuity.

## Problem It Solves

Footers often become generic navigation dumps. Decision Footer reinforces the decision system and gives users safe recovery paths.

## Required Inputs

- Major decision categories.
- Trust/support links.
- Current product phase.
- Future tool availability.

## Expected Outputs

- User can recover to a major decision path.
- User understands site scope and trust policies.
- User can find tools, guides, and update policy without noise.

## User Decision

Where should I go if I am still unsure?

## Mandatory Information

- Choose Build entry.
- Beginner Builds entry.
- Class Picker entry.
- Skills entry.
- Guides entry.
- Tools entry.
- Early Access or update policy.
- Contact or trust path.

## Optional Information

- Future planner entry.
- FAQ entry.
- Affiliate disclosure when relevant.
- Privacy or policy links.

## Next Decision

- Restart at a major decision point.
- Move to beginner path.
- Use a tool.
- Read a guide.

## Success Criteria

- Footer supports decisions instead of dumping links.
- Lost users can recover.
- Trust and scope are easy to find.

---

## Component Relationships

Components combine into page types by matching the user's current decision stage.

### Home

Use:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Recommendation Card.
- Beginner Guide.
- Confidence Indicator.
- Next Decision Block.
- Decision Footer.

Home answers:

- Where should I start?

### Playstyle Selection

Use:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Comparison Matrix.
- Difficulty Rating.
- Recommendation Card.
- Next Decision Block.

Playstyle Selection answers:

- What kind of gameplay fits me?

### Mastery Selection

Use:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Comparison Matrix.
- Pros & Cons.
- Difficulty Rating.
- Recommendation Card.
- Confidence Indicator.
- Next Decision Block.

Mastery Selection answers:

- Which class or mastery direction should I choose?

### Hybrid Selection

Use:

- Decision Hero.
- Comparison Matrix.
- Pros & Cons.
- Difficulty Rating.
- Playstyle Match.
- Recommendation Card.
- Confidence Indicator.
- Next Decision Block.

Hybrid Selection answers:

- Should I choose a hybrid path or keep it simple?

### Build Hub

Use:

- Decision Hero.
- Decision Entry.
- Comparison Matrix.
- Build Snapshot.
- Difficulty Rating.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Build Hub answers:

- Which build category should I inspect?

### Build Detail

Use:

- Decision Hero.
- Build Snapshot.
- Recommendation Card.
- Pros & Cons.
- Difficulty Rating.
- Playstyle Match.
- Skill Progression.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Build Detail answers:

- Should I play this build, and what should I do after choosing it?

### Skill Detail

Use:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Difficulty Rating when relevant.
- Skill Progression.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Skill Detail answers:

- Should I invest in this skill?

### Equipment Guide

Use:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Next Decision Block.

Equipment Guide answers:

- What gear direction should I pursue?

### Farming Guide

Use:

- Decision Hero.
- Decision Entry.
- Farming Recommendation.
- Gear Progression.
- Confidence Indicator.
- FAQ Block.
- Next Decision Block.

Farming Guide answers:

- What activity or progression step should I pursue next?

### Planner

Use:

- Decision Entry.
- Playstyle Match.
- Difficulty Rating.
- Planner Result.
- Pros & Cons.
- Skill Progression.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Planner answers:

- Is this plan coherent enough to follow?

### FAQ

Use:

- Decision Hero.
- FAQ Block.
- Related Decision Block.
- Next Decision Block.
- Decision Footer.

FAQ answers:

- What quick answer removes my blocker?

### Search

Use:

- Decision Hero.
- Decision Entry.
- Recommendation Card.
- Build Snapshot.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Search answers:

- Which result helps me make my current decision?

---

## Reusability Rules

### Rule 1: Components Follow Decisions, Not Pages

The same component can appear on multiple page types if the same decision exists there.

Example:

- Difficulty Rating can appear on Build Hub, Build Detail, Mastery Selection, Hybrid Selection, and Planner.

### Rule 2: Inputs Change, Component Responsibility Does Not

A component can adapt to a page by changing inputs, not by changing its purpose.

Example:

- Pros & Cons on Build Detail evaluates a build.
- Pros & Cons on Skill Detail evaluates a skill.
- Pros & Cons on Equipment Guide evaluates a gear direction.

The responsibility remains the same: make tradeoffs explicit.

### Rule 3: Every Component Must Produce A Next Decision

No component should only explain. It must move the user toward a decision.

Valid outputs:

- Choose this.
- Avoid this.
- Compare alternatives.
- Read supporting guide.
- Use tool.
- Continue optimization.

### Rule 4: Confidence Travels With Claims

Whenever a component contains game-specific advice, it should include or pair with Confidence Indicator.

Applies to:

- Recommendation Card.
- Build Snapshot.
- Pros & Cons.
- Difficulty Rating.
- Skill Progression.
- Gear Progression.
- Farming Recommendation.
- Planner Result.

### Rule 5: Beginner Safety Has Priority

When a component appears in a beginner context, it must include beginner-safe interpretation.

Applies to:

- Decision Entry.
- Recommendation Card.
- Comparison Matrix.
- Difficulty Rating.
- Beginner Guide.
- Skill Progression.
- Gear Progression.

### Rule 6: Avoid Generic Related Content

Related Decision Block can show adjacent paths, but only when they answer a meaningful next decision.

Invalid:

- More articles.
- Related pages.
- Popular content.

Valid:

- Compare another build.
- Choose class first.
- Inspect skill investment.
- Improve gear.
- Use planner.

### Rule 7: Components Can Be Composed, Not Reinvented

When a new page type appears, it should be assembled from existing decision components before inventing a new pattern.

New components should be added only when:

- A repeated decision cannot be represented by an existing component.
- The missing pattern appears across multiple page types.
- The component has defined inputs, outputs, and next decision.

---

## Reuse Across Major Surfaces

### Home

Reusable components:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Recommendation Card.
- Beginner Guide.
- Confidence Indicator.
- Next Decision Block.
- Decision Footer.

Home uses components to answer:

- Where should I start?

### Build

Reusable components:

- Build Snapshot.
- Recommendation Card.
- Comparison Matrix.
- Pros & Cons.
- Difficulty Rating.
- Playstyle Match.
- Skill Progression.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Build pages use components to answer:

- Should I play this?
- How should I progress this build?

### Skill

Reusable components:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Difficulty Rating.
- Skill Progression.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Skill pages use components to answer:

- Should I invest in this skill?

### Equipment

Reusable components:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Next Decision Block.

Equipment pages use components to answer:

- What gear direction should I pursue?

### Planner

Reusable components:

- Decision Entry.
- Playstyle Match.
- Difficulty Rating.
- Planner Result.
- Skill Progression.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Next Decision Block.

Planner surfaces use components to answer:

- Is this plan coherent enough to follow?

### Search

Reusable components:

- Decision Hero.
- Decision Entry.
- Recommendation Card.
- Build Snapshot.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Search uses components to answer:

- Which result helps me make my current decision?

---

## Future Scalability

### Scaling To More Titan Quest 2 Content

The system can add new builds, skills, equipment guides, farming paths, and planner outputs by reusing the same decision components.

New content should map to:

- The user decision it helps.
- The inputs it needs.
- The output it provides.
- The next decision it creates.

If a new page cannot map to these elements, it should not be added yet.

### Scaling To New Titan Quest 2 Tools

Future tools should reuse:

- Decision Entry for inputs.
- Recommendation Card for the main recommendation.
- Planner Result for output summaries.
- Pros & Cons for tradeoffs.
- Confidence Indicator for data certainty.
- Next Decision Block for progression.

This prevents each tool from becoming a separate product pattern.

### Scaling To Other Games

The system can support other ARPG or game tool sites if the game has decisions such as:

- Choose class.
- Choose build.
- Choose skill.
- Choose gear direction.
- Choose farming path.
- Optimize character.
- Plan endgame.

Game-specific labels can change while the component responsibilities remain stable.

Examples:

- Mastery Selection can become Class Selection, Ascendancy Selection, or Subclass Selection.
- Skill Progression can become Passive Progression, Ability Progression, or Talent Progression.
- Gear Progression can become Item Progression, Loadout Progression, or Upgrade Progression.
- Farming Recommendation can become Activity Recommendation, Loot Route, or Progression Recommendation.

### Scaling Without Redesign

To add a new game, define:

- Core user decisions.
- Game-specific terms.
- Build or character structure.
- Progression stages.
- Confidence model for data stability.
- Tool roadmap.

Then reuse the same decision components.

The design system should not need a new architecture unless the new game requires a fundamentally different decision flow.

---

## Governance Rules

1. No component exists only for decoration.
2. No component exists only for SEO.
3. Every component must define inputs, outputs, and next decision.
4. Game-specific claims must carry confidence.
5. Beginner contexts must protect beginners from avoidable complexity.
6. Related content must be reframed as related decisions.
7. Planner and AI outputs must use the same components as editorial pages.
8. New components require repeated use across multiple page types.
9. Components should preserve the sequence: decision, recommendation, build, guide, optimization, endgame.
10. The system should scale by reusing decision logic, not redesigning pages.

---

## Completion Status

This Decision Design System is complete for the Product Design / Blueprint stage.

It can now support:

- Wireframe planning.
- Component specification.
- Static MVP planning.
- Future tool design.
- Future game expansion.

This document contains no visual design, wireframes, implementation details, HTML, CSS, React, routing, build commands, or deployment steps.
