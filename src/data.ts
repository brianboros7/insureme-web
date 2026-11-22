// Prototype sample data only. Carrier names are fictional and premiums are illustrative.

export type DeductibleOption = {
  id: string
  label: string
  kind: 'percent' | 'flat'
  value: number
  premiumFactor: number
}

export const DEDUCTIBLES: DeductibleOption[] = [
  { id: 'pct2', label: '2% of dwelling', kind: 'percent', value: 0.02, premiumFactor: 1.0 },
  { id: 'pct1', label: '1% of dwelling', kind: 'percent', value: 0.01, premiumFactor: 1.07 },
  { id: 'flat2500', label: '$2,500 flat', kind: 'flat', value: 2500, premiumFactor: 1.12 },
  { id: 'flat1000', label: '$1,000 flat', kind: 'flat', value: 1000, premiumFactor: 1.24 },
]

export type Carrier = {
  id: string
  name: string
  basePremium: number // annual premium at a 2% wind/hail deductible, after discounts
  rating: string
  highlights: string[]
  discounts: string[]
  needsBundle?: boolean
}

export const CARRIERS: Carrier[] = [
  {
    id: 'heartland',
    name: 'Heartland Casualty (sample)',
    basePremium: 3300,
    rating: 'A (sample)',
    highlights: ['Replacement cost on dwelling and belongings', 'Water backup included', 'Flat wind/hail deductibles available'],
    discounts: ['Home + auto bundle', 'Claims-free 5 years', 'Monitored alarm'],
    needsBundle: true,
  },
  {
    id: 'patriot',
    name: 'Patriot Home Co. (sample)',
    basePremium: 3480,
    rating: 'A (sample)',
    highlights: ['Replacement cost on dwelling', 'Military-friendly claims team', 'Flat wind/hail deductibles available'],
    discounts: ['Claims-free 5 years', 'Paperless + autopay'],
  },
  {
    id: 'lonestar',
    name: 'Lone Star Mutual (sample)',
    basePremium: 3720,
    rating: 'A- (sample)',
    highlights: ['Replacement cost on dwelling', 'Roof surfacing covered at actual cash value', 'Percentage deductibles only'],
    discounts: ['Claims-free 5 years'],
  },
]

export const JACK = {
  name: 'Jack',
  address: '1234 Live Oak Dr, San Antonio, TX 78230',
  homeValue: 380000,
  dwellingCoverage: 380000,
  yearBuilt: 2004,
  squareFeet: 2100,
  roof: 'Composition shingle, installed 2016',
  currentPremium: 4100,
  currentDeductibleId: 'pct2',
}

export const LINDA = {
  name: 'Linda (Mom)',
  city: 'Fort Wayne, IN',
  currentPremium: 1860,
  renewalPremium: 2195,
  renewalDate: 'Feb 1, 2027',
}

export function deductibleDollars(d: DeductibleOption, dwelling: number): number {
  return d.kind === 'percent' ? Math.round(d.value * dwelling) : d.value
}

export function premiumFor(carrier: Carrier, d: DeductibleOption): number {
  if (carrier.id === 'lonestar' && d.kind === 'flat') return NaN
  return Math.round((carrier.basePremium * d.premiumFactor) / 10) * 10
}

export const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
