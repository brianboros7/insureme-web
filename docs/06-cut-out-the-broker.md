# 06 — How Can We Build an App That Cuts Out the Broker?

## First, the legal reality
Under the NAIC Producer Licensing Model Act, which every state has adopted in some form, anyone who **sells, solicits or negotiates** insurance must hold a producer license. "Sale" covers exchanges made "by any means," which includes websites and apps. Acting without a license is a crime in many states. ([NAIC PLMA FAQ](https://content.naic.org/cmte_d_pltf_plmafaq.htm), [NAIC unauthorized-insurance statutes chart](https://content.naic.org/sites/default/files/model-law-chart-ca-90-statutes-making-the-unauthorized-transaction-of-insurance-a-criminal-act.pdf))

**So "cutting out the broker" means one of these:**
1. **We become the broker, but run it with software.** We hold an agency license, use a few licensed staff, and automate everything else. We keep the commission or pass part of it back to the customer.
2. **We become the underwriter (MGA).** We design the product, sell direct, and pay no outside broker commission.
3. **We become the carrier.** Takes years and tens of millions in capital. That's the end goal, not the starting point.
4. **We stay unlicensed software.** We sell tools to customers or carriers (for example claim organizers, policy analyzers) and never sell insurance. No licensing is needed, but we don't touch premium either.

## Comparing the models

| | A. Digital agency | B. MGA + fronting | C. Own carrier | D. Software only |
|---|---|---|---|---|
| Licenses | Producer license in each state + carrier appointments | Producer + MGA licenses, fronting and reinsurance agreements | Certificate of authority, statutory capital, rate filings | None (but no selling, soliciting or negotiating) |
| Capital needed | Low ($100k–$1M) | Medium to high ($5–30M+), since reinsurers want backing | Very high ($50M+) | Low |
| Time to launch | 3–6 months | 12–24 months | 3+ years | 1–3 months |
| Revenue / unit | Commission (~10–15% of premium) | Commission + fees + profit share (~20–30%) | Full premium, carrying full risk | Subscription / SaaS |
| Do we set price & product? | No, the carriers do | **Yes** (within the carrier's limits) | Yes | No |
| Examples | Policygenius, Jerry, Insureon, Simply Business | NEXT (early), Lemonade (early), Coterie, Pie | Lemonade, GEICO, ERGO NEXT today | Claims and policy tools |

## Where the savings actually come from
Using a broker today costs the customer about **14% of premium** in commission ([Sonant](https://www.sonant.ai/blog/insurance-agent-commission-rates-by-line)). But:
- **Going direct still costs money.** GEICO's expense ratio of about 10–13% is lean. Progressive's of about 25% includes heavy advertising. GEICO spent about $1.1B on advertising in 2012 ([S&P](https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/11/policy-acquisition-costs-surge-at-geico-as-premium-growth-continues-to-lag), [Insurance Journal 2013](https://www.insurancejournal.com/news/national/2013/10/22/308779.htm)). **Commission gets replaced by customer acquisition cost.**
- The direct channel in personal auto has already **stalled** ([S&P insurtech report](https://www.spglobal.com/market-intelligence/en/news-insights/research/us-insurtech-market-report-direct-channel-stalls-in-personal-auto)). The major carriers dominate there.
- A real edge needs **lower acquisition cost** (embedded, community or vertical audiences), **better risk selection**, or **better claims** (retention). Removing the agent alone isn't enough.

## Recommended path

> **Update 2026-11-22:** the founder chose **homeowners insurance for veterans and elders** as the first market. See [08-homeowners-vets-elders.md](08-homeowners-vets-elders.md). The same phases apply (digital agency → MGA → carrier) with homeowners as the product. The small-commercial option below is kept for reference only.

**(Superseded) Phase 1: Digital agency for a niche small-commercial vertical (Model A), plus a claims app**
- Small commercial is where independent agents still place about 87% of premium ([Big "I"](https://www.independentagent.com/news/big-i-releases-2025-market-share-report/)), and where small accounts get poor service. NEXT's $2.6B sale shows the value.
- Choose one vertical with a reachable community, for example fitness trainers and gyms, music teachers, contractors, or creators. These fit other projects (GorillaFit / Live Long Training, MusicLabz) and could share distribution.
- Get licensed in one launch state plus non-resident licenses. Get appointed with API-ready small-commercial carriers and MGAs (NEXT, Hiscox, Coterie, Pie, Thimble) or join an agency network.
- Product: a 5-minute guided quote, instant certificates of insurance, self-service changes, automatic re-shopping at renewal, and a **claims companion** that tracks status and escalates.

**Phase 2: MGA (Model B).** Once we have loss data and volume in the vertical, build our own product on a fronting carrier and earn underwriting margin.

**Phase 3: Carrier (Model C)**, only if Phase 2 works.

**Alternative way in:** a **claims advocacy app** (Model D) for homeowners and small businesses. It needs no license (but public adjusting *does* require a license, so stay on the documentation and tracking side). It builds an audience and trust before selling insurance.

## Risks
- Customer acquisition cost may exceed commission revenue (the main reason insurtechs have failed).
- Carrier appointments: carriers may not appoint a new agency.
- State-by-state licensing and compliance work.
- Catastrophe and loss-ratio exposure once we're an MGA.
- Customer trust: people want a human when a claim goes wrong.

## Next research to do
- [ ] Pick 3 candidate verticals and size each (number of businesses, average premium, current options)
- [ ] Map carriers and MGAs with quote/bind APIs and their appointment requirements
- [ ] Licensing steps and cost for one launch state
- [ ] Interview 10 people in the target vertical about how they buy insurance and handle claims
