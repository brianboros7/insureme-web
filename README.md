# InsureMe

**Homeowners insurance for veterans and elders: an AI broker that works for you, with a licensed human always a message away. Free to sign up.**

InsureMe's AI agent does a broker's job (shopping carriers, finding discounts, choosing a deductible a family can afford, watching every renewal, guiding claims, and checking contractors for scams). Licensed, veteran-staffed advisors approve every policy.

> ⚠️ **Prototype.** Everything in this app is sample data: carrier names are fictional and the premiums are illustrative, not real quotes. InsureMe is not affiliated with the U.S. Department of Veterans Affairs or any government agency.

## Prototype v0.1

Follows Jack, a 48-year-old Army veteran in San Antonio, through the app:

1. **Home:** what InsureMe is
2. **Guided quote:** address lookup with property prefill, veteran/65+/bundle questions
3. **Compare:** pick a wind/hail deductible and see what each carrier charges, explained in plain language by "Your InsureMe guide"
4. **Licensed review:** the AI prepares the application and a licensed human approves it
5. **Message an advisor:** in-app chat or email ticket with a licensed human (no phone line)
6. **Dashboard:** savings, renewal watchdog, Mom's (Linda's) policy shared with Jack, claims companion checklist, scam shield

Accessibility: text-size control (A / A+ / A++), large touch targets, high-contrast colors, keyboard focus styles.

Jump straight to a screen: `/#quote`, `/#compare`, `/#dashboard`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

Built with Vite, React 19 and TypeScript.

## Research & strategy

All research lives in [`docs/`](docs/README.md):

- Industry map, apps landscape, and the claims, brokerage and underwriting processes (01–05)
- Cutting out the broker, the business plan, and the veterans & elders focus (06–08)
- Brand, business model canvas, value proposition canvas, one-pager (09–12)
- Thesis: an agentic-AI broker and the savings math (13)
- 50-state regulation, the launch states (IN, TX, IL, VA), legislation & lobbying (14–16)
- [Product research document](docs/17-product-research.md), updated daily during the research sprint
- [White paper](docs/whitepaper.md)

Brand assets are in [`brand/`](brand/).
