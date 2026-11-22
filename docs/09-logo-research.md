# 09 — Logo Research & the InsureMe Mark

## What logos in this space do

**Common symbols**
- **Shields:** stand for defense, safety and protection against risk.
- **Umbrellas:** Travelers' red umbrella means "shelter from the storm."
- Hands, roofs, doors and houses are also common protection images.

Source: [ZenBusiness](https://www.zenbusiness.com/how-to-create-insurance-logo/), [DesignRush / Travelers](https://www.designrush.com/best-designs/logo/travelers-insurance), [DesignCrowd](https://blog.designcrowd.com/article/1053/20-creative-insurance-company-logo-designs).

**Colors:** conservative and trust-building, with **blue dominating**. Sources stress timeless over trendy.

### How the main brands look

The descriptions below are from visual observation, not sourced claims.

| Brand | Mark | Palette | Signal |
|-------|------|---------|--------|
| State Farm | Three ovals, red wordmark | Red | Heritage, neighborly |
| Allstate | Cupped "good hands" | Blue | Care, safety |
| Travelers | Umbrella | Red | Shelter |
| USAA | Letters + eagle | Navy | Military, institutional |
| Liberty Mutual | Statue of Liberty | Navy + yellow | Americana |
| GEICO / Progressive | Wordmarks (gecko mascot) | Blue / navy | Price, simplicity |
| Lemonade | Lowercase wordmark | Hot pink | Playful, disruptive, young |
| Hippo / Kin / Root | Mascot or simple glyph | Bright colors | Tech, modern |
| AARP / The Hartford | Wordmark / stag | Red / navy | Established, for older adults |

### What this means for InsureMe
1. **The legacy brands own blue-and-shield. The insurtechs own bright and playful.** Neither fits our audience perfectly. Veterans and elders want *trustworthy and legible*, not cute. They also don't want to feel they're being marketed to like a bank.
2. **Avoid anything that looks like a government seal** (eagles, stars, circular seals, the VA's look). Implying VA or government affiliation is a **compliance risk** (see doc 08).
3. **Legibility is a feature:** high contrast, a simple shape that reads at 16px, no thin lines. Many of our users have reduced vision.
4. **Warmth balances trust:** pair navy with a warm color rather than red-white-blue.

## The InsureMe mark (v1)

Files are in [`../brand/`](../brand/):
- `insureme-mark.svg`: icon only (app icon, favicon)
- `insureme-logo.svg`: horizontal logo for light backgrounds
- `insureme-logo-dark.svg`: horizontal logo for dark backgrounds

**Concept: "Me, sheltered."**
- **Roof made of two stacked chevrons.** It reads as a house roof (homeowners), and it's a *quiet* nod to service-rank chevrons (veterans) without military clichés.
- **The "i" under the roof is also a person.** The customer is protected at the center, which is the "Me" in InsureMe.
- Rounded ends feel friendly and soft, which suits an older audience.

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#1F3A5F` | Primary: trust, stability |
| Honor gold | `#E0A030` (mark), `#C8861A` (text on white) | Accent: warmth, honor, optimism |
| Deep navy | `#13263F` | Dark backgrounds |
| Light gold | `#F2B84B` | Accent on dark backgrounds |

The wordmark uses a system font (Avenir Next, falling back to Segoe UI or Helvetica). Before final production, convert the text to outlines or pick a licensed brand font. Candidates are Atkinson Hyperlegible (free, designed for low vision, a strong fit for this audience) or Source Sans 3.

### Next steps
- [ ] Test at 16px, 32px and app-icon sizes. Test grayscale.
- [ ] Do a trademark search on "InsureMe" (USPTO TESS). The name is generic-sounding and may be taken in insurance (class 36). **Important before investing in the brand.**
- [ ] Check the domain and social handles.
