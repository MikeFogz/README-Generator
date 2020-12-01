const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// const promptUser = () =>
inquirer.prompt([
    //Title of Project/App
    {type: "input", name: "appTitle", message: "Name of your Application",},
    //Input for Main Sections
    {type: "input", name: "appDescript", message: "Please enter a Description of your app.",},
    {type: "input", name: "appInstall", message: "Please provide Installation Instructions.",},
    {type: "input", name: "appUsage", message: "Please provide Usage Information.",},
    {type: "input", name: "appContrib", message: "What are your Guidelines for Contributors?",},
    //Credits - Wondering if I should have a seperate entry to create linked github user names for any collaborators
    {type: "input", name: "appCredits", message: "Please list any Collaborators, 3rd Party assets, or tutorials used.",},
    {type: "input", name: "appTest", message: "How can one start and test your app?",},
    // License List
    {type: "list", name: "appLicense", message: "What License are you using?", choices: ['MIT', 'Apache', 'GPL', 'Other']},
    //Added to Test Section 
    {type: "input", name: "appGitHub", message: "Please enter your GitHub Username.",},
    //Added to Questions Section
    {type: "input", name: "appContact", message: "Please enter the email address you would like to be reached at.",},
    //If needed, input for adding additional details to Question Section.
    // {type: "input", name: "appQuestions", message: "",},
])
.then((res) => {
    console.log(res)
    console.log("Success")
});

const generateREADME = (answers) => {
`# ${answers.appTitle}

## Description 

${answers.appDescription}


## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${answers.appInstall}

## Usage 

${answers.appUsage}
rovide instructions and examples for use. Include screenshots as needed. 

## Contributing

${answers.appContrib}

## Credits

List of contirbutors I used on this project: 

${answers.appCredits}

Third Party Assets

Tutorials



## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.
`}