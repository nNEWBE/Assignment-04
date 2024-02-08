function monthlySavings(arr, livingCost) {
  let income = 0;
  let incomeWIthoutTax = 0;
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    for (const cost of arr) {
      if (cost >= 3000) {
        incomeWIthoutTax += cost*.8;
      } else {
        income += cost;
      }
    }
  }

  let totalSaving = income + incomeWIthoutTax - livingCost;
  if (totalSaving < 0) {
    return "earn more";
  } else {
    return totalSaving;
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
