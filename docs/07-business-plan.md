# 07 — InsureMe Business Plan (Draft v1)

> Draft v1, 2026-11-22. Market focus: **homeowners insurance for veterans and elders** (see [08](08-homeowners-vets-elders.md)). The numbers marked *assumption* need validating.

## 1. Executive summary
InsureMe is a homeowners insurance app for veterans and people 65+. It does a broker's work in software (shopping carriers, quoting, binding, renewal re-shopping and claim follow-up) and backs it with a real licensed person a phone call away. We start as a licensed digital agency in one launch state. Once we have enough volume and loss data, we become an MGA with our own homeowners product for this segment.

## 2. Problem
- Homeowners premiums rose about 13% in 2024 alone, and non-renewals are spreading (CA, FL, coastal areas). Elders on fixed incomes and veterans on retirement or disability income feel it most.
- Customers pay a broker's cut (about 14% of a home premium) but rarely get proactive re-shopping or help when a claim goes wrong.
- Claims are slow (44 days on average to final payment in 2025) and stressful. Older homeowners are prime targets for contractor and assignment-of-benefits scams after storms.
- Big affinity programs leave gaps. USAA doesn't cover everyone or every situation well, and AARP/The Hartford isn't offered in CA or FL.

## 3. Solution
| Feature | Replaces |
|---------|----------|
| Guided, accessible quote with property-data prefill (large text, simple steps, phone option) | Broker interview + application |
| Multi-carrier comparison in plain language | Broker shopping the market |
| Licensed advisor by phone or video | The human part of the broker, without the overhead |
| Instant bind, documents, mortgage-lender proof of insurance | Broker paperwork |
| Renewal watchdog + automatic re-shopping + discount check | Annual review (often skipped) |
| Non-renewal rescue (FAIR plan / Citizens + wrap-around policy explained) | Panicked agent calls |
| Claims companion: inventory, guided documentation, deadline and communication log, escalation | Broker claims advocacy |
| Scam shield: contractor-license and adjuster verification, assignment-of-benefits warnings | Nothing today |
| Trusted-contact / caregiver access | Family members calling the agent on a parent's behalf |

## 4. Market
- US homeowners direct premiums written: about **$173B** (2024).
- About 17.3M veterans with about 77% homeownership, so roughly **13M veteran homeowners** *(derived estimate)*.
- 65+ homeownership is about 79%, and 65+ households are projected to grow about 20% by 2035.
- **Market sizing (v1, 2026-11-22, matches the pitch deck):**

| | Value | How it's built |
|---|---|---|
| TAM | **$173B** | US homeowners direct premiums written, 2024 (S&P) |
| Segment | **~$88B** | ~34M homeowner households with someone 65+ (ACS 2024: 43.6M households with a 65+ member × 79% ownership) + ~6.7M veteran homeowners under 65 (17.3M veterans × 50.3% under 65 × 77% ownership) ≈ 40M × ~$2,200 avg premium *(assumption)* |
| SAM | **~$15B** | Segment × ~18% (IN, TX, IL and VA share of US population) |
| SOM (year 5) | **~$65M premium / ~$7.8M revenue** | ~25,000 policies × ~$2,600 avg (TX-weighted) × 12% commission *(target)* |

- **Seed ask: $600K.** AI platform & carrier integrations $240K (40%), licensed advisors $150K (25%), licensing & compliance in 4 states $90K (15%), pilot acquisition & partnerships $90K (15%), quote study $30K (5%). 18-month milestones: licensed in IN, TX, IL and VA; 1,000 policies in force; savings and acquisition cost proven. *(Proposed.)*
- **Pitch persona:** Jack, 48, Army veteran in San Antonio, TX, with a wife and two kids. He faces a 2% wind/hail deductible (~$7,600 on a $380K home; the TX average is ~2.2%, or $7,761, per Insurify). His mom Linda, 74, lives in Indiana. He is an illustrative composite.

## 5. Business model
- **Phase 1 (agency):** carrier commission of about 10–15% on homeowners (Hartford schedule 7–15%; benchmark average about 14%).
  - Example *(assumption)*: $2,200 premium × 12% = **about $264 per policy per year**, recurring while the customer renews.
- Possible bundling of auto, umbrella, flood and life increases revenue per household.
- Optional "Family Plan" membership for caregiver access, claims concierge and home inventory. Must be checked against state rules on agency fees.
- **Phase 2 (MGA):** own homeowners product for the segment on a fronting carrier, earning commission, fees and profit share.

## 6. Go-to-market
- **Veteran channels:** VSO posts (VFW, Legion, DAV, AMVETS), VA-loan lenders and military-relocation realtors (quote at closing), veteran communities. Veteran-staffed advisor team.
- **Elder channels:** adult children (digital marketing), senior centers, Area Agencies on Aging, elder-law and estate attorneys, faith communities.
- **Content:** "What to do when your home insurer drops you", "Discounts for seniors and veterans", "How to spot storm scams".
- **Unit-economics target:** customer acquisition cost below about 1.5 years of commission *(assumption)*, with high retention because elders renew loyally.

## 7. Competition
USAA, AFI, the VFW program (Lockton Affinity), AARP/The Hartford, State Farm and Allstate captive agents, local independent agents, and digital brokers (Policygenius, Insurify, The Zebra, Gabi). **Our edge:** built for this audience (accessibility, caregiver access, scam shield, advocacy) and shopping across carriers. We don't try to beat USAA on price.

## 8. Operations & compliance
- Agency producer license in the launch state plus individual licenses and a designated responsible licensed producer (DRLP). Carrier appointments for homeowners.
- E&O coverage, premium trust account if required.
- **No VA or government-affiliation implications in marketing.** Elder-exploitation safeguards. WCAG AA accessibility. Claims companion stays clear of public-adjuster activity.
- Tech: insureme-web (React), carrier and rater APIs, CRM / agency management system, call and video tooling.

## 9. Roadmap
| Phase | Milestone |
|-------|-----------|
| 0 — Research (now) | Launch state, carrier appointment map, licensing plan, 20 interviews (10 veterans, 10 elders or adult children) |
| 1 — Agency MVP | Licensed in 1 state, 2–3 homeowners carrier appointments, quote/bind + renewal watchdog |
| 2 — Advocacy | Claims companion, scam shield, caregiver access; first VSO and lender partnerships |
| 3 — Multi-state + bundling | Auto/umbrella/flood, 3–5 states |
| 4 — MGA | Own homeowners product for the segment on fronting paper |

## 10. Financials
To be built next: unit economics (average premium in the launch state, commission %, customer acquisition cost by channel, retention, lifetime value, advisor staffing cost per 1,000 policies) and a 3-year projection.

## 11. Key risks
- USAA's dominance with veterans
- Homeowners has historically resisted direct selling
- Carrier capacity shrinking in catastrophe-exposed states
- Customer acquisition cost vs about $264 a year in commission
- Elder-marketing and military-affiliation compliance
- Advisor staffing cost (this segment wants humans)
