function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    const dailyCost = 500 + 8 * 50;
    const profit = ticketSale * 120 - dailyCost;
    return profit;
  }
}
console.log(calculateMoney(10));
