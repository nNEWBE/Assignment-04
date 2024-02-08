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

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
