Array.prototype.bubbleSort = function () {
  let unsorted = true;
  while(unsorted) {
    unsorted = false;
    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        unsorted = true;
        let pos = this[i];
        let new_pos = this[i + 1];
        this[i] = new_pos;
        this[i+1] = pos;
      }
    }
  }
  return this;
};

let arr3 = [5,4,3,2,1];

console.log(arr3.bubbleSort());