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
