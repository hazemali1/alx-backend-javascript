export default function getStudentsByLocation(arr, city) {
  const array = arr.filter((ele) => ele.location === city);
  return array;
}
