// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require('node:fs/promises');
const generateMarkdown = require("./src/generateMarkdown");

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
        "MIT",
        "Apache",
        "GPL",
        "BSD",
        "none"
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
  inquirer.prompt(questions)
  .then((answers) => {
  writeToFile("./Pro-README.md", answers);
  }) 
  .catch((error) => {
  if (error.isTypeError) {
    throw new Error("TypeError" + error.message);
  } else {
    throw new Error(error);
  }
  });
}

// *** Function call to initialize app
init();
