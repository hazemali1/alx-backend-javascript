export default function concatArrays(array1, array2, string) {
  return Array.from(array1).concat(array2).concat(Array.from(string));
}
