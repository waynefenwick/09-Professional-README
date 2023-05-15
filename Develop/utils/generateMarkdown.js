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
  if (badgeUrl === '') {
    return ''
  } else {
    return badgeUrl
  }
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
  if (linkUrl === '') {
    return ''
  } else {
    return linkUrl
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const githubLink = `https://github.com/${data.username}`;

  return `

# ${data.title}

## License
[![License Badge](${licenseBadge})](${licenseLink})&nbsp;

To see more about license badges, visit [Shields IO](https://shields.io/category/license)


<ln>___________________________________________________________________<ln>
## Description
${data.description}

&nbsp;

<ln>___________________________________________________________________<ln>
## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Video](#video)
 * [Testing](#testing)
 * [Contribution](#contributers)
 * [Question](#username)

&nbsp;

<ln>___________________________________________________________________<ln>
## Installation

${data.installation}

&nbsp;

<ln>___________________________________________________________________<ln>
## Usage

${data.usage}

&nbsp;

<ln>___________________________________________________________________<ln>
## Video
_A brief overview of the project build_
&nbsp;

![video](${data.videourl})


* Visit [Full Video](https://drive.google.com/file/d/11rmrzXOINSVQvJi2bLvetUP0_cHiLzjO/view) to see more details

&nbsp;

<ln>___________________________________________________________________<ln>
## Testing

${data.testing}

&nbsp;

<ln>___________________________________________________________________<ln>
## Contribution

${data.contribution}

* [Original Source code](https://github.com/coding-boot-camp/potential-enigma)
* [Guideline to Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

&nbsp;

<ln>___________________________________________________________________<ln>
## Questions

_If you have any questions, please feel free to contact me._

GitHub Username: [${data.username}](${githubLink})

Email Address: <a href="mailto:${data.email}">${data.email}</a>

&nbsp;

_Thanks for taking time to visit this repository!_
________________________________________________________________________

`};
module.exports = generateMarkdown;