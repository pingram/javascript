// multiples

Array.prototype.multiples = function () {
  var result = [];

  this.forEach(
    function (el) {
      result.push(el*2);
    }
  );

  return result;
};

// console.log([1,2,3].multiples())

//myEach

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++){
    func(this[i]);
  }
}

function boo (a) {
  return a*2;
}

[1,2,3].myEach(boo);

//myMap

Array.prototype.myMap = function(func){
  var mapped = [];

  this.myEach(function (a) {
    mapped.push(func(a));
  });

  return mapped;
}



// console.log([1,2,3].myMap(boo))


//myInject

Array.prototype.myInject = function (func) {
  var result = this[0];
  var newArray = this.slice(1);

  newArray.myEach(function (a) {
    result = func(result, a);
  });

  return result
}

function boo(result, a){
  return (result + a) ;
}
//
// console.log(["add", "2", "raw"].myInject(boo))

