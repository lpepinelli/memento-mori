export function diferenceBetweenDates (years: number) {
  const today = Date.now()
  const expect = new Date().setFullYear(new Date().getFullYear() + years)

  return expect - today
}
