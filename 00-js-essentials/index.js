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

// const myExampleArr = [100, 200, 301, 440];
// console.log(typeof myExampleArr);
// console.dir(myExampleArr);
// console.dir(new String("LOGESH"));
// console.dir(new Number(100));

// ARRAY Functions
// const arr = [100, 201, 301, 560];

// console.log(arr.at(2));
// console.log(arr.concat(45));
// console.log(arr.push(45));
// console.log(arr.pop());
// console.log(arr.unshift(1000));
// console.log(arr.shift());
// console.log(arr);

// const res = arr.find((val, index, obj) => val == 201);
// console.log(res);

// const resIndex = arr.findIndex((val, index, obj) => val == 201);
// console.log(resIndex);

// const resFilter = arr.filter((val) => val >= 300);
// console.log(resFilter);

// const resSlice = arr.slice(-2, -1);
// console.log(resSlice);
// console.log(arr);

// const resSplice = arr.splice(-2, 1);
// console.log(resSplice);
// console.log(arr);

// console.log(
//   [
//     [100, [200, 400]],
//     [123, 456],
//   ].flat(2),
// );

// const arr2 = [1900, 1800];

// const resJoin = arr.join("-- JOIN --");
// console.log(resJoin);
// console.log(arr);

// console.log("Hello I am Logesh".split("").filter((val) => val !== " "));

// console.log(arr.some((val) => val == 1000));

// console.log(
//   ["LOGESH", "HILARY", "ABDUL"].forEach((val, ind, arr) => {
//     console.log("User name is " + val);
//     return "USER NAME IS " + val;
//   }),
// );

// console.log(
//   ["LOGESH", "HILARY", "ABDUL"].map((val, ind, arr) => {
//     console.log("User name is " + val);
//     return "USER NAME IS " + val;
//   }),
// );

// TO REDO:
// const sortArr = [1, -1, 100, 10]; // 0 -99 110 11
// console.log(sortArr);
// console.log(
//   sortArr.toSorted((a, b) => {
//     return a + b;
//   }),
// );
// -1 Asce 0 Remain same 1 Do Descen

// console.log(Math.trunc(Math.random() * 10) + 1);

// TODO --
// HANGMAN
// 1. Pick a Random Value
// 2. Show - instead of each characters
// 3. Ask the user to choose any letter
// 4. Once he chooses check for the letter in the word
// 5. If it is there and you have remaining lives replace that letter or Lose 1 lives till the game gets over.

// const qWords = [
//   "ANIMAL",
//   "HELICOPTER",
//   "AEROPLANE",
//   "KEYBOARD",
//   "MOUSE",
//   "MONITOR",
//   "GIRAFEE",
// ];

// let lives = 6;
// const randomIndex = Math.trunc(Math.random() * 10);

// const selectedWord = qWords[randomIndex];

// const maskedQword = selectedWord.split("");

// // ELIMINATING ALL THE CHARACTERS
// for (let i = 0; i < selectedWord.length; i++) {
//   const index = Math.trunc(Math.random() * qWords.length) - 1;
//   maskedQword[index] = "_";
// }

// console.log(maskedQword.join(" "));

// while (maskedQword.includes("_") && lives) {
//   const input = prompt("Character Input: ");
//   if (selectedWord.split("").includes(input)) {
//     //  REPLACE _ with the respected input
//     for (const [ind, val] of Object.entries(selectedWord.split(""))) {
//       if (val == input) {
//         maskedQword[ind] = val;
//         console.log(maskedQword.join(" "));
//       }
//     }
//   } else {
//     lives--;
//     if (lives) {
//       alert("You have lost 1 life");
//     } else {
//       alert("GAME OVER!");
//     }
//   }
// }

const arr = ["LOGESH", "VIGNESH", "HILARY", "ABDUL"];
// const inp = prompt("Which index do you want to print?");
// if (inp < arr.length && typeof input != NaN) {
//   console.log(arr[inp]);
// } else console.log("Not a Valid Input")

// console.log(
//   inp < arr.length && typeof inp != NaN ? arr[inp] : "Not a Valid Input",
// );

// const ind = prompt("VALUE OF INDEX");
// ind < arr.length
//   ? console.log(arr[ind])
//   : console.log("It is higher than the length of the array");
// var ind = prompt("Enter the INDEX VALUE: ");
// console.log(arr[ind < arr.length ? ind : 0]);

// FUNCTIONS
// 4 types: Regular fn, Expression fn, Arrow fn, IIFE (immediately invoked function)

// Pascal Casing - PascalCasing
// Camel Casing -  camelCasing
// Snake Casing - snake_case

// const firstInstance = getPersonNickName("Logesh");
// getPersonNickName("Vignesh");

// function getPersonNickName(personName) {
//   const nickNames = ["Vanguard", "JoJo Rabbit", "Mazer"];
//   return nickNames[Math.trunc(Math.random() * nickNames.length)] + personName;
// }

// AGE CALCULATOR
// Get the users birth year
// function calcAge(userBirthYear = prompt("User birth year is")) {
//   return 2026 - userBirthYear;
// }

// EXPRESSION FUNCTION
// const calcAge = function (userBirthYear = prompt("User birth year is")) {
//   return 2026 - userBirthYear;
// };

// ARROW FUNCTION
// const calcAge = (userBirthYear = prompt("User birth year is")) =>
//   2026 - userBirthYear;

// console.log("AGE OF THE PERSON IS " + calcAge());
