import { useState } from 'react'
import mark from './assets/insureme-mark.svg'
import jack from './assets/jack-relieved.svg'
import {
  CARRIERS,
  DEDUCTIBLES,
  JACK,
  LINDA,
  deductibleDollars,
  premiumFor,
  usd,
  type Carrier,
  type DeductibleOption,
} from './data'
import './App.css'

type Screen = 'home' | 'quote' | 'compare' | 'review' | 'dashboard'
type TextSize = 'normal' | 'large' | 'xlarge'

export default function App() {
  const [screen, setScreenState] = useState<Screen>(() => {
    const h = window.location.hash.slice(1)
    return (['home', 'quote', 'compare', 'dashboard'] as string[]).includes(h) ? (h as Screen) : 'home'
  })
  const setScreen = (s: Screen) => {
    setScreenState(s)
    window.history.replaceState(null, '', s === 'home' ? window.location.pathname : `#${s}`)
    window.scrollTo(0, 0)
  }
  const [textSize, setTextSize] = useState<TextSize>('normal')
  const [chosen, setChosen] = useState<{ carrier: Carrier; deductible: DeductibleOption } | null>(null)
  const [advisorOpen, setAdvisorOpen] = useState(false)

  return (
    <div className={`app size-${textSize}`}>
      <p className="proto-banner" role="note">
        Prototype v0.1 · sample data, not real quotes · InsureMe is not affiliated with the U.S. Department of Veterans Affairs
      </p>
      <header className="topbar">
        <button className="brand" onClick={() => setScreen('home')} aria-label="InsureMe home">
          <img src={mark} alt="" width={40} height={40} />
          <span>
            Insure<span className="me">Me</span>
          </span>
        </button>
        <div className="topbar-actions">
          <div className="text-size" role="group" aria-label="Text size">
            {(['normal', 'large', 'xlarge'] as TextSize[]).map((s, i) => (
              <button
                key={s}
                aria-pressed={textSize === s}
                onClick={() => setTextSize(s)}
                className={textSize === s ? 'active' : ''}
              >
                {['A', 'A+', 'A++'][i]}
              </button>
            ))}
          </div>
          <button className="btn ghost" onClick={() => setAdvisorOpen(true)}>
            Message an advisor
          </button>
        </div>
      </header>

      <main id="main">
        {screen === 'home' && <Home onStart={() => setScreen('quote')} onDashboard={() => setScreen('dashboard')} />}
        {screen === 'quote' && <Quote onDone={() => setScreen('compare')} />}
        {screen === 'compare' && (
          <Compare
            onChoose={(carrier, deductible) => {
              setChosen({ carrier, deductible })
              setScreen('review')
            }}
            onAdvisor={() => setAdvisorOpen(true)}
          />
        )}
        {screen === 'review' && chosen && (
          <Review chosen={chosen} onDashboard={() => setScreen('dashboard')} onAdvisor={() => setAdvisorOpen(true)} />
        )}
        {screen === 'dashboard' && <Dashboard chosen={chosen} />}
      </main>

      {advisorOpen && <AdvisorDialog onClose={() => setAdvisorOpen(false)} />}
    </div>
  )
}

/* ---------- Home ---------- */
function Home({ onStart, onDashboard }: { onStart: () => void; onDashboard: () => void }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Homeowners insurance for veterans and elders</p>
        <h1>An AI broker that works for you. A licensed human is always a message away.</h1>
        <p className="lead">
          We shop every carrier we can, find every discount, and help you choose a deductible your family can actually
          afford. Then we watch your policy every year and stand beside you when you file a claim.
        </p>
        <p className="free-note">Free to sign up. No sales calls, ever.</p>
        <div className="row">
          <button className="btn primary big" onClick={onStart}>
            Get my free quotes
          </button>
          <button className="btn secondary big" onClick={onDashboard}>
            See a sample dashboard
          </button>
        </div>
        <ul className="trust">
          <li>Licensed advisors approve every policy</li>
          <li>Large text, in-app chat and family help built in</li>
          <li>We never sell your data</li>
        </ul>
      </div>
      <img className="hero-img" src={jack} alt="Illustration of a smiling veteran homeowner in front of his house" width={360} height={360} />
    </section>
  )
}

/* ---------- Guided quote ---------- */
function Quote({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(1)
  const [address, setAddress] = useState(JACK.address)
  const [found, setFound] = useState(false)
  const [veteran, setVeteran] = useState(true)
  const [over65, setOver65] = useState(false)
  const [bundle, setBundle] = useState(true)
  const [premium, setPremium] = useState(String(JACK.currentPremium))

  return (
    <section className="panel narrow">
      <p className="eyebrow">Step {step} of 3</p>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      {step === 1 && (
        <>
          <h2>Where is your home?</h2>
          <GuideSays>I’ll look up your home’s details so you don’t have to type them. You can fix anything I get wrong.</GuideSays>
          <label className="field">
            Home address
            <input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" />
          </label>
          {!found ? (
            <button className="btn primary" onClick={() => setFound(true)}>
              Find my home
            </button>
          ) : (
            <>
              <dl className="facts">
                <div><dt>Year built</dt><dd>{JACK.yearBuilt}</dd></div>
                <div><dt>Size</dt><dd>{JACK.squareFeet.toLocaleString()} sq ft</dd></div>
                <div><dt>Roof</dt><dd>{JACK.roof}</dd></div>
                <div><dt>Estimated rebuild cost</dt><dd>{usd(JACK.dwellingCoverage)}</dd></div>
              </dl>
              <p className="muted">Sample property data. In the real product this comes from public records and imagery.</p>
              <button className="btn primary" onClick={() => setStep(2)}>
                That looks right
              </button>
            </>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <h2>A little about you</h2>
          <GuideSays>Some carriers reward service and experience. These answers help me find discounts.</GuideSays>
          <Toggle label="I served in the U.S. military (veteran, active duty, Guard or Reserve)" checked={veteran} onChange={setVeteran} />
          <Toggle label="I’m 65 or older" checked={over65} onChange={setOver65} />
          <Toggle label="Also quote my car (bundling often saves money)" checked={bundle} onChange={setBundle} />
          <label className="field">
            What do you pay for home insurance today? (per year)
            <input inputMode="numeric" value={premium} onChange={(e) => setPremium(e.target.value.replace(/[^0-9]/g, ''))} />
          </label>
          <div className="row">
            <button className="btn secondary" onClick={() => setStep(1)}>Back</button>
            <button className="btn primary" onClick={() => setStep(3)}>Continue</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2>What matters most to you?</h2>
          <GuideSays>
            Your current policy has a <strong>2% wind and hail deductible</strong>. On your home, that’s{' '}
            <strong>{usd(JACK.dwellingCoverage * 0.02)}</strong> out of pocket after a hailstorm. I’ll show you options
            with lower deductibles and what they cost.
          </GuideSays>
          <ul className="choices">
            <li>✔ A lower deductible</li>
            <li>✔ Keep my yearly cost the same or lower</li>
            <li>✔ Replacement cost coverage on my home</li>
          </ul>
          <div className="row">
            <button className="btn secondary" onClick={() => setStep(2)}>Back</button>
            <button className="btn primary big" onClick={onDone}>Show my options</button>
          </div>
        </>
      )}
    </section>
  )
}

/* ---------- Compare ---------- */
function Compare({
  onChoose,
  onAdvisor,
}: {
  onChoose: (c: Carrier, d: DeductibleOption) => void
  onAdvisor: () => void
}) {
  const [dedId, setDedId] = useState('flat2500')
  const ded = DEDUCTIBLES.find((d) => d.id === dedId)!
  const dedDollars = deductibleDollars(ded, JACK.dwellingCoverage)
  const currentDed = JACK.dwellingCoverage * 0.02
  const offers = CARRIERS.map((c) => ({ c, p: premiumFor(c, ded) }))
    .filter((o) => !Number.isNaN(o.p))
    .sort((a, b) => a.p - b.p)
  const best = offers[0]

  return (
    <section className="panel">
      <p className="eyebrow">Your options</p>
      <h2>Pick a deductible. We’ll show what it costs.</h2>

      <fieldset className="deductibles">
        <legend>Wind and hail deductible</legend>
        {DEDUCTIBLES.map((d) => (
          <label key={d.id} className={`pill ${dedId === d.id ? 'on' : ''}`}>
            <input type="radio" name="ded" value={d.id} checked={dedId === d.id} onChange={() => setDedId(d.id)} />
            {d.label}
            <span className="pill-sub">{usd(deductibleDollars(d, JACK.dwellingCoverage))} out of pocket</span>
          </label>
        ))}
      </fieldset>

      {best && (
        <GuideSays>
          With a <strong>{ded.label}</strong> deductible you’d pay <strong>{usd(dedDollars)}</strong> after a hailstorm,
          instead of <strong>{usd(currentDed)}</strong> today.{' '}
          {best.p <= JACK.currentPremium ? (
            <>
              The best option costs <strong>{usd(best.p)}</strong> a year, which is{' '}
              <strong>{usd(JACK.currentPremium - best.p)} less</strong> than you pay now.
            </>
          ) : (
            <>
              The best option costs <strong>{usd(best.p)}</strong> a year, <strong>{usd(best.p - JACK.currentPremium)} more</strong> than
              today. That’s the trade-off for a much smaller deductible.
            </>
          )}
        </GuideSays>
      )}

      <div className="offers">
        {offers.map(({ c, p }, i) => (
          <article key={c.id} className={`offer ${i === 0 ? 'best' : ''}`}>
            {i === 0 && <p className="tag">Best fit for you</p>}
            <h3>{c.name}</h3>
            <p className="price">
              {usd(p)}
              <span>/year</span>
            </p>
            <p className="delta">
              {p <= JACK.currentPremium ? `${usd(JACK.currentPremium - p)} less than today` : `${usd(p - JACK.currentPremium)} more than today`}
            </p>
            <ul>
              {c.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <p className="muted">Discounts applied: {c.discounts.join(', ')}{c.needsBundle ? ' (requires auto bundle)' : ''}</p>
            <button className="btn primary" onClick={() => onChoose(c, ded)}>
              Choose this policy
            </button>
          </article>
        ))}
      </div>

      <aside className="tip">
        <h3>Ways to pay even less</h3>
        <p>
          An impact-resistant (Class 4) roof can lower the wind and hail part of your premium with many carriers, and some
          states offer grants toward the upgrade. Your roof is from 2016, so I’ll remind you before it’s due.
        </p>
        <button className="btn ghost" onClick={onAdvisor}>Ask an advisor about this</button>
      </aside>
    </section>
  )
}

/* ---------- Review / licensed approval ---------- */
function Review({
  chosen,
  onDashboard,
  onAdvisor,
}: {
  chosen: { carrier: Carrier; deductible: DeductibleOption }
  onDashboard: () => void
  onAdvisor: () => void
}) {
  const p = premiumFor(chosen.carrier, chosen.deductible)
  return (
    <section className="panel narrow">
      <p className="eyebrow">Almost done</p>
      <h2>Your policy is with a licensed advisor for review</h2>
      <GuideSays>
        I’ve prepared your application for <strong>{chosen.carrier.name}</strong> at <strong>{usd(p)}</strong> a year with a{' '}
        <strong>{chosen.deductible.label}</strong> wind and hail deductible. A licensed advisor checks everything before
        it’s final. That’s how we keep AI honest.
      </GuideSays>
      <ol className="timeline">
        <li className="done">Application prepared by your AI guide</li>
        <li className="current">Licensed advisor review (usually within 1 business hour)</li>
        <li>Policy bound and proof of insurance sent to your mortgage lender</li>
      </ol>
      <div className="row">
        <button className="btn secondary" onClick={onAdvisor}>Message the advisor</button>
        <button className="btn primary" onClick={onDashboard}>Go to my dashboard</button>
      </div>
    </section>
  )
}

/* ---------- Dashboard ---------- */
function Dashboard({ chosen }: { chosen: { carrier: Carrier; deductible: DeductibleOption } | null }) {
  const carrier = chosen?.carrier ?? CARRIERS[0]
  const ded = chosen?.deductible ?? DEDUCTIBLES[2]
  const premium = premiumFor(carrier, ded)
  const saved = JACK.currentPremium - premium
  const dedSaved = JACK.dwellingCoverage * 0.02 - deductibleDollars(ded, JACK.dwellingCoverage)

  return (
    <section className="panel">
      <p className="eyebrow">Welcome back, Jack</p>
      <h2>Your home, watched over</h2>
      <div className="grid">
        <article className="card">
          <h3>Your policy</h3>
          <p className="big-num">{usd(premium)}<span>/year</span></p>
          <p>{carrier.name}</p>
          <p>Wind and hail deductible: <strong>{ded.label}</strong> ({usd(deductibleDollars(ded, JACK.dwellingCoverage))})</p>
        </article>
        <article className="card good">
          <h3>What InsureMe saved you</h3>
          <p className="big-num">{usd(Math.max(saved, 0))}<span>/year</span></p>
          <p>Plus <strong>{usd(dedSaved)}</strong> less out of pocket after a hailstorm.</p>
        </article>
        <article className="card">
          <h3>Renewal watchdog</h3>
          <p>Next renewal: <strong>Dec 1, 2027</strong></p>
          <p>We’ll re-shop every carrier 60 days before and tell you if there’s a better deal. No action needed.</p>
        </article>
        <article className="card alert">
          <h3>{LINDA.name}</h3>
          <p>{LINDA.city} · shared with you by Linda</p>
          <p>
            Her premium goes from <strong>{usd(LINDA.currentPremium)}</strong> to <strong>{usd(LINDA.renewalPremium)}</strong> on{' '}
            {LINDA.renewalDate} (+{Math.round((LINDA.renewalPremium / LINDA.currentPremium - 1) * 100)}%).
          </p>
          <button className="btn primary">Re-shop Linda’s policy</button>
        </article>
      </div>
      <ClaimsCompanion />
      <ScamShield />
    </section>
  )
}

function ClaimsCompanion() {
  const steps = [
    'Make sure everyone is safe',
    'Take photos and video of all damage, inside and out, before cleanup',
    'Prevent more damage (tarp the roof, cover broken windows) and keep receipts',
    'File the claim. I’ll fill in what I already know and log every call',
    'Meet the adjuster. I’ll verify who they are first',
    'Review the estimate. You don’t have to accept the first offer',
  ]
  const [done, setDone] = useState<boolean[]>(steps.map(() => false))
  const count = done.filter(Boolean).length
  return (
    <article className="card wide">
      <h3>Claims companion</h3>
      <p>Hail last night? I’ll walk you through it step by step. {count} of {steps.length} done.</p>
      <ol className="checklist">
        {steps.map((s, i) => (
          <li key={s}>
            <label>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone(done.map((d, j) => (j === i ? !d : d)))}
              />
              {s}
            </label>
          </li>
        ))}
      </ol>
    </article>
  )
}

function ScamShield() {
  const [license, setLicense] = useState('')
  const [result, setResult] = useState<string | null>(null)
  return (
    <article className="card wide">
      <h3>Scam shield</h3>
      <p>
        Storm chasers target homeowners after hail. <strong>Never sign an “assignment of benefits”</strong> or pay cash up
        front before we check the contractor.
      </p>
      <div className="row">
        <label className="field grow">
          Contractor name or license number
          <input value={license} onChange={(e) => setLicense(e.target.value)} placeholder="e.g. Alamo Roofing LLC" />
        </label>
        <button
          className="btn primary"
          onClick={() =>
            setResult(
              license.trim()
                ? `Sample check for “${license.trim()}”: business registered, 2 complaints in 3 years, no license on file for roofing in your city. Talk to us before signing.`
                : 'Enter a name or license number to check.',
            )
          }
        >
          Check
        </button>
      </div>
      {result && <p className="notice" role="status">{result}</p>}
    </article>
  )
}

/* ---------- Shared bits ---------- */
function GuideSays({ children }: { children: React.ReactNode }) {
  return (
    <div className="guide" role="note">
      <p className="guide-label">Your InsureMe guide</p>
      <p>{children}</p>
    </div>
  )
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  )
}

function AdvisorDialog({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'chat' | 'ticket'>('chat')
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<{ from: 'you' | 'advisor'; text: string }[]>([
    {
      from: 'advisor',
      text: 'Hi Jack, I’m Maria, a licensed advisor on the InsureMe team. I can see everything your AI guide has prepared. What can I help with?',
    },
  ])
  const [ticket, setTicket] = useState({ subject: '', body: '' })
  const [ticketNo, setTicketNo] = useState<string | null>(null)

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((m) => [
      ...m,
      { from: 'you', text },
      { from: 'advisor', text: 'Thanks, I’m looking into this now. If you step away, I’ll also email you my answer.' },
    ])
    setDraft('')
  }

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="advisor-title">
      <div className="dialog">
        <h2 id="advisor-title">Message a licensed advisor</h2>
        <p className="muted">
          Real, licensed people, by in-app chat or email ticket. Usually a reply within 1 business hour. Sample
          conversation for the prototype.
        </p>
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'chat'} className={tab === 'chat' ? 'on' : ''} onClick={() => setTab('chat')}>
            Chat
          </button>
          <button role="tab" aria-selected={tab === 'ticket'} className={tab === 'ticket' ? 'on' : ''} onClick={() => setTab('ticket')}>
            Email ticket
          </button>
        </div>

        {tab === 'chat' ? (
          <>
            <ol className="chat" aria-live="polite">
              {messages.map((m, i) => (
                <li key={i} className={m.from}>
                  <span className="who">{m.from === 'you' ? 'You' : 'Maria, licensed advisor'}</span>
                  {m.text}
                </li>
              ))}
            </ol>
            <div className="row">
              <label className="field grow">
                Your message
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="e.g. Is a $2,500 deductible right for us?"
                />
              </label>
              <button className="btn primary" onClick={send}>Send</button>
            </div>
          </>
        ) : ticketNo ? (
          <p className="notice" role="status">
            Ticket <strong>{ticketNo}</strong> is open. A licensed advisor will reply by email and in your InsureMe inbox.
          </p>
        ) : (
          <>
            <label className="field">
              Subject
              <input value={ticket.subject} onChange={(e) => setTicket({ ...ticket, subject: e.target.value })} />
            </label>
            <label className="field">
              What do you need help with?
              <textarea rows={4} value={ticket.body} onChange={(e) => setTicket({ ...ticket, body: e.target.value })} />
            </label>
            <button
              className="btn primary"
              onClick={() => setTicketNo(`IM-${Math.floor(10000 + Math.random() * 89999)}`)}
            >
              Open ticket
            </button>
          </>
        )}
        <button className="btn ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
