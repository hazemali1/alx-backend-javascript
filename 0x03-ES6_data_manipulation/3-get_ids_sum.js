export default function getStudentIdsSum(arr) {
  const ids = arr.map((ele) => ele.id);
  return (ids.reduce((acc, student) => acc + student));
}
