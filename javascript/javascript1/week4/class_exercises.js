//Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
function fib(id) {
  const valueOfSequence = sequence[id - 1];
  return valueOfSequence;
}
console.log(fib(5)); // 3
console.log(fib(10)); // 34

//Fizz buzz
const fizzBuzz = (number1, number2) => {
  for (let i = 1; i <= 100; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      console.log("FizzBuzz");
    } else if (i % number1 === 0) {
      console.log("Fizz");
    } else if (i % number2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(3, 5);

//Build a sentiment analyzer
const positive = ["happy", "awesome", "super", "great", "nice", "funny"];
const negative = ["sad", "bad", "hate", "tired", "boring", "depressing"];
function getSentimentScore(sentence) {
  let score = 0;
  let positiveinputs = [];
  let negativeinputs = [];
  const sentenceArray = sentence.split(" ");

  positiveinputs = positive.filter(function(val) {
    return sentenceArray.indexOf(val) != -1;
  });
  negativeinputs = negative.filter(function(val) {
    return sentenceArray.indexOf(val) != -1;
  });
  score = positiveinputs.length + negativeinputs.length;
  return {
    score: score,
    positiveinputs: positiveinputs,
    negativeinputs: negativeinputs
  };
}

const sentimentScoreObject = getSentimentScore("I am mega super awesome happy and little bit tired and sad");

console.log(sentimentScoreObject);

//Credit card number formatter
function formatCreditCardNumber(input) {
  if (typeof input === "number") {
    const string = input.toString();
    const inputcharacters = string.split("");
    for (let i = 4; i < inputcharacters.length; i += 5) {
      inputcharacters.splice(i, 0, " ");
    }

    return inputcharacters.join("");
    //console.log(inputcharacters);
  }
  return "Please enter a number";
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);

//Character frequencies
const characters = [];

function getCharacterFrequencies(input) {
  let inputArray = input.split("");
  inputArray = inputArray.sort();
  input = inputArray.join("");
  let added = false;
  for (let i = 0; i < input.length; i++) {
    added = false;
    for (j = 0; j < characters.length; j++) {
      if (characters[j].character === input[i]) {
        characters[j].count += 1;
        added = true;
      }
    }
    if (!added) {
      characters.push({ character: input[i], count: 1 });
      added = true;
    }
  }
  return characters;
}
console.log(getCharacterFrequencies("happy"));

//check palindromic substring
function isPalindrome(string) {
  const reverseStr = string
    .split("")
    .reverse()
    .join(""); 
  return reverseStr === string;
}

//longest palindromic substring
function longestPalindrome(string) {
  let maximumLength = 0;
  let maxSubString = "";
  const regex = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(regex, ""); 
  for (let i = 0; i < string.length; i++) {
    const substring = string.substr(i, string.length);// substr() returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.
    for (let j = substring.length; j >= 0; j--) {
      const substringReverse = substring.substr(0, j);
      if (substringReverse.length <= 1) continue;
      //console.log('checking: '+ substringReverse);
      if (isPalindrome(substringReverse)) {
       // console.log('palindrome: '+ substringReverse);
        if (substringReverse.length > maximumLength) {
          maximumLength = substringReverse.length;
          maxSubString = substringReverse;
        }
      }
    }
  }
  //console.log(maximumLength, maxSubString);
  return maxSubString;
}

console.log(longestPalindrome("abcxyzyxabcdaaa jjbjj az"));

//Credit card info
function getCardInfo(input) {
  const cards = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/
  };
  for (let card in cards) {
      if (cards[card].test(input)) {
          return card;
      }
  }
}
console.log(getCardInfo(4781321334789876)); // 'visa'

//Tic Tac Toe
//not working properly yet I will try to do it during the week

const position = [["x", "o", " "], [" ", "o", " "], [" ", "o", "x"]];
const firstLast = ["*", "*", "*","*", "*", "*",  "*"];

function getRenderedGame(position) {
  console.log(firstLast);
  for (let i = 0; i < position.length; i++) {
    function modifyGame(gameArray, val) {
      return gameArray.reduce(
        (first, next) => {
          first.push(next);
          first.push(val);
          return first;
        },
        [val]
      );
    }
    console.log(modifyGame(position[i], "*"));
  }
  console.log(firstLast);
}
console.log(getRenderedGame(position));

//.join(',') + '\n'

/*for (let i = 0; i < position.length; i++) {
  for (let j = 0; j < position[i].length; j++) {
    console.log(position[i][j]); 
  }*/

/*function getGameinfo(position) {

  return {
    winner,
    loser,
    hasEnded,
    nextPlayer,
  }

}

const gameInfo = getGameinfo(position);
console.log(gameInfo);*/
