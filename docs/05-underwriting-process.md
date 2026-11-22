# 05 — The Underwriting Process, Start to Finish

Underwriters work for carriers, or for MGAs that hold delegated authority. They decide **whether** to accept a risk, **on what terms**, and **at what price**.

| # | Stage | What happens | Data used |
|---|-------|-------------|-----------|
| 1 | **Submission intake** | An application arrives from an agent, broker, MGA or direct channel. For commercial it's often an email with ACORD forms, schedules and loss runs, which is messy and unstructured. | ACORD apps, loss runs, schedules |
| 2 | **Clearance / triage** | Checks for duplicate submissions, whether the risk fits the carrier's appetite, and whether it's in the underwriter's authority. Out-of-appetite risks are declined quickly. | Underwriting guidelines |
| 3 | **Data gathering & verification** | Orders third-party reports: MVRs (driving records), CLUE (claims history), insurance credit scores, inspections and loss control, property data, aerial imagery, catastrophe model output | LexisNexis, Verisk, CoreLogic, Cape Analytics, credit bureaus |
| 4 | **Risk assessment** | Evaluates exposure (what could go wrong and how badly), hazards, loss history, management quality (commercial), and concentration risk (catastrophe zones) | Catastrophe models (RMS/Moody's, Verisk) |
| 5 | **Decision & terms** | Accept, decline, or accept with changes: limits, deductibles, exclusions, required safety measures | Underwriting guidelines |
| 6 | **Pricing** | Applies the **filed rates** and rating factors (personal lines are mostly algorithmic), plus schedule credits and debits (commercial judgment) | State-filed rate plans |
| 7 | **Referral** | Anything above the underwriter's or MGA's authority goes to a senior underwriter or the carrier | Authority grid / DUA |
| 8 | **Quote → bind → issue** | Quote goes back to the distributor. Once accepted it's bound and the policy issued. | Policy admin system (Guidewire, Duck Creek…) |
| 9 | **Monitoring & renewal** | Mid-term audits (payroll and sales for workers comp and GL), re-underwriting at renewal, non-renewal decisions | Loss experience, audits |
| 10 | **Portfolio management** | Watching the whole book: loss ratio, mix, catastrophe exposure, buying reinsurance | Actuarial and reinsurance teams |

Sources: [Risk Education, six steps](https://riskeducation.org/six-steps-of-the-underwriting-process), [Insurer Brain, underwriting workflow](https://www.insurerbrain.com/wiki/Definition:Underwriting_workflow), [McKinsey, future underwriting OS](https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/insurance%20blog/the%20future%20underwriting%20operating%20system%20from%20inbox%20to%20ai%20nerve%20center/the-future-underwriting-operating-system-from-inbox-to-ai-nerve-center.pdf).

## Personal lines vs commercial lines
- **Personal lines:** almost fully automated. Rating engines plus third-party data give an instant quote, and humans handle only exceptions. Direct-to-consumer apps work well here.
- **Small commercial:** increasingly automated through APIs (NEXT, Coterie, Pie, Hiscox), including BOP, general liability, workers comp and professional liability.
- **Mid-market and large commercial:** manual, judgment-heavy, relationship-driven, and placed through brokers. Not a realistic first target.

## Delegated authority (how a startup can "be" the underwriter)
- A **binding authority agreement / DUA** lets an **MGA** underwrite and bind on a carrier's behalf within set limits. The carrier keeps the balance sheet; the MGA controls underwriting and admin, and sometimes claims. The agreement includes audit rights and service levels. ([Insurer Brain](https://www.insurerbrain.com/wiki/Definition:Underwriting_workflow), [DLA Piper on the MGA model](https://intelligence.dlapiper.com/managing-general-agents/the-mga-model.html))
- **Fronting carriers** rent their licensed paper to MGAs for a fee (a percentage of premium) and pass about 80% or more of the risk to reinsurers ([Insurance Thought Leadership](https://www.insurancethoughtleadership.com/commercial-lines/hybrid-fronting-model-reshapes-reinsurance)). This is how Lemonade, NEXT, Hippo and others started before becoming carriers.
- Many states require a separate MGA license in addition to the producer license. Texas is one example ([Troutman](https://www.troutman.com/insights/practical-licensing-challenges-solutions-for-producers-brokers-adjusters-other-intermediaries/)).

## Rates are regulated
In most states, personal-lines rates and forms must be **filed with and often approved by** the state Department of Insurance. A carrier can't simply undercut on price. A cheaper price has to come from lower expenses (no commission), better risk selection (data), or a different product. Surplus lines (E&S) policies are exempt from rate filing.
