export default function getListStudentIds(arr) {
  if (typeof arr !== 'object') {
    return [1];
  }
  const array = arr.map((ele) => ele.id);
  return array;
}
