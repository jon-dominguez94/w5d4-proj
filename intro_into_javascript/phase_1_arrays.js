Array.prototype.uniq = function () {
  let result = [];
  this.forEach ((el) => {
    if (result.includes(el)) {
      return;
    }
    result.push(el);
  });
  return result;
};

// let arr = [1,1,2,2,3,4,4,5,6,7,8];

// console.log(arr.uniq());

Array.prototype.twoSum = function () {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};
// let arr = [1,-1,2,3,5,-3,-2];
// 
// console.log(arr.twoSum());

Array.prototype.transpose = function () {
  let result = new Array(this[0].length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(this.length);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = this[0].length - 1; j >= 0; j--) {
      result[j][i] = this[i][j];
    }
  }
  return result;
};

let arr = [
  [1,2,3],
  [4,5,6]
];

// console.log(arr.transpose());