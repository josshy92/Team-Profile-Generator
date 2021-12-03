// Team constructers
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Require inquirer library and file storage
const inquirer = require('inquirer');
const fs = require('fs');


// const path = require('path')
// const OUTPUT_DIR = path.resolve(__dirname, 'output')
// const outputPath = path.join(OUTPUT_DIR, "team.html")

const generateReadme = (data) =>
`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
</head>
          <body>
            <header>This is ${data.name}'s page!</header>
            <h1>I am from the beautiful city of ${location}.</h1>
            <ul>You can contact me at either of the following:</ul>
            <li>Github: ${github}</li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ${name} Ducimus provident animi reiciendis alias inventore sequi illo ratione non assumenda laboriosam, molestias laudantium maiores earum soluta quibusdam deserunt laborum quos placeat.</p>
            <br>

              <li>Linkedin: ${linkedin}</li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae ab magnam. Modi mollitia ullam corrupti perspiciatis animi laudantium pariatur exercitationem libero, atque quis vero soluta ad accusantium dolore. Laboriosam.</p>
              <br>
    
</body>
</html>`;

// Begin prompts for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Who is the manager?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Descrition:?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose your license',
            name: 'badges',
            choices: ['MIT', 'Apache_2.0', 'Boost_1.0']
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are some examples for use?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'If you created an app or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Tests for the application? Please provide examples on how to run them here.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Github User Name:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Email address:',
            name: 'email',
        },
    ])
    // Then grab the responses and generate a Readme file with all of the saved content.
    .then((response) => {
        console.log(response)
        const teamProfileGenerator = generateReadme(response)

        fs.writeFile('index.html', teamProfileGenerator, (err) =>
            err ? console.log(err) : console.log('Successfully created Team Profile!')
        );
    }
    );
