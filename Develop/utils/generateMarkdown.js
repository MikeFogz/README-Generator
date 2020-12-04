// function to generate markdown for README
function licenseSection(license){
  if (license !== "None"){
    return(`This License is ${answers.appLicense}`)
  }
}


function generateMarkdown(data) {
  console.log(data)
  return `![badge](https://img.shields.io/badge/license-${data.appLicense}-brightgreen)
  # ${data.appTitle}

  ## Description 

  ${data.appDescription}


  ## Table of Contents


  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation

  ${data.appInstall}

  ## Usage 
  Here are instructions on how to use this app. 
  ${data.appUsage}
  ![Screenshot of App](${data.appPic1}) Include screenshots as needed. 

  ## Contributing

  ${data.appContrib}


  ## Credits

  List of contirbutors I worked with and tools/tutorials used on this project: 

  ${data.appCredits}

  ## License

  ${data.appLicense}


  ## Tests

  ${data.appTest}

  ## Questions

  You can find me on GitHub [@${data.appGitHub}](https://github.com/${data.appGitHub})

  I can be contacted at ${data.appEmail}
  `;
}

module.exports = generateMarkdown;
