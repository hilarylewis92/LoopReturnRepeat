var assert = require('chai').assert;
var ForLoops = require('../lib/forLoops.js');

describe('ForLoops', function() {

  it('should permanently add to each array', function() {
    var forLoops = new ForLoops([1,2,3,4]);
    forLoops.add(1);
    assert.deepEqual(forLoops.array, [2,3,4,5]);
    forLoops.add(3);
    assert.deepEqual(forLoops.array, [5,6,7,8]);
  });

  it('should permanently subtract to each array', function() {
    var forLoops = new ForLoops([1,2,3,4]);
    forLoops.subtract(1);
    assert.deepEqual(forLoops.array, [0,1,2,3]);
  });

  it('should return an array of multipled numbers. Should not be destructive.', function() {
    var forLoops = new ForLoops([1,2,3,4]);
    assert.deepEqual(forLoops.multipledNumbers(), [2,4,6,8]);
    assert.deepEqual(forLoops.array, [1,2,3,4]);
  });

  it('shoul determine if each number can modulo to equal zero. ', function() {
    var forLoops = new ForLoops([4,8,12,64]);
    assert.equal(forLoops.modulo(4), true);
    assert.equal(forLoops.modulo(3), false);
  });

  it('should determine whether or not 2 arrays are the same.', function() {
    var forLoops = new ForLoops([1,2,3,4]);
    assert.equal(forLoops.arrayCheck([1,2,3,4]), true);
    assert.equal(forLoops.arrayCheck([3,2,4,4]), false);
  });

});
