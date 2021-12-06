// Team constructers
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const renderHTML = require("./src/renderHTML")
let team = [];

// Require inquirer library and file storage
const inquirer = require('inquirer');
const fs = require('fs');

// Begin prompts for user input
function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the manager?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Office Number?',
            name: 'officeNumber',
        },
    ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(manager);
            console.log(manager)
            addEmployee()
        })
    }

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What other employee do you wish to add?',
            name: 'newEmployee',
            choices: ['intern', 'engineer', 'no other employees']
        }
    ]).then(response => {
        switch (response.newEmployee) {
            case "intern":
                internInfo()
                break;
            case "engineer":
                engineerInfo()
                break;
            case "no other employees":
                let teamData = renderHTML(team)
                fs.writeFile('./src/index.html', teamData, (err) =>
                    err ? console.log(err) : console.log('Successfully created Team Profile!')
                );
                break;
        }
    })
}

let internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the intern?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'School?',
            name: 'school',
        },
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            console.log(intern)
            addEmployee()
        })
}

let engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the engineer?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID:?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Github username?',
            name: 'github',
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            console.log(engineer)
            addEmployee()
        })
}



managerInfo()