//Using only for loops solve each problem.
//Check out the docs here --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
function ForLoops(array) {
  this.array = array;
}

ForLoops.prototype.add = function(num) {
  for(var i = 0; i < this.array.length; i++) {
    this.array[i] += num;
  }
};

ForLoops.prototype.subtract = function(num) {
  for(var i = 0; i < this.array.length; i++) {
    this.array[i] -= num;
  }
};

ForLoops.prototype.multipledNumbers = function(num) {
  var newArray = []
  for(var i = 0; i < this.array.length; i++) {
    newArray.push(this.array[i] * 2);
  }
  return newArray;
};

ForLoops.prototype.modulo = function(num) {
  var count = 0;
  for(var i = 0; i < this.array.length; i++) {
    this.array[i] % num === 0 ? count++ : null;
  }
   return this.array.length === count;
};

ForLoops.prototype.arrayCheck = function(array) {
  for(var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== array[i]) { return false; }
  }
  return true;
};



module.exports = ForLoops;
