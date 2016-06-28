'use strict';

/* global require */

const lessThanFive = function (number) {
  if (number < 5) {
    return true;
  }

  return false;
};

const testLessThanFive = (check) => {
  check.equal(lessThanFive(0), true, 'Zero is always less than five');
  check.equal(lessThanFive(1), true, 'One is always less than five');
  check.equal(lessThanFive(7), false, 'Seven is never less than five');
  check.equal(lessThanFive(2), true, 'Two is always less than five');
  check.equal(lessThanFive(5), false, 'Five is never less than itself');
};

test('lessThanFive', testLessThanFive);
// test('isEven');
// test('isOdd');
// test('digitize');
// test('sumOfDigits');
// test('evenDigitsAsArray');
