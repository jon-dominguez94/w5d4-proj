function range (start, end) {
  if (start === end) {
    return [start];
  }
  
  return [start].concat(range(start + 1, end));
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  return arr[0] + sumRec(arr.slice(1,arr.length+3));
}

let arr4 = [1,2,3];

console.log(sumRec(arr4));