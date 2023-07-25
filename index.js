const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const {Shape, Triangle, Square, Circle} = require('.lib/shape');
inquirer
    .prompt([
        {
            type: 'input',
            name: "letters",
            message: "Which 3 letters would you like to use?"
        },
        {
            type: 'input',
            name: "textColor",
            message: "What color would you like the text to be?"
        },
        {
            type: "lists",
            name: "shape",
            message: "Which shape would you like to use?",
            choices: ["Triangle", "Square", "Circle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like the shape to be?",
        },
    ])