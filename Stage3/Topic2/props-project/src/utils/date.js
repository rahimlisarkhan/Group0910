export function ageCalc(age) {
  const nowYear = new Date().getFullYear();

  return nowYear - age;
}
