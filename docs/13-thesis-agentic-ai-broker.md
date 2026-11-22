# 13 — Thesis: An Agentic-AI Broker That Cuts What Customers Pay by Up to 70%

> **Thesis:** An AI broker agent, supervised by licensed humans, can do the full broker job (intake, shopping, advice, binding, servicing, renewal, claims advocacy) at a fraction of today's cost. Combined with constant re-shopping, mitigation and right-sized coverage, this can cut **what a customer pays for homeowners insurance by up to 70% for customers who are badly overpriced and eligible for discounts, and by about 20–40% for a typical customer.** It also cuts the **cost of distribution itself by 70% or more**.

This doc shows the math honestly. It's the core of the pitch, so it has to survive an investor's spreadsheet.

---

## 1. Where a homeowners premium dollar goes today

Industry homeowners figures, rounded. The 2024 combined ratio was about 99.7%.

| Per $100 of premium | Approx. | Source / note |
|---|---|---|
| Losses + loss adjustment expense (LAE) | ~$72 | Derived from a ~99.7 combined ratio minus expenses |
| — of which LAE (cost of handling claims) | ~$10–12 | *Assumption to verify (NAIC)* |
| Commission & brokerage | ~$12 | [Triple-I](https://www.iii.org/table-archive/23319) (older table); 2025 benchmark avg about 14% ([Sonant](https://www.sonant.ai/blog/insurance-agent-commission-rates-by-line)) |
| Other acquisition, underwriting, field | ~$6.5–8 | [IRMI 2024 NAIC](https://www.irmi.com/articles/expert-commentary/explaining-the-rising-cost-of-homeowners-insurance), [Triple-I](https://www.iii.org/table-archive/23319) |
| General administration | ~$5 | [IRMI](https://www.irmi.com/articles/expert-commentary/explaining-the-rising-cost-of-homeowners-insurance) |
| Taxes, licenses, fees | ~$2.5–2.7 | Same |
| Underwriting profit | ~$0–5 | 2024 about 0.4; long-run target about 5 |

**The hard truth:** about **$72 of every $100 pays for losses and claim handling.** Even running distribution and admin for free would cut only about $25–30. **A 70% premium cut can't come from removing the broker alone.** It needs several levers stacked together.

---

## 2. The savings stack (five levers)

### Lever 1: The AI broker cuts distribution and servicing cost (structural)
The agent replaces the human broker's labor:
- Intake: property data prefill instead of a 60-minute interview
- Shopping: carrier APIs instead of retyping into each portal
- Advice: plain-language comparisons, with licensed humans for judgment calls
- Servicing and certificates, and renewal re-shopping

| Cost line | Today | With AI broker | Cut |
|---|---|---|---|
| Commission / brokerage | ~$12 | ~$3 (AI + human oversight + CAC*) | ~75% |
| Other acquisition / underwriting | ~$7 | ~$3 | ~55% |
| General admin | ~$5 | ~$3 | ~40% |
| **Distribution + servicing total** | **~$24** | **~$9** | **~63–70%** |
| LAE (AI claims intake, documentation, triage) | ~$11 | ~$8 | ~25–30% |

\*Customer acquisition cost is the risk. GEICO swapped commissions for a $1B+ ad budget ([Insurance Journal](https://www.insurancejournal.com/news/national/2013/10/22/308779.htm)). Our plan depends on low-cost channels (veterans' groups, VA-loan lenders, referrals, AI-assistant discovery).

**Result: about 18–22% lower premium for the same risk.** This only becomes a *lower price* once we price the product ourselves (MGA phase) and file rates with a lower expense load. As an agency, carriers' filed rates already include the commission.

### Lever 2: Always buy at the best available price (shopping)
Insurers use **price optimization**, charging loyal customers what they'll tolerate. In the UK, regulators found 6M home policyholders overpaying by £1.2bn a year and banned the practice in 2022 ([ICAEW](https://www.icaew.com/insights/viewpoints-on-the-news/2020/dec-2020/tackling-the-loyalty-penalty-for-insurance-customers), [Kiplinger, US](https://www.kiplinger.com/personal-finance/car-insurance/loyalty-cost-auto-insurance-rates)). An agent that re-shops **every** renewal captures this automatically.
**Estimate: 10–30% for customers who haven't shopped in years** *(assumption; needs US data from our own quotes)*.

### Lever 3: Mitigation discounts (lower the actual risk)
- Alabama requires at least **20%** off the wind premium for a FORTIFIED roof. Published discounts run 20–55% on the wind portion. Grants of up to $10,000 help pay for the roof ([NPR](https://www.npr.org/2025/06/11/nx-s1-5340712/climate-home-insurance-discount-alabama-ca), [FORTIFIED Alabama](https://fortifiedhome.org/incentives-alabama/)).
- Fortified homes filed fewer claims with less damage. Up to 90% of catastrophe claims involve the roof ([Yahoo/AL DOI study](https://www.yahoo.com/news/alabama-study-reveals-hurricane-resilience-120738166.html)).
- Water sensors, auto shut-off valves and monitored alarms bring smaller discounts *(to verify per carrier)*.
**Estimate: 5–30%, depending on state and wind exposure.** This also *really* lowers losses, which is our MGA advantage.

### Lever 4: Right-size the coverage
Deductible optimization (elders with savings can often carry a higher deductible), removing duplicate coverage, correcting overstated rebuild values, bundling.
**Estimate: 5–15%** *(assumption)*. We must never under-insure. The agent shows the trade-off clearly and a human signs off.

### Lever 5: Return the underwriting profit (MGA / reciprocal phase)
As an MGA or a reciprocal exchange, profit and lower loss costs from a well-chosen, mitigated book can come back as lower rates or dividends.
**Estimate: 0–5%** (long term).

---

## 3. Stacking the levers (multiplicative)

| Customer | L1 structural | L2 best price | L3 mitigation | L4 right-size | L5 | **Pays vs today** | **Saving** |
|---|---|---|---|---|---|---|---|
| Already well-shopped, no mitigation | ×0.82 | ×0.95 | ×1.00 | ×0.95 | ×1.00 | 0.74 | **~26%** |
| **Typical** (hasn't shopped in 3+ yrs) | ×0.80 | ×0.85 | ×0.90 | ×0.92 | ×0.98 | 0.55 | **~45%** |
| Overpriced + wind-exposed + fortified roof + right-sized | ×0.78 | ×0.65 | ×0.70 | ×0.85 | ×0.95 | 0.29 | **~71%** |

**So "70%" is real for a meaningful slice of customers, not the average.** The honest headline is:

> **"InsureMe cuts the cost of brokering insurance by 70%+, and our customers save up to 70% on their homeowners premium."**

To be decided: whether the typical customer is closer to 26% or 45% is the #1 metric to prove in the pilot with real quotes.

---

## 4. What the AI agent actually does (architecture)

```
             ┌──────────────── Licensed human advisors (DRLP oversight, approvals, phone/video) ───────────────┐
             │                                                                                               │
Customer ◀──▶ InsureMe Broker Agent (chat / voice / SMS, accessible UI)                                       │
 & family     ├─ Intake agent ........ property data prefill (public records, imagery, CLUE), plain-language Q&A
              ├─ Shopping agent ...... carrier/rater APIs → quotes → coverage-normalized comparison
              ├─ Advice agent ........ explains trade-offs; flags anything needing a human ──────────────────▶ │
              ├─ Bind agent .......... e-sign, payment, lender proof of insurance (human approval gate)        │
              ├─ Watchdog agent ...... renewal monitoring, re-shop, non-renewal rescue, discount finder
              ├─ Mitigation agent .... roof/water/wind upgrades → grants + discounts
              └─ Claims companion .... first notice of loss, photo/inventory capture, deadline & communication log, scam shield, escalation ─▶ │
```

**Guardrails**
- A licensed agency and licensed humans are legally responsible. The AI acts *on behalf of* the licensed agency.
- Binding, coverage reductions, and anything the model is uncertain about need human approval.
- Full audit trail of every recommendation (an E&O defense, and required by regulators).
- Follows the **NAIC Model Bulletin on the Use of AI Systems by Insurers** (adopted by many states; *verify the current list*): governance, testing for unfair discrimination, explainability.
- Elder-specific protections: cooling-off and confirmation calls on changes; trusted-contact alerts on unusual activity.

---

## 5. Why now
- **The technology is ready.** Agentic AI went customer-facing in insurance in 2026. AI insurance apps launched inside ChatGPT on Feb 9, 2026, and WTW fell about 12% and Aon about 9% that day ([ScienceSoft Q1 2026](https://www.scnsoft.com/insurance/insurance-ai-trends/q1-2026)). Vertafore now ships AI agents to agencies ([FinTech Global](https://fintech.global/2026/09/28/vertafore-brings-ai-agents-to-independent-insurance-agencies/)).
- **Commoditized personal lines are "in the danger zone"** for traditional broking ([Insurance Times](https://www.insurancetimes.co.uk/analysis/briefing-ai-and-commercial-insurance-broking-existential-threat-or-strategic-opportunity/1457849.article)).
- **Counterpoint:** BCG expects AI to expand direct channels but *not* fundamentally change the distribution mix soon ([BCG 2026](https://www.bcg.com/publications/2026/competing-for-the-ai-empowered-insurance-customer)). The winner pairs AI with trust and humans, which is our model.

---

## 6. What could break the thesis (and how we test it)

| Risk | Test / mitigation |
|---|---|
| **Customer acquisition cost eats the savings** | Pilot CAC by channel. Goal: CAC below about 1.5 years of commission |
| Carriers' filed rates limit savings in Phase 1 | Lead with levers 2–4 in Phase 1; levers 1 and 5 come with the MGA |
| **Anti-rebating laws:** an agency can't simply hand commission back as a discount in many states | Verify by state (some states allow rebating). Structure savings through product pricing in the MGA phase |
| "Save up to 70%" advertising claims must be substantiated (state unfair-trade-practice rules) | Publish methodology; claim only what the quote data proves |
| AI licensing ambiguity | Licensed humans in the loop; regulatory counsel; engage the state DOI early |
| Elders don't trust AI | Human-first option, veteran-staffed team, family access |
| Catastrophe losses in the MGA phase | Mitigation-focused book, reinsurance, conservative state selection |

## 7. Proof plan
1. **Quote study:** 200 real homeowners (veterans and elders) in the launch state. Compare current premium vs best InsureMe quote vs best quote with mitigation and right-sizing. This gives the real savings distribution.
2. **Cost study:** hours of human broker work per policy vs the AI agent plus oversight minutes.
3. **CAC pilot:** 3 channels (VSO post, VA lender, adult-children ads).
