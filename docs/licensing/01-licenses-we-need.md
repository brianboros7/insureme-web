# 01 — Licenses we need (and ones we don't, yet)

## Why a license is required
Under the NAIC **Producer Licensing Model Act**, adopted in some form by every state, anyone who **sells, solicits or negotiates** insurance must hold a producer license. Recommending a specific policy, quoting a price, and binding coverage, which is what our AI broker does, all count. An AI can't hold a license, but a licensed agency can, with a licensed human accountable for it. Only licensed producers can be paid commission.

## Phase 1: what we need

| # | License / registration | Who holds it | Where | Notes |
|---|---|---|---|---|
| 1 | **Individual producer license, Property & Casualty** | At least one founder or hire (the future DRLP); then every advisor who gives advice or approves binding | **Resident** license in the home state they live in | Pre-licensing course (some states), state exam, fingerprints/background check where required. P&C is better than "personal lines" alone because it leaves room for umbrella, landlord and small-business lines later. |
| 2 | **Non-resident individual licenses** | Same people | Each launch state that isn't their home state | Applied for through **NIPR**; usually no exam because of reciprocity. |
| 3 | **Business entity (agency) producer license** | InsureMe (the LLC or corporation) | Resident in the state where the company is based; non-resident in the others | Must name a **DRLP**: a licensed person responsible for the agency's compliance. |
| 4 | **Company formation + foreign registration** | InsureMe | Home state + each launch state where we do business | Secretary of State. Virginia requires SCC registration within 90 days of the agency license or the license is terminated. |
| 5 | **Assumed name (DBA) filing** | InsureMe | Where required | If the legal name differs from "InsureMe". Many DOIs require the DBA on the license too. **Run a trademark check on "InsureMe" first.** |
| 6 | **Errors & omissions (E&O) insurance** | InsureMe | All | Not a license, but carriers require it for appointment (commonly $1M per claim / $1M aggregate). Make sure it covers technology and AI-assisted advice. |
| 7 | **Carrier appointments** | InsureMe + each licensed advisor | Per carrier, per state | The carrier files the appointment with the state. See [04](04-carrier-appointments.md). |

## What we don't need yet (and where the lines are)

| License | When we'd need it | Our rule until then |
|---|---|---|
| **Public adjuster** | If we negotiate a claim *on the customer's behalf* against the insurer | The claims companion **organizes, documents, reminds and explains**. It never negotiates the settlement or takes a fee from the claim. |
| **Independent / company adjuster** | If we adjust claims for a carrier (Phase 2 MGA claims handling) | Not applicable in Phase 1 |
| **Surplus lines broker** | If we place homes that admitted carriers won't take, with non-admitted carriers | Refer out; consider adding it in Phase 1b for hard-to-place homes (non-renewal rescue) |
| **MGA license** | Phase 2: underwriting and binding our own product on a fronting carrier | Plan for it after about 18 months of agency data |
| **Premium finance** | If we lend customers the premium | Don't. Use carrier billing |
| **Insurance consultant license** (some states) | If we charge customers a fee for advice | We don't. Sign-up is free and we're paid by commission |

## The DRLP, explained
The **Designated Responsible Licensed Producer** is the licensed person the state holds responsible for the agency following the law. For InsureMe that person also signs off on how the AI broker behaves.
- **Indiana:** must hold the same lines the entity seeks; doesn't have to be an officer.
- **Texas:** at least one officer or active partner must hold a Texas General Lines – P&C license.
- **Illinois:** must be an owner, member, partner, officer or director, actively licensed in Illinois when the application is filed.
- **Virginia:** must be an employee, officer or director, licensed and reported to the Bureau *before* the entity applies.

**Implication:** the DRLP should be a founder or an early officer-level hire. Christine (CEO) or Brian (CPO) could get licensed, or InsureMe could hire a licensed, veteran Head of Advisors as an officer. Texas and Illinois both effectively require an officer-level licensee.
