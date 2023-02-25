export function diferenceBetweenDates (years: number) {
  const today = Date.now()
  const expect = new Date().setFullYear(new Date().getFullYear() + years)

  return expect - today
}

export function padTo2Digits (num: number) {
  return num.toString().padStart(2, '0')
}
