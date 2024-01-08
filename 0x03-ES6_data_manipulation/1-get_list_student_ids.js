export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const array = arr.map((ele) => ele.id);
  return array;
}
