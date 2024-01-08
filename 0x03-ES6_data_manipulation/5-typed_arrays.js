export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const eight = new Int8Array(buffer);
  if (position >= 0 && position < eight.length) {
    eight[position] = value;
    return new DataView(buffer, eight);
  }
  throw new Error('Position outside range');
}
