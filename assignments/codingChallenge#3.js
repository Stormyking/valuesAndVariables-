///////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy.

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

dolphinsScores = (96, 108, 89)
koalasScores = (88, 91, 110)

dolphinsSum = (96 + 108 + 89)
koalasSum = (88 + 91 + 110)

const dolphinsAverage = dolphinsSum / 3
const koalasAverage = koalasSum / 3
console.log(dolphinsAverage)


if (dolphinsAverage === koalasAverage) {
  console.log("'DRAW'")
} else if (dolphinsAverage > koalasAverage) {
  console.log("DOLPHINS WINS")
} else {
  console.log(`KOALAS WINS`)
}


//  solution to Bonus 1

dolphinsSum1 = (97 + 112 + 101)
koalasSum1 = (109 + 95 + 123)

const dolphinsAverage1 = dolphinsSum1 / 3
const koalasAverage1 = koalasSum1 / 3
console.log(dolphinsAverage1)


if (dolphinsAverage1 === koalasAverage1) {
  console.log("'DRAW'")
} else if ( koalasAverage1 > dolphinsAverage1 && koalasAverage1 > 100) {
  console.log(`KOALAS WINS`)
} else if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 > 100) {
  console.log("DOLPHINS WINS")
}

//  solution to Bonus 2

dolphinsSum2 = (97 + 112 + 101)
koalasSum2 = (109 + 95 + 106)

const dolphinsAverage2 = dolphinsSum2 / 3
const koalasAverage2 = koalasSum2 / 3
console.log(dolphinsAverage2)


if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100 && koalasAverage2 >= 100) {
  console.log("'DRAW'")
} else if ( koalasAverage1 > dolphinsAverage1 && koalasAverage1 > 100) {
  console.log(`KOALAS WINS`)
} else if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 > 100) {
  console.log("DOLPHINS WINS")
}

