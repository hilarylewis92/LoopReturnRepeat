var assert = require('chai').assert;
var ForEach = require('../lib/forEach.js');

describe('ForEach', function() {

  it('should permanently add to each array', function() {
    var forEach = new ForEach([1,2,3,4]);
    forEach.add(1);
    assert.deepEqual(forEach.array, [2,3,4,5]);
    forEach.add(3);
    assert.deepEqual(forEach.array, [5,6,7,8]);
  });

  it('should permanently subtract to each array', function() {
    var forEach = new ForEach([1,2,3,4]);
    forEach.subtract(1);
    assert.deepEqual(forEach.array, [0,1,2,3]);
  });

  it('should return an array of multipled numbers. Should not be destructive.', function() {
    var forEach = new ForEach([1,2,3,4]);
    assert.deepEqual(forEach.multipledNumbers(2), [2,4,6,8]);
  });

  it('should determine if each number can modulo to equal zero.', function() {
    var forEach = new ForEach([4,8,12,64]);
    assert.equal(forEach.modulo(4), true);
    assert.equal(forEach.modulo(3), false);
  });

  it('should determine whether or not 2 arrays are the same.', function() {
    var forEach = new ForEach([1,2,3,4]);
    assert.equal(forEach.arrayCheck([1,2,3,4]), true);
    assert.equal(forEach.arrayCheck([3,2,4,4]), false);
  });

});
