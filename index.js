// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require("./src/generateMarkdown");
// const generateReadmeMarkdown = require("./src/generateMarkdown.js");

// *** TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;  
        } else {
          console.log("Please enter the title of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Provide a short description explaining your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;  
        } else {
          console.log("Please enter a short description for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your gitHub username? (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;  
        } else {
          console.log("Please enter a gitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "link",
      message: "What is your gitHub repository link? (Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;  
        } else {
          console.log("Please enter a gitHub repository link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;  
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "What type of license should your project have? (check all that apply)",
      choices: [
        "MIT", // https://img.shields.io/badge/license-MIT-brightgreen
        "Apache", // https://img.shields.io/badge/license-Apache-blue
        "GPL", // https://img.shields.io/badge/license-GPL-blue
        "JavaScript", // https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg
        "macOS", // https://svgshare.com/i/ZjP.svg
        "git", // https://badgen.net/badge/icon/git?icon=git&label
      ],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repository?"
    },
    {
      type: "input",
      name: "contribute",
      message: "What does the user need to know about contributing to the repository?"
    }
  ];

inquirer.prompt(questions)
.then((answers) => {
  console.log("attempting to write file:");
  writeToFile("./Pro-README.md", answers);
}) 
.catch((error) => {
  if (error.isTypeError) {
    throw new Error("TypeError" + error.message);
  } else {
    throw new Error(error);
  }
});


// *** TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);

  fs.writeFile('./Pro-README.md', generateMarkdown(data), err => {
    if (err) {
      throw new Error(err);
    }
  });
}

// *** TODO: Create a function to initialize app
function init() {
  // inquire.prompt(questions)
  // .then((generateReadmeMarkdown) => {
  //   writeToFile("./Pro-README.md", JSON.stringify(generateReadmeMarkdown));
  // })
}


// *** Function call to initialize app
init();
