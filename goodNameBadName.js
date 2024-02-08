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
console.log(checkName("Shuvo"));
