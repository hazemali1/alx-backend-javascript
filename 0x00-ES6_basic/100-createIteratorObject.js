export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const array = [];
  for (const i of arr) {
    for (const j of i) {
      array.push(j);
    }
  }
  return array;
}
