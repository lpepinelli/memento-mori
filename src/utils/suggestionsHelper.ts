export function diferenceBetweenDates (years: number) {
  const today = Date.now()
  const expect = new Date().setFullYear(new Date().getFullYear() + years)

  return expect - today
}

export function padTo2Digits (num: number) {
  return num.toString().padStart(2, '0')
}

export function knownCountries (years: number, language: string) {
  const countries = years * 2
  if (countries >= 194) {
    return language === 'en-Us' ? 'If you visit 2 countries a year, you will have known every country in the world.' : 'Se você visitar 2 países por ano, terá conhecido todos os países do mundo.'
  } else {
    return language === 'en-Us' ? `If you visit 2 countries a year, you will have known ${countries} countries.` : `Se você visitar 2 países por ano, terá conhecido ${countries} países.`
  }
}

export function yearsToReach1M (age: number, expectation: number) {
  if (expectation - age < 15) {
    return { payment: 0, yearsToReach: 0 }
  }
  const rate = 0.08 / 12
  let payment = -500
  const present = 0
  const future = 1000000
  let yearsToReach = 0

  const num = payment * (1 + rate * 0) - future * rate
  const den = (present * rate + payment * (1 + rate * 0))
  yearsToReach = (Math.log(num / den) / Math.log(1 + rate)) / 12

  while (yearsToReach + age > expectation - 10) {
    payment -= 100
    const num = payment * (1 + rate * 0) - future * rate
    const den = (present * rate + payment * (1 + rate * 0))
    yearsToReach = (Math.log(num / den) / Math.log(1 + rate)) / 12
  }

  return { payment: Math.abs(payment), yearsToReach: Math.ceil(yearsToReach) }
}
