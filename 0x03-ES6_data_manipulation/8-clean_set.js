export default function cleanSet(set, startString) {
  const arr = [];
	if (typeof startString !== 'string') {
    return '';
  }
  for (const i of set.values()) {
    if (typeof i === 'string' && startString && i.startsWith(startString)) {
      arr.push(i.substring(startString.length));
    }
  }
  return arr.join('-');
}
