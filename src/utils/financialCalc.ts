export function yearsToReach1M (age: number) {
  const pv = 1000000 / Math.pow((1 + 0.08), 34)

  console.log(pv)
}
