function convertWeight(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  return parseFloat(weight) * 2.2;
}

console.log(convertWeight(70));
console.log(convertWeight("70kg"));
