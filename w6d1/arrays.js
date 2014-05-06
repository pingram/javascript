// dups
Array.prototype.myUnique = function () {
  var uniq = [];
  for (var i = 0; i < this.length; i++) {
    if (uniq.indexOf(this[i]) < 0) {
      uniq.push(this[i]);
    }
  }
  return uniq
}

// console.log([1,2,3,1,2,5,7].myUnique())

// twoSum
Array.prototype.twoSum = function () {
  var results = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        results.push([i, j]);
      }
    }
  }
  return results
}

// console.log([-1, 0, 2, -2, 1].twoSum());

//transpose
Array.prototype.myTranspose = function() {
  results = [];
  for (var i = 0; i < this.length; i++) {
    results.push([])
    for (var j = 0; j < this.length; j++) {
      results[i].push(this[j][i]);
    }
  }
  return results;
}

rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(rows.myTranspose());