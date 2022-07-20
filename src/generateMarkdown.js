const fs = require("fs");
// *** TODO: Create a function that returns a license badge based on which license is passed in
// *** If there is no license, return an empty string
function renderLicenseBadge(license) {}

// *** TODO: Create a function that returns the license link
// *** If there is no license, return an empty string
function renderLicenseLink(license) {}

// *** TODO: Create a function that returns the license section of README
// *** If there is no license, return an empty string
function renderLicenseSection(license) {}

// *** TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, projectDescription, installation, usage, contribute, test, license, username, link, email } = data;
  return `
  # ${data.title}

  ### ${data.projectDescription}

  ## License
  ${data.license}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Test](#installation)
  * [Questions](#questions)

  ## Installation
  ### To install use this command in the the terminal:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Test
  ### To test use this command in the the terminal:
  ${data.test}

  ## Questions?
  ### If you have any questions here's how to contact me:
  * Username: ${data.username}
  * Repository: ${data.link}
  * Email: ${data.email}
`;
generateMarkdown(data);
}

module.exports = generateMarkdown;
