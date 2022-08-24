// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const createMarkDown = require('./utils/generateMarkdown')
const fs =  require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'title',
       message: 'Project Title'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project Description'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Instalation instructions?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)'
    },

    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.tol
        }
    },
];


function init(){
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = createMarkDown(answers)
            fs.writeFile('README.md', mark, function(err){
                if(err){
                    console.log("Could not save file");
                } else { 
                    console.log("Success: NEW README");
                }
            })
            console.log(answers)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

//Function call to initialize the README App
init()

module.exports = questions;


