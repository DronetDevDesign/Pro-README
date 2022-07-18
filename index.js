// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadmePage = ("./src/generateMarkdown.js");
// *** TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;  
        } else {
          console.log("Please enter a project title!");
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
          console.log("Please enter a description for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation? (Optional)",
    },
    {
      type: "input",
      name: "reason",
      message: "Why did you build this project? (Optional)" 
    },
    {
      type: "input",
      name: "solution",
      message: "What problem does it solve? (Optional)"
    },
    {
      type: "input",
      name: "learned",
      message: "What did you learn from this project? (Optional)" 
    },
    {
      type: "input",
      name: "link",
      message: "Enter the gitHub link to your project. (Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;  
        } else {
          console.log("You need to enter a project gitHub link!"),
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What languages were used to build this project? (check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "NodeJS",
      ],
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
      type: "input",
      name: "credits",
      message: "List any collaborators, if any with links to their gitHub profiles."
    },
    {
      type: "input",
      name: "license",
      message: "What type of license does your project have?"
    },
    {
      type: "input",
      name: "badges",
      message: "What badges would you like to include in your README?"
    },
    {
      type: "input",
      name: "features",
      message: "What features does your project have?"  
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message: "Would you like others to contribute to this project?",
      default: true;  
    },
    {
      type: "input",
      name: "contribute",
      message: "Guidelines for other developers on how to contribute:",
      when: ({ confirmContribute }) => confirmContribute,
    },
  ]);
};

// *** TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// *** TODO: Create a function to initialize app
function init() {}


// *** Function call to initialize app
init();
