const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

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

    fs.writeFile('README.md', generateMarkdown(res), (err) => {
        if (err) throw err;
        console.log("Complete")
        })
    })
