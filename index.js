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
    .then((data) => {
        const shape =data.shape;
        if(shape =="Triangle") {
            const triangle = new Triangle(data.letters, data.textColor, data.shapeColor);
            console.log(triangle)
            fs.writeFile("examples/triangle.svg", triangle.render(), (err) => {
                err ? console.log(err) : console.log("Success!");
        });
    } else if (shape == "Square") {
        const square = new Square(data.letters, data.textColor, data.shapeColor);
        console.log(square)
        fs.writeFile("examples/square.svg", square.render(), (err) => {
            err ? console.log(err) : console.log("Success!");
        });
    });
     else if (shape == "Circle") {
        const circle = new Circle(data.letters, data.textColor, data.shapeColor);
        console.log(circle)
        fs.writeFile("examples/circle.svg", circle.render(), (err) => {
            err ? console.log(err) : console.log("Success!");
        });
    }
);
};

init();