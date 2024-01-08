export default function cleanSet(set, str) {
  const arr = [];
  for (const i of set.values()) {
    if (i.substr(0, str.length) && i.substr(0, str.length) === str) {
      arr.push(i.substr(str.length));
    }
  }
  return arr.join('-');
}
