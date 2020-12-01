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
})