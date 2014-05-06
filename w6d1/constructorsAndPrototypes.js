function Cat(cat_name, owner) {
  this.name = cat_name,
  this.owner = owner
}

Cat.prototype.cuteStatement = function() {
  return (this.owner + " loves " + this.name + ".");
}

cat1 = new Cat('breakfast', 'ned');
cat2 = new Cat('garfield', 'jon');
cat3 = new Cat('mousetrapper', 'ned');

console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return ("Everyone loves " + this.name + ".");
};


cat4 = new Cat('breakfast', 'ned');

console.log(cat1.cuteStatement());


Cat.prototype.meow = function () {
  return ("meow " + this.name);
}

console.log(cat1.meow());

cat1.meow = function () {
  return ("MEOOOOOOWWW");
}

console.log(cat1.meow());
console.log(cat4.meow());