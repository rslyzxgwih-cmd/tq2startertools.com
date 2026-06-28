# TQ2 Static MVP Review

Project path: `D:\Users\Documents\小工具开发\tq2startertools`

Review date: 2026-06-28

Reviewed pages:

- `index.html`
- `choose-build/index.html`
- `builds/index.html`
- `builds/beginner/index.html`
- `classes/index.html`
- `class-picker/index.html`
- `skills/index.html`
- `guides/beginner/index.html`
- `tools/index.html`

Review constraints followed:

- No HTML modified.
- No React created.
- No state added.
- No API added.
- No backend added.
- No deployment run.
- No push run.
- No production verification run.

---

## Summary

The Static MVP is structurally sound and follows the decision-first product direction. The homepage gives clear next actions, the main navigation matches the intended MVP decision areas, and each page has a next-decision exit path. The 9-page scope matches the intentionally small MVP defined in `TQ2_MVP_SCOPE.md` and the MVP site map in `TQ2_INFORMATION_ARCHITECTURE.md`.

The MVP is not ready to move directly into React without a small static revision pass. The main blocker is language quality in SEO-sensitive and high-visibility areas: several pages expose implementation or placeholder wording such as `placeholder data`, `Recommended starter placeholder`, `Mastery comparison placeholder`, and `Static ... without logic`. That wording is acceptable as internal planning language but should not become the foundation for React components or future launch copy.

Final recommendation: **Revise Static MVP first**.

---

## Pass / Fail By Category

| Category | Status | Notes |
| --- | --- | --- |
| Product Flow | Pass | Homepage routes users to Choose Playstyle, Beginner Builds, Class Picker, and Beginner Guide. CTAs are clear and decision-oriented. No dead ends found. |
| IA Consistency | Pass with caveats | The 9 pages match the small MVP map. Links are decision-first. Future IA areas such as Planner, Equipment, Farming, Search, and full Guides hub are correctly not implemented yet. |
| Page Structure | Pass with caveats | Pages generally follow the wireframe/component order: hero, decision entry or recommendation, comparison/snapshot/progression, confidence, related or next decision, footer. Some MVP pages compress future page types, which is acceptable for static review. |
| Component Usage | Pass with caveats | Reusable patterns are coherent: Decision Hero, Decision Entry, Recommendation Card, Comparison Matrix, Build Snapshot, Pros & Cons, Confidence, Related Decision, Next Decision, and Decision Footer are recognizable. Naming is not formalized in code because this is static HTML. |
| SEO Readiness | Fail until revised | Each page has one H1, title, and meta description. Internal links are clean. However, SEO and high-visibility text still contains placeholder or implementation-boundary language. |
| Technical Hygiene | Pass with caveat | Internal links resolve. No React/state/API/search/planner/backend/runtime patterns found. `tq2startertools` is isolated, but git status shows an existing parent repo modification at `../app/page.tsx`; it must not be staged with this MVP. |

---

## 1. Product Flow

### Result

Pass.

### Evidence

The homepage gives users four clear decision entries:

- Choose playstyle.
- Use class recommendation.
- Choose beginner build.
- Read beginner context first.

The main user journey is logical:

Home -> Choose Build -> Classes or Beginner Builds -> Beginner Guide or Skills -> Tools as needed.

Most pages end with a clear next decision instead of a generic related-pages block. This matches the core product rule: help players make better decisions faster.

### Issues Found

No critical product-flow dead ends were found.

Minor flow issue:

- `tools/index.html` routes strongly to Class Picker and Builds, but does not link directly to Skills even though the IA says tools should route to relevant skill guidance when appropriate.

### Recommended Fixes

- Add a Skills next-decision link inside Tools Hub later if the tool path starts from skill uncertainty.
- Keep the homepage as the primary growth funnel because it already exposes the strongest next decisions.

---

## 2. IA Consistency

### Result

Pass with caveats.

### Evidence

The MVP page set matches the small IA/MVP scope:

- Home
- Builds
- Beginner Builds
- Classes
- Class Picker
- Skills
- Beginner Guide
- Tools

The header navigation matches the IA direction:

- Choose Build
- Builds
- Classes
- Skills
- Guides
- Tools

Internal links are decision-driven and answer questions such as:

- What should I choose first?
- Is this beginner friendly?
- What should I do next?
- Should I compare classes or choose a build?

### Issues Found

No IA-breaking issue found.

Caveats:

- `/guides` exists in the IA URL structure, but the current MVP only creates `/guides/beginner/`. This is acceptable for the small MVP but should be documented as intentional.
- IA lists possible tool URLs such as `/tools/class-picker/`, but the Static MVP uses `/class-picker/`. This is acceptable because the IA explicitly says to avoid duplicate live pages with the same purpose.

### Recommended Fixes

- Keep `/class-picker/` as the canonical MVP Class Picker URL unless future search data justifies `/tools/class-picker/`.
- Do not add `/guides/` yet unless it becomes a necessary decision hub.

---

## 3. Page Structure

### Result

Pass with caveats.

### Evidence

All pages have one H1 and use semantic structure with `header`, `nav`, `main`, `section`, `article`, tables where needed, and `footer`.

Observed H1 counts:

- `index.html`: 1
- `choose-build/index.html`: 1
- `builds/index.html`: 1
- `builds/beginner/index.html`: 1
- `classes/index.html`: 1
- `class-picker/index.html`: 1
- `skills/index.html`: 1
- `guides/beginner/index.html`: 1
- `tools/index.html`: 1

The section order generally follows the wireframe system:

- Hero first.
- Decision entry or recommendation early.
- Comparison, snapshot, pros/cons, or progression next.
- Confidence before commitment.
- Related or next decision near the end.
- Footer last.

### Issues Found

Medium issue:

- `builds/beginner/index.html` functions partly as a Beginner Builds hub and partly as a Build Detail page. That is acceptable for an MVP, but before React the page should decide whether it is a category page or a single recommended-build detail surface.

Minor issue:

- Some pages reuse the same confidence/footer language heavily. The consistency is useful, but it can feel repetitive if left unchanged through React.

### Recommended Fixes

- Before React, label `builds/beginner/` as either a beginner-build category page or a starter recommendation detail page.
- Keep the repeated confidence pattern, but tighten copy during the static revision so it does not read like boilerplate.

---

## 4. Component Usage

### Result

Pass with caveats.

### Evidence

The reusable component patterns from `TQ2_COMPONENT_SPECIFICATION.md` are visible in static form:

- Decision Hero: all pages.
- Decision Entry: Home, Choose Build, Builds, Classes, Class Picker, Tools.
- Recommendation Card: Home, Choose Build, Beginner Builds, Class Picker, Skills, Tools.
- Comparison Matrix: Choose Build, Builds, Classes.
- Build Snapshot: Builds and Beginner Builds.
- Pros & Cons: Beginner Builds, Classes, Class Picker, Skills.
- Difficulty Rating: Choose Build, Builds, Beginner Builds, Skills.
- Skill Progression: Beginner Builds, Skills.
- Confidence Indicator: all important uncertain recommendations.
- Related Decision Block: Builds, Skills, Beginner Guide, Tools.
- Next Decision Block: every page.
- Decision Footer: every page.

### Issues Found

Minor issue:

- Component labels are consistent conceptually, but because this is static HTML there is no reusable source component yet. React implementation must avoid copying these blocks manually without a component model.

Minor issue:

- `Beginner Guide` and `Tools` are structurally simpler than the rest. That is acceptable, but React should still map them to the same component primitives.

### Recommended Fixes

- In React MVP, create reusable primitives directly from this static structure rather than inventing new sections.
- Use shared component names from `TQ2_COMPONENT_SPECIFICATION.md` as the React component naming source.

---

## 5. SEO Readiness

### Result

Fail until revised.

### What Passed

- One H1 per page.
- Every page has a title.
- Every page has a meta description.
- URL structure is reasonable and matches the MVP IA.
- Internal links resolve.
- No generic Lorem Ipsum found.

### Issues Found

Must-fix issue 1: placeholder wording appears in important SEO or high-visibility areas.

Examples:

- `builds/beginner/index.html` meta description says `placeholder data`.
- `builds/beginner/index.html` contains `Recommended starter placeholder`.
- `builds/beginner/index.html` contains `Low placeholder`.
- `classes/index.html` contains `Mastery comparison placeholder`.
- `class-picker/index.html` contains `Recommended class path placeholder`.

Must-fix issue 2: implementation-boundary wording appears in meta descriptions.

Examples:

- `class-picker/index.html` meta description says `Static ... without logic`.
- `tools/index.html` meta description says `Static ... with no API, database, search, planner, or backend logic`.

That language is useful for internal review but poor for public SEO and should not become React copy.

### Recommended Fixes

Replace placeholder and implementation language with user-facing early-access language.

Examples:

- Replace `placeholder data` with `early-access starter guidance`.
- Replace `Recommended starter placeholder` with `Recommended starter framework` or `Beginner-safe starter path`.
- Replace `Mastery comparison placeholder` with `Mastery comparison framework`.
- Replace `Static ... without logic` with `Choose a Titan Quest 2 class direction based on playstyle, experience, difficulty, and goal`.
- Replace `no API, database, search, planner, or backend logic` with `Explore the current decision tools and future build-planning path`.

---

## 6. Technical Hygiene

### Result

Pass with caveat.

### Evidence

Checks performed:

- Internal root-relative link check: passed.
- Runtime/prohibited pattern scan: passed.
- Accessibility ID whitespace scan: passed.
- SEO field/H1 count scan: passed except content quality issues noted above.

No evidence found of:

- React state.
- API calls.
- Database logic.
- Search implementation.
- Planner logic.
- Backend behavior.
- Forms or inputs.
- JavaScript event handlers.
- Animation classes or keyframes.

### Isolation Check

`tq2startertools` remains isolated as a folder containing the planning documents and static HTML pages.

Git status from inside the folder shows:

- `?? ./` for the untracked TQ2 folder.
- `M ../app/page.tsx` as a parent-directory modification outside `tq2startertools`.

The parent change is unrelated to the Static MVP review and was not modified during this review. It must not be staged, pushed, or deployed with the TQ2 work unless separately reviewed.

---

## Issues Found

1. SEO-sensitive copy still contains placeholder language.
2. Some meta descriptions describe implementation constraints instead of user value.
3. `builds/beginner/` mixes category-page and build-detail responsibilities.
4. Tools Hub does not yet expose a direct skill-guidance decision path.
5. Parent repo has an unrelated existing modification at `../app/page.tsx`.

---

## Recommended Fixes

1. Do a copy-only static revision to remove public-facing placeholder language.
2. Rewrite meta descriptions so they describe player decisions, not implementation status.
3. Decide the responsibility of `builds/beginner/`: category page or single starter recommendation page.
4. Add or reserve a Skills next-decision path from Tools if skill uncertainty becomes part of the tool journey.
5. Keep `../app/page.tsx` out of any TQ2 commit, deployment, or React migration branch.

---

## Must-Fix Before React

- Remove `placeholder` from meta descriptions, H2/H3 headings, and recommendation labels.
- Remove `Static`, `without logic`, `no API`, `no backend`, and similar implementation-boundary language from public SEO copy.
- Clarify whether `builds/beginner/` is a beginner build category page or the first build-detail template.
- Preserve the current 9-page IA and do not add Planner, Search, Equipment, Farming, or backend behavior during React conversion.
- Confirm the unrelated parent change `../app/page.tsx` is excluded from any TQ2 work.

---

## Can-Wait Items

- `/guides/` hub.
- `/tools/class-picker/` alias or nested tool URL.
- Build Planner.
- Search Results page.
- Equipment and Farming sections.
- Specific mastery, skill, and build detail pages.
- Schema, sitemap, robots, and production SEO validation.
- Real game data replacement after official data stabilizes.

---

## Final Recommendation

**Revise Static MVP first.**

The structure is strong enough to become the React MVP foundation, but the public-facing copy needs a short cleanup pass before conversion. The React phase should begin only after placeholder and implementation-boundary language is removed from SEO fields and high-visibility page sections.
