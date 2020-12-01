const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// const promptUser = () =>
inquirer.prompt([
    {
        type: "input",
        name: "appTitle",
        message: "Name of your Application",
    },
])
.then((res) => {
    console.log(res)
})