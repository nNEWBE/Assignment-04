function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  const vowels = ["a", "e", "i", "o", "u", "y", "w"];
  const lastChar = name[name.length - 1].toLowerCase();

  if (vowels.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("RAFE"));
