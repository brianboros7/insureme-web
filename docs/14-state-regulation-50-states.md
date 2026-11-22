# 14 — How Insurance Works in All 50 States

**Launch states (decided 2026-11-22):** **Indiana, Texas** (red) and **Illinois, Virginia** (blue). Deep dives are in [15-launch-states.md](15-launch-states.md). This doc is the 50-state framework. It will be filled in state by state in later research sprints.

## 1. Why it's 50 different markets
- **The McCarran-Ferguson Act (1945)** leaves insurance regulation to the **states**. There is no federal insurance regulator for P&C. The federal Treasury's FIO only monitors ([FIO 2025 report](https://home.treasury.gov/system/files/311/Final%20FIO%202025%20Annual%20Report.pdf)).
- Every state has its own **insurance code** (set by the legislature), its own **Department of Insurance** (DOI, which regulates), its own **commissioner**, rate and form rules, licensing, a residual market (a FAIR plan or wind pool), and consumer-protection rules.
- States coordinate through the **NAIC** (commissioners), which writes *model laws and bulletins*. These don't bind anyone until a state adopts them, often with changes. **NCOIL** is the legislators' counterpart and writes its own models.

## 2. What we track for every state (the template)

| Dimension | Why it matters to InsureMe |
|---|---|
| **Regulator & commissioner** (elected vs appointed) | Elected commissioners are more political and consumer-facing |
| **Homeowners rate regime:** prior approval / file-and-use / use-and-file / flex / (rare) no filing | How fast carriers (and later our MGA) can change price; how much carriers want to write there |
| **Form filing rules** | Whether our MGA product's policy wording can launch quickly |
| **Producer licensing:** resident/non-resident, business-entity license, DRLP, CE | Our agency license in each state |
| **MGA licensing** | Needed for Phase 2 |
| **Anti-rebating law & exceptions** | Whether we can pass commission or perks back to customers |
| **AI rules:** NAIC AI Model Bulletin adopted? State AI or data laws? | Our AI broker's compliance |
| **Residual market:** FAIR plan / wind pool, size, trend | Signals market stress, a need for "non-renewal rescue," and assessment risk |
| **Non-renewal / cancellation notice rules** | Watchdog timing; consumer protections |
| **Claims rules** (Unfair Claims Settlement Practices deadlines, appraisal, bad-faith law) | Claims-companion deadline tracker |
| **Public adjuster licensing** | Where the claims companion has to stop |
| **Mitigation programs & mandated discounts** (e.g. FORTIFIED) | Lever 3 of the savings thesis |
| **Catastrophe exposure** (hurricane, hail/convective storm, wildfire, flood, earthquake) | Carrier appetite and premium levels |
| **Veteran and 65+ population** | Market size for our segment |
| **Active legislation & key lobbies** | Political risk and opportunity |
| **Avg homeowners premium & trend** | Savings potential |

## 3. 50-state baseline (first pass)

Legend:
- **Commissioner:** E = elected, A = appointed. Source: [Ballotpedia](https://ballotpedia.org/Insurance_Commissioner) (11 elected, 39 appointed). VA and NM are appointed by a commission; the other appointed states by the governor.
- **AI bulletin:** ✓ = adopted the NAIC AI Model Bulletin, per the [NAIC tracker, May 2026](https://content.naic.org/sites/default/files/legal-adoption-map-ai-model-bulletin.pdf) and [Carlton Fields](https://www.carltonfields.com/insights/publications/states-decode-their-expectations-on-insurers-use-of-ai). "—" = not confirmed. The NAIC counts about 25 jurisdictions, so recheck.
- **Rate regime:** to fill from the current [NAIC rate-filing-methods chart](https://content.naic.org/sites/default/files/model-law-chart-pa-10-rate-filing-methods-for-property-casualty-insurance-workers-comp-title.pdf). It's filled in only where verified.
- **Phase:** L = launch (2027), N = next wave candidate, — = later.

| State | Commissioner | AI bulletin | Homeowners rate regime | Notes | Phase |
|---|---|---|---|---|---|
| Alabama | A | — | | FORTIFIED: ≥20% wind discount required ([NPR](https://www.npr.org/2025/06/11/nx-s1-5340712/climate-home-insurance-discount-alabama-ca)) | — |
| Alaska | A | ✓ | | | — |
| Arizona | A | — | | Large retiree and veteran population | N |
| Arkansas | A | ✓ | | | — |
| California | **E** | — | Prior approval (Prop 103) | Rebating allowed by Prop 103 (often blocked in agent contracts); FAIR plan +152% 2022–26; no AARP/Hartford program | — (crisis state) |
| Colorado | A | — | | Hail and wildfire | — |
| Connecticut | A | ✓ | | | — |
| Delaware | **E** | ✓ | | | — |
| Florida | A | — | Homeowners under §627.062 | Citizens has more than 1M policies; rates 3–4× the national average; no AARP/Hartford program | — (crisis state) |
| Georgia | **E** | — | | Large military and veteran population | N |
| Hawaii | A | ✓ | | | — |
| Idaho | A | — | | | — |
| **Illinois** | A | ✓ | **New 2026 rate-review law** (see doc 15) | Launch state | **L** |
| **Indiana** | A | — | Filed; effective unless disapproved (IC 27-1-22) | Launch state | **L** |
| Iowa | A | ✓ | | | — |
| Kansas | **E** | — | | | — |
| Kentucky | A | ✓ | | | — |
| Louisiana | **E** | — | Modified prior approval | Hurricane; Citizens of LA | — |
| Maine | A | — | Prior approval, 30-day deemer | Oldest median age in the US | — |
| Maryland | A | ✓ | | Large military population | N |
| Massachusetts | A | ✓ | | | — |
| Michigan | A | ✓ | | | — |
| Minnesota | A | — | | Hail | — |
| Mississippi | **E** | — | | Hurricane | — |
| Missouri | A | — | | | — |
| Montana | **E** | — | | High veteran share | — |
| Nebraska | A | ✓ | | Hail | — |
| Nevada | A | ✓ | | | — |
| New Hampshire | A | ✓ | | | — |
| New Jersey | A | ✓ | | | — |
| New Mexico | A (commission) | — | | | — |
| New York | A | — | | Strict regulator (DFS) | — |
| North Carolina | **E** | ✓ | Rate bureau system (to verify) | Large military population; 2025 rebating bills (H356) | N |
| North Dakota | **E** | — | | | — |
| Ohio | A | — | | | N |
| Oklahoma | **E** | ✓ | | Hail and tornado | — |
| Oregon | A | — | | | — |
| Pennsylvania | A | ✓ | | Large 65+ population | N |
| Rhode Island | A | ✓ | | | — |
| South Carolina | A | — | | Hurricane; large military and retiree population | N |
| South Dakota | A | — | | | — |
| Tennessee | A | — | | | N |
| **Texas** | A | — | **File-and-use** | Launch state; TWIA + Texas FAIR Plan | **L** |
| Utah | A | — | | Rebating allowed since 2015 | — |
| Vermont | A | ✓ | | | — |
| **Virginia** | A (SCC) | ✓ | (to verify) | Launch state; Bureau of Insurance under the State Corporation Commission | **L** |
| Washington | **E** | ✓ | | | — |
| West Virginia | A | — | | High veteran share | — |
| Wisconsin | A | ✓ | | | — |
| Wyoming | A | — | | | — |
| *Washington, D.C.* | A | ✓ | | | — |

## 4. Rate regimes explained
- **Prior approval:** the regulator must approve rates before use. Slow; can suppress rates; carriers may pull back (CA).
- **File-and-use:** file, then use immediately. The regulator can disapprove later (TX).
- **Use-and-file:** use first, file within a set period.
- **Flex rating:** changes within a band (e.g. ±X%) are file-and-use; bigger changes need prior approval.
- Sources: [NAIC chart](https://insurance.maryland.gov/Consumer/Documents/agencyhearings/2022%20NAIC%20Chart%20-%20rate%20filing%20methods%20for%20P%26C%20insurance%20by%20state.pdf), [Guidewire rate filings 101](https://www.guidewire.com/resources/blog/general-interest/us-rate-filings-101-navigating-the-system-behind-insurance-pricing).

## 5. Cross-state rules that affect us everywhere
- **Producer licensing:** NAIC Producer Licensing Model Act. Non-resident licenses go through NIPR. A business-entity license plus a DRLP is needed in each state.
- **Anti-rebating:** nearly every state has one, mostly based on the NAIC model. There's a reform wave (NCOIL Rebate Reform Model, Nov 2025; [CIAB tracker](https://www.ciab.com/resources/state-legislative-tracker-rebating-july-2026); [NAIC JIR](https://content.naic.org/research/jir/modernizing-anti-rebate-laws-lessons-learned-and-future-considerations)). Exceptions usually cover value-added services, which fits our claims companion and scam shield.
- **AI:** about 25 jurisdictions have adopted the NAIC AI Model Bulletin. It applies to *insurers* but sets the expectations regulators will bring to AI distribution too.

## 6. Next sprint: fill the table
For each state: rate regime, anti-rebating status, residual market size, non-renewal notice days, claims deadlines, public adjuster licensing, mitigation programs, veteran and 65+ counts, average homeowners premium. Order: the 4 launch states (done in doc 15) → the 8 "N" states → the rest.
