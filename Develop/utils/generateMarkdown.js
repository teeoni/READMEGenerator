const index = require('../index.js')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == null){
    console.log('No license selected')
    return null
  }
  const badge ={
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    GNUPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }

  return badge[license]

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == null){
    console.log('No license selected')
    return null
  }
  const licenselink = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    GNUPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }

  return licenselink[license]

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == null){
    console.log('No license selected')
    return null
  }else{
    return `Licenseed under the ${renderLicenseLink(license)} license`
  }

 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Content
- [Project description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)


## Description
${data.description}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Questions
${data.email}
${data.github}

## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
