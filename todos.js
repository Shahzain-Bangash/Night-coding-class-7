#! /usr/bin/env node
import inquirer from "inquirer";
let arrayAns = [];
let condition = true;
while (condition) {
    let todsAns = await inquirer.prompt([
        {
            name: "Q1",
            type: "input",
            message: "what do you like to add in todos? ",
        },
        {
            name: "Q2",
            type: "confirm",
            message: "Do you want to add more? ",
            default: false,
        },
    ]);
    condition = todsAns.Q2;
    arrayAns.push(todsAns.Q1);
    let n = 1;
    if (todsAns.Q1 != 0) {
        for (let i in arrayAns) {
            console.log(n, arrayAns[i]);
            n++;
        }
        ;
    }
    else {
        let empSentence = "Please add something in todos!";
        console.log(`"${empSentence}"`);
    }
}
