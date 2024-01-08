export default function cleanSet(set, startString) {
  const arr = [];
  for (const i of set.values()) {
    if (typeof startString === 'string' && typeof i === 'string' && startString && i.startsWith(startString)) {
      arr.push(i.substring(startString.length));
    }
  }
  return arr.join('-');
}
