"use strict";

/*
console.log("Hello, World!");
console.log("Welcome to JS Essentials");
console.log("JS is Fun!...");

// Data Types
// number string boolean undefined null symbols bigint NaN
// object arrays map set

console.log(1000);
console.log(1000 + 200);
console.log((1000 + 300) * 2);

console.log("LOGESH " + 1000);

// Type COERCION - Implicit DATA TYPE DECLARATION CHANGE
console.log("100" + 100);
console.log("1000" - 100);
console.log("LOGESH" - 100);
console.log("100" + 3 * "2");

console.log(String(100 < 200));

console.log(Boolean(1230));
console.log(Boolean(-123));
console.log(Boolean(0));
console.log(Boolean("LOGESH"));
console.log(Boolean("202"));
console.log(Boolean(""));

console.log(1000 > 2000 < 1);
console.log(true >= 1);

console.log("Welcome to another session about JS");

console.log("--- VARIABLES IN JS");

var myName = "Logesh";
myName = "LOGESHWARAN";

console.log("Here I'm " + myName);

// scope: accessibility of varibles saying where it can be used or not
// BLOCK SCOPE GLOBAL SCOPE FUNCTIONAL SCOPE

let myCity = "Pondicherry";
myCity = "Pondy";

console.log(myCity);

const myCollegeName = "CIT";
console.log(myCollegeName);

if (true) {
    let myName = "LOGESH";
}
console.log(myName);


myName = "LOGESH";

console.log(myName);
*/

// CONDITONAL STATEMENTS
// if (1000 > 10000) {
//   console.log("If Block");
// } else if (1000 > 10) {
//   console.log("Else If Block");
// }

// FIZZ BUZZ
// 3 - FIZZ
// 5 - BUZZ
// 3 and 5 FIZZ BUZZ

// let num = prompt("Enter any number") * 1;

// if (num) {
//   if (num % 3 == 0 || num % 5 == 0) {
//     if (num % 3 == 0 && num % 5 == 0) {
//       console.log("FIZZ BUZZ");
//     } else if (num % 5 == 0) {
//       console.log("BUZZ");
//     } else if (num % 3 == 0) {
//       console.log("FIZZ");
//     }
//   } else {
//     console.log(num + " is not divisible by either 3 or 5.");
//   }
// } else {
//   console.log("It is not a Valid Input!");
// }

// let range = 30;
// while (range) {
//   let num = range;
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FIZZ BUZZ");
//   } else if (num % 5 == 0) {
//     console.log("BUZZ");
//   } else if (num % 3 == 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(num);
//   }
//   range--;
// }

// console.log("----------- FOR OF LOOP ------------");
// for (const letter of myText) {
//   console.log(letter);
// }

// console.log("----------- FOR IN LOOP ------------");
// for (let key in myText) {
//   console.log(key);
// }

// let myText = "ABCDEFGHI";
// console.log(myText.at(1));

// let myNum = new Number(199);
// console.dir(myNum);

// for (const element of Object.keys([100, 120, 140, 200])) {
//   console.log(element);
// }

// const myObj = {
//   lastName: "TB",
//   id: "001",
//   firstName: "Logesh",
// };

// const myArr = ["001", "Logesh", "TB"];

// for (const val of myArr) {
//   console.log(val);
// }

// for (const val in myObj) {
//   console.log(myObj[val]);
// }

// for (const element of "HELLO WORLD") {
//   console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ ".indexOf(element));
// }

// TODO --

// 1. Pick a Random Value
// 2. Show - instead of each characters
// 3. Ask the user to choose any letter
// 4. Once he chooses check for the letter in the word
// 5. If it is there and you have remaining lives replace that letter or Lose 1 lives till the game gets over.

const qWord = "APPLE";
let qWordHash = "";
for (const key in qWord) {
  qWordHash += "-";
}
console.log(qWordHash);
let choice = prompt("Enter the Choice").toUpperCase();
console.log(`You've have chosen ${choice}`);

for (const [index, expectedLetter] of Object.entries(qWord)) {
  if (expectedLetter == choice) {
    console.log("You are right!");
    const qWordSplitted = qWordHash.split();
    qWordSplitted[index] = choice;
    console.log(qWordSplitted);
    qWordHash = qWordSplitted.join();
  }
}
