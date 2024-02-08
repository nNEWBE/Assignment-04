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

console.log(deleteInvalids([1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}]));