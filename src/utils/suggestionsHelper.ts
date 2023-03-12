export function diferenceBetweenDates (years: number) {
  const today = Date.now()
  const expect = new Date().setFullYear(new Date().getFullYear() + years)

  return expect - today
}

export function padTo2Digits (num: number) {
  return num.toString().padStart(2, '0')
}

export function knownCountries (years: number) {
  const countries = years * 2
  if (countries >= 194) {
    return 'If you visit 2 countries a year, you will have known every country in the world.'
  } else {
    return `If you visit 2 countries a year, you will have known ${countries} countries.`
  }
}

export function yearsToReach1M (age: number) {
  const pv = 1000000 / Math.pow((1 + 0.08), 34)

  console.log(pv)
}
