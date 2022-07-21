// *** TODO: Create a function that returns a license badge based on which license is passed in
// *** If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  console.log(license);
  if (license === "MIT") {
    licenseBadge = `![${license}](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license === "Apache") {
    licenseBadge = `![${license}](https://img.shields.io/badge/license-Apache-blue)`;
  } else if (license === "GPL") {
    licenseBadge = `![${license}](https://img.shields.io/badge/license-GPL-blue)`;
  } else if (license === "BSD") {
    licenseBadge = `![${license}](https://img.shields.io/badge/license-BSD-blue)`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// *** TODO: Create a function that returns the license link
// *** If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  This application is covered under the ${license} license.

  [${license}](https://img.shields.io/badge/license-MIT-brightgreen)`;
}

// *** TODO: Create a function that returns the license section of README
// *** If there is no license, return an empty string
function renderLicenseSection(license) {
 return `
 ${renderLicenseLink(license)}

 ${renderLicenseBadge(license)}
 `
}

// *** TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, projectDescription, installation, usage, contribute, test, license, username, link, email } = data;
  const licenseSelection = license[0];
  return `
  # ${data.title}
  
  ${renderLicenseBadge(licenseSelection)}

  ## **Project Description:**
  ### ${data.projectDescription}

  ## **Table of contents:**
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)
 
  ## **Licenses:**
  ${renderLicenseSection(licenseSelection)}

  ## **Installation:**
  ### *<span style="color:#388dfc">To install use this command in the the terminal:</span>*
  ### ${data.installation}

  ## **Usage:**
  ### ${data.usage}

  ## **Contribute:**
  ### ${data.contribute}

  ## **Test:**
  ### *<span style="color:#388dfc">To test use this command in the the terminal:</span>*
  ### ${data.test}

  ## **Questions?**
  ### *<span style="color:#388dfc">If you have any questions here's how to contact me:</span>*
  * Username: ${data.username}
  * Repository: ${data.link}
  * Email: ${data.email}
`;
generateMarkdown(data);
}

module.exports = generateMarkdown;
