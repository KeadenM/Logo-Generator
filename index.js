const inquirer = require('inquirer');
const textest = require('jest');
const fs = require('fs');
const {Shape, Triangle, Square, Circle} = require('./lib/shape.js');
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
            name: "fillColor",
            message: "What color would you like the shape to be?",
        },
    ])
    .then((data) => {
        const shape = data.shape;
        if (shape == "Triangle") {
          const triangle = new Triangle(
            data.fillColor,
            data.letters,
            data.textColor
          );
          console.log(triangle);
          fs.writeFile("examples/triangle.svg", triangle.render(), (err) => {
            err ? console.log(err) : console.log("success");
          });
        } else if (shape == "Square") {
          const square = new Square(data.fillColor, data.letters, data.textColor);
          console.log(square);
          fs.writeFile("examples/Square.svg", square.render(), (err) => {
            err ? console.log(err) : console.log("success");
          });
        } else if (shape == "Circle") {
          const circle = new Circle(data.fillColor, data.letters, data.textColor);
          console.log(circle);
          fs.writeFile("examples/Circle.svg", circle.render(), (err) => {
            err ? console.log(err) : console.log("success");
          });
        }
      });

// init();