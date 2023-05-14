// TODO: Create a function that returns a license badge based on which license is selected on index.js and name:license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadgeOptions = ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'];
  let badgeUrl = '';
  for (let i = 0; i < licenseBadgeOptions.length; i++) {
    if (license.includes(licenseBadgeOptions[i])) {
      badgeUrl = `https://img.shields.io/badge/license-${licenseBadgeOptions[i]}-green?style=plastic`;
      break;
    }
  }
  return badgeUrl;
};

// TODO: Create a function that returns the web license 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkOptions = ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'];
  let linkUrl = '';
  for (let i = 0; i < licenseLinkOptions.length; i++) {
    if (license.includes(licenseLinkOptions[i])) {
      linkUrl = `https://choosealicense.com/licenses/${licenseLinkOptions[i]}/`;
      break;
    }
  }
  return linkUrl;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `

# ${data.title}

![badge](${licenseBadge})


## Description
${data.description}


## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Video](#videourl)
 * [Testing](#testing)
 * [Contribution](#contribution)
 * [Contact](#username)


## Installation
${data.installation}
_How to Install:_




## Usage
${data.usage}
_How to Use:_



## Video
![video](${data.videourl})



## Testing
${data.testing}



## Contributers
${data.contribution}



## Questions

_If you would like to contact me, please send me an email. I will be back in contact with you as soon as possible. Thanks for taking the time to visit this repository._


## My Contact Information

GitHub Username: ${data.username}

Email Address: ${data.email}


## License

_You can view license details at_ ![Web](${licenseLink})

`};

module.exports = generateMarkdown;