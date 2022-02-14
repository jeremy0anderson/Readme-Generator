// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
function input(){
    return prompt([
           {type: "input",
            name: "projectTitle",
            message: "What is the project title? (required)",
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log("You need to provide a license for your project!");
                    return false;}
            }},
           {type: "input",
            name: "description",
            message: "Write a brief description of your project: "},
           {type: "input",
            name: "installation",
            message: "Describe the installation process if any: (hint: are there any dependencies?)"},
           {type: "input",
            name: "usage",
            message: "What is this project used for?"},
           {type: "list",
            name: "license",
            message: "Choose a license: ",
            choices: ["None", "Apache license 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-clause license", "BSD 3-clause license", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]},
           {type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"},
           {type: "list",
            name: "tests",
            message: "Is there a test included?",
            choices: ["N/A", "Yes", "No"]},
           {type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "},
           {type: "input",
            name: "username",
            message: "Please enter your GitHub username: "},
           {type: "input",
            name: "email",
            message: "Please enter your email: "}
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`${fileName}.md`, data,
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}
// TODO: Create a function to initialize app
 function init() {
    input()
    .then(data =>
        { writeToFile("README", generateMarkdown(data))});
}
// Function call to initialize app
init();