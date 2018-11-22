Array.prototype.myEach = function (callback) {
  // debugger
  for (let i = 0; i < this.length; i++) {
    // debugger
    callback(this[i]);
  }
};

// let func = function (el) {
//   return (el * 2);
// };

let arr2 = [1,2,3];

// arr2.myEach(func);

Array.prototype.myMap = function (callback) {
  let result = [];
  // this.myEach(() => 
  // debugger
  this.myEach((el) => result.push(callback(el)));
  // })
  return result;
};



// console.log(arr2.myMap(func));

Array.prototype.myReduce = function (callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = this[0];    
  }
  this.myEach((el) => initialValue = callback(initialValue, el));
  return initialValue;
};

let func = function (el1, el2) {
  return el1 * el2;
};

// console.log(arr2.myReduce(func));
// console.log(arr2.myReduce(func, 20));