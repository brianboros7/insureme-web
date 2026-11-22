# 17 — Product Research Document

**Product:** InsureMe, an AI broker for veteran and elder homeowners
**Status:** Living document. Started 2026-11-22 and updated after each day's research (see the [Daily research log](#daily-research-log) at the bottom).
**Built on:** docs 01–16, the [white paper](whitepaper.md) and the [pitch deck](https://claude.ai/artifact/6Wtg6Sokmpu7fKDSXGFkA9).

---

## 1. Problem statement
Homeowners insurance costs more every year: +13% nationally in 2024, +19% in Texas, and +27% for State Farm customers in Illinois. Deductibles are quietly growing too: Texas wind/hail deductibles average 2.2%, or about $7,761. Claims take 44 days to pay on average. Customers pay a broker about 14% of premium, yet are rarely re-shopped and rarely helped at claim time. **Veterans** (77% homeownership) and **elders 65+** (79%) feel this most: fixed incomes, family responsibilities, and older homeowners are prime targets for post-storm scams.

## 2. Personas

### Jack: veteran homeowner (primary)
- 48, U.S. Army veteran, San Antonio, TX. Married, two kids. $380K home bought with a VA loan.
- Pays about $4,100 a year with a 2% wind/hail deductible (about $7,600 out of pocket after a hailstorm).
- **Wants:** a deductible his family can afford, a fair price, straight answers, respect for his service.
- **Fears:** another hailstorm, being dropped, getting run around after a claim.
- **Tech:** comfortable with apps and texting; wants a human for big decisions.

### Linda: elder homeowner (secondary)
- 74, widow, Indiana. Paid-off home on a fixed income.
- **Wants:** a lower bill, someone patient to talk to, protection from scams.
- **Fears:** premium jumps, confusing letters, contractors who take advantage.
- **Tech:** uses a phone and email; prefers large text and calls. Her son Jack helps.

### Jack-as-caregiver (supporting role)
An adult child helping a parent. **Wants:** to see Mom's policy, get alerts, and step in when something goes wrong.

## 3. Jobs to be done (ranked)
1. *When my policy renews, help me know I'm not overpaying*, without me having to shop.
2. *When I'm choosing coverage, let me trade premium for a lower deductible in plain language.*
3. *When a storm hits, walk me through the claim and protect me from scams.*
4. *When my parent's insurance changes, tell me before it becomes a problem.*
5. *When I buy a home with a VA loan, get me proof of insurance before closing.*

## 4. Product principles
1. **Hero and guide:** the customer is the hero; the AI agent is the guide (empathy + a plan + authority).
2. **AI does the work, humans own the judgment:** licensed approval for binding and for any coverage reduction.
3. **Accessible by default:** large text, high contrast, plain language, voice and phone options, no time-outs (WCAG 2.2 AA).
4. **Show the trade-off:** every option shows premium, deductible and what's covered side by side.
5. **Never imply government affiliation:** no VA-style seals or wording.
6. **Earn trust with proof:** a savings dashboard backed by real quotes, never unsupported "save X%" claims.

## 5. Feature set & prioritization

| # | Feature | Persona | Priority | Prototype v0.1 |
|---|---------|---------|----------|----------------|
| F1 | **Guided quote intake:** address, property-data prefill, short questions, veteran/65+ flags | Jack, Linda | P0 (MVP) | ✅ mocked prefill |
| F2 | **Carrier comparison** with a **deductible slider** (premium ↔ deductible, plain language) | Jack | P0 | ✅ mock carriers |
| F3 | **Talk to a licensed advisor:** call/video/chat handoff | All | P0 | ✅ button + explanation |
| F4 | **Bind request** with human approval gate + lender proof of insurance | Jack | P0 | ✅ simulated "submitted for licensed review" |
| F5 | **Renewal watchdog:** alerts, re-shop, discount finder | All | P0 | ✅ dashboard card |
| F6 | **Claims companion:** guided first notice of loss, photo checklist, deadlines, communication log | All | P1 | ✅ checklist flow |
| F7 | **Scam shield:** contractor license and adjuster verification, assignment-of-benefits warning | Linda | P1 | ✅ checklist + warning |
| F8 | **Family / trusted-contact access** | Jack-as-caregiver | P1 | ✅ Linda's policy card in Jack's dashboard |
| F9 | **Mitigation finder** (impact-resistant roof, FORTIFIED, grants) | Jack | P1 | ✅ discount tips in results |
| F10 | **Non-renewal rescue** (FAIR plan + wrap-around policy) | Linda | P2 | — |
| F11 | **VA-loan closing quote** (lender partner flow) | Jack | P2 | — |
| F12 | **Voice agent** (phone line with AI + human) | Linda | P2 | — |
| F13 | **Savings dashboard** ("you've saved $X") | All | P1 | ✅ simple version |

## 6. MVP scope (Phase 1, licensed agency, launch state VA then TX, IL, IN)
**In:** F1–F9, F13 for homeowners (HO-3) in one state, with 2–3 appointed carriers.
**Out:** auto and other bundles (shown as "coming soon"), MGA product, voice agent.

## 7. Key requirements
- **Compliance:** licensed agency + DRLP; every AI recommendation logged and explainable; human approval before binding; disclosures (agency status, compensation); state-specific non-renewal and claims timelines; anti-rebating limits on perks.
- **Data:** property data (public records, roof age, imagery), CLUE with consent, carrier rating APIs or a comparative rater.
- **Accessibility:** WCAG 2.2 AA, text-size control, captions, voice option, no session time-outs mid-form.
- **Security & privacy:** GLBA and state privacy laws, minimal PII, encryption, consent for family access.
- **AI:** NAIC AI Model Bulletin principles (governance, bias testing, explainability), guardrails on coverage advice, escalation on uncertainty.

## 8. Success metrics
| Metric | Target (pilot) |
|---|---|
| Quote-flow completion (start → comparison) | ≥ 60% |
| Median time to comparison | < 5 min |
| Average savings vs current policy at same or better coverage | Measured by the 200-household study |
| Share of customers who lower their deductible without raising their bill | Track (Jack's promise) |
| Customer acquisition cost by channel | < 1.5 years of commission |
| Renewal retention | ≥ 90% |
| Advisor minutes per policy | Trend down |
| Accessibility audit | 0 critical issues |

## 9. Open questions / risks
- Which carriers offer **flat wind/hail deductibles** in Texas, and at what premium? (Validates Jack's story.)
- Carrier API availability for homeowners in VA and TX.
- Will elders trust an AI agent? (Test voice and human-first options.)
- How do anti-rebating rules limit the savings dashboard and perks?
- How should family access be consented to and revoked?

## 10. Prototype
**v0.1 (2026-11-22):** clickable React prototype in `src/` with mock data only and no real quotes. It shows Jack's journey: landing → guided quote → comparison with deductible slider → licensed review → dashboard (watchdog, claims companion, scam shield, Linda's policy). Run with `npm run dev`.

---

## Daily research log
<!-- Newest first. Each daily update adds an entry here and edits the sections above where findings change them. -->

### 2026-11-22: Day 0 (baseline)
- Wrote the document from docs 01–16: personas (Jack, Linda), jobs to be done, a 13-feature prioritization, MVP scope, requirements, metrics.
- Key inputs: Texas wind/hail deductible average 2.2% ($7,761); the Texas FAIR Plan drops its 1% option on July 1, 2026; J.D. Power 44-day claim cycle; agent channel holds about 50% of homeowners.
- Next research: carriers offering flat wind/hail deductibles in TX; homeowners carrier APIs; elder usability and AI trust studies; family-access consent patterns.
