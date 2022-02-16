/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23)

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_maltilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "Yes!"
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = 'teacher';

lastName = "Schmedtmann";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "jonas";
const lastName = "Schmedtmann"
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // That is; x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//////////////////////////////////
// Coding Challenge #1

/*          
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 



// SOLUTION

let massOfMark = 78;
let heightOfMark = 1.69;
let massOfJohn = 92;
let heightOfJohn = 1.95;

markBMI = massOfMark / (heightOfMark **2)
johnBMI = massOfJohn / (heightOfJohn **2)
console.log(markBMI, johnBMI)

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

let mass2OfMark = 95;
let height2OfMark = 1.88;
let mass2OfJohn = 85;
let height2OfJohn = 1.76;

markBMI = mass2OfMark / (height2OfMark **2)
johnBMI = mass2OfJohn / (height2OfJohn **2)
console.log(markBMI, johnBMI)

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// using template literals (ES6)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("string with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("She can start driving license🚗")
 } else {
   const yearsLeft = 18 - age;
   console.log(`She is too young, wait for ${yearsLeft} years :) `);
 }


 const birthYear = 2012;

 let century;
 if (birthYear <= 2000) {
   century = 20;
 }  else{
   century = 21;
 }
 console.log(century);
 */

 ////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK �
*/

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;

markBMI = massOfMark / (heightOfMark **2)
johnBMI = massOfJohn / (heightOfJohn **2)
console.log(markBMI, johnBMI)

if (markBMI > johnBMI) {
  console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!"`);
} else {
  console.log(`"John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!"`)
}


const massOfMark1 = 95;
const heightOfMark1 = 1.88;
const massOfJohn1 = 85;
const heightOfJohn1 = 1.76;

markBMI1 = massOfMark1 / (heightOfMark1 **2)
johnBMI1 = massOfJohn1 / (heightOfJohn1 **2)
console.log(markBMI1, johnBMI1)

if (markBMI1 > johnBMI1) {
  console.log(`"Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!"`);
} else {
  console.log(`"John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!"`)
}
