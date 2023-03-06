export function yearsToReach1M (age: number) {
  const pv = Math.pow(1000000 / (1 + 0.08), 34)

  console.log(pv)
}
