import inquirer from "inquirer";
let todos = ["addTask"];
let condition = 0;
while (todos) {
    let addTask = await inquirer.prompt([
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
    ]);
    todos.push(addTask.todo);
    condition = addTask.adddMore;
    console.log(todos);
}
