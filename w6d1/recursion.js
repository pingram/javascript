var range = function(start, finish){
  if (start === finish){
    return [start];
  } else {
    result = range(start, finish - 1);
    result.push(finish);
    return result;
  }
};

// console.log(range(2, 7))


Array.prototype.sumArray = function(){
  if(this.length === 1){
    return this[0];
  } else{
    return this[0] + this.splice(1).sumArray();
  }
};

console.log([1,2,3].sumArray())

var expon1 = function(b, n){
  if(n === 0){
    return 1;
  } else {
    return b * expon1(b, (n-1));
  }
};

var expon2 = function(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else if (n % 2 === 0) {
    return Math.pow(expon2(b, n / 2), 2);
  } else {
    return b * expon2(b, Math.pow((n - 1) / 2, 2));
  }
}

// console.log(expon2(2,4))

Number.prototype.fibs = function() {
  if (this < 3) {
    return [0, 1];
  } else {
    var fibs1 = (this - 1).fibs();
    var new_val = fibs1[fibs1.length - 1] + fibs1[fibs1.length - 2];

    fibs1.push(new_val);
    return fibs1;
  }
};

console.log((5).fibs());

Array.prototype.bSearch = function(target){
  if(this.length < 2  && target !== this[0]){
    return -1;
  }

  var middle = Math.floor((this.length) / 2);

  if(this[middle] === target){
    return middle;
  } else if( target < this[middle]){
    var newArr = this.splice(0, middle);
    return newArr.bSearch(target);
  } else {
    var newArr = this.splice((middle+1));
    var bReturn = newArr.bSearch(target);
    if(bReturn === -1){
      return -1;
    } else{
      return middle + bReturn + 1;
    }
  }

}

console.log([1,2,5,6,7].bSearch(8));

// var makeAmChange = function(remainingChange, coins) {
//   var change = [];
//
//   if (coins.length === 1) {
//     var numCoins = Math.floor(remainingChange / coins[0]);
//     for (var i = 0; i < numCoins; i++) {
//       change.push(coins[0]);
//     }
//     return change;
  // } else {
  //   var numCoins = Math.floor(remainingChange / coins[0]);
  //   for (var i = 0; i < numCoins; i++) {
  //     change.push(coins[0]);
  //   }
  //   remainingChange = remainingChange % coins[0];
  //   return change.concat(makeAmChange(remainingChange, coins.splice(1)));
  // }
// }


//
//
// var makeChange = function(remainingChange, coins) {
//   var change = [];
//
//   if (coins.length === 1) {
//     var numCoins = Math.floor(remainingChange / coins[0]);
//     for (var i = 0; i < numCoins; i++) {
//       change.push(coins[0]);
//     }
//     return change;
//   } else {
//     //
//     // var prevBest = makeChange(remainingChange, coins.splice(1));
//     //
//     // var numCoins = Math.floor(remainingChange / coins[0]);
//     //
//     var bestChange = [1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//
//     for (var j = 0; j < numCoins; j++){
//       var change = []
//       for (var i = 0; i < numCoins; i++) {
//         change.push(coins[j]);
//       }
//       if(change.length  < bestChange.length){
//         bestChange = change;
//       }
//     }
//     return bestChange
//     //
//     //
//     // var newRemainingChange = remainingChange % coins[0];
//     // var currChange = change.concat(makeChange(newRemainingChange, coins.splice(1)));
//
//
//
//
//     // var currChange = []
//     // var numCoins = Math.floor(remainingChange / coins[0]);
//     // for (var i = 0; i < numCoins; i++) {
//     //   currChange.push(coins[0]);
//     // }
//     //
//     // currChange = makeChange((remainingChange % coins[0]), coins.splice(1));
//     //
//     // var newChange = makeChange(remainingChange, coins.splice(1))
//
//
//   }
// }
//
//
//
// // console.log(makeChange(14, [10, 7, 1]));
//
var merge = function(arr1, arr2){
  var sorted = [];
   if (arr1.length === 0 || arr2.length === 0 ){
     return arr1.concat(arr2);
   }

  while (arr1.length > 0 && arr2.length > 0 ) {
    if ( arr1[0] < arr2[0] ) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return sorted.concat(arr1).concat(arr2);
};

// console.log(merge([3,8],[1,6]))



Array.prototype.mergeSort = function (){
  if(this.length < 2){
    return this;
  } else{
    var middle = Math.floor(this.length / 2);
    var arr1 = this.splice(middle);
    var arr2 = this.splice(0, middle);

    return merge(arr1.mergeSort(), arr2.mergeSort());
  }

};


console.log([1,6,4,7,9,0,3,8].mergeSort())
//
//
Array.prototype.subsets = function() {
  if (this.length < 1) {
    return [[]];
  }
  var prev_subs = this.splice(0, this.length - 1).subsets();
  var result = [];
  for (var i = 0; i < prev_subs.length; i++) {
    new_val = prev_subs[i].concat(this[this.length - 1]);
    result.push(new_val);
  }

  var returned = prev_subs.concat(result);

  return returned;

}

console.log([1, 2, 3].subsets())
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
