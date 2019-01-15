var sentence = prompt("Enter a sentence, user...");
// console.log(sentence);


function capitalizer(){
  var capitalizedLetters = sentence[0].toUpperCase() + sentence[sentence.length-1].toUpperCase();
  return capitalizedLetters;
}

// var firstAndLastCapitalized = capitalizer();

function reverseCapitalizer(letters) {
  return letters[1]+letters[0]
}

// alert("it Worked "+ reverseCapitalizer(capitalizer()))

function allInOne(){
var newSentence= sentence + reverseCapitalizer(capitalizer());
return newSentence;
}

// console.log(allInOne());

function sentenceWithNewFirstLetter() {
  var middle = Math.floor((sentence.length)/2);
  var middleLetter = sentence[middle];
  return middleLetter + allInOne();
}

// console.log(sentenceWithNewFirstLetter());

function reversedCode(){
  var reversedSentence=sentenceWithNewFirstLetter();
  var sentenceArray=reversedSentence.split("");
  var reversedArray=sentenceArray.reverse();
  var joinedArray=reversedArray.join("");
  return joinedArray;
}

$(document).ready(function() {
  $("#goodDog").click(function() {
    alert(sentence);
  });
  $("#badDog").click(function() {
    alert(reversedCode());
  })
});
