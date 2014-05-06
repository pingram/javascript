// bubbleSort
Array.prototype.bubbleSort = function () {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        var temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([1,2,3,-4, -8,8,1.5,2].bubbleSort())

// subStrings
String.prototype.substrings = function () {
  var substrs = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = this.length; j > i; j--) {
      substrs.push(this.slice(i, j))
    }
  }
  return substrs;
};

console.log('cat'.substrings());