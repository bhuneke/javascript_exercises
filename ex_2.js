'use strict';
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  var sum = 0;
  array.forEach(function(number){
    sum += number;
  });
  return sum;
};

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {
  if (array.indexOf(match) > -1) {
    return true;
  } else {
    return false;
  }
};
//return array.includes(match);
//return array.indexOf(match) !== -1;

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6
function highestNumber(array) {
  var newArray = array.sort();
  var index = array.length - 1;
  return newArray[index];
};

//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  var pluralArray = [];
  array.forEach(function(animal){
    pluralArray.push(animal + 's');
  });
  return pluralArray;
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
