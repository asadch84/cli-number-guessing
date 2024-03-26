import inquirer from "inquirer";

//1- computer will generate a number
//2- userinput for guessing number
//3- compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()*6+1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type :"number",
        message: "please guess a number:",
       
    },
]);

if (answers.userGuessNumber===randomNumber){
console.log("Congratulation you guess a right Number");
}
else{
    console.log("Sorry, You Guess a Wrong Number")
};