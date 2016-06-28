'use strict';

/* global require */

const lessThanFive = function (number) {
  return number < 5;
};

const testLessThanFive = (check) => {
  check.equal(lessThanFive(0), true, 'Zero is always less than five');
  check.equal(lessThanFive(4), true, 'Four is always less than five');
  check.equal(lessThanFive(6), false, 'Six is never less than five');
  check.equal(lessThanFive(5), false, 'Five is never less than itself');
};

test('lessThanFive', testLessThanFive);
// test('isEven');
// test('isOdd');
// test('digitize');
// test('sumOfDigits');
// test('evenDigitsAsArray');
