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

let arr = [1,1,2,2,3,4,4,5,6,7,8];

console.log(arr.uniq());