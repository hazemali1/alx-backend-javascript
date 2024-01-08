export default function cleanSet(set, startString) {
  const arr = [];
  for (const i of set.values()) {
    if (startString && i.startsWith(startString)) {
      arr.push(i.substr(startString.length));
    }
  }
  return arr.join('-');
}
