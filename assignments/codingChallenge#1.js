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
*/


// SOLUTION

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;

markBMI = massOfMark / (heightOfMark **2)
johnBMI = massOfJohn / (heightOfJohn **2)
console.log(markBMI, johnBMI)

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

const massOfMark = 95;
const heightOfMark = 1.88;
const massOfJohn = 85;
const heightOfJohn = 1.76;

markBMI = massOfMark / (heightOfMark **2)
johnBMI = massOfJohn / (heightOfJohn **2)
console.log(markBMI, johnBMI)

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

