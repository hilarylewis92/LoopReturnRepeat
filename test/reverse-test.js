var assert = require('chai').assert;
var { reverse, forEachReverse, mapReverse, reduceReverse,
      forReverse, forLoopReverse, whileReverse } = require('../lib/reverse.js');

describe('IronFE - Reverse', function() {

  it.skip('should use reverse', function() {
    assert.equal(reverse('hello'), 'olleh');
  });

  it.skip('should use forEach', function() {
    assert.equal(forEachReverse('hello'), 'olleh');
  });

  it.skip('should use map', function() {
    assert.equal(mapReverse('hello'), 'olleh');
  });

  it.skip('should use reduce', function() {
    assert.equal(reduceReverse('hello'), 'olleh');
  });

  it.skip('should use for loop', function() {
    assert.equal(forReverse('hello'), 'olleh');
  });

  it.skip('should use a for loop without arrays', function() {
    assert.equal(forLoopReverse('hello'), 'olleh');
  });

  it.skip('should use while loop', function() {
    assert.equal(whileReverse('hello'), 'olleh');
  });

});
