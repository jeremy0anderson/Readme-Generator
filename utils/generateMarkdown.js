const licenseArr = ["None", "Apache license 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-clause license", "BSD 3-clause license", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"];
const licenseBadgeUrl = ["None","[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)", "[![License: ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)", "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)"];
const licenseLinks = [`None`,`https://opensource.org/licenses/Apache-2.0`, `https://www.gnu.org/licenses/gpl-3.0`, `https://www.boost.org/LICENSE_1_0.txt`, `https://opensource.org/licenses/MIT`, `https://opensource.org/licenses/BSD-2-Clause`, `https://opensource.org/licenses/BSD-3-Clause`, `https://creativecommons.org/publicdomain/zero/1.0/`, `https://opensource.org/licenses/ECL-2.0`, `https://www.gnu.org/licenses/agpl-3.0`, `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`, `https://www.gnu.org/licenses/lgpl-2.1`, `https://opensource.org/licenses/MPL-2.0`, `https://unlicense.org/`];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (let i = 0; i < licenseArr.length; i++) {
    if (license === licenseArr[i]) {
      return licenseBadgeUrl[i];
    } else if (!licenseArr[i]) {
      return "";
    }
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let i = 0; i < licenseArr; i++) {
    if (license === licenseArr[i]){
      return `[${licenseLinks[i]}]`;
    } else if (!licenseArr[i]) {
      return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  for (let i = 0; i < licenseArr.length; i++) {
    if (license === licenseArr[i]) {
      let link = licenseLinks[i];
      return `Read more about ${license} here: ${link}`;
    } else if (!licenseArr[i]) {
      return "";
    }
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions?
  ### Contact me at: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = {generateMarkdown};