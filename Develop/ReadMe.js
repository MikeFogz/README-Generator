const inquirer = require("inquirer");
const fs = require("fs");
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
    //Thinking about including screenshot. Wondering how best to give option of mulitple pics
    {type: "input", name: "appPic1", message: "Please provide file path to screenshot of app.",},
    {type: "input", name: "appContrib", message: "What are your Guidelines for Contributors?",},
    //Credits - Wondering if I should have a seperate entry to create linked github user names for any collaborators
    // Such as appCollab, appThird, appTutorials
    {type: "input", name: "appCredits", message: "Please list any Collaborators, 3rd Party assets, or tutorials used.",},
    {type: "input", name: "appTest", message: "How can one start and test your app?",},
    // License List
    {type: "list", name: "appLicense", message: "What License are you using?", choices: ['MIT', 'Apache', 'GPL', 'None']},
    //Added to Questions Section
    {type: "input", name: "appGitHub", message: "Please enter your GitHub Username.",},
    
    {type: "input", name: "appEmail", message: "Please enter the email address you would like to be reached at.",},
    //If needed, input for adding additional details to Question Section.
    // {type: "input", name: "appQuestions", message: "",},
])
.then((res) => {
    console.log(res)
    console.log("Success")
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
    Here are instructions on how to use this app. 
    ${answers.appUsage}
    ![Screenshot of App](${answers.appPic1}) Include screenshots as needed. 

    ## Contributing

    ${answers.appContrib}

    The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

    ## Credits

    List of contirbutors I worked with and tools/tutorials used on this project: 

    ${answers.appCredits}

    ## License
    //how to add a dynamic badge? No Need?//

    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

    ${answers.appLicense}

    If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

    ## Tests

    ${answers.appTest}

    ## Questions

    You can find me on GitHub [here](https://github.com/${appGitHub})

    I can be contacted at ${appEmail}`  

        fs.writeFile("READMETest.md", generateREADME, (err) => {
            if (err) throw err;
            console.log("Complete")
            })
    }
});
