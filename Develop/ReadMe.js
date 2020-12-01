const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// const promptUser = () =>
inquirer.prompt([
    {type: "input", name: "appTitle", message: "Name of your Application",},
    {type: "input", name: "appDescript", message: "Please enter a Description of your app.",},
    {type: "input", name: "appInstall", message: "Please provide Installation Instructions.",},
    {type: "input", name: "appUsage", message: "Please provide Usage Information.",},
    {type: "input", name: "appContrib", message: "What are your Guidelines for Contributors?",},
    {type: "input", name: "appTest", message: "How can one start and test your app?",},

])
.then((res) => {
    console.log(res)
})