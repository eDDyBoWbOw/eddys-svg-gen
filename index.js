const fs = require('fs');
const CustomSVG = require('./lib/customSVG') // Updated import

const inquirer = require('inquirer');

// Prompt the user for input using inquirer
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your short text (3 characters or less):',
            validate: function (input) {
                // Validate that the input length is 3 characters or less
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Please use 3 characters or less';
                }
            },
        },
        {
            type: 'input',
            name: 'fontColor',
            message: 'Specify the color for your text:',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Choose a shape for your logo:',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Pick a color for the background:',
        },
    ])
    .then((userData) => {
        // Create a new CustomSVG instance with user input
        const userLogo = new CustomSVG(userData.text, userData.fontColor, userData.backgroundColor, userData.logoShape);

        // Write the generated SVG content to a file
        fs.writeFile('user_logo.svg', userLogo.generateHTML(), (err) =>
            err ? console.log(err) : console.log('Generated user_logo.svg')
        );
    });
