// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const information = [
     {// Title of the repo
          type: 'input',
          name: 'title',
          message: 'What is the title of your repository?',
          // Confirmation that a title was entered
          validate: nameInput => {
               if (nameInput) {
                    return true;
               } else {
                    console.log('Please enter the title of your repository.');
                    return false;
               }
          }
     },

     {
          type: 'checkbox',
          name: 'license',
          message: 'Please select a license:',
          choices: ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'],
          validate: nameInput => {
               if (nameInput) {
                    return true;
               } else {
                    console.log('Please select a license.');
                    return false;
               }
          }
     },

     {
          type: 'input',
          name: 'description',
          message: 'How would you describe your project?',
          validate: nameInput => {
               if (nameInput) {
                    return true;
               } else {
                    console.log('Please describe your project.');
                    return false;
               }
          }
     },

     {
          type: 'confirm',
          name: 'confirmInstallation',
          message: 'Are there instruction steps for installation?',
     },

     {
          type: 'input',
          name: 'installation',
          message: 'What are the steps to installation ?',
          when: ({ confirmInstallation }) => {
               if (confirmInstallation) {
                    return true;
               } else {
                    return false;
               }
          }
     },

     {
          type: 'confirm',
          name: 'confirmUsage',
          message: 'Are there instructions on how to use your application?',
     },

     {
          type: 'input',
          name: 'usage',
          message: 'List steps on how your application is used.',
          when: ({ confirmUsage }) => {
               if (confirmUsage) {
                    return true;
               } else {
                    return false;
               }
          }
     },

     {
          type: 'confirm',
          name: 'confirmVideo',
          message: 'Do you have a picture or instructional video to include?',
     },

     {
          type: 'input',
          name: 'videourl',
          message: 'Insert a link to your video or picture',
          when: ({ confirmVideo }) => confirmVideo,
          default: './grahics/screenshot.png',
     },

     {
          type: 'confirm',
          name: 'confirmTesting',
          message: 'Can your project be tested by other developers?',
     },

     {
          type: 'input',
          name: 'testing',
          message: 'Explain how other developers can test your project.',
          when: ({ confirmTesting }) => {
               if (confirmTesting) {
                    return true;
               } else {
                    return false;
               }
          }
     },

     {
          type: 'confirm',
          name: 'confirmContribution',
          message: 'May developers make improvement contributions to your project?',
     },

     {
          type: 'input',
          name: 'contribution',
          message: 'Explain how other developers have contributed or can make contributions to the project.',
          when: ({ confirmContribution }) => {
               if (confirmContribution) {
                    return true;
               } else {
                    return false;
               }
          }
     },

     {
          type: 'input',
          name: 'username',
          message: 'Please enter your GitHub username.',
          validate: nameInput => {
               if (nameInput) {
                    return true;
               } else {
                    console.log('Please enter your GitHub username.');
                    return false;
               }
          }
     },

     {
          type: 'input',
          name: 'email',
          message: 'Please enter your email address.',
          validate: nameInput => {
               if (nameInput) {
                    return true;
               } else {
                    console.log('Please enter your email address.');
                    return false;
               }
          }
     },
];


// TODO: Create a function to write README file
// REMEMBER: fs is a Node standard library package for reading and writing files
function writeReadme(filename, data) {
     fs.writeFile(filename, data, error => {
          if (error) {
               return console.log('There was an error : ' + error);
          }
     })
}
const createReadme = util.promisify(writeReadme);

// TODO: Create a function to initialize app
async function init() {
     try {
          const userAnswers = await inquirer.prompt(information);
          const myMarkdown = generateMarkdown(userAnswers);
          console.log(myMarkdown);
          await createReadme('README.md', myMarkdown);
     } catch (error) {
          console.log('There was an error : ' + error);
     }
     console.log('README.md successfully written!');
};

// Function call to initialize app
init();
