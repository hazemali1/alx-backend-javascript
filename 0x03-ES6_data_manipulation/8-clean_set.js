export default function cleanSet(set, startString) {
  const arr = [];
	if (!startString) {
    return '';
  }
  for (const i of set.values()) {
    if (startString && i.startsWith(startString)) {
      arr.push(i.substring(startString.length));
    }
  }
  return arr.join('-');
}
