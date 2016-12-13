//Using only for loops solve each problem.
//Check out the docs here --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function ForEach(array) {
  this.array = array;
}

ForEach.prototype.add = function(num) {
  var newArray = [];
  this.array.forEach(function(item) {
    newArray.push(item += num);
  });
  this.array = newArray;
};

ForEach.prototype.subtract = function(num) {
  var newArray = [];
  this.array.forEach(function(item) {
    newArray.push(item -= num);
  });
  this.array = newArray;
};

ForEach.prototype.multipledNumbers = function(num) {
  this.array.forEach(function(item, i) {
    this.array[i] = item * num
  }, this)
  return this.array;
};

ForEach.prototype.modulo = function(num) {
  var count = 0;
  for(var i = 0; i < this.array.length; i++) {
    this.array[i] % num === 0 ? count++ : null;
  }
   return this.array.length === count;
};

ForEach.prototype.arrayCheck = function(array) {
  for(var i = 0; i < this.array.length; i++) {
    if (this.array[i] !== array[i]) { return false; }
  }
  return true;
};



module.exports = ForEach;
