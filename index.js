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