// function to generate markdown for README
// function licenseSection(license){
//   if (license !== "None"){
//     return(`This License is ${answers.appLicense}`)
//   }
// }


function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
