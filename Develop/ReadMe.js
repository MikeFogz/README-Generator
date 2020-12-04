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
    //Screenshot
    {type: "input", name: "appPic1", message: "Please provide file path to screenshot of app.",},
    {type: "input", name: "appPic2", message: "If you have another screenshot or gif enter the file path now.",},
    {type: "input", name: "appContrib", message: "What are your Guidelines for Contributors?",},
    //Credits -Future update:Include entry to create linked github user names for any collaborators as well as breaking down to further subsections of credits: Such as appCollab, appThird, appTutorials
    {type: "input", name: "appCredits", message: "Please list any Collaborators, 3rd Party assets, or tutorials used.",},
    {type: "input", name: "appTest", message: "How can one start and test your app?",},
    // License List
    {type: "list", name: "appLicense", message: "What License are you using?", choices: ['MIT', 'Apache', 'GPL', 'None']},
    //Added to Questions Section
    {type: "input", name: "appGitHub", message: "Please enter your GitHub Username.",},
    
    {type: "input", name: "appEmail", message: "Please enter the email address you would like to be reached at.",},

])
.then((res) => {
    console.log(res)

    fs.writeFile('README.md', generateMarkdown(res), (err) => {
        if (err) throw err;
        console.log("Complete")
        })
    })
