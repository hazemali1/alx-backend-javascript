const myweaky = new WeakMap();
let point = 1;

function queryAPI(endpoint) {
  if (point >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    myweaky.set(endpoint, point);
    point += 1;
  }
}

module.exports = { queryAPI, weakMap: myweaky };
