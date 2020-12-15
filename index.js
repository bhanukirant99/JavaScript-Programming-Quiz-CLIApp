const readlineSync = require('readline-sync');
const chalk = require('chalk');

const highScore = 10;
var score = 0, playAgain = 'y';
const userName = readlineSync.question(chalk.bgBlue('May I have your name? \n'));
console.log(chalk.bgCyan('\n\nHi ' + chalk.bold.bgWhite.black(userName) + ' Welcome to DO YOU KNOW JS?\n\n'));
console.log(chalk.bgYellow(chalk.bold("Caution: ") + "If your answer is correct you gain a point else if your answer is wrong then you loose a point!!!"))
console.log()
console.log(chalk.red(chalk.bold("Note: " ) + "Press ctrl+c to end the game\n"))

function play(question, answer) {
    var userAnswer = readlineSync.question(chalk.bgRed(question));
    if (score === highScore) {
      console.log("Congratulations!!! You have scored the highest, please take a screenshot of your score. ")
    } else if (userAnswer === answer) {
      console.log(chalk.green("Correct answer!"));
      console.log(score+=1);
    } else {
        console.log(chalk.red("Oops! Wrong answer"));
        if (score > 0) {
          console.log(chalk.dim(score-=1));
        } else if (score === 0) {
          console.log(score)
        }
    }
  
    console.log("--------------------------\n");
  }

  const questions = [{
    question: "What do we use to print a value to the console? ",
    answer: "console.log()"
  }, {
    question: "Which built-in method combines the text of two strings and returns a new string? ",
    answer: "concat()"
  }, {
    question: "Which function of Number object returns the number's value? ",
    answer: "valueOf()"
  }, {
    question: "Which function of String object splits a String object into an array of strings by separating the string into substrings? ",
    answer: "split()"
  }, {
    question: "Which function of String object returns the calling string value converted to upper case? ",
    answer: "toUpperCase()"
  }, {
    question: "Which function of Array object removes the last element from an array and returns that element? ",
    answer: "pop()"
  }, {
    question: "Which function of Array object adds one or more elements to the front of an array and returns the new length of the array? ",
    answer: "unshift()"
  }]