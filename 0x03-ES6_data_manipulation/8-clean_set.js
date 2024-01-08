export default function cleanSet(set, startString) {
  const arr = [];
  for (const i of set.values()) {
    if (i.substr(0, startString.length) === startString) {
      arr.push(i.substr(startString.length));
    }
  }
  return arr.join('-');
}
