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

// let arr4 = [1,2,3];

// console.log(sumRec(arr4));

function exp1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exp1(base, exp - 1);
}

// console.log(exp1(4,2));

function exp2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  
  if (exp % 2 === 0) {
    return exp2(base, exp/2) * exp2(base, exp/2);
  } else {
    return base * (exp2(base, (exp - 1)/2));
  }
}

console.log(exp2(4,2));
console.log(exp2(5,2));