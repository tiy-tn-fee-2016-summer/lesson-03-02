'use strict';

/* global require */
const lessThanFive = require('less-than-five');
const isEven = require('is-even');

// Arrow Function
const testLessThanFive = (check) => {
  check.equal(lessThanFive(0), true, 'Zero is always less than five');
  check.equal(lessThanFive(4), true, 'Four is always less than five');
  check.equal(lessThanFive(6), false, 'Six is never less than five');
  check.equal(lessThanFive(5), false, 'Five is never less than itself');
};

const testIsEven = (check) => {
  check.equal(isEven(1), false);
  check.equal(isEven(612), true);
  check.equal(isEven(0), true);
};

test('lessThanFive', testLessThanFive);
test('isEven', testIsEven);
// test('isOdd');
// test('digitize');
// test('sumOfDigits');
// test('evenDigitsAsArray');
