function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    const dailyCost = 500 + 8 * 50;
    const profit = ticketSale * 120 - dailyCost;
    return profit;
  }
}



function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const lastWord = name[name.length - 1].toLowerCase();
    if (
      lastWord === "a" ||
      lastWord === "y" ||
      lastWord === "i" ||
      lastWord === "e" ||
      lastWord === "o" ||
      lastWord === "u" ||
      lastWord === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}



function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    let newArray = [];
    for (const a of array) {
      if (typeof a === "number" && !isNaN(a)) {
        newArray.push(a);
      }
    }
    return newArray;
  }
}



function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  } else if (!(obj.birthYear >= 1000 && obj.birthYear <= 9999)) {
    return "invalid";
  } else {
    const modifiedSiteName =
      obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    return `${modifiedSiteName}#${obj.name}@${obj.birthYear}`;
  }
}



function monthlySavings(arr, livingCost) {
  let income = 0;
  let incomeWIthoutTax = 0;
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    for (const cost of arr) {
      if (cost >= 3000) {
        incomeWIthoutTax += cost * 0.8;
      } else {
        income += cost;
      }
    }
  }

  let totalSaving = income + incomeWIthoutTax - livingCost;
  if (totalSaving >= 0) {
    return totalSaving;
  } else {
    return "earn more";
  }
}