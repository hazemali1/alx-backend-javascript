export default function getListStudentIds(arr) {
  if (typeof arr !== 'object') {
    return [];
  }
  const array = arr.map((ele) => ele.id);
  return array;
}
