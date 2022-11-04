
function dayRate(odracovano) {
  let hodiny = 8;
  return hodiny * odracovano;
}

console.log(dayRate(600));

function daysInBudget(fixedPrice, hodinovka) {
  let den = 24;
  let pracHodiny = fixedPrice / hodinovka;
  return pracHodiny / den;
}
console.log(daysInBudget(20000, 300));