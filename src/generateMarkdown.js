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

  ## **<span style="color:#D5BC82"> Licenses:</span>**
  ${data.license}

  ## **<span style="color:#D5BC82"> Table of contents:</span>**
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Test](#installation)
  * [Questions](#questions)

  ## **<span style="color:#D5BC82"> Installation:</span>**
  ### *<span style="color:#BEBEBE">To install use this command in the the terminal:</span>*
  ${data.installation}

  ## **<span style="color:#D5BC82"> Usage:</span>**
  ${data.usage}

  ## **<span style="color:#D5BC82"> Contribute:</span>**
  ${data.contribute}

  ## **<span style="color:#D5BC82"> Test:</span>**
  ### *<span style="color:#BEBEBE">To test use this command in the the terminal:</span>*
  ${data.test}

  ## **<span style="color:#D5BC82"> Questions?</span>**
  ### *<span style="color:#BEBEBE">If you have any questions here's how to contact me:</span>*
  * Username: ${data.username}
  * Repository: ${data.link}
  * Email: ${data.email}
`;
generateMarkdown(data);

}

module.exports = generateMarkdown;
