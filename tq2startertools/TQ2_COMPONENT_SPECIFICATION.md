# TQ2 Component Specification

Status: Product Design / Final Pre-Engineering Specification

This document defines reusable information components for Titan Quest 2 Starter Tools before engineering begins.

It is based on:

- `TQ2_USER_DECISION_FLOW.md`
- `TQ2_INFORMATION_ARCHITECTURE.md`
- `TQ2_PAGE_BLUEPRINTS.md`
- `TQ2_DECISION_DESIGN_SYSTEM.md`
- `TQ2_WIREFRAMES.md`

This document is not an implementation guide. It contains no HTML, React, CSS, Tailwind, routing, build instructions, or deployment instructions.

## Specification Principles

- Components are reusable information structures, not visual components.
- Every component must help users complete or advance a decision.
- Every component must have clear required fields and output expectations.
- Every component must avoid fake certainty when Titan Quest 2 data is unstable.
- Every component must support decision continuity across pages.

---

# 1. Decision Hero

## Component Name

Decision Hero

## Purpose

Introduce the main decision a page helps the user make.

## Required Fields

- Decision question.
- Page purpose summary.
- User stage.
- Primary CTA label.
- Primary CTA destination.

## Optional Fields

- Secondary CTA label.
- Secondary CTA destination.
- Beginner note.
- Advanced player note.
- Data confidence note.

## User Inputs

- Search intent or navigation source.
- Current uncertainty.
- Experience level when known.

## Outputs

- Clear understanding of the page purpose.
- Clear first decision path.
- Reduced ambiguity about where to go next.

## Validation Rules

- Decision question must be specific.
- Page purpose must explain a decision, not a topic.
- Primary CTA must move to a decision path.
- Do not use generic claims such as best, ultimate, or complete without explanation.

## Interaction Rules

- Primary CTA is the preferred next decision.
- Secondary CTA is a fallback path, not a competing primary path.
- If the page depends on unstable game data, show confidence context before user commitment.

## Accessibility Considerations

- The decision question must be understandable without visual context.
- CTA labels must describe the action clearly.
- The component should not rely on color, icon, or visual emphasis to communicate priority.

## Reuse Rules

- Use on every major page type.
- Adapt the decision question to the page goal.
- Do not use it as a marketing hero without a decision.

---

# 2. Decision Entry

## Component Name

Decision Entry

## Purpose

Present the user with a small set of decision paths based on their current uncertainty.

## Required Fields

- Entry prompt.
- Decision options.
- Outcome summary for each option.
- Recommended default for unsure users.
- Next decision destination for each option.

## Optional Fields

- Difficulty label.
- Beginner-safe label.
- Advanced label.
- Data confidence note.
- Tool-assisted path.

## User Inputs

- Current goal.
- Experience level.
- Playstyle preference.
- Uncertainty type.

## Outputs

- Selected decision path.
- Reduced choice space.
- Clear movement into a page, guide, or tool.

## Validation Rules

- Provide no fewer than 2 and no more than 6 primary options.
- Each option must describe what decision it helps.
- Include a beginner-safe option when the page can receive new players.
- Do not include options that lead to pages without a next decision.

## Interaction Rules

- Selecting an option moves the user to the matching decision path.
- The recommended default should be explicit for undecided users.
- Advanced paths should not be positioned as mandatory.

## Accessibility Considerations

- Option labels must be understandable without supporting visuals.
- Outcome summaries must clarify the difference between options.
- Avoid relying on order alone to communicate recommendation.

## Reuse Rules

- Use on Home, Playstyle Selection, Build Hub, Farming Guide, Planner, FAQ, and Search Results.
- Reuse when a page must route multiple user intents.
- Do not use when the page has only one reasonable next action.

---

# 3. Recommendation Card

## Component Name

Recommendation Card

## Purpose

Present a recommended choice with reasoning, tradeoffs, and a next decision.

## Required Fields

- Recommendation name.
- Recommendation type.
- Why recommended.
- Best for.
- Strengths.
- Weaknesses.
- Who should choose it.
- Who should avoid it.
- Next decision.

## Optional Fields

- Alternative recommendation.
- Beginner note.
- Endgame note.
- Solo or SSF note.
- Confidence level.
- Source or review note.

## User Inputs

- Playstyle.
- Experience level.
- Difficulty preference.
- Play goal.
- Current page context.

## Outputs

- Recommended build, class, skill, guide, or plan.
- Rationale for the recommendation.
- Accept, reject, or compare decision.

## Validation Rules

- Recommendation must include at least one reason.
- Strengths and weaknesses must both be present.
- The card must define who should avoid the recommendation.
- If confidence is low, do not present the recommendation as definitive.

## Interaction Rules

- Primary action accepts or opens the recommendation.
- Secondary action compares or selects an alternative.
- If user rejects the recommendation, provide a recovery path.

## Accessibility Considerations

- Recommendation status must be expressed in text, not only visual treatment.
- Strengths and weaknesses must use clear labels.
- CTA text must state the next decision.

## Reuse Rules

- Use across Home, Playstyle Selection, Mastery Selection, Build Detail, Skill Detail, Equipment Guide, Planner, and Search Results.
- Adapt the recommendation type to the page decision.
- Always pair with Confidence Indicator when game data is uncertain.

---

# 4. Comparison Matrix

## Component Name

Comparison Matrix

## Purpose

Help users compare options using decision criteria.

## Required Fields

- Compared options.
- Comparison criteria.
- Evaluation for each option and criterion.
- Recommended option by user goal.
- Tradeoff summary.

## Optional Fields

- Beginner ranking.
- Advanced ranking.
- Solo ranking.
- Endgame ranking.
- Confidence note.

## User Inputs

- Options under consideration.
- User goal.
- Experience level.
- Difficulty tolerance.

## Outputs

- Shortlisted option.
- Clear comparison of tradeoffs.
- Next decision path.

## Validation Rules

- Criteria must help decision-making.
- Avoid trivia or encyclopedic fields.
- Include beginner friendliness when comparing builds, classes, or skills.
- If data is incomplete, mark uncertain cells or criteria.

## Interaction Rules

- Users should be able to choose an option from the comparison.
- The recommended option should depend on user goal, not global ranking alone.
- The matrix should provide an exit path for users still unsure.

## Accessibility Considerations

- Criteria and option names must be explicit.
- The recommendation must be available in text.
- Do not rely on color alone to indicate better or worse.

## Reuse Rules

- Use on Playstyle Selection, Mastery Selection, Hybrid Selection, Build Hub, and comparison surfaces.
- Use only when at least two options are meaningfully different.
- Do not use as a data table without decision criteria.

---

# 5. Build Snapshot

## Component Name

Build Snapshot

## Purpose

Summarize a build quickly enough for users to decide whether to inspect it.

## Required Fields

- Build name.
- Build category.
- Playstyle.
- Best for.
- Difficulty.
- Beginner friendliness.
- Key strength.
- Key weakness.
- Next decision.

## Optional Fields

- Leveling fit.
- Endgame fit.
- Solo fit.
- Gear dependence.
- Skill dependency.
- Confidence level.

## User Inputs

- Build category interest.
- Playstyle preference.
- Experience level.
- Goal.

## Outputs

- Quick fit judgment.
- Decision to open, compare, or skip the build.

## Validation Rules

- Must include both a strength and a weakness.
- Must not claim best overall without context.
- Difficulty must be explained elsewhere or link to Difficulty Rating.
- If the build is provisional, include Confidence Indicator.

## Interaction Rules

- Primary action opens build detail.
- Secondary action compares or returns to build category.
- If the build is not beginner friendly, route beginners to safer options.

## Accessibility Considerations

- Build category and fit must be readable as text.
- Labels must not require icon recognition.
- Avoid abbreviations without explanation.

## Reuse Rules

- Use on Build Hub, Search Results, Recommendation groups, and Planner alternatives.
- Use when users need to scan multiple build options.
- Do not use as a substitute for Build Detail.

---

# 6. Pros & Cons

## Component Name

Pros & Cons

## Purpose

Make tradeoffs explicit before users commit to a recommendation.

## Required Fields

- Subject name.
- Strengths.
- Weaknesses.
- Best-fit user.
- Avoid-if user.
- Tradeoff summary.
- Next decision if accepted.
- Next decision if rejected.

## Optional Fields

- Mitigation advice.
- Upgrade path.
- Confidence note.
- Beginner-specific tradeoff.
- Endgame-specific tradeoff.

## User Inputs

- Current option under evaluation.
- User goal.
- Experience level.
- Tolerance for weakness.

## Outputs

- Acceptance or rejection decision.
- Understanding of the option's cost.
- Alternative path if rejected.

## Validation Rules

- Must include at least one weakness.
- Weaknesses must be meaningful, not cosmetic.
- Strengths and weaknesses must match the current context.
- Avoid hype language that hides tradeoffs.

## Interaction Rules

- If user accepts tradeoffs, route to next execution step.
- If user rejects tradeoffs, route to comparison or safer option.
- Do not trap users in the current recommendation.

## Accessibility Considerations

- Strengths and weaknesses must have text labels.
- Positive and negative meaning must not depend on color.
- Tradeoff summary should be understandable independently.

## Reuse Rules

- Use on Build Detail, Skill Detail, Equipment Guide, Planner Result, Hybrid Selection, and Mastery Selection.
- Use whenever a recommendation could be misunderstood as universally best.

---

# 7. Difficulty Rating

## Component Name

Difficulty Rating

## Purpose

Explain complexity in a way that helps users avoid choices that do not fit their comfort level.

## Required Fields

- Overall difficulty.
- Execution difficulty.
- Leveling difficulty.
- Gear dependence.
- Beginner friendliness.
- Reasoning.
- Safer alternative when relevant.

## Optional Fields

- Endgame difficulty.
- Mechanical intensity.
- Knowledge requirement.
- Mistakes to avoid.
- Confidence note.

## User Inputs

- Experience level.
- Difficulty preference.
- Current option.
- Goal.

## Outputs

- Difficulty fit decision.
- Safer alternative if needed.
- Understanding of why difficulty exists.

## Validation Rules

- Difficulty labels must be explained.
- Difficulty must not be based on power alone.
- Beginner friendliness must be separate from endgame potential.
- If difficulty depends on unknown game balance, include confidence context.

## Interaction Rules

- If difficulty exceeds user preference, offer easier alternative.
- If user chooses advanced route, provide planner or guide path.
- Do not block advanced users from continuing.

## Accessibility Considerations

- Difficulty must be stated in words.
- Avoid using only numerical or visual scales.
- Explain what the rating means for real play.

## Reuse Rules

- Use on Playstyle Selection, Mastery Selection, Hybrid Selection, Build Hub, Build Detail, Skill Detail, and Planner.
- Use whenever complexity affects user success.

---

# 8. Playstyle Match

## Component Name

Playstyle Match

## Purpose

Translate user gameplay preference into a build, class, skill, or tool direction.

## Required Fields

- User playstyle.
- Matching direction.
- Why it matches.
- Mismatch risks.
- Beginner friendliness.
- Next decision.

## Optional Fields

- Alternative playstyle.
- Hybrid possibility.
- Endgame suitability.
- Solo note.
- Group note.
- Confidence note.

## User Inputs

- Preferred combat feel.
- Range preference.
- Complexity tolerance.
- Solo or group preference.
- Goal.

## Outputs

- Matched playstyle path.
- Warning when the match is risky.
- Next build or class decision.

## Validation Rules

- Match must explain why it fits.
- Mismatch risks must be included when relevant.
- Do not map every playstyle to every option.
- If the playstyle depends on unverified systems, include confidence context.

## Interaction Rules

- Users can accept match, compare alternatives, or choose a safer path.
- Hybrid recommendations should route to Hybrid Selection.
- Beginner-risky matches should show a beginner alternative.

## Accessibility Considerations

- Playstyle descriptions must be text-based.
- Avoid relying on genre shorthand without explanation.
- Make mismatch warnings explicit.

## Reuse Rules

- Use on Home, Playstyle Selection, Mastery Selection, Hybrid Selection, Build Detail, and Planner.
- Reuse whenever player preference needs translation into a site decision.

---

# 9. Beginner Guide

## Component Name

Beginner Guide

## Purpose

Provide beginner-safe guidance that helps new players make early choices.

## Required Fields

- Beginner-safe principle.
- What to choose first.
- Common mistakes.
- What to ignore early.
- Recommended beginner path.
- Next decision.

## Optional Fields

- Titan Quest veteran note.
- ARPG veteran note.
- Casual player note.
- Data confidence note.
- Short glossary link.

## User Inputs

- Beginner status.
- Current uncertainty.
- Existing playstyle preference.
- Need for safe default.

## Outputs

- Reduced beginner confusion.
- Safer first decision.
- Direction toward beginner build or class picker.

## Validation Rules

- Must not overload users with advanced optimization.
- Must include at least one next decision.
- Advice must avoid unsupported exact claims.
- Must distinguish beginner advice from endgame advice.

## Interaction Rules

- Primary action routes to Beginner Builds or Class Picker.
- Secondary action can route to Playstyle Selection.
- Advanced explanations should be optional paths.

## Accessibility Considerations

- Use plain language.
- Explain game terms before relying on them.
- Avoid dense jargon.

## Reuse Rules

- Use on Home, FAQ, Beginner Builds, Build Detail, and guide entry points.
- Use whenever a page may receive first-time ARPG players.

---

# 10. Skill Progression

## Component Name

Skill Progression

## Purpose

Explain which skills matter now, later, or only in specific situations.

## Required Fields

- Build or class context.
- Core skill priority.
- Early priorities.
- Later priorities.
- Optional skills.
- Skills to avoid early.
- Reasoning.
- Next decision.

## Optional Fields

- Endgame adjustment.
- Beginner-safe variation.
- Hybrid variation.
- Skill synergy note.
- Confidence note.

## User Inputs

- Selected build or class.
- Leveling stage.
- Experience level.
- Current skill uncertainty.

## Outputs

- Skill investment priority.
- Understanding of why the priority matters.
- Path to skill detail or planner adjustment.

## Validation Rules

- Must separate core from optional skills.
- Must include reasoning, not just a list.
- Must avoid exact values when data is unstable.
- Must connect back to build or class context.

## Interaction Rules

- Primary action routes to skill detail or build continuation.
- Secondary action can route to planner adjustment.
- If a skill is risky for beginners, show safer path.

## Accessibility Considerations

- Priority labels must be clear.
- Do not rely on order alone to communicate importance.
- Explain unfamiliar skill terms.

## Reuse Rules

- Use on Build Detail, Skill Detail, Planner Result, and class/mastery guidance.
- Reuse whenever skill order affects user success.

---

# 11. Gear Progression

## Component Name

Gear Progression

## Purpose

Explain equipment priorities as users move from starter guidance toward stronger builds.

## Required Fields

- Build or playstyle context.
- Current stage.
- Offensive priority.
- Defensive priority.
- Utility priority.
- First upgrade priority.
- What not to chase yet.
- Next decision.

## Optional Fields

- Endgame gear direction.
- Beginner replacement rule.
- Farming connection.
- Gear dependence rating.
- Confidence note.

## User Inputs

- Build type.
- Current stage.
- Current weakness.
- Goal.

## Outputs

- Gear priority direction.
- Upgrade order.
- Farming or optimization path.

## Validation Rules

- Must avoid unsupported item-specific certainty when data is unstable.
- Must distinguish early gear direction from endgame gear direction.
- Must include at least one priority and one avoid/ignore item.
- Must connect gear advice to build goal.

## Interaction Rules

- Primary action routes to farming or build optimization.
- Secondary action routes back to build detail.
- If gear dependence is high, warn before commitment.

## Accessibility Considerations

- Gear priorities must be understandable without icons.
- Avoid unexplained abbreviations.
- Present warnings in text.

## Reuse Rules

- Use on Build Detail, Equipment Guide, Farming Guide, and Planner Result.
- Reuse when equipment direction affects the next decision.

---

# 12. Farming Recommendation

## Component Name

Farming Recommendation

## Purpose

Recommend the next progression activity based on user stage, blocker, and goal.

## Required Fields

- Current blocker.
- Recommended activity.
- Why it helps.
- What to look for.
- What to avoid.
- Reassessment point.
- Next decision.

## Optional Fields

- Gear target direction.
- Leveling target.
- Endgame readiness note.
- Build adjustment warning.
- Confidence note.

## User Inputs

- Current stage.
- Build or playstyle.
- Pain point.
- Progression goal.

## Outputs

- Recommended activity or progression path.
- Understanding of whether farming is the right solution.
- Next optimization decision.

## Validation Rules

- Must identify the user's blocker.
- Must explain why the activity is recommended.
- Must include a reassessment condition.
- Must avoid farming advice that depends on unverified systems without confidence context.

## Interaction Rules

- Primary action follows the recommended progression path.
- Secondary action diagnoses another blocker.
- If farming is not the right solution, route to build or skill adjustment.

## Accessibility Considerations

- Activity names must be clear.
- Reassessment point must be explicit.
- Do not depend on map, icon, or visual shorthand.

## Reuse Rules

- Use on Farming Guide, Build Detail, Equipment Guide, and Planner Result.
- Reuse when the user needs to decide what to do next in-game.

---

# 13. Planner Result

## Component Name

Planner Result

## Purpose

Summarize a personalized or rule-based build plan in a decision-ready format.

## Required Fields

- Plan summary.
- Input summary.
- Why this plan fits.
- Best for.
- Strengths.
- Weaknesses.
- Skill priorities.
- Gear priorities.
- Leveling priorities.
- Confidence level.
- Next decision.

## Optional Fields

- Alternative plan.
- Share summary.
- Endgame adjustment.
- Warning for incomplete data.
- Comparison path.

## User Inputs

- Playstyle.
- Experience level.
- Difficulty preference.
- Goal.
- Selected class/mastery.
- Selected skills when available.

## Outputs

- Coherent build direction.
- Next priorities.
- Follow, adjust, or compare decision.

## Validation Rules

- Must reflect user inputs.
- Must not invent unsupported game data.
- Must include strengths and weaknesses.
- Must include confidence context.
- Must route to a next action.

## Interaction Rules

- Primary action follows the plan.
- Secondary action adjusts inputs.
- Alternative action compares another build or returns to build hub.

## Accessibility Considerations

- Plan summary must be understandable as text.
- Input summary should clarify why the output was generated.
- Warnings must be explicit.

## Reuse Rules

- Use in Planner, Build Advisor, Class Picker outputs, and future AI recommendations.
- Use as the standard output format for any tool that recommends a path.

---

# 14. Confidence Indicator

## Component Name

Confidence Indicator

## Purpose

Show how reliable game-specific advice is under Early Access uncertainty.

## Required Fields

- Confidence level.
- Reason for confidence level.
- What is verified.
- What is uncertain.
- Update condition.
- Next decision.

## Optional Fields

- Last reviewed date.
- Patch note.
- Source note.
- Safer alternative.
- Advanced warning.

## User Inputs

- Advice type.
- Data source status.
- Review status.
- Risk of change.

## Outputs

- Trust level.
- User understanding of uncertainty.
- Decision to proceed, choose safer option, or wait.

## Validation Rules

- Must not use high confidence unless data is verified.
- Must explain uncertainty plainly.
- Must be present when specific game claims may change.
- Must not undermine all advice with vague warnings.

## Interaction Rules

- Users can proceed, choose safer option, or inspect broader guidance.
- Low-confidence advice should not be the only path for beginners.

## Accessibility Considerations

- Confidence must be expressed in words.
- Do not rely on color, icon, or badge alone.
- Explain what the confidence level means.

## Reuse Rules

- Use with Recommendation Card, Build Snapshot, Comparison Matrix, Pros & Cons, Difficulty Rating, Skill Progression, Gear Progression, Farming Recommendation, and Planner Result.
- Use whenever current advice depends on unstable or incomplete game data.

---

# 15. FAQ Block

## Component Name

FAQ Block

## Purpose

Answer a specific blocker and return the user to the decision flow.

## Required Fields

- Question.
- Direct answer.
- Why it matters.
- Decision implication.
- Next decision.

## Optional Fields

- Beginner note.
- Advanced note.
- Confidence level.
- Deeper guide path.
- Tool path.

## User Inputs

- Specific question.
- Confusion point.
- Current page context.
- Decision stage.

## Outputs

- Short answer.
- Reduced confusion.
- Return path to a decision.

## Validation Rules

- Answer must be direct.
- Every FAQ item must include a next decision.
- FAQ content must not replace a full guide when deeper explanation is required.
- Avoid unsupported game claims without confidence context.

## Interaction Rules

- Users can continue to the recommended next decision.
- Users can choose another question category.
- If the answer changes the user's path, show the new path clearly.

## Accessibility Considerations

- Questions must be written in user language.
- Answers must be concise.
- Next decision labels must be clear.

## Reuse Rules

- Use on FAQ page, Farming Guide, Build Detail, Skill Detail, and beginner help sections.
- Reuse only when the question is a blocker in the decision flow.

---

# 16. Related Decision Block

## Component Name

Related Decision Block

## Purpose

Offer adjacent decisions that help the user recover, compare, or continue.

## Required Fields

- Current decision context.
- Adjacent decision options.
- Reason each option matters.
- Recommended default next decision.

## Optional Fields

- Beginner-safe option.
- Advanced option.
- Tool-assisted option.
- Comparison option.
- Confidence note.

## User Inputs

- Current page.
- Current decision.
- User stage.
- Accepted or rejected recommendation.

## Outputs

- Useful adjacent path.
- Recovery from mismatch.
- Decision continuity.

## Validation Rules

- Do not include generic related pages.
- Each option must explain why it matters now.
- Must include a recommended default.
- Do not overload the block with too many options.

## Interaction Rules

- Users can choose an adjacent decision or continue primary path.
- If current recommendation was rejected, show alternative path first.
- If user is beginner, show safe option first.

## Accessibility Considerations

- Adjacent decision labels must be descriptive.
- Reason text must not depend on visual grouping.
- Avoid vague labels such as more, related, or learn more.

## Reuse Rules

- Use on Build Detail, Skill Detail, FAQ, Search Results, Planner, and long guides.
- Reuse when users may need a legitimate alternate decision.

---

# 17. Next Decision Block

## Component Name

Next Decision Block

## Purpose

State the single most important decision after the current page or section.

## Required Fields

- Primary next decision.
- Reason this is next.
- Primary CTA label.
- Primary CTA destination.
- Fallback option.

## Optional Fields

- Beginner fallback.
- Advanced path.
- Tool-assisted path.
- Confidence note.
- Alternative CTA.

## User Inputs

- Current decision outcome.
- User stage.
- Accepted or rejected recommendation.
- Current uncertainty.

## Outputs

- Clear next action.
- Reduced dead ends.
- Continued decision flow.

## Validation Rules

- Must contain one primary next decision.
- Primary CTA must be decision-specific.
- Fallback must be useful if the user is unsure.
- Do not present unrelated destinations.

## Interaction Rules

- Primary action moves to the next recommended decision.
- Fallback action moves to safer or broader decision path.
- If the page has multiple user states, use the dominant state as primary.

## Accessibility Considerations

- CTA must be understandable outside visual context.
- Avoid ambiguous action labels.
- Explain why the next decision matters.

## Reuse Rules

- Use on every page type.
- Use at the end of major decision sections.
- Do not replace page navigation with this component; it is decision closure.

---

# 18. Decision Footer

## Component Name

Decision Footer

## Purpose

Provide trust, rediscovery, and safe recovery paths at the end of pages.

## Required Fields

- Choose Build entry.
- Beginner Builds entry.
- Class Picker entry.
- Skills entry.
- Guides entry.
- Tools entry.
- Early Access or update policy entry.
- Contact or trust path.

## Optional Fields

- Future planner entry.
- FAQ entry.
- Privacy path.
- Affiliate disclosure.
- Source policy.

## User Inputs

- End-of-page uncertainty.
- Need to restart or recover.
- Trust or policy concern.

## Outputs

- Recovery to a major decision path.
- Trust reassurance.
- Access to core site areas.

## Validation Rules

- Footer links must support decisions or trust.
- Do not turn footer into a full sitemap dump.
- Include beginner recovery path.
- Include update policy while game data is unstable.

## Interaction Rules

- Users can restart at a major decision surface.
- Users can inspect trust or update policy.
- Users can reach tools or beginner guidance.

## Accessibility Considerations

- Link labels must be descriptive.
- Trust and policy links must be clearly named.
- Footer should remain understandable without visual grouping.

## Reuse Rules

- Use on Home, FAQ, long guides, and major hub pages.
- Use where users may need recovery or trust context.

---

## Component Dependency Map

### Home

Home assembles:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Recommendation Card.
- Beginner Guide.
- Confidence Indicator.
- Next Decision Block.
- Decision Footer.

Dependency logic:

- Decision Hero frames the start question.
- Decision Entry routes broad intent.
- Playstyle Match translates preference.
- Recommendation Card gives a starter path.
- Beginner Guide protects new players.
- Confidence Indicator explains Early Access uncertainty.
- Next Decision Block advances the user.
- Decision Footer provides recovery.

### Playstyle Selection

Playstyle Selection assembles:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Comparison Matrix.
- Difficulty Rating.
- Recommendation Card.
- Confidence Indicator.
- Next Decision Block.

Dependency logic:

- User chooses a playstyle, compares options, evaluates difficulty, receives a recommendation, then moves to mastery or build selection.

### Mastery Selection

Mastery Selection assembles:

- Decision Hero.
- Decision Entry.
- Playstyle Match.
- Comparison Matrix.
- Pros & Cons.
- Difficulty Rating.
- Recommendation Card.
- Confidence Indicator.
- Next Decision Block.

Dependency logic:

- User maps playstyle to mastery, compares options, understands tradeoffs, then chooses build or hybrid path.

### Hybrid Selection

Hybrid Selection assembles:

- Decision Hero.
- Playstyle Match.
- Comparison Matrix.
- Pros & Cons.
- Difficulty Rating.
- Recommendation Card.
- Confidence Indicator.
- Next Decision Block.

Dependency logic:

- User decides whether hybrid complexity is appropriate before moving to build or planner.

### Build Hub

Build Hub assembles:

- Decision Hero.
- Decision Entry.
- Comparison Matrix.
- Build Snapshot.
- Difficulty Rating.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Dependency logic:

- User narrows build categories, evaluates quick build summaries, then opens build detail or safer alternatives.

### Build Detail

Build Detail assembles:

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

Dependency logic:

- User decides whether to play the build, then receives skill, gear, farming, planner, or comparison next steps.

### Skill Detail

Skill Detail assembles:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Difficulty Rating.
- Skill Progression.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Dependency logic:

- User decides whether the skill is worth investment, then returns to build, class, or planner decisions.

### Equipment Guide

Equipment Guide assembles:

- Decision Hero.
- Recommendation Card.
- Pros & Cons.
- Gear Progression.
- Farming Recommendation.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Dependency logic:

- User chooses gear priorities, then moves toward farming or build optimization.

### Farming Guide

Farming Guide assembles:

- Decision Hero.
- Decision Entry.
- Farming Recommendation.
- Gear Progression.
- Confidence Indicator.
- FAQ Block.
- Related Decision Block.
- Next Decision Block.

Dependency logic:

- User identifies a blocker, receives a progression recommendation, then moves to gear, build, planner, or endgame decisions.

### Planner

Planner assembles:

- Decision Hero.
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

Dependency logic:

- User inputs preferences, receives a coherent plan, evaluates tradeoffs, then follows, adjusts, or compares.

### FAQ

FAQ assembles:

- Decision Hero.
- Decision Entry.
- FAQ Block.
- Related Decision Block.
- Next Decision Block.
- Decision Footer.

Dependency logic:

- User resolves a blocker and returns to the correct decision path.

### Search Results

Search Results assembles:

- Decision Hero.
- Decision Entry.
- Recommendation Card.
- Build Snapshot.
- Confidence Indicator.
- Related Decision Block.
- Next Decision Block.

Dependency logic:

- Search query is converted into a decision category, then routed to the best matching decision surface.

---

## Completion Status

This Component Specification is complete for the final Product Design stage before engineering.

It can now support engineering planning without defining implementation.

No HTML, React, CSS, Tailwind, routing, build steps, or deployment steps are included.
