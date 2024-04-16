#! /usr/bin/env node

import inquirer from "inquirer";
let todos = ["addTask"];

let condition = true;

//while(condition) --- to run the program 1 time
//while(todos) ---to run the program many times
while(todos)
    {
let addTask = await inquirer.prompt(
    [
       {
        name: "todo",
        type: "input",
        message: "what do you want to add in your todos?"
               },

       {
        name: "addMore",
        type: "confirm",
        message: "are you sure you want to add more ?",
        default: "false"
               },
    ]
);
todos.push(addTask.todo);
condition = addTask.adddMore;
console.log(todos);

}
// PRESS CTRL IN TERMINAL WHILE YOU WANT TO STOP...