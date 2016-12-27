'use strict';
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  var upper = firstString.toUpperCase();
  var lower = secondString.toLowerCase();
  return upper + lower;
}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  var initial = name[0].toUpperCase();
  return initial + '.';
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  var reversed = '';
  for (var i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }
  return reversed;
  //below is a one line solution
  //return string.split().reverse().join('');
};



//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'

// function capitalizeEach(string) {
//   var allWords = string.split(' ');
//   for(var i = 0; i < allWords.length; i++) {
//     var allLetters = allWords[i].split('');
//     allLetters[0] = allLetters[0].toUpperCase();
//     allWords[i] = allLetters.join('');
//   }
//   return allWords.join(' ');
// };

function capitalizeEach(string) {
  var allWords = string.split(' ');
  var newSentence = [];
  allWords.forEach(function(word){
    word = word.replace(word[0], word[0].toUpperCase());
    newSentence.push(word);
  });
  return newSentence.join(' ');
}

// return string.split(' ').map(function(word) {
  //word = word.replace(word[0], word[0].toUpperCase());
  //return word;
//}).join(' ');

//return string.split(' ').map(w => w.replace(w[0], w[0].toUpperCase())).join(' ');

exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
