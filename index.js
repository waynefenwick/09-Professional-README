// TODO: Include packages needed for this application
const generateMarkdown = require('./develop/utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const information = [
     {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
     },

     {
          type: 'checkbox',
          name: 'license',
          message: 'Please select a license:',
          choices: ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'],
     },

     {
          type: 'input',
          name: 'description',
          message: 'What is the purpose of your project and how would you describe it?',
     },

     {
          type: 'confirm',
          name: 'confirmInstallation',
          message: 'Are there instructions on how to install the application?',
     },

     {
          type: 'input',
          name: 'installation',
          message: 'What are the steps for installation?',
          when: ({ confirmInstallation }) => confirmInstallation,
     },

     {
          type: 'confirm',
          name: 'confirmUsage',
          message: 'Are there instructions on how to use the application?',
     },

     {
          type: 'input',
          name: 'usage',
          message: 'Describe how to use the application.',
          when: ({ confirmUsage }) => confirmUsage,
     },

     {
          type: 'confirm',
          name: 'confirmMedia',
          message: 'Do you have any media to include?',
     },

     {
          type: 'input',
          name: 'media',
          message: 'Insert your local media url (eg., ./develop/graphics/testing.gif)',
          when: ({ confirmMedia }) => confirmMedia,
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
          when: ({ confirmTesting }) => confirmTesting,
     },

     {
          type: 'confirm',
          name: 'confirmContribution',
          message: 'Are there any contributers or would you like any outside contribution to your project?',
     },

     {
          type: 'input',
          name: 'contribution',
          message: 'Provide information (who & how) others have contributed to your project.',
          when: ({ confirmContribution }) => confirmContribution,
     },

     {
          type: 'input',
          name: 'username',
          message: 'What is your GitHub username?',
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
          message: 'What is your preferred email address?',
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
