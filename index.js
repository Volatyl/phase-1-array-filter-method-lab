function findMatching(array, name) {
  return array.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(array, string) {
  return array.filter((n) => n.slice(0, string.length) === string);
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
